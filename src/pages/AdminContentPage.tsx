import { FormEvent, useEffect, useMemo, useState } from "react";
import { LogIn, LogOut, Pencil, Plus, Save, Trash2 } from "lucide-react";
import { z } from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import type { Tables } from "@/integrations/supabase/types";
import { usePageMeta } from "@/hooks/usePageMeta";
import { toast } from "@/hooks/use-toast";

type Post = Tables<"blog_posts">;
type Status = "draft" | "published" | "archived";

const categories = ["Four Strands", "Language-Learning Plans", "Meaningful Input", "Speaking and Writing", "Fluency Development", "Sustainable Multilingualism", "Language Helpers", "Coaching and Program Support", "Sentence Paths"] as const;
const postSchema = z.object({
  title: z.string().trim().min(1).max(180),
  slug: z.string().trim().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  excerpt: z.string().trim().min(1).max(500),
  content: z.string().trim().min(1).max(100000),
  category: z.enum(categories),
  status: z.enum(["draft", "published", "archived"]),
  seo_title: z.string().trim().max(180).optional(),
  seo_description: z.string().trim().max(500).optional(),
});

type Category = (typeof categories)[number];
interface PostForm { title: string; slug: string; excerpt: string; content: string; category: Category; status: Status; seo_title: string; seo_description: string; }
const blankForm: PostForm = { title: "", slug: "", excerpt: "", content: "", category: "Four Strands", status: "draft", seo_title: "", seo_description: "" };

export default function AdminContentPage() {
  const [authState, setAuthState] = useState<"loading" | "signed-out" | "forbidden" | "admin">("loading");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [events, setEvents] = useState<{ event_name: string; created_at: string }[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<PostForm>(blankForm);
  const [saving, setSaving] = useState(false);
  usePageMeta({ title: "Content Administration", description: "Private content and funnel administration." });

  const loadAdminData = async () => {
    const [postResult, eventResult] = await Promise.all([
      supabase.from("blog_posts").select("*").order("updated_at", { ascending: false }),
      supabase.from("funnel_events").select("event_name,created_at").order("created_at", { ascending: false }).limit(1000),
    ]);
    setPosts(postResult.data ?? []);
    setEvents(eventResult.data ?? []);
  };

  const checkAccess = async () => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) { setAuthState("signed-out"); return; }
    const { data: role } = await supabase.from("user_roles").select("role").eq("user_id", data.user.id).eq("role", "admin").maybeSingle();
    if (!role) { setAuthState("forbidden"); return; }
    setAuthState("admin");
    await loadAdminData();
  };

  useEffect(() => {
    void checkAccess();
    const { data } = supabase.auth.onAuthStateChange(() => { window.setTimeout(() => void checkAccess(), 0); });
    return () => data.subscription.unsubscribe();
  }, []);

  const counts = useMemo(() => events.reduce<Record<string, number>>((all, item) => ({ ...all, [item.event_name]: (all[item.event_name] ?? 0) + 1 }), {}), [events]);

  const signIn = async (event: FormEvent) => {
    event.preventDefault();
    const parsed = z.object({ email: z.string().email(), password: z.string().min(8).max(200) }).safeParse({ email, password });
    if (!parsed.success) { toast({ title: "Check your sign-in details", description: "Enter a valid email and a password of at least eight characters." }); return; }
    const { error } = await supabase.auth.signInWithPassword({ email: parsed.data.email ?? "", password: parsed.data.password ?? "" });
    if (error) toast({ title: "Sign-in failed", description: error.message });
  };

  const signInGoogle = async () => {
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (result.error) toast({ title: "Google sign-in failed", description: result.error.message });
  };

  const editPost = (post: Post) => {
    setEditingId(post.id);
    setForm({ title: post.title, slug: post.slug, excerpt: post.excerpt, content: post.content, category: post.category as typeof categories[number], status: post.status as Status, seo_title: post.seo_title ?? "", seo_description: post.seo_description ?? "" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const savePost = async (event: FormEvent) => {
    event.preventDefault();
    const parsed = postSchema.safeParse(form);
    if (!parsed.success) { toast({ title: "Article needs attention", description: parsed.error.issues[0]?.message ?? "Check the article fields." }); return; }
    setSaving(true);
    const values = { title: parsed.data.title ?? "", slug: parsed.data.slug ?? "", excerpt: parsed.data.excerpt ?? "", content: parsed.data.content ?? "", category: parsed.data.category ?? "Four Strands", status: parsed.data.status ?? "draft", seo_title: parsed.data.seo_title || null, seo_description: parsed.data.seo_description || null, published_at: parsed.data.status === "published" ? new Date().toISOString() : null };
    const result = editingId ? await supabase.from("blog_posts").update(values).eq("id", editingId) : await supabase.from("blog_posts").insert(values);
    setSaving(false);
    if (result.error) { toast({ title: "Article not saved", description: result.error.message }); return; }
    toast({ title: editingId ? "Article updated" : "Article created" });
    setEditingId(null); setForm(blankForm); await loadAdminData();
  };

  const deletePost = async (post: Post) => {
    if (!window.confirm(`Delete “${post.title}”? This cannot be undone.`)) return;
    const { error } = await supabase.from("blog_posts").delete().eq("id", post.id);
    if (error) toast({ title: "Article not deleted", description: error.message }); else await loadAdminData();
  };

  if (authState !== "admin") return <div className="min-h-screen bg-background"><Navigation /><main className="pt-28 pb-20"><div className="container-calm"><section className="max-w-md mx-auto border border-border rounded-lg p-6 bg-card"><h1 className="text-2xl font-semibold text-foreground">Content administration</h1>{authState === "loading" ? <p className="mt-4 text-muted-foreground">Checking access…</p> : authState === "forbidden" ? <><p className="mt-4 text-muted-foreground">This account does not have administrator access.</p><Button variant="outline" className="mt-5" onClick={() => void supabase.auth.signOut()}><LogOut /> Sign out</Button></> : <><p className="mt-3 text-sm text-muted-foreground">Sign in with the administrator account to manage articles and view funnel activity.</p><form className="mt-6 space-y-4" onSubmit={signIn}><div><Label htmlFor="admin-email">Email</Label><Input id="admin-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} required /></div><div><Label htmlFor="admin-password">Password</Label><Input id="admin-password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} maxLength={200} required /></div><Button type="submit" className="w-full"><LogIn /> Sign in</Button></form><div className="my-4 flex items-center gap-3 text-xs text-muted-foreground"><span className="h-px bg-border flex-1" />or<span className="h-px bg-border flex-1" /></div><Button variant="outline" className="w-full" onClick={signInGoogle}>Continue with Google</Button></>}</section></div></main><Footer /></div>;

  return <div className="min-h-screen bg-background"><Navigation /><main className="pt-24 pb-20"><div className="container-calm"><header className="flex flex-col md:flex-row md:items-end justify-between gap-4 py-8"><div><p className="text-sm font-medium text-primary">Private administration</p><h1 className="mt-2 text-3xl md:text-4xl font-semibold">Articles and funnel analytics</h1></div><Button variant="outline" onClick={() => void supabase.auth.signOut()}><LogOut /> Sign out</Button></header><section className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">{["checkup_completed", "newsletter_offer_viewed", "newsletter_signup_clicked", "article_viewed", "checkup_coaching_clicked"].map((name) => <div key={name} className="p-4 border border-border rounded-lg"><p className="text-2xl font-semibold">{counts[name] ?? 0}</p><p className="mt-1 text-xs text-muted-foreground break-words">{name.split("_").join(" ")}</p></div>)}</section><div className="grid lg:grid-cols-[1fr_0.9fr] gap-8"><section><h2 className="text-xl font-semibold">{editingId ? "Edit article" : "New article"}</h2><form onSubmit={savePost} className="mt-5 space-y-4"><div><Label htmlFor="post-title">Title</Label><Input id="post-title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} maxLength={180} required /></div><div><Label htmlFor="post-slug">Slug</Label><Input id="post-slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") })} maxLength={180} required /></div><div className="grid sm:grid-cols-2 gap-4"><div><Label htmlFor="post-category">Category</Label><select id="post-category" className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as Category })}>{categories.map((category) => <option key={category}>{category}</option>)}</select></div><div><Label htmlFor="post-status">Status</Label><select id="post-status" className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as Status })}><option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option></select></div></div><div><Label htmlFor="post-excerpt">Excerpt</Label><Textarea id="post-excerpt" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} maxLength={500} required /></div><div><Label htmlFor="post-content">Content</Label><Textarea id="post-content" className="min-h-80 font-mono" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} maxLength={100000} required /><p className="mt-1 text-xs text-muted-foreground">Use blank lines for paragraphs, ## for section headings, and - for lists.</p></div><div><Label htmlFor="seo-title">SEO title</Label><Input id="seo-title" value={form.seo_title} onChange={(e) => setForm({ ...form, seo_title: e.target.value })} maxLength={180} /></div><div><Label htmlFor="seo-description">SEO description</Label><Textarea id="seo-description" value={form.seo_description} onChange={(e) => setForm({ ...form, seo_description: e.target.value })} maxLength={500} /></div><div className="flex gap-3"><Button type="submit" disabled={saving}><Save />{saving ? "Saving…" : "Save article"}</Button>{editingId && <Button type="button" variant="outline" onClick={() => { setEditingId(null); setForm(blankForm); }}><Plus /> New article</Button>}</div></form></section><section><h2 className="text-xl font-semibold">All articles</h2><div className="mt-5 space-y-3">{posts.length === 0 ? <p className="text-muted-foreground">No articles yet.</p> : posts.map((post) => <article key={post.id} className="p-4 border border-border rounded-lg"><p className="text-xs text-primary">{post.category} · {post.status}</p><h3 className="mt-1 font-semibold">{post.title}</h3><div className="mt-3 flex gap-2"><Button size="sm" variant="outline" onClick={() => editPost(post)}><Pencil /> Edit</Button><Button size="sm" variant="ghost" onClick={() => void deletePost(post)} aria-label={`Delete ${post.title}`}><Trash2 /></Button></div></article>)}</div></section></div></div></main><Footer /></div>;
}
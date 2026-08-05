import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { usePageMeta } from "@/hooks/usePageMeta";

type Post = Tables<"blog_posts">;

export default function ArticlesPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  usePageMeta({ title: "Language Learning Articles | Kevin Duplechin", description: "Research-informed articles on the Four Strands, sustainable routines, meaningful language use, and fluency." });
  useEffect(() => { void supabase.from("blog_posts").select("*").eq("status", "published").lte("published_at", new Date().toISOString()).order("published_at", { ascending: false }).then(({ data }) => { setPosts(data ?? []); setLoading(false); }); }, []);
  return <div className="min-h-screen bg-background"><Navigation /><main className="pt-24 pb-20"><div className="container-calm"><header className="max-w-3xl py-8"><div className="flex items-center gap-2 text-primary text-sm font-medium"><BookOpen className="w-4 h-4" aria-hidden="true" />Language Learning Notes</div><h1 className="mt-3 text-3xl md:text-5xl font-semibold text-foreground">Articles for building a plan you can keep</h1><p className="mt-5 text-lg text-muted-foreground leading-relaxed">Practical, research-informed guidance for individual learners, coaches, and teams.</p></header><NewsletterSignup location="articles_top" className="max-w-4xl p-6 border-y border-border my-8" /><section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10" aria-label="Published articles">{loading ? <p className="text-muted-foreground">Loading articles…</p> : posts.length === 0 ? <p className="text-muted-foreground md:col-span-2">Coming soon.</p> : posts.map((post) => <article key={post.id} className="card-calm flex flex-col"><p className="text-xs font-medium text-primary">{post.category}</p><h2 className="mt-2 text-xl font-semibold text-foreground">{post.title}</h2><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p><div className="mt-auto pt-5"><Link to={`/articles/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">Read article <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link></div></article>)}</section></div></main><Footer /></div>;
}
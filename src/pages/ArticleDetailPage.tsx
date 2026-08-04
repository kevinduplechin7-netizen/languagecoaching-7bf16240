import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { usePageMeta } from "@/hooks/usePageMeta";
import { trackFunnelEvent } from "@/lib/funnelAnalytics";

type Post = Tables<"blog_posts">;

function ArticleBody({ content }: { content: string }) {
  return <div className="space-y-5">{content.split(/\n{2,}/).filter(Boolean).map((block, index) => {
    const value = block.trim();
    if (value.startsWith("## ")) return <h2 key={index} className="pt-5 text-2xl font-semibold text-foreground">{value.slice(3)}</h2>;
    if (value.startsWith("### ")) return <h3 key={index} className="pt-3 text-xl font-semibold text-foreground">{value.slice(4)}</h3>;
    if (value.startsWith("- ")) return <ul key={index} className="list-disc pl-6 space-y-2 text-muted-foreground">{value.split("\n").map((line) => <li key={line}>{line.replace(/^- /, "")}</li>)}</ul>;
    return <p key={index} className="text-muted-foreground leading-8">{value}</p>;
  })}</div>;
}

export default function ArticleDetailPage() {
  const { slug = "" } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  usePageMeta({ title: post?.seo_title || post?.title || "Language Learning Article", description: post?.seo_description || post?.excerpt || "Research-informed language-learning guidance." });
  useEffect(() => { void supabase.from("blog_posts").select("*").eq("slug", slug).eq("status", "published").maybeSingle().then(({ data }) => { setPost(data); setLoading(false); if (data) void trackFunnelEvent("article_viewed", { article_id: data.id, slug: data.slug }); }); }, [slug]);
  return <div className="min-h-screen bg-background"><Navigation /><main className="pt-24 pb-20"><div className="container-calm"><Link to="/articles" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="w-4 h-4" />All articles</Link>{loading ? <p className="py-20 text-muted-foreground">Loading article…</p> : !post ? <section className="py-20"><h1 className="text-3xl font-semibold">Article not found</h1><Button asChild className="mt-6"><Link to="/articles">Browse articles</Link></Button></section> : <article className="max-w-3xl mx-auto mt-8"><header className="border-b border-border pb-8"><p className="text-sm font-medium text-primary">{post.category}</p><h1 className="mt-3 text-3xl md:text-5xl font-semibold text-foreground leading-tight">{post.title}</h1><p className="mt-5 text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p><p className="mt-4 text-sm text-muted-foreground">By {post.author_name}{post.reading_time_minutes ? ` · ${post.reading_time_minutes} min read` : ""}</p></header><div className="py-9"><ArticleBody content={post.content} /></div><NewsletterSignup location="article_bottom" className="mt-8 p-6 md:p-8 border border-border rounded-lg" /><div className="mt-10 p-6 bg-accent/30 rounded-lg"><h2 className="text-xl font-semibold">Want help applying this?</h2><p className="mt-2 text-muted-foreground">A coaching plan can turn useful principles into a routine shaped for your context.</p><Button asChild className="mt-4"><Link to="/coaching#coaching-plans">Explore coaching <ArrowRight /></Link></Button></div></article>}</div></main><Footer /></div>;
}
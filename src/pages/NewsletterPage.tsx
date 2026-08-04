import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function NewsletterPage() {
  usePageMeta({ title: "Language Learning Notes | Free Newsletter", description: "Practical, research-informed language-learning guidance from applied linguist Kevin Duplechin." });
  return <div className="min-h-screen bg-background"><Navigation /><main className="pt-24 pb-20"><div className="container-calm"><header className="max-w-3xl mx-auto text-center py-8"><p className="text-sm font-medium text-primary">Free newsletter</p><h1 className="mt-3 text-3xl md:text-5xl font-semibold text-foreground">Language Learning Notes</h1><p className="mt-5 text-lg text-muted-foreground leading-relaxed">A calm, useful note about language-learning plans, meaningful practice, and sustainable progress—approximately twice a month.</p></header><NewsletterSignup location="newsletter_page" className="max-w-3xl mx-auto mt-5 p-6 md:p-9 border border-border rounded-lg bg-card" /></div></main><Footer /></div>;
}
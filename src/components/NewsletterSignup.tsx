import { useEffect, useMemo, useRef } from "react";
import { Mail, Settings } from "lucide-react";
import { getSubstackEmbedUrl, hasSubstackConfiguration, SUBSTACK_PUBLICATION_URL } from "@/config/substack";
import { getUtmParameters, trackFunnelEvent } from "@/lib/funnelAnalytics";
import { cn } from "@/lib/utils";

interface NewsletterSignupProps {
  location: string;
  className?: string;
  compact?: boolean;
}

export default function NewsletterSignup({ location, className, compact = false }: NewsletterSignupProps) {
  const viewed = useRef(false);
  const embedUrl = useMemo(() => getSubstackEmbedUrl(), []);
  const configured = hasSubstackConfiguration();

  useEffect(() => {
    if (!configured || viewed.current) return;
    viewed.current = true;
    void trackFunnelEvent("newsletter_offer_viewed", { signup_location: location });
  }, [configured, location]);

  const trackClick = () => {
    const utm = getUtmParameters();
    void trackFunnelEvent("newsletter_signup_clicked", {
      signup_location: location,
      utm_source: utm.source,
      utm_medium: utm.medium,
      utm_campaign: utm.campaign,
      utm_content: utm.content,
    });
  };

  if (!configured || !embedUrl) {
    if (!import.meta.env.DEV) return null;
    return (
      <aside className={cn("border border-dashed border-primary/40 bg-accent/30 p-5 rounded-lg", className)}>
        <div className="flex items-start gap-3">
          <Settings className="w-5 h-5 text-primary mt-0.5" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-foreground">Administrator setup preview</p>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Add <code>VITE_SUBSTACK_PUBLICATION_URL</code> to public build configuration, then paste Substack’s
              official external-site signup iframe into <code>src/config/substack.ts</code>. This notice is hidden on
              the public site until both values are valid.
            </p>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <section className={cn("newsletter-signup", className)} aria-label="Language Learning Notes newsletter signup">
      <div className={cn("text-center", compact ? "mb-3" : "mb-5")}>
        <Mail className="w-5 h-5 text-primary mx-auto mb-2" aria-hidden="true" />
        <h2 className={cn("font-semibold text-foreground", compact ? "text-base" : "text-2xl")}>
          Keep improving your learning plan
        </h2>
        {!compact && (
          <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Subscribe to Language Learning Notes for practical, research-informed guidance about the Four Strands,
            sustainable routines, meaningful input and output, and fluency development.
          </p>
        )}
        <p className="mt-2 text-sm font-medium text-foreground">Subscribe free</p>
        <p className="mt-1 text-xs text-muted-foreground">Approximately two emails per month. Unsubscribe at any time.</p>
      </div>
      <iframe
        src={embedUrl}
        title="Subscribe to Language Learning Notes"
        className="w-full h-40 border-0 bg-background"
        loading="lazy"
        onLoad={trackClick}
      />
      <p className="sr-only">Newsletter subscriptions are processed by Substack.</p>
      <a href={SUBSTACK_PUBLICATION_URL} className="sr-only" target="_blank" rel="noopener noreferrer" onClick={trackClick}>
        Open Language Learning Notes on Substack
      </a>
    </section>
  );
}
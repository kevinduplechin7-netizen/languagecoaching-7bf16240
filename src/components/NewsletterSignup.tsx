import { useEffect, useRef } from "react";
import { ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hasSubstackConfiguration, SUBSTACK_SUBSCRIBE_URL } from "@/config/substack";
import { getUtmParameters, trackFunnelEvent } from "@/lib/funnelAnalytics";
import { cn } from "@/lib/utils";

interface NewsletterSignupProps {
  location: string;
  className?: string;
  compact?: boolean;
}

export default function NewsletterSignup({ location, className, compact = false }: NewsletterSignupProps) {
  const viewed = useRef(false);
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

  if (!configured) return null;

  return (
    <section className={cn("newsletter-signup", className)} aria-label="Language Learning Notes newsletter signup">
      <div className={cn("text-center", compact ? "mb-3" : "mb-5")}>
        <Mail className="w-5 h-5 text-primary mx-auto mb-2" aria-hidden="true" />
        <h2 className={cn("font-semibold text-foreground", compact ? "text-base" : "text-2xl")}>
          Language Learning Notes
        </h2>
        {!compact && (
          <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Practical, research-informed guidance for building a language-learning plan you can sustain.
          </p>
        )}
        <p className="mt-2 text-sm font-medium text-foreground">Subscribe free</p>
        <p className="mt-1 text-xs text-muted-foreground">Approximately two emails per month. Unsubscribe at any time.</p>
      </div>
       <div className="mt-4 text-center">
         <Button asChild size={compact ? "sm" : "default"}>
           <a href={SUBSTACK_SUBSCRIBE_URL} target="_blank" rel="noopener noreferrer" onClick={trackClick}>
             Subscribe free <ExternalLink aria-hidden="true" />
          </a>
        </Button>
      </div>
       <p className="sr-only">This link opens Substack, where subscriptions are processed.</p>
    </section>
  );
}
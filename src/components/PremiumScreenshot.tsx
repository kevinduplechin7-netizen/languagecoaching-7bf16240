import { cn } from "@/lib/utils";

interface PremiumScreenshotProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/**
 * A shared component for premium, readable screenshots.
 * - Displays at natural resolution (no scaling = no blur)
 * - Full width with natural height
 * - Subtle styling without quality loss
 */
export default function PremiumScreenshot({ src, alt, className, priority = false }: PremiumScreenshotProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg",
        "border border-border/40",
        "shadow-sm shadow-foreground/5",
        "bg-muted",
        className,
      )}
    >
      <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} className="w-full h-auto" />
    </div>
  );
}

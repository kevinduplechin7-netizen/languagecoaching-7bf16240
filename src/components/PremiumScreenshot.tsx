import { cn } from "@/lib/utils";

interface PremiumScreenshotProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /**
   * Which section to focus on when cropping
   * @default 'top' - shows header/navigation area
   */
  focusArea?: "top" | "center" | "bottom" | "top-left" | "top-right";
  /**
   * Aspect ratio for the cropped view
   * @default '16/9' - good for hero sections
   */
  aspectRatio?: "4/3" | "3/2" | "16/9" | "21/9" | "square";
}

/**
 * A shared component for premium, readable screenshots with smart cropping.
 * - Zooms to show a specific section of the page
 * - Uses object-position to focus on meaningful content
 * - No scaling artifacts - maintains 1:1 pixel density
 * - Looks clear because we're showing actual pixels, not scaled versions
 */
export default function PremiumScreenshot({
  src,
  alt,
  className,
  priority = false,
  focusArea = "top",
  aspectRatio = "16/9",
}: PremiumScreenshotProps) {
  const aspectClasses = {
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
    "16/9": "aspect-[16/9]",
    "21/9": "aspect-[21/9]",
    square: "aspect-square",
  };

  const positionClasses = {
    top: "object-top",
    center: "object-center",
    bottom: "object-bottom",
    "top-left": "object-left-top",
    "top-right": "object-right-top",
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg",
        "border border-border/40",
        "shadow-sm shadow-foreground/5",
        "bg-muted",
        aspectClasses[aspectRatio],
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={cn("w-full h-full object-cover", positionClasses[focusArea])}
      />
    </div>
  );
}

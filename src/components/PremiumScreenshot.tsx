import { cn } from '@/lib/utils';

interface PremiumScreenshotProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: '4/3' | '3/2' | '16/9' | 'square';
  priority?: boolean;
}

/**
 * A shared component for premium, readable screenshots.
 * - Full container width, no miniaturization
 * - Subtle radius, border, and shadow
 * - No heavy perspective or 3D effects
 * - Mobile-friendly with edge-to-edge display
 */
export default function PremiumScreenshot({
  src,
  alt,
  className,
  aspectRatio = '4/3',
  priority = false,
}: PremiumScreenshotProps) {
  const aspectClasses = {
    '4/3': 'aspect-[4/3]',
    '3/2': 'aspect-[3/2]',
    '16/9': 'aspect-[16/9]',
    'square': 'aspect-square',
  };

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-lg',
        'border border-border/40',
        'shadow-sm shadow-foreground/5',
        'bg-muted',
        aspectClasses[aspectRatio],
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
      />
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
    </div>
  );
}

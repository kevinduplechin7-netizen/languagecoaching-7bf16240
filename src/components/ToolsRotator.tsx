import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, ChevronRight } from 'lucide-react';
import { tools } from '@/pages/ToolsPage';
export default function ToolsRotator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % tools.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);
  const currentTool = tools[currentIndex];
  const Icon = currentTool.icon;

  // Get first sentence of description
  const shortDescription = currentTool.description.split('.')[0] + '.';
  return <div className="mt-6 sm:mt-8 opacity-0 animate-fade-in" style={{
    animationDelay: '350ms'
  }} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocus={() => setIsPaused(true)} onBlur={() => setIsPaused(false)}>
      {/* Framing line */}
      <p className="text-xs text-muted-foreground/60 mb-3 sm:mb-4">Tools developed in support of cross-cultural work and daily practice.</p>

      {/* Pinned highlights */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
        <a 
          href="https://sentencepathslite.lovable.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-muted-foreground bg-muted/50 hover:bg-muted/70 border border-border/30 rounded-full transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          <span>Sentence Paths — structured fluency through leveled sentences</span>
        </a>
        <a 
          href="https://accruelanguage.lovable.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-muted-foreground bg-muted/50 hover:bg-muted/70 border border-border/30 rounded-full transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          <span>Accrue Language — track time, not streaks</span>
        </a>
      </div>

      {/* Rotator */}
      <div className="relative min-h-[80px]">
        <a key={currentTool.title} href={currentTool.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border border-border/40 hover:border-primary/30 hover:bg-muted/60 transition-all duration-300 animate-fade-in max-w-md mx-auto">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-accent to-muted flex items-center justify-center flex-shrink-0 border border-border/30">
            <Icon className="w-4 h-4 text-foreground/70" strokeWidth={1.5} />
          </div>
          <div className="flex-1 text-left min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-medium text-foreground">{currentTool.title}</span>
              <ExternalLink className="w-3 h-3 text-muted-foreground/60" />
            </div>
            <p className="text-xs text-muted-foreground/80 leading-relaxed mt-0.5 line-clamp-2">
              {shortDescription}
            </p>
          </div>
        </a>
      </div>

      {/* Dots indicator */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        {tools.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${index === currentIndex ? 'bg-primary/60 w-3' : 'bg-muted-foreground/20'}`} aria-label={`View tool ${index + 1}`} />)}
      </div>

      {/* View all link + Next button */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-3 mb-2">
        <Link to="/tools" className="inline-flex items-center gap-1 text-xs text-muted-foreground/70 hover:text-primary transition-colors">
          View all tools
          <ArrowRight className="w-3 h-3" />
        </Link>
        <button onClick={() => setCurrentIndex(prev => (prev + 1) % tools.length)} className="p-1 rounded border border-border/40 text-muted-foreground/60 hover:text-foreground hover:border-primary/30 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/50" aria-label="Next tool">
          <ChevronRight className="w-3.5 h-3.5" strokeWidth={1.5} />
        </button>
      </div>
    </div>;
}
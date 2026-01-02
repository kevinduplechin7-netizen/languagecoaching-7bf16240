import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
const navLinks = [{
  href: '#coaching',
  label: 'Coaching'
}, {
  href: '#tools',
  label: 'Tools'
}, {
  href: '#research',
  label: 'Research Helpers'
}, {
  href: '#approach',
  label: 'Approach'
}, {
  href: '#resources',
  label: 'Resources'
}, {
  href: '#contact',
  label: 'Contact'
}];
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm border-b border-border' : 'bg-transparent'}`}>
      <nav className="container-calm" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => <a key={link.href} href={link.href} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                {link.label}
              </a>)}
          </div>

          {/* Desktop CTA */}
          <a href="https://calendly.com/kevin-duplechin" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 btn-primary-calm text-sm">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            Schedule a consultation
          </a>

          {/* Mobile menu button */}
          <button type="button" onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 -mr-2 text-foreground rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? 'Close menu' : 'Open menu'}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className={`md:hidden fixed inset-0 top-16 bg-background z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} aria-hidden={!isOpen}>
          <div className="container-calm py-6 flex flex-col gap-2">
            {navLinks.map(link => <a key={link.href} href={link.href} onClick={handleLinkClick} className="px-4 py-3 text-base font-medium text-foreground hover:bg-accent rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" tabIndex={isOpen ? 0 : -1}>
                {link.label}
              </a>)}
            <div className="mt-4 pt-4 border-t border-border">
              <a href="https://calendly.com/kevin-duplechin" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick} className="flex items-center justify-center gap-2 btn-primary-calm w-full" tabIndex={isOpen ? 0 : -1}>
                <Calendar className="w-4 h-4" aria-hidden="true" />
                Schedule a consultation
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>;
}
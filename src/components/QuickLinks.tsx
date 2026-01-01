import { MessageSquare, BookOpen, GraduationCap, ExternalLink } from 'lucide-react';

const quickLinks = [
  {
    icon: MessageSquare,
    title: 'Chat with Paul Nation',
    href: 'https://notebooklm.google.com/notebook/da30b9be-319d-4de8-8920-470389dd2db8',
  },
  {
    icon: BookOpen,
    title: 'Paul Nation resources',
    href: 'https://www.wgtn.ac.nz/lals/resources/paul-nations-resources',
  },
  {
    icon: GraduationCap,
    title: 'Wheaton ICCT resources',
    href: 'https://www.wheaton.edu/academics/academic-centers/institute-for-cross-cultural-training/resources/',
  },
];

export default function QuickLinks() {
  return (
    <section className="py-8 bg-muted/30 border-y border-border/50">
      <div className="container-calm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {quickLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-lg hover:border-primary/30 hover:shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-accent rounded-lg group-hover:bg-primary/10 transition-colors">
                <link.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <span className="flex-1 text-sm font-medium text-foreground">{link.title}</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

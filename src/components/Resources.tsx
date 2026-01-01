import { ExternalLink, BookOpen, GraduationCap, MessageSquare } from 'lucide-react';
const resources = [{
  icon: GraduationCap,
  title: 'Wheaton ICCT Resources',
  href: 'https://www.wheaton.edu/academics/academic-centers/institute-for-cross-cultural-training/resources/'
}, {
  icon: BookOpen,
  title: "Paul Nation's resources (Victoria University of Wellington)",
  href: 'https://www.wgtn.ac.nz/lals/resources/paul-nations-resources'
}, {
  icon: MessageSquare,
  title: 'Chat with Paul Nation Tool',
  href: 'https://notebooklm.google.com/notebook/da30b9be-319d-4de8-8920-470389dd2db8'
}];
export default function Resources() {
  return (
    <section id="resources" className="section-calm scroll-mt-20">
      <div className="container-calm">
        <h2 className="section-title-calm">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/30 hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-accent rounded-lg group-hover:bg-primary/10 transition-colors">
                <resource.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <span className="inline-flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                  Visit resource
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
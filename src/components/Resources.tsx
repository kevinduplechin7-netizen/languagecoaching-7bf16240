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
  return <section id="resources" className="py-20 md:py-28">
      <div className="container-calm">
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
            Resources
          </h2>
        </div>

        {/* Resources grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {resources.map((resource, index) => <a key={resource.title} href={resource.href} target="_blank" rel="noopener noreferrer" className="group card-calm flex items-start gap-4 opacity-0 animate-fade-in-up focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="w-10 h-10 flex items-center justify-center bg-accent rounded-lg flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                <resource.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" aria-hidden="true" />
            </a>)}
        </div>
      </div>
    </section>;
}
import { Calendar, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/20">
      <div className="container-calm">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
            Ready to take the next step?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            If you'd like help choosing a next step, reach out. I'll respond with a clear, simple recommendation.
          </p>

          {/* Contact options */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/kevin-duplechin"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-calm w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
              Schedule a consultation
            </a>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a
              href="mailto:kevin.duplechin@pioneerbible.org"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              kevin.duplechin@pioneerbible.org
            </a>
            <a
              href="mailto:kevinduplechin7@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              kevinduplechin7@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL } from "@/data/offers";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container-calm">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>

          {/* Header */}
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Contact / Support
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Questions, feedback, or collaboration inquiries are welcome.
            </p>
          </div>

          {/* Contact sections */}
          <div className="max-w-2xl space-y-10">
            {/* General contact */}
            <section className="p-6 rounded-xl border border-border/60 bg-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sage-light to-accent flex items-center justify-center border border-border/30">
                  <Mail className="w-5 h-5 text-foreground/70" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-foreground mb-2">
                    General inquiries
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    For questions about resources, tools, or language-learning approaches shared on this site, feel free to reach out.
                  </p>
                </div>
              </div>
            </section>

            {/* Coaching and workshop routing */}
            <section className="p-6 rounded-xl border border-border/60 bg-card">
              <h2 className="text-base font-semibold text-foreground mb-3">
                Coaching and workshop requests
              </h2>
              <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Coaching and workshop requests are handled through the request forms on the coaching page, so nothing
                  gets lost in an inbox.
                </p>
                <p>
                  Submitting a request does not schedule a meeting. If your request is accepted, you will receive
                  private payment instructions by email, and the scheduling link is sent after payment is confirmed.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <Link to="/coaching#coaching-plans" className="btn-primary-calm justify-center">
                    Choose a Coaching Plan
                  </Link>
                  <Link to="/coaching#workshops" className="btn-secondary-calm justify-center">
                    Request a Workshop
                  </Link>
                </div>
                <p className="text-muted-foreground/80">
                  Direct email: <span className="font-medium text-foreground/80">{CONTACT_EMAIL}</span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import { CONTACT_EMAIL, LINKEDIN_URL, SENTENCE_PATHS_URL } from "@/data/offers";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container-calm">
        <NewsletterSignup location="footer" compact className="max-w-2xl mx-auto mb-8 pb-8 border-b border-border" />
        <p className="text-sm text-muted-foreground/80 text-center tracking-wide">
          Kevin Duplechin · Applied Linguist & Language-Learning Coach
        </p>
        <p className="mt-1 text-xs text-muted-foreground/60 text-center">
          Private coaching and organizational workshops, available by request.
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground/70">
          <Link to="/coaching#coaching-plans" className="hover:text-foreground transition-colors">
            Coaching Plans
          </Link>
          <Link to="/coaching#workshops" className="hover:text-foreground transition-colors">
            Workshops
          </Link>
          <a
            href={SENTENCE_PATHS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Sentence Paths
          </a>
          <Link to="/resources" className="hover:text-foreground transition-colors">
            Resources
          </Link>
          <Link to="/tools" className="hover:text-foreground transition-colors">
            Language Builds
          </Link>
          <Link to="/checkup" className="hover:text-foreground transition-colors">Learner Checkup</Link>
          <Link to="/articles" className="hover:text-foreground transition-colors">Articles</Link>
          <Link to="/newsletter" className="hover:text-foreground transition-colors">Newsletter</Link>
        </div>

        <div className="mt-3 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground/50">
          <Link to="/contact" className="hover:text-foreground transition-colors">
            Contact / Support
          </Link>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground transition-colors">
            {CONTACT_EMAIL}
          </a>
          <Link to="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link to="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
        </div>

        <p className="mt-5 text-xs text-muted-foreground/40 text-center max-w-2xl mx-auto leading-relaxed">
          Coaching supports your language-learning process. No specific proficiency level, score, or timeline is
          guaranteed. Resources shared here are offered independently and do not represent official organizational
          policy.
        </p>
        <p className="mt-2 text-xs text-muted-foreground/40 text-center">
          © {new Date().getFullYear()} Kevin Duplechin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-calm">
        <p className="text-sm text-muted-foreground/70 text-center tracking-wide">
          Kevin Duplechin · Linguist
        </p>
        <p className="mt-1 text-xs text-muted-foreground/60 text-center">
          Independent coaching available by request.
        </p>
        <p className="mt-4 text-xs text-muted-foreground/50 text-center">
          Resources shared here are offered as helpful references and do not
          represent official organizational policy.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground/50">
          <Link to="/contact" className="hover:text-foreground transition-colors">
            Contact / Support
          </Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link to="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
        </div>
        <p className="mt-4 text-xs text-muted-foreground/40 text-center max-w-xl mx-auto">
          Educational tools, coaching programs, and instructional resources may be offered now or in the future without constituting a separate legal entity at this time.
        </p>
        <p className="mt-2 text-xs text-muted-foreground/40 text-center">
          © {new Date().getFullYear()} Kevin Duplechin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

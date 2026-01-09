import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-calm">
        <p className="text-sm text-muted-foreground/70 text-center tracking-wide">
          Kevin Duplechin · Linguist · Pioneer Bible Translators
        </p>
        <p className="mt-4 text-xs text-muted-foreground/50 text-center">
          Resources shared here are offered as helpful references and do not
          represent official organizational policy.
        </p>
        <div className="mt-4 flex justify-center gap-4 text-xs text-muted-foreground/50">
          <Link to="/contact" className="hover:text-foreground transition-colors">
            Contact / Support
          </Link>
        </div>
        <p className="mt-2 text-xs text-muted-foreground/40 text-center">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

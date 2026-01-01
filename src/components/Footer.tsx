export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-calm">
        <p className="text-xs text-muted-foreground/70 text-center">
          Resources shared here are offered as helpful references and do not represent official organizational policy.
        </p>
        <p className="mt-3 text-xs text-muted-foreground/50 text-center">
          © {new Date().getFullYear()} Kevin Duplechin
        </p>
      </div>
    </footer>
  );
}

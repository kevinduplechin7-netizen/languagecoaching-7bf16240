import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
          </div>

          <div className="max-w-2xl prose prose-neutral dark:prose-invert">
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed">
                This site may collect limited personal information (such as email address or basic usage data) solely for communication, support, and service improvement.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Information is not sold or shared except as required to operate the site or comply with applicable law.
              </p>
            </section>

            {/* Contact */}
            <section>
              <p className="text-sm text-muted-foreground/70">
                For privacy-related questions, please{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  contact us
                </Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

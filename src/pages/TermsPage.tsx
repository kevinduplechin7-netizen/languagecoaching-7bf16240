import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsPage() {
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
              Terms of Service
            </h1>
          </div>

          <div className="max-w-2xl prose prose-neutral dark:prose-invert">
            {/* Terms Summary */}
            <section className="mb-10">
              <p className="text-muted-foreground leading-relaxed">
                Language coaching services and materials are provided for educational purposes only and do not guarantee specific learning outcomes.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Access to materials grants a limited, non-exclusive, non-transferable license for personal use. Redistribution, resale, or reuse of materials is prohibited.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All services and materials are provided "as is," without warranties of any kind.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                These terms are governed by the laws of the State of Texas, United States.
              </p>
            </section>

            {/* Copyright & Content Ownership */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Copyright & Content Ownership
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                © 2026 Kevin Duplechin. All rights reserved.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All original content on this site — including instructional text, sentence libraries, language builds, scaffolding systems, learning paths, lesson structures, explanations, examples, and downloadable materials — is the intellectual property of Kevin Duplechin and is protected under United States copyright law.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This content is provided for personal educational use only.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You may not copy, reproduce, redistribute, sell, sublicense, scrape, archive, or use this content for commercial purposes or for training or augmenting machine learning systems without prior written permission.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Employment, institutional affiliation, or research influence does not grant permission to reuse or replicate original materials.
              </p>
            </section>

            {/* Contact */}
            <section>
              <p className="text-sm text-muted-foreground/70">
                For questions about these terms, please{" "}
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

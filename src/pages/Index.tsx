Build error
Try to fix

src/pages/Index.tsx(129,28): error TS1005: ',' expected.
src/pages/Index.tsx(130,19): error TS1005: ')' expected.
src/pages/Index.tsx(130,29): error TS1005: ',' expected.
src/pages/Index.tsx(131,19): error TS1005: ',' expected.
src/pages/Index.tsx(132,19): error TS1005: ',' expected.
src/pages/Index.tsx(133,19): error TS1005: ',' expected.
src/pages/Index.tsx(135,19): error TS2657: JSX expressions must have one parent element.
src/pages/Index.tsx(162,17): error TS1005: ',' expected.
src/pages/Index.tsx(162,19): error TS17002: Expected corresponding JSX closing tag for 'div'.
src/pages/Index.tsx(163,17): error TS1381: Unexpected token. Did you mean `{'}'}` or `&rbrace;`?
src/pages/Index.tsx(165,13): error TS17002: Expected corresponding JSX closing tag for 'section'.
src/pages/Index.tsx(166,11): error TS17002: Expected corresponding JSX closing tag for 'main'.
src/pages/Index.tsx(287,10): error TS17008: JSX element 'section' has no corresponding closing tag.
src/pages/Index.tsx(298,29): error TS1005: ',' expected.
src/pages/Index.tsx(299,19): error TS1005: ')' expected.
src/pages/Index.tsx(299,30): error TS1005: ',' expected.
src/pages/Index.tsx(300,19): error TS1005: ',' expected.
src/pages/Index.tsx(301,19): error TS1005: ',' expected.
src/pages/Index.tsx(302,19): error TS1005: ',' expected.
src/pages/Index.tsx(304,19): error TS2657: JSX expressions must have one parent element.
src/pages/Index.tsx(326,17): error TS1005: ',' expected.
src/pages/Index.tsx(326,19): error TS17002: Expected corresponding JSX closing tag for 'div'.
src/pages/Index.tsx(327,17): error TS1381: Unexpected token. Did you mean `{'}'}` or `&rbrace;`?
src/pages/Index.tsx(330,9): error TS1005: ')' expected.
src/pages/Index.tsx(333,18): error TS1005: ';' expected.
src/pages/Index.tsx(362,9): error TS1128: Declaration or statement expected.
src/pages/Index.tsx(365,18): error TS1005: ';' expected.
src/pages/Index.tsx(366,11): error TS2657: JSX expressions must have one parent element.
src/pages/Index.tsx(380,17): error TS1382: Unexpected token. Did you mean `{'>'}` or `&gt;`?
src/pages/Index.tsx(383,19): error TS17002: Expected corresponding JSX closing tag for 'div'.
src/pages/Index.tsx(387,17): error TS1382: Unexpected token. Did you mean `{'>'}` or `&gt;`?
src/pages/Index.tsx(390,19): error TS17002: Expected corresponding JSX closing tag for 'div'.
src/pages/Index.tsx(395,13): error TS1128: Declaration or statement expected.
src/pages/Index.tsx(396,11): error TS1109: Expression expected.
src/pages/Index.tsx(397,9): error TS1109: Expression expected.
src/pages/Index.tsx(398,7): error TS1109: Expression expected.
src/pages/Index.tsx(400,5): error TS1128: Declaration or statement expected.
src/pages/Index.tsx(401,3): error TS1109: Expression expected.
src/pages/Index.tsx(402,1): error TS1128: Declaration or statement expected.

Modified
src/pages/Index.tsx
View file
Mention in chat

import { Button } from '@/components/ui/button';
import PremiumScreenshot from '@/components/PremiumScreenshot';
const flagshipTools = [
  {
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {flagshipTools.map((tool) => (
                <a
                
                  key={tool.title}
                  href={tool.href}
        </section>
        {/* Progress, Not Perfection - Philosophy Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-background via-accent/5 to-background">
          <div className="container-calm">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <Badge variant="outline" className="mb-3 text-xs border-primary/30 text-primary">
                  Coaching Philosophy
                </Badge>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Progress, Not Perfection
                </h2>
              </div>
              
              <div className="bg-card rounded-xl border border-border/50 p-8 md:p-10 shadow-sm">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-base md:text-lg">
                    Language growth isn't about finding the perfect method or the perfect app.
                  </p>
                  <p className="text-foreground font-medium text-lg md:text-xl">
                    It's about steady execution.
                  </p>
                  
                  <div className="space-y-3 py-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Keep what works</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Remove what doesn't</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Adjust calmly</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Repeat consistently</span>
                    </div>
                  </div>
                  <div className="space-y-4 pt-4 border-t border-border/30">
                    <p>
                      Stop chasing better tools.<br />
                      Start using the ones you already have.
                    </p>
                    <p>
                      Make a simple plan. Follow it. Refine it as you go.
                    </p>
                    <p>
                      The results compound — faster, easier, and more natural over time.
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-border/30 text-center">
                    <p className="text-muted-foreground/70 mb-2">
                      Perfection slows you down.
                    </p>
                    <p className="text-foreground font-semibold text-lg">
                      Execution moves you forward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* AI Coaches */}
        <section className="py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {aiCoaches.map((coach) => (
                <a
                
                  key={coach.title}
                  href={coach.href}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                
                  href="https://calendly.com/kevin-duplechin"
                  target="_blank"
                  Book a free intro call
                </a>
                <a
                
                  href="mailto:kevinduplechin7@gmail.com"
                  className="btn-secondary-calm w-full sm:w-auto"
};
export default Index;
export default Index;
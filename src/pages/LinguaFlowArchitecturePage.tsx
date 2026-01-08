import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Brain, 
  Database, 
  Layers, 
  Layout, 
  Network, 
  Zap,
  Globe,
  ArrowRight,
  CheckCircle,
  XCircle,
  BarChart3,
  Tag,
  Clock,
  Hash,
  ArrowLeft
} from 'lucide-react';

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, color = "blue" }: { children: React.ReactNode; color?: string }) => {
  const colors: Record<string, string> = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-emerald-100 text-emerald-800",
    purple: "bg-purple-100 text-purple-800",
    orange: "bg-orange-100 text-orange-800",
    slate: "bg-slate-100 text-slate-800",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${colors[color] || colors.blue}`}>
      {children}
    </span>
  );
};

const SectionHeading = ({ title, subtitle, icon: Icon }: { title: string; subtitle: string; icon?: React.ComponentType<{ className?: string }> }) => (
  <div className="text-center mb-12">
    {Icon && <div className="flex justify-center mb-4"><div className="p-3 bg-blue-50 rounded-full"><Icon className="w-8 h-8 text-blue-600" /></div></div>}
    <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
    <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

export default function LinguaFlowArchitecturePage() {
  const [activeTier, setActiveTier] = useState('tier1');

  const tiers: Record<string, {
    id: string;
    title: string;
    subtitle: string;
    color: string;
    stats: { label: string; value: string }[];
    details: { title: string; content: string }[];
  }> = {
    tier1: {
      id: 'tier1',
      title: "Tier 1: The Core (A1-A2)",
      subtitle: "Establish the Phonological Loop & Basic Parsing",
      color: "blue",
      stats: [
        { label: "Target", value: "Survival Skills" },
        { label: "Structure", value: "Strict SVO" },
        { label: "Volume", value: "~3,000 Sentences" }
      ],
      details: [
        {
          title: "Syntactic Engineering",
          content: "Strictly canonical word order (SVO). Declarative and simple interrogative sentences. Sentences are capped at 5-8 words to respect working memory limits."
        },
        {
          title: "Lexical Focus",
          content: "Concrete nouns (family, food), high-frequency verbs (be, have) in the present tense. Later introduces past (Aorist/Passé Composé) and future tenses."
        },
        {
          title: "Cognitive Goal",
          content: "Automating the decoding process for high-frequency patterns. Moving from dependent state to basic narrative foundation."
        }
      ]
    },
    tier2: {
      id: 'tier2',
      title: "Tier 2: The Expansion (B1-B2)",
      subtitle: "Reasoning, Subordination & Argumentation",
      color: "purple",
      stats: [
        { label: "Target", value: "Independence" },
        { label: "Structure", value: "Complex Clauses" },
        { label: "Volume", value: "~6,000 Sentences" }
      ],
      details: [
        {
          title: "Syntactic Engineering",
          content: "Focus on subordinate clauses triggered by conjunctions (because, if, although). Introduction of passive voice and subjunctive moods."
        },
        {
          title: "Lexical Focus",
          content: "Expansion to 2,000-3,000 lemmas (95% coverage). Abstract nouns (opinion, freedom) and discourse markers (however, consequently)."
        },
        {
          title: "Cognitive Goal",
          content: "Shifting from description to argumentation. Handling verb-final orders in dependent clauses (German) and hypothesis formation."
        }
      ]
    },
    tier3: {
      id: 'tier3',
      title: "Tier 3: The Mastery (C1-C2)",
      subtitle: "Stylistic Precision & Cultural Encoding",
      color: "orange",
      stats: [
        { label: "Target", value: "Native Nuance" },
        { label: "Structure", value: "Inverted/Idiomatic" },
        { label: "Volume", value: "~12,000+ Sentences" }
      ],
      details: [
        {
          title: "Syntactic Engineering",
          content: "Inverted word order for emphasis, formal/literary tenses, and complex nominalizations. High density of idioms."
        },
        {
          title: "Lexical Focus",
          content: "Precise synonyms, domain-specific vocabulary, and culturally encoded idioms (e.g., 'Cheveu sur la soupe')."
        },
        {
          title: "Cognitive Goal",
          content: "Understanding subtext, humor, and historical depth. Mastery of the 'Long Tail' of vocabulary distribution."
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="https://lingua-flow-lite-66d7b581.base44.app/Home" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Network className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-xl tracking-tight text-slate-900">LinguaFlow<span className="text-blue-600">.ai</span></span>
            </a>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
              <a href="#philosophy" className="hover:text-blue-600 transition-colors">Philosophy</a>
              <a href="#framework" className="hover:text-blue-600 transition-colors">The Framework</a>
              <a href="#science" className="hover:text-blue-600 transition-colors">The Science</a>
              <a href="#schema" className="hover:text-blue-600 transition-colors">Tech Stack</a>
            </div>
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Tools
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-white pt-24 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge color="blue">System Architecture v2.0</Badge>
          <h1 className="mt-8 text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Language Fluency</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed mb-10">
            A comprehensive framework for engineering high-efficacy sentence corpora. 
            Moving beyond rote memorization to foster true syntactic fluency through guided immersion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://lingua-flow-lite-66d7b581.base44.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
            >
              Launch LinguaFlow
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* The Shift Section */}
      <section id="philosophy" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Pedagogical Shift</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Language acquisition is a statistical learning process, not an act of memorizing a dictionary. 
                Traditional methods fail because they sever the link between vocabulary and syntax.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-red-50 rounded-lg">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-900">The Old Way</h3>
                    <p className="text-slate-600">Isolated words and vocabulary lists without syntactic context. Result: High knowledge, low fluency.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-emerald-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-900">The LinguaFlow Way</h3>
                    <p className="text-slate-600">Guided immersion through engineered sentence patterns. Result: Intuitive grammar and rapid parsing.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-inner">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-4 transform transition hover:scale-[1.02]">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <span className="text-xs font-mono text-slate-400">TRADITIONAL INPUT</span>
                </div>
                <div className="font-mono text-sm text-slate-800">
                  ["Dog", "Chien", "Hund"]<br/>
                  ["To Eat", "Manger", "Essen"]
                </div>
              </div>
              
              <div className="flex justify-center -my-3 relative z-10">
                <div className="bg-slate-200 rounded-full p-1">
                  <ArrowRight className="w-4 h-4 text-slate-500 rotate-90" />
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl shadow-sm border border-blue-100 p-6 mt-4 transform transition hover:scale-[1.02]">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-xs font-mono text-blue-600 font-bold">LINGUAFLOW INPUT</span>
                </div>
                <div className="font-medium text-slate-800 text-lg">
                  "The dog eats quickly because he is hungry."
                </div>
                <div className="mt-2 flex gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Subject</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Verb</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Causal Link</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Tabs */}
      <section id="framework" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="A Three-Tiered Architecture" 
            subtitle="We structure our entire corpus along the CEFR standard, providing a standardized path from survival skills to native-like mastery."
            icon={Layers}
          />
          <div className="mt-8 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mb-12">
            {Object.keys(tiers).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTier(key)}
                className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center ${
                  activeTier === key
                    ? 'bg-white text-blue-600 shadow-md ring-1 ring-slate-200'
                    : 'bg-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                }`}
              >
                {tiers[key].title}
              </button>
            ))}
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-1 h-full p-6 bg-gradient-to-br from-white to-slate-50">
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <span className={`inline-block p-3 rounded-lg ${
                    activeTier === 'tier1' ? 'bg-blue-100 text-blue-600' :
                    activeTier === 'tier2' ? 'bg-purple-100 text-purple-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    <Layout className="w-8 h-8" />
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{tiers[activeTier].title}</h3>
                <p className="text-slate-600 mb-8">{tiers[activeTier].subtitle}</p>
                
                <div className="mt-auto space-y-4">
                  {tiers[activeTier].stats.map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100">
                      <span className="text-sm text-slate-500">{stat.label}</span>
                      <span className="text-sm font-semibold text-slate-900">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            <div className="lg:col-span-2 space-y-6">
              {tiers[activeTier].details.map((detail, idx) => (
                <Card key={idx} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      {idx === 0 && <Database className="w-5 h-5 text-blue-500" />}
                      {idx === 1 && <BookOpen className="w-5 h-5 text-purple-500" />}
                      {idx === 2 && <Brain className="w-5 h-5 text-orange-500" />}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">{detail.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{detail.content}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Language Specifics Grid */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Language-Specific Engineering" 
            subtitle="Tailored architectural solutions for unique linguistic challenges."
            icon={Globe}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                lang: "German",
                challenge: "Case System & V2 Rule",
                strategy: "Rotate first element in Core packs to train inversion. Focus on Nominative/Accusative initially."
              },
              {
                lang: "Greek",
                challenge: "Diglossia & Inflection",
                strategy: "Introduce formal Katharevousa elements only at C1/C2. Enforce SVO in early stages."
              },
              {
                lang: "French",
                challenge: "Liaison & Register",
                strategy: "Explicit tagging of mandatory vs. forbidden liaisons. Colloquial variants in Expansion packs."
              },
              {
                lang: "Spanish",
                challenge: "Subjunctive & Clitics",
                strategy: "Dedicated 'Trigger' packs for Subjunctive. Contrastive pairs for Ser vs. Estar."
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:border-blue-300 transition-colors group">
                <div className="mb-4">
                  <Badge color="blue">{item.lang}</Badge>
                </div>
                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.challenge}</h4>
                <p className="text-sm text-slate-600">{item.strategy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Science / Zipf's Law */}
      <section id="science" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/20 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6 text-blue-400">
                <BarChart3 className="w-6 h-6" />
                <span className="uppercase tracking-widest text-sm font-bold">The Mathematical Backbone</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Zipf's Law & Corpus Scaling</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Word frequency follows a power-law distribution. A few words are extremely common; most are rare. 
                Reaching 98% comprehension requires a massive increase in input to encounter the "long tail" of vocabulary.
              </p>
              
              <div className="space-y-4">
                <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-sm text-blue-400">Core (A1-A2)</span>
                    <span className="font-mono text-sm text-white">~3,000 Sentences</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-sm text-purple-400">Expansion (B1-B2)</span>
                    <span className="font-mono text-sm text-white">~6,000 Sentences</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-sm text-orange-400">Mastery (C1-C2)</span>
                    <span className="font-mono text-sm text-white">~12,000+ Sentences</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 relative">
               <h3 className="text-xl font-bold mb-6 flex items-center">
                 <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                 The "3-6-12" Rule
               </h3>
               <div className="space-y-6">
                 <div className="flex">
                   <div className="flex-shrink-0 font-mono text-4xl text-blue-500 font-bold opacity-80">3k</div>
                   <div className="ml-4">
                     <h4 className="font-semibold text-white">High Repetition</h4>
                     <p className="text-sm text-slate-400">Focus on the top 100 verbs and concrete nouns. Automating the basics.</p>
                   </div>
                 </div>
                 <div className="flex">
                   <div className="flex-shrink-0 font-mono text-4xl text-purple-500 font-bold opacity-80">6k</div>
                   <div className="ml-4">
                     <h4 className="font-semibold text-white">Thematic Variety</h4>
                     <p className="text-sm text-slate-400">Covering 95% of general text. Introduction of abstract concepts.</p>
                   </div>
                 </div>
                 <div className="flex">
                   <div className="flex-shrink-0 font-mono text-4xl text-orange-500 font-bold opacity-80">12k</div>
                   <div className="ml-4">
                     <h4 className="font-semibold text-white">Long Tail Capture</h4>
                     <p className="text-sm text-slate-400">Rare vocabulary, cultural idioms, and specific domains.</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Section */}
      <section id="schema" className="py-24 bg-slate-50">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionHeading 
              title="Data-Driven Infrastructure" 
              subtitle="To deliver this tailored experience, every sentence requires a robust metadata schema allowing for dynamic filtering and targeted review."
              icon={Database}
            />
           
           <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
             {/* Header */}
             <div className="flex items-center justify-between px-6 py-4 bg-slate-800 border-b border-slate-700">
               <div className="flex items-center space-x-3">
                 <div className="flex space-x-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 <div className="h-4 w-px bg-slate-600 mx-2"></div>
                 <span className="font-mono text-sm text-slate-300">Database Record</span>
               </div>
               <div className="flex items-center space-x-2">
                 <span className="text-xs font-mono text-slate-500">ID:</span>
                 <span className="text-xs font-mono text-blue-400">DE_B1_0421</span>
               </div>
             </div>
             {/* Main Card Content */}
             <div className="p-8 md:p-10 text-center relative">
               {/* Background grid effect */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.3)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
               
               <div className="relative z-10">
                 <div className="inline-flex mb-6">
                   <Badge color="purple">Level B1</Badge>
                 </div>
                 <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                   "Der Mann liest ein Buch, <br className="hidden md:block"/>weil er es mag."
                 </h3>
                 <p className="text-lg text-slate-400 italic mb-8">
                   "The man reads a book because he likes it."
                 </p>
                 
                 <div className="flex justify-center items-center gap-2 mb-8">
                    <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded border border-slate-700">Literal: The man reads a book, because he it likes.</span>
                 </div>
               </div>
             </div>
             {/* Metadata Grid */}
             <div className="bg-slate-950/50 border-t border-slate-800 p-6">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 
                 <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                   <div className="flex items-center space-x-2 mb-1 text-slate-500 text-xs uppercase font-bold tracking-wider">
                     <Tag className="w-3 h-3" />
                     <span>Vocab Tags</span>
                   </div>
                   <div className="flex flex-wrap gap-1">
                     <span className="text-xs text-blue-300 bg-blue-900/30 px-1.5 py-0.5 rounded">health</span>
                     <span className="text-xs text-blue-300 bg-blue-900/30 px-1.5 py-0.5 rounded">daily_routine</span>
                   </div>
                 </div>
                 <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                   <div className="flex items-center space-x-2 mb-1 text-slate-500 text-xs uppercase font-bold tracking-wider">
                     <Hash className="w-3 h-3" />
                     <span>Grammar</span>
                   </div>
                   <div className="flex flex-wrap gap-1">
                     <span className="text-xs text-purple-300 bg-purple-900/30 px-1.5 py-0.5 rounded">subordinate_clause</span>
                     <span className="text-xs text-purple-300 bg-purple-900/30 px-1.5 py-0.5 rounded">verb_final</span>
                   </div>
                 </div>
                 <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                   <div className="flex items-center space-x-2 mb-1 text-slate-500 text-xs uppercase font-bold tracking-wider">
                     <Clock className="w-3 h-3" />
                     <span>Audio</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <div className="h-4 w-12 flex gap-0.5 items-end">
                       <div className="w-1 bg-green-500 h-2"></div>
                       <div className="w-1 bg-green-500 h-3"></div>
                       <div className="w-1 bg-green-500 h-full"></div>
                       <div className="w-1 bg-green-500 h-2"></div>
                       <div className="w-1 bg-green-500 h-1"></div>
                     </div>
                     <span className="text-sm text-slate-300 font-mono">4.2s</span>
                   </div>
                 </div>
                 <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                   <div className="flex items-center space-x-2 mb-1 text-slate-500 text-xs uppercase font-bold tracking-wider">
                     <CheckCircle className="w-3 h-3" />
                     <span>Verification</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-xs text-emerald-400 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> TTS Verified
                      </span>
                      <span className="text-[10px] text-slate-500 mt-1">
                        No homographs detected
                      </span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="https://lingua-flow-lite-66d7b581.base44.app/Home" className="font-bold text-xl tracking-tight text-slate-900 hover:opacity-80 transition-opacity">LinguaFlow<span className="text-blue-600">.ai</span></a>
            <p className="text-sm text-slate-500 mt-2">Engineered Language Fluency.</p>
          </div>
          <div className="flex space-x-6 text-slate-400">
             <a href="#philosophy" className="hover:text-blue-600 transition-colors">Methodology</a>
             <a href="#schema" className="hover:text-blue-600 transition-colors">Corpus Data</a>
             <Link to="/tools" className="hover:text-blue-600 transition-colors">Back to Tools</Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center md:text-left text-xs text-slate-400">
          © {new Date().getFullYear()} LinguaFlow. All rights reserved. Based on the Duplechin Protocol.
        </div>
      </footer>
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mic, PenTool, Zap, AlertTriangle, Globe, Users, CheckCircle, BarChart3, ChevronRight, RefreshCw, ArrowLeft, LucideIcon } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

// --- STRAND CARD COMPONENT ---
const StrandCard = ({ title, icon: Icon, percentage, definition, condition, activities, colorClass }: {
  title: string;
  icon: LucideIcon;
  percentage: string;
  definition: string;
  condition: string;
  activities: string[];
  colorClass: string;
}) => (
  <Card className={`border-t-4 ${colorClass} hover:-translate-y-1 transition-transform duration-200`}>
    <CardHeader className="pb-3">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg bg-accent`}>
            <Icon size={24} className="text-primary" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <Badge variant="secondary" className="text-xs">{percentage}</Badge>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-sm text-muted-foreground">{definition}</p>
      
      <div className="bg-accent/50 p-3 rounded-lg border border-border/50">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Crucial Condition</p>
        <p className="text-sm font-medium text-foreground">{condition}</p>
      </div>

      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Key Activities</p>
        <ul className="text-sm space-y-1">
          {activities.map((act, idx) => (
            <li key={idx} className="flex items-center gap-2 text-muted-foreground">
              <span className={`w-1.5 h-1.5 rounded-full bg-primary`}></span>
              {act}
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
);

// --- RED FLAG COMPONENT ---
const RedFlag = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex items-start gap-4 p-4 bg-destructive/10 border-l-4 border-destructive rounded-r-lg">
    <AlertTriangle className="text-destructive flex-shrink-0 mt-1" size={20} />
    <div>
      <h4 className="font-semibold text-destructive text-sm">{title}</h4>
      <p className="text-destructive/80 text-sm mt-1">{desc}</p>
    </div>
  </div>
);

// --- QUIZ DATA ---
const questionsMaster = [
  // INPUT (MFI) Questions
  {
    id: 'mfi_1',
    strand: 'MFI',
    text: "When your learners read or listen to stories, how many words are unknown to them?",
    options: [
      { text: "They struggle with many words (10+ per page)", score: 0 },
      { text: "They use a dictionary often (5-10 per page)", score: 1 },
      { text: "Very few (1-2 per page), they can guess the meaning easily", score: 3 }
    ]
  },
  {
    id: 'mfi_2',
    strand: 'MFI',
    text: "How much class time is dedicated to pure listening or reading for pleasure?",
    options: [
      { text: "Almost none, we mostly analyze text", score: 0 },
      { text: "Some, but usually followed by comprehension tests", score: 1 },
      { text: "A significant amount (Extensive Reading/Listening)", score: 3 }
    ]
  },
  {
    id: 'mfi_3',
    strand: 'MFI',
    text: "Are the materials interesting and compelling to the learners?",
    options: [
      { text: "No, they are textbook passages", score: 0 },
      { text: "Somewhat", score: 1 },
      { text: "Yes, learners choose them or love the stories", score: 3 }
    ]
  },
  {
    id: 'mfi_4',
    strand: 'MFI',
    text: "Do you use materials created or adapted specifically for the learners' level?",
    options: [
      { text: "No, we use 'authentic' native materials", score: 0 },
      { text: "Sometimes", score: 1 },
      { text: "Yes, graded readers or co-created stories", score: 3 }
    ]
  },
  // OUTPUT (MFO) Questions
  {
    id: 'mfo_1',
    strand: 'MFO',
    text: "Do learners speak or write to convey a real message?",
    options: [
      { text: "No, they mostly repeat or fill in blanks", score: 0 },
      { text: "Sometimes, but usually to practice grammar", score: 1 },
      { text: "Yes, they communicate ideas the listener doesn't know", score: 3 }
    ]
  },
  {
    id: 'mfo_2',
    strand: 'MFO',
    text: "Are learners pushed to use language slightly beyond their comfort zone?",
    options: [
      { text: "No, they stick to what they know perfectly", score: 0 },
      { text: "Occasionally", score: 1 },
      { text: "Yes, they have to negotiate meaning and explain things", score: 3 }
    ]
  },
  {
    id: 'mfo_3',
    strand: 'MFO',
    text: "Is the topic of speaking/writing familiar to them?",
    options: [
      { text: "No, it's often new and difficult", score: 0 },
      { text: "Sometimes", score: 1 },
      { text: "Yes, we usually read/listen about it first", score: 3 }
    ]
  },
  {
    id: 'mfo_4',
    strand: 'MFO',
    text: "Do they use strategies like circumlocution (talking around a missing word)?",
    options: [
      { text: "No, they stop or switch to L1", score: 0 },
      { text: "Sometimes", score: 1 },
      { text: "Yes, frequently", score: 3 }
    ]
  },
  // LANGUAGE FOCUS (LFL) Questions
  {
    id: 'lfl_1',
    strand: 'LFL',
    text: "How do you teach vocabulary?",
    options: [
      { text: "I don't teach it explicitly", score: 0 },
      { text: "Large lists of related words (colors, kitchen items)", score: 1 },
      { text: "Spaced repetition of high-frequency words, avoiding semantic sets", score: 3 }
    ]
  },
  {
    id: 'lfl_2',
    strand: 'LFL',
    text: "How much time is spent on grammar explanation and drills?",
    options: [
      { text: "None", score: 0 },
      { text: "Most of the class (>50%)", score: 1 },
      { text: "A moderate amount (~25%) focused on useful features", score: 3 }
    ]
  },
  {
    id: 'lfl_3',
    strand: 'LFL',
    text: "Do you engage in intensive reading (analyzing details)?",
    options: [
      { text: "Never", score: 0 },
      { text: "Always, it's our main reading method", score: 1 },
      { text: "Yes, for short, difficult texts only", score: 3 }
    ]
  },
  {
    id: 'lfl_4',
    strand: 'LFL',
    text: "Do students do deliberate study (e.g., word cards) outside class?",
    options: [
      { text: "No", score: 0 },
      { text: "Yes, checking definitions once", score: 1 },
      { text: "Yes, using retrieval practice/flashcards", score: 3 }
    ]
  },
  // FLUENCY (FD) Questions
  {
    id: 'fd_1',
    strand: 'FD',
    text: "Do you have activities where speed is the primary goal?",
    options: [
      { text: "No, accuracy is always the goal", score: 0 },
      { text: "Rarely", score: 1 },
      { text: "Yes, regular timed activities", score: 3 }
    ]
  },
  {
    id: 'fd_2',
    strand: 'FD',
    text: "Is the material used for fluency practice easy (100% known)?",
    options: [
      { text: "We use the same difficult textbook material", score: 0 },
      { text: "Sometimes", score: 1 },
      { text: "Yes, very easy material so they don't stumble", score: 3 }
    ]
  },
  {
    id: 'fd_3',
    strand: 'FD',
    text: "Do you use the 4/3/2 technique or speed reading?",
    options: [
      { text: "Never heard of them", score: 0 },
      { text: "Once or twice", score: 1 },
      { text: "Regularly", score: 3 }
    ]
  },
  {
    id: 'fd_4',
    strand: 'FD',
    text: "Is there pressure to perform faster than normal?",
    options: [
      { text: "No, students take their time", score: 0 },
      { text: "A little", score: 1 },
      { text: "Yes, time pressure is explicit", score: 3 }
    ]
  }
];

type QuizMode = 'short' | 'medium' | 'long';

const getQuizQuestions = (mode: QuizMode) => {
  if (mode === 'short') return [questionsMaster[0], questionsMaster[4], questionsMaster[8], questionsMaster[12]];
  if (mode === 'medium') return [
    questionsMaster[0], questionsMaster[1],
    questionsMaster[4], questionsMaster[5],
    questionsMaster[8], questionsMaster[9],
    questionsMaster[12], questionsMaster[13]
  ];
  return questionsMaster;
};

// --- QUIZ SECTION COMPONENT ---
const QuizSection = () => {
  const [mode, setMode] = useState<QuizMode | null>(null);
  const [quizState, setQuizState] = useState<'menu' | 'playing' | 'results'>('menu');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [scores, setScores] = useState({ MFI: 0, MFO: 0, LFL: 0, FD: 0 });
  const [questions, setQuestions] = useState<typeof questionsMaster>([]);

  const startQuiz = (selectedMode: QuizMode) => {
    setMode(selectedMode);
    setQuestions(getQuizQuestions(selectedMode));
    setScores({ MFI: 0, MFO: 0, LFL: 0, FD: 0 });
    setCurrentQIndex(0);
    setQuizState('playing');
  };

  const handleAnswer = (score: number, strand: string) => {
    setScores(prev => ({
      ...prev,
      [strand]: prev[strand as keyof typeof prev] + score
    }));

    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex(prev => prev + 1);
    } else {
      setQuizState('results');
    }
  };

  const resetQuiz = () => {
    setQuizState('menu');
    setMode(null);
  };

  const maxScorePerStrand = mode === 'short' ? 3 : mode === 'medium' ? 6 : 12;

  const getPercentage = (strand: keyof typeof scores) => Math.round((scores[strand] / maxScorePerStrand) * 100);

  const getDiagnosis = () => {
    const mfi = getPercentage('MFI');
    const mfo = getPercentage('MFO');
    const lfl = getPercentage('LFL');
    const fd = getPercentage('FD');

    const diagnosis: { type: 'critical' | 'warning' | 'success'; text: string }[] = [];

    if (fd < 30) diagnosis.push({ type: 'critical', text: "Zero Fluency Alert: Your course likely lacks specific training for speed. Knowledge is staying 'in the head' rather than becoming automatic." });
    if (mfi < 30) diagnosis.push({ type: 'critical', text: "Input Starvation: Learners aren't getting enough easy, enjoyable reading/listening. They can't learn incidentally without volume." });
    if (lfl > 80 && mfi < 50) diagnosis.push({ type: 'warning', text: "The Grammar Trap: You are likely spending too much time explaining the language (LFL) and not enough time using it." });
    if (mfo < 30) diagnosis.push({ type: 'warning', text: "Silent Classroom: There is a lack of 'pushed output'. Learners need to be forced to construct sentences to trigger syntactic learning." });

    if (diagnosis.length === 0) diagnosis.push({ type: 'success', text: "Balanced Diet: Your course appears well-structured across the four strands. Keep monitoring the balance!" });

    return diagnosis;
  };

  if (quizState === 'menu') {
    return (
      <Card className="overflow-hidden">
        <div className="bg-primary p-6 text-primary-foreground text-center">
          <h3 className="text-2xl font-semibold mb-2">Audit Your Course</h3>
          <p className="text-primary-foreground/80">Select a diagnosis depth to check your 4 Strands balance.</p>
        </div>
        <CardContent className="p-8 grid gap-4 md:grid-cols-3">
          <button onClick={() => startQuiz('short')} className="p-6 border-2 border-border rounded-xl hover:border-primary hover:bg-accent transition text-center group">
            <Zap className="mx-auto mb-3 text-primary group-hover:scale-110 transition" size={32} />
            <h4 className="font-semibold text-lg mb-1">Rapid Check</h4>
            <p className="text-sm text-muted-foreground">4 Questions</p>
            <p className="text-xs text-muted-foreground/60 mt-2">~1 Minute</p>
          </button>
          <button onClick={() => startQuiz('medium')} className="p-6 border-2 border-border rounded-xl hover:border-primary hover:bg-accent transition text-center group">
            <BarChart3 className="mx-auto mb-3 text-primary group-hover:scale-110 transition" size={32} />
            <h4 className="font-semibold text-lg mb-1">Standard Audit</h4>
            <p className="text-sm text-muted-foreground">8 Questions</p>
            <p className="text-xs text-muted-foreground/60 mt-2">~3 Minutes</p>
          </button>
          <button onClick={() => startQuiz('long')} className="p-6 border-2 border-border rounded-xl hover:border-primary hover:bg-accent transition text-center group">
            <CheckCircle className="mx-auto mb-3 text-primary group-hover:scale-110 transition" size={32} />
            <h4 className="font-semibold text-lg mb-1">Deep Dive</h4>
            <p className="text-sm text-muted-foreground">16 Questions</p>
            <p className="text-xs text-muted-foreground/60 mt-2">~6 Minutes</p>
          </button>
        </CardContent>
      </Card>
    );
  }

  if (quizState === 'playing') {
    const q = questions[currentQIndex];
    const strandColors: Record<string, string> = {
      MFI: 'bg-blue-500',
      MFO: 'bg-green-500',
      LFL: 'bg-purple-500',
      FD: 'bg-orange-500'
    };
    return (
      <Card className="overflow-hidden max-w-3xl mx-auto animate-in fade-in duration-300">
        <div className="bg-accent p-4 border-b border-border flex justify-between items-center">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Question {currentQIndex + 1} of {questions.length}</span>
          <Badge className={`${strandColors[q.strand]} text-white`}>
            {q.strand} Strand
          </Badge>
        </div>
        <CardContent className="p-8">
          <h3 className="text-xl font-semibold text-foreground mb-6">{q.text}</h3>
          <div className="space-y-3">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt.score, q.strand)}
                className="w-full text-left p-4 rounded-lg border border-border hover:border-primary hover:bg-accent transition flex justify-between group"
              >
                <span className="text-foreground">{opt.text}</span>
                <ChevronRight className="text-muted-foreground group-hover:text-primary" size={20} />
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (quizState === 'results') {
    const diagnosis = getDiagnosis();
    const strandData = [
      { id: 'MFI', label: 'Meaning-Focused Input', color: 'bg-blue-500', val: getPercentage('MFI') },
      { id: 'MFO', label: 'Meaning-Focused Output', color: 'bg-green-500', val: getPercentage('MFO') },
      { id: 'LFL', label: 'Language-Focused Learning', color: 'bg-purple-500', val: getPercentage('LFL') },
      { id: 'FD', label: 'Fluency Development', color: 'bg-orange-500', val: getPercentage('FD') }
    ];
    return (
      <Card className="overflow-hidden animate-in fade-in duration-300">
        <div className="bg-primary p-6 text-primary-foreground flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Audit Results</h3>
          <Button variant="ghost" onClick={resetQuiz} className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10">
            <RefreshCw size={16} className="mr-2" /> Retake
          </Button>
        </div>
        <CardContent className="p-8">
          {/* Visual Bars */}
          <div className="space-y-6 mb-8">
            {strandData.map(s => (
              <div key={s.id}>
                <div className="flex justify-between text-sm mb-2 font-medium text-foreground">
                  <span>{s.label}</span>
                  <span>{s.val}% Health</span>
                </div>
                <div className="h-3 bg-accent rounded-full overflow-hidden">
                  <div className={`h-full ${s.color} transition-all duration-1000`} style={{ width: `${s.val}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-accent/50 rounded-xl p-6 border border-border">
            <h4 className="font-semibold text-foreground mb-4 text-lg">Pedagogical Diagnosis</h4>
            <ul className="space-y-3">
              {diagnosis.map((d, i) => (
                <li key={i} className={`flex gap-3 text-sm p-3 rounded-lg ${d.type === 'critical' ? 'bg-destructive/10 text-destructive' : d.type === 'warning' ? 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400' : 'bg-green-500/10 text-green-700 dark:text-green-400'}`}>
                  {d.type === 'critical' || d.type === 'warning' ? <AlertTriangle size={20} className="shrink-0" /> : <CheckCircle size={20} className="shrink-0" />}
                  {d.text}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    );
  }

  return null;
};

// --- MAIN PAGE COMPONENT ---
export default function FourStrandsQuizPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-12 md:py-20 pt-32">
          <div className="container-calm">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Home
            </Link>
            <Badge className="bg-primary-foreground/20 text-primary-foreground border-0 mb-4">
              Based on the research of Paul Nation
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight tracking-tight">
              The Four Strands Framework
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 leading-relaxed">
              A principled approach for adult language learners and coaches.
              Move beyond dogmatic "methods" to a balanced diet of learning opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="secondary" size="lg">
                <a href="#strands">Explore the Strands</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="#audit">Audit Your Course</a>
              </Button>
            </div>
          </div>
        </section>

        {/* The Core Principle Section */}
        <section className="py-12 md:py-16 bg-card">
          <div className="container-calm text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">The Principle of Balance</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Efficiency in language learning is not achieved by finding a "magic bullet," but by balancing time across four distinct modes of processing. The Canon dictates a rough <strong className="text-foreground">25% time allocation</strong> for each strand.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-blue-500/10 rounded-lg">
                <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">25%</span>
                <span className="text-sm font-medium text-muted-foreground">Meaning-Focused Input</span>
              </div>
              <div className="p-4 bg-green-500/10 rounded-lg">
                <span className="block text-3xl font-bold text-green-600 dark:text-green-400 mb-1">25%</span>
                <span className="text-sm font-medium text-muted-foreground">Meaning-Focused Output</span>
              </div>
              <div className="p-4 bg-purple-500/10 rounded-lg">
                <span className="block text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">25%</span>
                <span className="text-sm font-medium text-muted-foreground">Language-Focused Learning</span>
              </div>
              <div className="p-4 bg-orange-500/10 rounded-lg">
                <span className="block text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">25%</span>
                <span className="text-sm font-medium text-muted-foreground">Fluency Development</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Strands Grid */}
        <section id="strands" className="py-16 bg-accent/30 scroll-mt-24">
          <div className="container-calm">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center">The Four Strands Defined</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StrandCard
                title="Input (MFI)"
                icon={BookOpen}
                percentage="25%"
                colorClass="border-blue-500"
                definition="Learning through listening and reading where the focus is on understanding the story or message."
                condition="98% Coverage. Only 1 unknown word in 50. If it's harder, it's study, not input."
                activities={["Extensive Reading (Graded Readers)", "Listening to Stories", "Narrow Viewing (TV Series)"]}
              />
              <StrandCard
                title="Output (MFO)"
                icon={Mic}
                percentage="25%"
                colorClass="border-green-500"
                definition="Learning through speaking and writing where the focus is on conveying a message to someone else."
                condition="Pushed Output. Use known words to bridge gaps. Must have a communicative goal."
                activities={["Retelling a text", "10-minute Writing", "Split Information Tasks"]}
              />
              <StrandCard
                title="Focus (LFL)"
                icon={PenTool}
                percentage="25%"
                colorClass="border-purple-500"
                definition="Deliberate attention to language features: sounds, vocabulary, grammar rules."
                condition="Avoid Interference. Do not teach semantic sets (e.g. colors, fruits) together."
                activities={["Word Cards (Spaced Repetition)", "Intensive Reading", "Pronunciation Drills"]}
              />
              <StrandCard
                title="Fluency (FD)"
                icon={Zap}
                percentage="25%"
                colorClass="border-orange-500"
                definition="Developing the ability to use ALREADY KNOWN language smoothly and quickly."
                condition="Zero Unknowns + Pressure. Material must be 100% easy. Speed is the goal."
                activities={["4/3/2 Speaking Technique", "Speed Reading", "Rapid Listening"]}
              />
            </div>
          </div>
        </section>

        {/* Interactive Audit Section */}
        <section id="audit" className="py-16 bg-accent/50 scroll-mt-24">
          <div className="container-calm max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">Interactive Audit</h2>
            <QuizSection />
          </div>
        </section>

        {/* Context Specific Application */}
        <section className="py-16 bg-card">
          <div className="container-calm">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="text-primary" size={32} />
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Adapting to Diverse Contexts</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* High Resource Languages */}
              <div>
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
                  <Users size={20} /> High-Resource Languages
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  (e.g., Regional or National languages with abundant media)
                </p>
                <div className="space-y-4">
                  <Card className="border-l-4 border-blue-500">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground text-sm">Selecting Appropriate Materials</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Media designed for native speakers is often too complex for learners. Avoid the "Authentic Text Fallacy" (using complex newspapers or TV too early). Stick to the 98% coverage rule.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-blue-500">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground text-sm">Engagement Strategy</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Seek out materials written for younger audiences or graded readers. Engage in genuine daily interactions (MFO) within the community, focusing on familiar topics.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Low Resource Languages */}
              <div>
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                  <Users size={20} /> Low-Resource & Indigenous Languages
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  (e.g., Languages with limited written materials or media presence)
                </p>
                <div className="space-y-4">
                  <Card className="border-l-4 border-green-500">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground text-sm">Co-Creating Learning Materials</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        When graded readers aren't available, collaborate with a Language Partner to create them. Record simple oral stories. Listen to these recordings repeatedly to build input.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-green-500">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground text-sm">Collaborative Sessions</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Guide sessions towards storytelling rather than grammatical analysis. Structure the time: 15 mins recording stories (MFI), 15 mins retelling (MFO), 15 mins vocabulary checks (LFL), 15 mins rapid review (FD).
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Red Flags */}
        <section className="py-16 bg-accent/30">
          <div className="container-calm max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">Common Red Flags</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <RedFlag
                title="The Hard Text Fallacy"
                desc="Reading text with 80-90% coverage (1 unknown word every 10 words) is DECODING, not reading. It fails as Input because context guessing is impossible."
              />
              <RedFlag
                title="The Semantic Set Trap"
                desc="Teaching 'Kitchen Words' or 'Colors' together causes 'Cross-Association.' You will confuse the words. Teach 'Apple' with 'Health', not with 'Orange'."
              />
              <RedFlag
                title="The Silent Classroom"
                desc="A course with 50% reading/listening and 0% speaking produces 'Mute Proficiency.' Knowledge remains declarative, never becoming procedural."
              />
              <RedFlag
                title="The Zero-Fluency Error"
                desc="Assuming fluency happens automatically. It requires dedicated 'pressure' training (Speed Reading, 4/3/2 Speaking) on VERY easy material."
              />
            </div>
          </div>
        </section>

        {/* Attribution */}
        <section className="py-12 bg-card border-t border-border">
          <div className="container-calm text-center max-w-2xl">
            <p className="text-muted-foreground mb-4">
              This summary is based on the <strong className="text-foreground">Canon of the Four Strands</strong>, derived from the{' '}
              <a href="https://www.wgtn.ac.nz/lals/resources/paul-nations-resources/paul-nations-publications/publications/documents/foreign-language_1125.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                works of Professor Paul Nation
              </a>.
            </p>
            <p className="text-sm italic text-muted-foreground/70">
              "To learn to read, you must read. To learn to speak fluently, you must practice speaking fluently."
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/**
 * Centralized offer data for the entire site.
 * Every page/component must import names, prices, savings, descriptions,
 * features, and CTA labels from here. Do not duplicate offer data elsewhere.
 */

export const SENTENCE_PATHS_URL = "https://sentencepaths.com";
export const SENTENCE_PATHS_YOUTUBE = "https://www.youtube.com/@sentencepaths";
export const LINKEDIN_URL = "https://www.linkedin.com/in/kevin-duplechin-63b48a158/";
export const CONTACT_EMAIL = "kevinduplechin7@gmail.com";

/** Formspree endpoint used for both the coaching application and workshop inquiry. */
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqeaply";

export type PlanId = "strategy" | "starter" | "momentum";

export interface CoachingPlan {
  id: PlanId;
  name: string;
  price: string;
  savings?: string;
  badge?: string;
  purpose: string;
  includes: string[];
  cta: string;
}

export const coachingPlans: CoachingPlan[] = [
  {
    id: "strategy",
    name: "Single Strategy Session",
    price: "$150",
    purpose:
      "One focused session for a learner who needs expert guidance, a professional review, help solving a specific problem, or a clear next step.",
    includes: [
      "One private coaching session",
      "Review of current goals, resources, methods, and challenges",
      "Identification of important gaps or imbalances",
      "Personalized recommendations",
      "A practical next-step plan",
      "Help deciding what to focus on first",
    ],
    cta: "Request a Strategy Session",
  },
  {
    id: "starter",
    name: "3-Session Starter Plan",
    price: "$375",
    savings: "Save $75",
    badge: "Most Popular",
    purpose:
      "For a learner who wants help building and beginning a personalized language-learning system.",
    includes: [
      "Three private coaching sessions",
      "Personalized language-learning plan",
      "Four Strands balance review",
      "Recommended resources and activities",
      "Help creating a realistic weekly routine",
      "Accountability and plan adjustment",
      "Step-by-step guidance for getting started",
      "Support reducing confusion and overwhelm",
    ],
    cta: "Choose the Starter Plan",
  },
  {
    id: "momentum",
    name: "6-Session Momentum Plan",
    price: "$675",
    savings: "Save $225",
    purpose:
      "For a learner who wants continued coaching, accountability, troubleshooting, and refinement.",
    includes: [
      "Six private coaching sessions",
      "Personalized long-term language-learning plan",
      "Ongoing progress review",
      "Four Strands activity balancing",
      "Resource and activity adjustment",
      "Accountability",
      "Support overcoming plateaus and inconsistency",
      "Help adapting the plan as circumstances change",
      "Continued step-by-step guidance",
    ],
    cta: "Choose the Momentum Plan",
  },
];

export const getPlanById = (id: string | null | undefined): CoachingPlan | undefined =>
  coachingPlans.find((plan) => plan.id === id);

export interface WorkshopOffer {
  id: "half-day" | "full-day";
  name: string;
  price: string;
  description: string;
  cta: string;
  /** Value used in the workshop form select. */
  optionLabel: string;
}

export const workshopOffers: WorkshopOffer[] = [
  {
    id: "half-day",
    name: "Half-Day Workshop",
    price: "Starting at $1,250",
    description:
      "Up to approximately three hours of instruction, discussion, guided practice, and implementation planning.",
    cta: "Request a Half-Day Workshop",
    optionLabel: "Half-Day Workshop — Starting at $1,250",
  },
  {
    id: "full-day",
    name: "Full-Day Workshop",
    price: "Starting at $2,250",
    description:
      "Up to approximately six hours of training, guided practice, team exercises, discussion, and implementation planning.",
    cta: "Request a Full-Day Workshop",
    optionLabel: "Full-Day Workshop — Starting at $2,250",
  },
];

export const WORKSHOP_PRICING_NOTE =
  "Workshop prices are starting prices. Final pricing may vary based on customization, preparation, group size, travel, delivery format, and organizational needs.";

export const workshopAudiences = [
  "Missionary teams",
  "Churches",
  "Language programs",
  "Schools and educators",
  "Nonprofits",
  "Businesses or organizations",
  "Language coaches",
  "Cross-cultural teams",
];

export const workshopTopics = [
  "Paul Nation's Four Strands",
  "Building effective language-learning plans",
  "Meaning-focused input and output",
  "Fluency-development activities",
  "Language-focused learning",
  "Working effectively with language helpers",
  "Coaching language learners",
  "Supporting overwhelmed or discouraged learners",
  "Mission-trip language preparation",
  "Minority-language learning",
  "Can-do goals and progress evidence",
  "Sentence Paths implementation",
  "Sustainable multilingual-learning routines",
];

export const organizationTypes = [
  "Church",
  "Mission organization",
  "School or university",
  "Language program",
  "Nonprofit",
  "Business or organization",
  "Government or public-service team",
  "Other",
];

export const FOUR_STRANDS_STATEMENT =
  "A strong language-learning plan gives meaningful attention to meaning-focused input, meaning-focused output, language-focused learning, and fluency development. Coaching helps identify what may be missing or overemphasized and turns these principles into practical activities that fit your goals, schedule, context, and available resources.";

export const fourStrands = [
  {
    title: "Meaning-focused input",
    description: "Learning through listening and reading for the message.",
  },
  {
    title: "Meaning-focused output",
    description: "Learning through speaking and writing for real purposes.",
  },
  {
    title: "Language-focused learning",
    description: "Deliberate attention to vocabulary, grammar, and sound patterns.",
  },
  {
    title: "Fluency development",
    description: "Increasing speed and ease with language you already know.",
  },
];

export const levelOptions = [
  "Complete beginner",
  "Beginner",
  "Elementary",
  "Intermediate",
  "Upper intermediate",
  "Advanced",
  "Not sure",
];

export const ACKNOWLEDGMENT_TEXT =
  "I understand that submitting this request does not schedule a meeting. If my request is accepted, I will receive private payment instructions by email. The scheduling link will be sent after payment is confirmed.";

export const coachingSteps = [
  {
    title: "Submit Your Request",
    description:
      "Tell me briefly what you are learning, what you hope to accomplish, and where you need help.",
  },
  {
    title: "Receive Private Payment Instructions",
    description:
      "If the selected package is a good fit, I will email you confirmation and private Zelle payment instructions.",
  },
  {
    title: "Schedule Your Meeting",
    description: "After payment is confirmed, I will email you the private scheduling link.",
  },
];

export const coachingFaqs = [
  {
    question: "I do not think I am good at language learning. Can you help?",
    answer:
      "Yes. You do not need to be naturally gifted or already know which method to use. We will begin with where you are now and work step by step to create a manageable plan.",
  },
  {
    question: "I feel overwhelmed. Do I need a plan before contacting you?",
    answer:
      "No. Helping you determine what to do is part of the coaching process. You can contact me even if you are unsure where to begin.",
  },
  {
    question: "Am I guaranteed to get the result I want?",
    answer:
      "No coach can guarantee a specific proficiency level or timeline. Progress depends on factors including consistency, time, opportunities for meaningful language use, resources, prior experience, and the language being learned. Coaching provides an informed plan, guidance, accountability, and adjustment.",
  },
  {
    question: "What am I paying for?",
    answer:
      "You are paying for more than meeting time. Coaching helps reduce wasted effort, organize your learning, identify imbalances, choose appropriate activities, and make better decisions with experienced guidance.",
  },
  {
    question: "Will I book immediately?",
    answer:
      "No. First submit the short coaching request. After it is reviewed, you will receive private payment instructions. The scheduling link will be sent after payment is confirmed.",
  },
  {
    question: "How do I pay?",
    answer:
      "Accepted clients receive private Zelle payment instructions by email. Personal payment information is not displayed publicly.",
  },
  {
    question: "Why is the calendar private?",
    answer:
      "The scheduling link is provided after payment so that coaching times remain available for confirmed clients.",
  },
  {
    question: "Is this language tutoring?",
    answer:
      "This is primarily language-learning coaching. Instead of only teaching isolated lessons, we build a system for making progress through meaningful input, meaningful output, focused learning, and fluency development.",
  },
  {
    question: "Which package should I choose?",
    answer:
      "Choose the Strategy Session for a focused question or professional review. Choose the Starter Plan to build and begin a personalized system. Choose the Momentum Plan for continued accountability, troubleshooting, and adjustment.",
  },
  {
    question: "Is coaching only for beginners?",
    answer:
      "No. Coaching can support complete beginners, intermediate learners, advanced learners, multilingual learners, missionaries, and people returning to a language after a break.",
  },
  {
    question: "Does coaching include Sentence Paths?",
    answer:
      "Sentence Paths may be incorporated into a coaching plan when appropriate, but coaching and Sentence Paths are separate offers unless explicitly stated otherwise.",
  },
  {
    question: "Are workshops available online?",
    answer:
      "Yes. Workshops may be offered online or in person depending on organizational needs and availability.",
  },
];

export const sentencePathsFeatureGroups = [
  {
    title: "Learn Through Meaningful Sentences",
    features: [
      "Import your own texts and materials",
      "Work with meaningful sentence collections",
      "Read target-language sentences with translations",
      "Use multiple translations where available",
      "Hide or reveal the target language",
      "Adjust text size and reading layout",
      "Support for right-to-left languages",
      "Tap words for glosses where available",
      "Use transliteration when needed",
    ],
  },
  {
    title: "Practice Across Skills",
    features: [
      "Listen",
      "Read",
      "Write",
      "Speak",
      "Use Skill Mix to combine modalities",
      "Practice with LinguaBuilder sentence tiles",
      "Write by hand in Ink Mode",
      "Practice aloud in Speak Mode",
      "Use structured recall through the Memorize Ladder",
      "Repeat and review sentences in multiple ways",
    ],
  },
  {
    title: "Listen and Read More Naturally",
    features: [
      "Auto-advance through sentence collections",
      "Play full decks",
      "Use translation-first or target-language audio sequences",
      "Adjust repetition and pauses",
      "Work with bilingual video and subtitle practice through PathsTube where available",
      "Use sentence-based audiobook practice",
    ],
  },
  {
    title: "Track Real Language Volume",
    features: [
      "Count words encountered and practiced",
      "Track sentences and repetitions",
      "Review progress across languages",
      "See cumulative totals rather than relying only on streaks",
      "Build toward long-term word-volume milestones",
      "Make sustained effort visible over months and years",
    ],
  },
  {
    title: "Build Your Own Learning Ecosystem",
    features: [
      "Import personal materials",
      "Create and save practice decks",
      'Build personalized "Islands" around topics you want to discuss',
      "Use Sentence Paths between coaching sessions",
      "Combine the platform with tutors, language helpers, books, media, and real conversations",
      "Sync supported content and progress across devices where available",
    ],
  },
];

export const sentencePathsMilestones = [
  { label: "10,000 words" },
  { label: "100,000 words" },
  { label: "500,000 words" },
  { label: "1,000,000 words" },
  { label: "2,500,000 words" },
  { label: "5,000,000 words" },
];

export const credentialHighlights = [
  "M.A. in Linguistics",
  "Coordinator of Language-Learning Coaches",
  "Extensive applied-linguistics and field experience, including Papua New Guinea",
  "Work with missionaries, independent learners, coaches, teams, and minority-language contexts",
  "Personal experience learning and maintaining multiple languages",
  "Creator of Sentence Paths",
];

export const KEVIN_BIO =
  "Kevin Duplechin is an applied linguist, language-learning coach, coach trainer, and creator of Sentence Paths. He helps learners move from uncertainty and scattered study activities to balanced, sustainable language-learning systems.";

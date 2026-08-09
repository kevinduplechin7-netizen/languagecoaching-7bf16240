export type StrandId = "MFI" | "MFO" | "LFL" | "FD";

export interface CheckupQuestion {
  id: string;
  strand: StrandId;
  prompt: string;
  /** Plain-language explanation of any terminology used in the prompt. */
  helper: string;
  options: { label: string; score: number }[];
}

const frequencyOptions = [
  { label: "Rarely or never", score: 0 },
  { label: "Sometimes", score: 1 },
  { label: "Most weeks", score: 2 },
  { label: "Consistently", score: 3 },
];

export const strandNames: Record<StrandId, string> = {
  MFI: "Meaning-focused input",
  MFO: "Meaning-focused output",
  LFL: "Language-focused learning",
  FD: "Fluency development",
};

/** Plain-language definitions shown alongside each strand. */
export const strandExplanations: Record<StrandId, string> = {
  MFI: "Listening and reading for the message — understanding what someone is saying or writing, not studying the language itself.",
  MFO: "Speaking and writing to say something real — telling, asking, or explaining, not doing exercises.",
  LFL: "Deliberate study — spending focused time on words, grammar, pronunciation, or spelling.",
  FD: "Practice that makes what you already know come out faster and more easily — no new words or grammar involved.",
};

export const checkupQuestions: CheckupQuestion[] = [
  {
    id: "mfi-1",
    strand: "MFI",
    prompt: "I listen to language I can mostly understand for its message.",
    helper: "\u201CFor its message\u201D means you are listening to follow the story or information \u2014 like a podcast, video, or conversation \u2014 rather than to study the grammar or words.",
    options: frequencyOptions,
  },
  {
    id: "mfi-2",
    strand: "MFI",
    prompt: "I read material that is interesting and comfortable enough to keep moving.",
    helper: "\u201CComfortable\u201D means you understand nearly every word (roughly 98 out of 100), so you can keep reading without stopping to look things up.",
    options: frequencyOptions,
  },
  {
    id: "mfi-3",
    strand: "MFI",
    prompt: "I get enough listening and reading to meet the same useful words again and again.",
    helper: "Words usually stick after you meet them many times in different places. This asks whether you get enough reading and listening for that repetition to happen naturally.",
    options: frequencyOptions,
  },
  {
    id: "mfo-1",
    strand: "MFO",
    prompt: "I speak to communicate ideas, stories, or needs\u2014not only to repeat exercises.",
    helper: "This means real talking: telling someone about your day, asking for something, explaining an idea \u2014 as opposed to repeating drills or reading sentences aloud.",
    options: frequencyOptions,
  },
  {
    id: "mfo-2",
    strand: "MFO",
    prompt: "I write messages or short texts for a real or imagined reader.",
    helper: "\u201CA real or imagined reader\u201D means you write something someone could actually read \u2014 a text message, a note, a short post \u2014 rather than filling in blanks on a worksheet.",
    options: frequencyOptions,
  },
  {
    id: "mfo-3",
    strand: "MFO",
    prompt: "I find ways to express a meaning even when I do not know the perfect word.",
    helper: "This is sometimes called \u201Cworking around\u201D a word: if you don\u2019t know \u201Cwrench,\u201D you say \u201Cthe tool for turning bolts.\u201D",
    options: frequencyOptions,
  },
  {
    id: "lfl-1",
    strand: "LFL",
    prompt: "I deliberately study useful vocabulary, grammar, pronunciation, or spelling.",
    helper: "\u201CDeliberately study\u201D means setting aside time to work on the language itself \u2014 flashcards, a grammar point, sound practice \u2014 rather than just using the language.",
    options: frequencyOptions,
  },
  {
    id: "lfl-2",
    strand: "LFL",
    prompt: "When I review, I try to recall answers from memory instead of only rereading notes.",
    helper: "Recalling from memory (\u201Cretrieval practice\u201D) means covering the answer and trying to produce it yourself. Spreading those reviews over days (\u201Cspaced review\u201D) helps them last.",
    options: frequencyOptions,
  },
  {
    id: "lfl-3",
    strand: "LFL",
    prompt: "My focused study supports language I am actually meeting or trying to use.",
    helper: "In other words, the words and patterns you study come from the things you read, hear, or want to say \u2014 not from a random list.",
    options: frequencyOptions,
  },
  {
    id: "fd-1",
    strand: "FD",
    prompt: "I repeat easy listening, reading, speaking, or writing to become faster and smoother.",
    helper: "This is \u201Cfluency practice\u201D: doing something you can already do, again, until it feels quicker and easier. You are not learning anything new during it.",
    options: frequencyOptions,
  },
  {
    id: "fd-2",
    strand: "FD",
    prompt: "During that repeated practice, I use language I already know well.",
    helper: "Fluency practice only works with familiar material. If you are meeting new words, it becomes study instead of speed practice.",
    options: frequencyOptions,
  },
  {
    id: "fd-3",
    strand: "FD",
    prompt: "I sometimes add gentle time pressure, or aim to do the same task more easily than last time.",
    helper: "For example: telling the same short story in 4 minutes, then 3, then 2 \u2014 or timing how long a familiar page takes to read.",
    options: frequencyOptions,
  },
];

export const strandRecommendations: Record<StrandId, string[]> = {
  MFI: ["Choose easy, compelling reading or listening and follow the message without stopping for every unknown word.", "Schedule short input sessions often enough to build real volume."],
  MFO: ["Retell something familiar, send a short message, or speak with a patient partner about a real topic.", "Prepare useful phrases, then use them to communicate new information."],
  LFL: ["Select a small number of high-value words or patterns from your real reading, listening, and speaking.", "Cover the answer and recall it from memory, review again a few days later, then notice or use each item in context."],
  FD: ["Repeat an easy task with familiar language and aim for greater ease, not new complexity.", "Try rereading the same easy page, relistening to the same clip, or telling the same story in 4 minutes, then 3, then 2."],
};

export const sevenDayPlan = [
  "Day 1 — Listen to or read easy, interesting material for 20 minutes.",
  "Day 2 — Retell the main ideas aloud or in a short written message.",
  "Day 3 — Study 8–10 useful words or patterns from that material, recalling each one from memory.",
  "Day 4 — Return to the same material and notice what is now easier.",
  "Day 5 — Speak or write about the topic for a real purpose.",
  "Day 6 — Repeat an easy speaking, reading, or listening task for greater speed and ease.",
  "Day 7 — Review your week and schedule one activity from each strand for next week.",
];

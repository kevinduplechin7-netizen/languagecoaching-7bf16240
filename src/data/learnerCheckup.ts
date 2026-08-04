export type StrandId = "MFI" | "MFO" | "LFL" | "FD";

export interface CheckupQuestion {
  id: string;
  strand: StrandId;
  prompt: string;
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

export const checkupQuestions: CheckupQuestion[] = [
  { id: "mfi-1", strand: "MFI", prompt: "I listen to language I can mostly understand for its message.", options: frequencyOptions },
  { id: "mfi-2", strand: "MFI", prompt: "I read material that is interesting and comfortable enough to keep moving.", options: frequencyOptions },
  { id: "mfi-3", strand: "MFI", prompt: "I get enough understandable input to meet useful words repeatedly.", options: frequencyOptions },
  { id: "mfo-1", strand: "MFO", prompt: "I speak to communicate ideas, stories, or needs—not only to repeat exercises.", options: frequencyOptions },
  { id: "mfo-2", strand: "MFO", prompt: "I write messages or short texts for a real or imagined reader.", options: frequencyOptions },
  { id: "mfo-3", strand: "MFO", prompt: "I find ways to express a meaning even when I do not know the perfect word.", options: frequencyOptions },
  { id: "lfl-1", strand: "LFL", prompt: "I deliberately study high-value vocabulary, grammar, pronunciation, or spelling.", options: frequencyOptions },
  { id: "lfl-2", strand: "LFL", prompt: "I use retrieval and spaced review rather than only rereading notes.", options: frequencyOptions },
  { id: "lfl-3", strand: "LFL", prompt: "My focused study supports language I am meeting or trying to use.", options: frequencyOptions },
  { id: "fd-1", strand: "FD", prompt: "I repeat easy listening, reading, speaking, or writing to become faster and smoother.", options: frequencyOptions },
  { id: "fd-2", strand: "FD", prompt: "During fluency practice, I use language I already know well.", options: frequencyOptions },
  { id: "fd-3", strand: "FD", prompt: "I sometimes add gentle time pressure or aim to do the same task more easily.", options: frequencyOptions },
];

export const strandRecommendations: Record<StrandId, string[]> = {
  MFI: ["Choose easy, compelling reading or listening and follow the message without stopping for every unknown word.", "Schedule short input sessions often enough to build real volume."],
  MFO: ["Retell something familiar, send a short message, or speak with a patient partner about a real topic.", "Prepare useful phrases, then use them to communicate new information."],
  LFL: ["Select a small number of high-value words or patterns from your real input and output.", "Use retrieval and spaced review, then notice or use each item in context."],
  FD: ["Repeat an easy task with familiar language and aim for greater ease, not new complexity.", "Try repeated reading, repeated listening, or a gentle 4/3/2 speaking sequence."],
};

export const sevenDayPlan = [
  "Day 1 — Listen to or read easy, interesting material for 20 minutes.",
  "Day 2 — Retell the main ideas aloud or in a short written message.",
  "Day 3 — Study 8–10 useful words or patterns from that material with retrieval practice.",
  "Day 4 — Return to the same material and notice what is now easier.",
  "Day 5 — Speak or write about the topic for a real purpose.",
  "Day 6 — Repeat an easy speaking, reading, or listening task for greater speed and ease.",
  "Day 7 — Review your week and schedule one activity from each strand for next week.",
];
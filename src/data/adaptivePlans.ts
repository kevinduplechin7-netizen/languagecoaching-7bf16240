import type { StrandId } from "./learnerCheckup";

/**
 * Adaptive seven-day plans built from the twenty activities on the Activities Index.
 *
 * The plan is generated from the learner's strand ranking. There are 4! = 24 possible
 * orderings of the four strands, so there are 24 distinct plans: the two weakest strands
 * receive most of the week, while the stronger strands are kept ticking over.
 *
 * The activities are drawn from Paul Nation's published work (see PLAN_SOURCES below).
 * The week itself is our arrangement, not a protocol published by Nation.
 */

export interface PlanActivity {
  /** Activity name exactly as it appears on the Activities Index. */
  name: string;
  /** Anchor id of the strand section on /activities. */
  section: "meaning-input" | "meaning-output" | "language-focused" | "fluency" | "general";
  /** What to actually do in that session. */
  task: string;
  minutes: string;
}

export interface PlanDay {
  day: number;
  strand: StrandId;
  activity: PlanActivity;
}

const activitiesByStrand: Record<StrandId, PlanActivity[]> = {
  MFI: [
    {
      name: "Extensive reading",
      section: "meaning-input",
      task: "Read easy, enjoyable material straight through without stopping for unknown words.",
      minutes: "20–30 minutes",
    },
    {
      name: "Reading while listening",
      section: "meaning-input",
      task: "Follow a text while listening to audio of the same material, staying with the message.",
      minutes: "15–20 minutes",
    },
    {
      name: "Narrow reading",
      section: "meaning-input",
      task: "Read or listen to two or three pieces on the same topic so the same words keep coming back.",
      minutes: "20 minutes",
    },
  ],
  MFO: [
    {
      name: "Prepared talks",
      section: "meaning-output",
      task: "Plan and deliver a short talk on something you actually did, saw, or think.",
      minutes: "10–15 minutes",
    },
    {
      name: "Role play",
      section: "meaning-output",
      task: "Act out a real situation you expect this month with a partner, focusing on getting the meaning across.",
      minutes: "15 minutes",
    },
    {
      name: "Read and write",
      section: "meaning-output",
      task: "Read something short, then write a reply, summary, or message a real person could read.",
      minutes: "15–20 minutes",
    },
  ],
  LFL: [
    {
      name: "Word cards",
      section: "general",
      task: "Take 8–10 useful words from this week's input, cover the answer, and recall each one from memory.",
      minutes: "10 minutes",
    },
    {
      name: "Intensive reading",
      section: "language-focused",
      task: "Work slowly through one short passage, noticing how words, endings, and patterns are used.",
      minutes: "15 minutes",
    },
    {
      name: "Issue logs",
      section: "general",
      task: "Write down the problems that kept coming up this week and what you will do about each one.",
      minutes: "10 minutes",
    },
    {
      name: "Transcription",
      section: "language-focused",
      task: "Write down exactly what a short clip says, then check it and note what you missed.",
      minutes: "15 minutes",
    },
    {
      name: "Memorized sentences or dialogues",
      section: "language-focused",
      task: "Learn a handful of high-value sentences by heart so they are ready when you need them.",
      minutes: "10 minutes",
    },
  ],
  FD: [
    {
      name: "Four–three–two activity",
      section: "fluency",
      task: "Tell the same familiar story three times: four minutes, then three, then two.",
      minutes: "10 minutes",
    },
    {
      name: "Speed reading",
      section: "fluency",
      task: "Read an easy passage against the clock, then read it again and beat your own time.",
      minutes: "10 minutes",
    },
    {
      name: "Repeated listening",
      section: "fluency",
      task: "Listen to the same easy clip several times until it feels effortless.",
      minutes: "10–15 minutes",
    },
    {
      name: "Ten-minute writing",
      section: "fluency",
      task: "Write without stopping for ten minutes on a familiar topic, using only language you already know.",
      minutes: "10 minutes",
    },
    {
      name: "Repeated reading",
      section: "fluency",
      task: "Reread a page you have already read and notice how much smoother it feels.",
      minutes: "10 minutes",
    },
  ],
};

/** Days given to each strand by rank: strongest, second, third, weakest. */
const daysByRank = [1, 1, 2, 3];

/**
 * Build the seven-day plan for one strand ranking (strongest first).
 * The order below keeps the weakest strand spread across the week
 * and never puts the same strand on two days in a row.
 */
export function buildAdaptivePlan(rankedStrongestFirst: StrandId[]): PlanDay[] {
  const [s1, s2, s3, s4] = rankedStrongestFirst;
  const sequence: StrandId[] = [s4, s3, s2, s4, s1, s3, s4];
  const used: Record<string, number> = {};

  return sequence.map((strand, i) => {
    const pool = activitiesByStrand[strand];
    const n = used[strand] ?? 0;
    used[strand] = n + 1;
    return { day: i + 1, strand, activity: pool[n % pool.length] };
  });
}

/** Human-readable summary of how the week is weighted. */
export function planEmphasis(rankedStrongestFirst: StrandId[]): Record<StrandId, number> {
  const emphasis = {} as Record<StrandId, number>;
  rankedStrongestFirst.forEach((strand, rank) => {
    emphasis[strand] = daysByRank[rank];
  });
  return emphasis;
}

/** A stable key for the ranking, e.g. "MFI>FD>MFO>LFL". One of 24. */
export function planKey(rankedStrongestFirst: StrandId[]): string {
  return rankedStrongestFirst.join(">");
}

/** All 24 possible strand rankings (4! permutations). */
export const allPlanKeys: string[] = (function permutations(items: StrandId[]): StrandId[][] {
  if (items.length <= 1) return [items];
  return items.flatMap((item, i) =>
    permutations([...items.slice(0, i), ...items.slice(i + 1)]).map((rest) => [item, ...rest]),
  );
})(["MFI", "MFO", "LFL", "FD"]).map(planKey);

export const PLAN_SOURCES = [
  {
    label: "Nation, P. (2007). The four strands. Innovation in Language Learning and Teaching, 1(1), 2–13.",
    url: "https://doi.org/10.2167/illt039.0",
  },
  {
    label: "Nation, I. S. P., & Newton, J. (2009). Teaching ESL/EFL Listening and Speaking. Routledge. (4/3/2, speed reading, linked skills)",
    url: "https://www.routledge.com/Teaching-ESLEFL-Listening-and-Speaking/Nation-Newton/p/book/9780415989701",
  },
  {
    label: "Nation, I. S. P. (2013). Learning Vocabulary in Another Language (2nd ed.). Cambridge University Press. (word cards, deliberate learning)",
    url: "https://www.cambridge.org/9781107623026",
  },
];

import type { Json } from "@/integrations/supabase/types";
import { supabase } from "@/integrations/supabase/client";

export type FunnelEventName =
  | "newsletter_offer_viewed"
  | "newsletter_signup_clicked"
  | "checkup_landing_viewed"
  | "checkup_started"
  | "checkup_question_answered"
  | "checkup_completed"
  | "article_viewed"
  | "checkup_coaching_clicked";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;

function safeStorageGet(key: string) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Analytics must never interrupt the visitor's task.
  }
}

export function captureUtmParameters() {
  const params = new URLSearchParams(window.location.search);
  UTM_KEYS.forEach((key) => {
    const value = params.get(key)?.slice(0, 150);
    if (value) safeStorageSet(`funnel_${key}`, value);
  });
}

export function getUtmParameters() {
  const params = new URLSearchParams(window.location.search);
  const read = (key: (typeof UTM_KEYS)[number]) =>
    (params.get(key) || safeStorageGet(`funnel_${key}`) || "").slice(0, 150) || null;
  return {
    source: read("utm_source"),
    medium: read("utm_medium"),
    campaign: read("utm_campaign"),
    content: read("utm_content"),
  };
}

function getAnonId() {
  const existing = safeStorageGet("funnel_anon_id");
  if (existing) return existing;
  const next = crypto.randomUUID();
  safeStorageSet("funnel_anon_id", next);
  return next;
}

export async function trackFunnelEvent(eventName: FunnelEventName, props: Record<string, Json> = {}) {
  captureUtmParameters();
  const utm = getUtmParameters();
  await supabase.from("funnel_events").insert({
    event_name: eventName,
    path: window.location.pathname.slice(0, 500),
    anon_id: getAnonId(),
    source: utm.source,
    medium: utm.medium,
    campaign: utm.campaign,
    content: utm.content,
    props,
  });
}
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read their own roles"
ON public.user_roles FOR SELECT TO authenticated
USING (user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL CHECK (char_length(title) BETWEEN 1 AND 180),
  slug TEXT NOT NULL UNIQUE CHECK (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  excerpt TEXT NOT NULL CHECK (char_length(excerpt) BETWEEN 1 AND 500),
  content TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN (
    'Four Strands',
    'Language-Learning Plans',
    'Meaningful Input',
    'Speaking and Writing',
    'Fluency Development',
    'Sustainable Multilingualism',
    'Language Helpers',
    'Coaching and Program Support',
    'Sentence Paths'
  )),
  featured_image_url TEXT,
  author_name TEXT NOT NULL DEFAULT 'Kevin Duplechin',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  seo_title TEXT,
  seo_description TEXT,
  canonical_url TEXT,
  reading_time_minutes INTEGER CHECK (reading_time_minutes IS NULL OR reading_time_minutes > 0)
);
GRANT SELECT ON public.blog_posts TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.blog_posts TO authenticated;
GRANT ALL ON public.blog_posts TO service_role;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published articles are public"
ON public.blog_posts FOR SELECT TO anon, authenticated
USING (status = 'published' AND published_at IS NOT NULL AND published_at <= now());
CREATE POLICY "Administrators can read all articles"
ON public.blog_posts FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Administrators can create articles"
ON public.blog_posts FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Administrators can update articles"
ON public.blog_posts FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Administrators can delete articles"
ON public.blog_posts FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.funnel_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_name TEXT NOT NULL CHECK (event_name IN (
    'checkup_landing_viewed',
    'checkup_started',
    'checkup_question_answered',
    'checkup_completed',
    'checkup_email_form_viewed',
    'newsletter_signup_started',
    'newsletter_signup_completed',
    'newsletter_signup_failed',
    'full_plan_viewed',
    'article_viewed',
    'article_newsletter_clicked',
    'checkup_coaching_clicked',
    'coaching_page_viewed'
  )),
  path TEXT,
  anon_id TEXT CHECK (anon_id IS NULL OR char_length(anon_id) <= 100),
  source TEXT CHECK (source IS NULL OR char_length(source) <= 100),
  medium TEXT CHECK (medium IS NULL OR char_length(medium) <= 100),
  campaign TEXT CHECK (campaign IS NULL OR char_length(campaign) <= 150),
  content TEXT CHECK (content IS NULL OR char_length(content) <= 150),
  props JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.funnel_events TO anon, authenticated;
GRANT SELECT ON public.funnel_events TO authenticated;
GRANT ALL ON public.funnel_events TO service_role;
ALTER TABLE public.funnel_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors can record funnel events"
ON public.funnel_events FOR INSERT TO anon, authenticated
WITH CHECK (
  jsonb_typeof(props) = 'object'
  AND NOT (props ?| ARRAY['email', 'name', 'first_name', 'current_language', 'main_goal'])
);
CREATE POLICY "Administrators can view funnel analytics"
ON public.funnel_events FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER blog_posts_set_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX blog_posts_slug_idx ON public.blog_posts (slug);
CREATE INDEX blog_posts_status_idx ON public.blog_posts (status);
CREATE INDEX blog_posts_published_at_idx ON public.blog_posts (published_at DESC);
CREATE INDEX funnel_events_event_name_idx ON public.funnel_events (event_name);
CREATE INDEX funnel_events_created_at_idx ON public.funnel_events (created_at DESC);
CREATE INDEX funnel_events_campaign_idx ON public.funnel_events (campaign);
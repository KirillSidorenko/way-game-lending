export type Variant = "management" | "personal";

export interface HeroContent {
  heading: string;
  subtitle: string;
  ctaText: string;
  benefits: BenefitCard[];
}

export interface BenefitCard {
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface TeamContent {
  heading: string;
  subtitle: string;
  members: TeamMember[];
}

export interface DiagnosticContent {
  heading: string;
  subtitle: string;
  description: string;
  points: string[];
}

export interface GrowthContent {
  heading: string;
  subtitle: string;
  items: { title: string; description: string }[];
}

export interface ResultItem {
  icon: string;
  title: string;
  description: string;
}

export interface ResultsContent {
  heading: string;
  subtitle: string;
  items: ResultItem[];
}

export interface ToolItem {
  icon: string;
  title: string;
  description: string;
}

export interface ToolsContent {
  heading: string;
  subtitle: string;
  items: ToolItem[];
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

export interface PricingContent {
  heading: string;
  subtitle: string;
  tiers: PricingTier[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image?: string;
}

export interface TestimonialsContent {
  heading: string;
  items: Testimonial[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  heading: string;
  items: FAQItem[];
}

export interface CTAContent {
  heading: string;
  subtitle: string;
  ctaText: string;
}

export interface VariantContent {
  hero: HeroContent;
  team: TeamContent;
  diagnostic: DiagnosticContent;
  growth: GrowthContent;
  results: ResultsContent;
  tools: ToolsContent;
  pricing: PricingContent;
  testimonials: TestimonialsContent;
  faq: FAQContent;
  cta: CTAContent;
}

export interface NavLink {
  label: string;
  href: string;
}

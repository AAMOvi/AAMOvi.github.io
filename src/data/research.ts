export type ResearchProject = {
  slug: string;
  title: string;
  shortTitle: string;
  status: string;
  summary: string;
  themes: readonly string[];
  supervisor?: readonly string[];
  featured?: boolean;
};

export const research: readonly ResearchProject[] = [
  {
    slug: 'banglanewsvlm',
    shortTitle: 'BanglaNewsVLM',
    title: 'Do Multilingual VLMs Really Understand Bangla? Introducing BanglaNewsVLM for Cross-Lingual Evaluation and Adaptation',
    status: 'Current undergraduate thesis',
    summary:
      'A study of Bangla multimodal understanding that compares native-Bangla and translated-English evaluation, then examines targeted adaptation through visually grounded supervision and generalization to underrepresented language-specific knowledge.',
    themes: ['Cross-lingual evaluation', 'Bangla multimodal understanding', 'Targeted adaptation', 'Visual grounding'],
    supervisor: ['Md. Nasif Osman Khansur', 'Assistant Professor, Department of CSE, RUET'],
    featured: true,
  },
  {
    slug: 'bd-hazardvlm',
    shortTitle: 'BD-HazardVLM',
    title: 'BD-HazardVLM: Probing Vision-Language Models for Latent Defensive-Driving Hazards in Bangladesh Road Scenes',
    status: 'Accepted Poster · ECCV 2026 Workshop on Safe and Defensive Autonomous Driving',
    summary:
      'A 500-image Bangladesh road-scene benchmark for latent defensive-driving hazard reasoning, covering visible evidence, hazard category, risk timing, severity, defensive actions, and hallucination or bias traps.',
    themes: ['Vision-language models', 'Road-scene reasoning', 'Safety evaluation', 'Bangladesh'],
    featured: true,
  },
  {
    slug: 'tiny-vlm-relational-reasoning',
    shortTitle: 'Tiny VLM Relational Reasoning',
    title: 'Relational Reasoning in Sub-Billion-Parameter Vision-Language Models',
    status: 'Independent Research · Ongoing',
    summary:
      'Investigates whether compact VLMs learn reusable visual relations or rely on linguistic and multimodal shortcuts, using structured relational supervision and carefully matched controls.',
    themes: ['Qwen2.5-VL-7B-Instruct teacher', 'SmolVLM-500M student', 'Counterfactual pairs', 'Visual-dependence controls'],
    featured: true,
  },
  {
    slug: 'spec2inspect-lite',
    shortTitle: 'Spec2Inspect-Lite',
    title: 'Spec2Inspect-Lite: Evidence-Grounded Industrial Inspection',
    status: 'Independent Research · Ongoing',
    summary:
      'Studies industrial inspection on MVTec AD through localized anomaly evidence, explicit measurements, specification-grounded decisions, and structured evidence/component fusion.',
    themes: ['Localized evidence', 'Specification grounding', 'Oracle-evidence controls', 'Counterfactual evaluation'],
    featured: true,
  },
] as const;

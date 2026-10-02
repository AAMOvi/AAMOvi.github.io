export type ResearchStage = 'completed' | 'ongoing' | 'revision';

export type ResearchLink = {
  label: string;
  url: string;
};

export type ResearchProject = {
  slug: string;
  shortTitle: string;
  title: string;
  stage: ResearchStage;
  status: string;
  context: string;
  venueName?: string;
  venueContext?: string;
  archivalStatus?: string;
  question: string;
  summary: string;
  finding?: string;
  contribution?: string;
  detailPath?: string;
  supervisor?: readonly string[];
  themes: readonly string[];
  links?: readonly ResearchLink[];
};

export const research: readonly ResearchProject[] = [
  {
    slug: 'bd-hazardvlm',
    shortTitle: 'BD-HazardVLM',
    title: 'BD-HazardVLM: Probing Vision-Language Models for Latent Defensive-Driving Hazards in Bangladesh Road Scenes',
    stage: 'completed',
    status: 'Accepted workshop paper and poster',
    context: 'SDAD Workshop at ECCV 2026 · Non-archival',
    venueName: 'SDAD Workshop',
    venueContext: 'ECCV 2026',
    archivalStatus: 'Non-archival',
    question: 'Do strong vision-language models make reliable fine-grained defensive-driving judgments in Bangladesh road scenes?',
    summary: 'A diagnostic evaluation of three open VLMs on 500 existing road-scene images from RSUD20K and TFP-BD.',
    finding: 'Hazard-presence accuracy of 88.0–89.2% approximately matched the 89.0% majority baseline, while category accuracy stayed below 40%, timing accuracy was 1.6–12.4%, and exact defensive-action matching stayed below 2%.',
    contribution: 'Led the study design.',
    detailPath: '/research/bd-hazardvlm/',
    themes: ['Defensive-driving reasoning', 'Diagnostic evaluation', 'Bangladesh road scenes'],
    links: [
      { label: 'Read paper', url: 'https://sdad.cc/papers/pdf/16_BD_HazardVLM_Probing_Vision.pdf' },
      { label: 'Official listing', url: 'https://sdad.cc/papers.html' },
    ],
  },
  {
    slug: 'dinov2-feature-distillation',
    shortTitle: 'DINOv2 Feature Distillation',
    title: 'DINOv2 Feature Distillation for Recurrent Local-Update Image Classifiers',
    stage: 'completed',
    status: 'Accepted extended abstract and poster',
    context: 'LIGHT Workshop at NeurIPS 2026 · Non-archival',
    venueName: 'LIGHT Workshop',
    venueContext: 'NeurIPS 2026',
    archivalStatus: 'Non-archival',
    question: 'Can frozen DINOv2 representations improve a recurrent local-update image classifier?',
    summary: 'A controlled three-seed CIFAR-100 study comparing feature distillation for NCA-Lite and a closely parameter-count-matched feed-forward CNN.',
    finding: 'Feature distillation improved NCA-Lite from 51.71 ± 0.19% to 54.77 ± 0.62%, but the feed-forward CNN also improved and remained more accurate and substantially cheaper in this comparison.',
    contribution: 'Sole-author study.',
    detailPath: '/research/dinov2-feature-distillation/',
    themes: ['Knowledge distillation', 'Recurrent local updates', 'Controlled comparison'],
    links: [
      { label: 'OpenReview record', url: 'https://openreview.net/forum?id=TeTIxX7sLm' },
      { label: 'Read PDF', url: 'https://openreview.net/pdf?id=TeTIxX7sLm' },
    ],
  },
  {
    slug: 'spec2inspect-lite',
    shortTitle: 'Spec2Inspect-Lite',
    title: 'Spec2Inspect-Lite: Evidence-Grounded Industrial Inspection',
    stage: 'ongoing',
    status: 'Core experiments complete · Manuscript in preparation',
    context: 'Independent research · Not submitted or peer reviewed',
    question: 'Can explicit evidence, measurements, deterministic specification execution, and abstention reduce false approvals compared with a direct VLM?',
    summary: 'An MVTec AD inspection pipeline that connects localized anomaly evidence to normalized measurements and deterministic PASS, FAIL, or ABSTAIN decisions.',
    finding: 'In a format-controlled 588-pair comparison, the structured pipeline reduced false approvals from 94.44% to 7.64%, while coverage fell from 99.32% to 74.66%; overall accuracy superiority was not established.',
    detailPath: '/research/spec2inspect-lite/',
    themes: ['Specification grounding', 'Industrial inspection', 'Selective prediction'],
  },
  {
    slug: 'banglanewsground',
    shortTitle: 'BanglaNewsGround',
    title: 'BanglaNewsGround: Caption Supervision for Bengali Image-Text Grounding',
    stage: 'ongoing',
    status: 'Undergraduate thesis · Experiments underway',
    context: 'September 2026–present',
    question: 'How does caption supervision shape Bengali image-text grounding?',
    summary: 'Compares original journalist captions, text-only rewrites, visually grounded recaptions, and combined supervision using retrieval, image-caption matching, and hard semantic and entity negatives.',
    supervisor: ['Md. Nasif Osman Khansur', 'Assistant Professor, Department of CSE, RUET'],
    themes: ['Bengali image-text grounding', 'Caption supervision', 'Hard negatives'],
  },
  {
    slug: 'tiny-vlm-relational-reasoning',
    shortTitle: 'Tiny VLM Relational Reasoning',
    title: 'Relational Reasoning in Sub-Billion-Parameter Vision-Language Models',
    stage: 'ongoing',
    status: 'Independent research · Experiments underway',
    context: '2026–present',
    question: 'Do compact VLMs acquire reusable visual relations or exploit language and multimodal shortcuts?',
    summary: 'Tests question-conditioned structured distillation against answer-only, unstructured-rationale, and corrupted-relation controls, with counterfactual pairs and visual-dependence checks.',
    themes: ['Structured distillation', 'Counterfactual pairs', 'Visual-dependence controls'],
  },
  {
    slug: 'visual-reference-tables',
    shortTitle: 'Visual Reference Tables',
    title: 'Visual Reference Tables Recover Signal That Tissue Captions Alone Miss',
    stage: 'revision',
    status: 'Collaborative research · Manuscript in revision',
    context: 'Earlier workshop submission rejected · Not currently under review',
    question: 'Can visual reference tables provide useful information beyond tissue captions?',
    summary: 'Ongoing collaborative work with Ushashi Bhattacharjee, Koushik Howlader, Sayantan Chakraborty, and Tirtho Roy. No final result is presented here.',
    themes: ['Visual references', 'Multimodal evidence', 'Manuscript revision'],
  },
] as const;

export const completedResearch = research.filter((project) => project.stage === 'completed');
export const ongoingResearch = research.filter((project) => project.stage === 'ongoing');
export const revisionResearch = research.filter((project) => project.stage === 'revision');

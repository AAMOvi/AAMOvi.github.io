import type { ResearchLink } from './research';

export type Publication = {
  title: string;
  authors: readonly string[];
  venueName: string;
  venueContext?: string;
  status: string;
  contributionType: string;
  year: number;
  links?: readonly ResearchLink[];
};

export const publications: readonly Publication[] = [
  {
    title: 'DINOv2 Feature Distillation for Recurrent Local-Update Image Classifiers',
    authors: ['Abdullah Al Maruf'],
    venueName: 'LIGHT Workshop',
    venueContext: 'NeurIPS 2026',
    status: 'Accepted extended abstract and poster',
    contributionType: 'Peer-reviewed · Non-archival workshop contribution',
    year: 2026,
    links: [
      { label: 'OpenReview', url: 'https://openreview.net/forum?id=TeTIxX7sLm' },
      { label: 'PDF', url: 'https://openreview.net/pdf?id=TeTIxX7sLm' },
    ],
  },
  {
    title: 'BD-HazardVLM: Probing Vision-Language Models for Latent Defensive-Driving Hazards in Bangladesh Road Scenes',
    authors: ['Abdullah Al Maruf', 'Md. Sajedul Islam', 'Tanmoy Mridha', 'Irfan Hossain Bhuiyan'],
    venueName: 'Safe and Defensive Autonomous Driving (SDAD) Workshop',
    venueContext: 'ECCV 2026',
    status: 'Accepted workshop paper and poster',
    contributionType: 'Peer-reviewed · Non-archival workshop contribution',
    year: 2026,
    links: [
      { label: 'Paper', url: 'https://sdad.cc/papers/pdf/16_BD_HazardVLM_Probing_Vision.pdf' },
      { label: 'Official record', url: 'https://sdad.cc/papers.html' },
    ],
  },
  {
    title: 'Single-Pass Uncertainty for Selective Polyp Segmentation under External Dataset Variation',
    authors: ['Abdullah Al Maruf', 'Tirtho Roy'],
    venueName: 'ML4H 2026 Symposium',
    status: 'Manuscript under review',
    contributionType: 'Submitted manuscript · No public artifact available',
    year: 2026,
  },
] as const;

export const acceptedPublications = publications.filter((publication) => publication.status.startsWith('Accepted'));
export const underReviewPublications = publications.filter((publication) => publication.status.includes('under review'));

export type Publication = {
  title: string;
  authors: readonly string[];
  venue: string;
  status: 'Accepted Poster' | 'Under Review';
  year: number;
};

export const publications: readonly Publication[] = [
  {
    title: 'BD-HazardVLM: Probing Vision-Language Models for Latent Defensive-Driving Hazards in Bangladesh Road Scenes',
    authors: ['Abdullah Al Maruf', 'Md. Sajedul Islam', 'Tanmoy Mridha', 'Irfan Hossain Bhuiyan'],
    venue: 'ECCV 2026 Workshop on Safe and Defensive Autonomous Driving (SDAD)',
    status: 'Accepted Poster',
    year: 2026,
  },
  {
    title: 'DINOv2 Feature Distillation for Recurrent Local-Update Image Classifiers',
    authors: ['Abdullah Al Maruf'],
    venue: 'LIGHT Workshop at NeurIPS 2026',
    status: 'Under Review',
    year: 2026,
  },
  {
    title: 'Visual Reference Tables Recover Signal That Tissue Captions Alone Miss',
    authors: ['Ushashi Bhattacharjee', 'Abdullah Al Maruf', 'Koushik Howlader', 'Sayantan Chakraborty', 'Tirtho Roy'],
    venue: 'NeurIPS 2026 Workshop',
    status: 'Under Review',
    year: 2026,
  },
  {
    title: 'Single-Pass Uncertainty for Selective Polyp Segmentation under External Dataset Variation',
    authors: ['Abdullah Al Maruf', 'Tirtho Roy'],
    venue: 'ML4H 2026 Symposium',
    status: 'Under Review',
    year: 2026,
  },
] as const;

export const profile = {
  name: 'Abdullah Al Maruf',
  title: 'CSE Undergraduate',
  institution: 'Rajshahi University of Engineering & Technology',
  institutionShort: 'RUET',
  department: 'Department of Computer Science & Engineering',
  degree: 'B.Sc. in Computer Science & Engineering',
  graduation: 'April 2027',
  cgpa: '3.55 / 4.00 after six semesters',
  location: 'Bogura, Bangladesh',
  email: 'abdullahovi.official@gmail.com',
  github: 'https://github.com/AAMOvi',
  linkedin: 'https://www.linkedin.com/in/aamozz',
  researchIdentity: 'Visual grounding, multimodal evaluation, and efficient visual representations',
  summary:
    'I study visual grounding in vision-language models and representation learning for compact vision systems. My work examines how supervision shapes the use of visual evidence in multimodal reasoning. I use evaluation to identify failures that aggregate performance can hide and examine model behavior as data conditions change. I am also interested in knowledge distillation, particularly the tradeoffs between predictive accuracy and computational cost.',
  interests: [
    'Visual grounding in vision-language models',
    'Multimodal evaluation and robustness',
    'Efficient visual representations',
    'Knowledge distillation',
  ],
  skills: {
    research: ['Visual grounding', 'Multimodal evaluation and robustness', 'Efficient visual representations', 'Knowledge distillation'],
    technical: ['Python', 'C++', 'PyTorch', 'Hugging Face Transformers', 'PEFT/LoRA', 'scikit-learn', 'Git', 'Docker', 'Kaggle', 'FastAPI', 'REST APIs', 'MySQL', 'PostgreSQL', 'SQLite'],
  },
  honors: [
    'Champion, University Innovation Hub Program, IC-6 cohort',
    'Champion, Hult Prize at RUET, 2025; represented RUET at the national competition',
    '6th place, Inter-University Capture the Flag Competition, BUET CSE FEST, 2024',
    'Top-25 finalist, BDApps Innovation Challenge, among more than 1,500 teams nationwide',
  ],
  leadership: ['GreenLoop — Founder and CTO; startup producing feed using black soldier fly larvae'],
  engineering: {
    title: 'Khoj (Lightning Search)',
    summary: 'Made a fuzzy retrieval system over 10,000+ items with n-gram indexing, candidate filtering, and RapidFuzz ranking via FastAPI.',
  },
} as const;

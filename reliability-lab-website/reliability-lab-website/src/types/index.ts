export type AccentColor = 'blue' | 'amber';

export interface ServiceSpec {
  label: string;
  value: string;
  unit: string;
  suffix: string;
}

export interface Service {
  id: number;
  slug: string;
  code: string;
  title: string;
  category: string;
  categoryShort: string;
  accent: AccentColor;
  icon: string;
  photo: string;
  specs: ServiceSpec[];
  description: string;
  useCases: string[];
  photoAlt: string;
}

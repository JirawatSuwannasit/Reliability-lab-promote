export type AccentColor = 'blue' | 'amber';

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface Service {
  id: number;
  slug: string;
  title: string;
  category: string;
  accent: AccentColor;
  icon: string;
  specs: ServiceSpec[];
  description: string;
  useCases: string[];
  photoAlt: string;
}

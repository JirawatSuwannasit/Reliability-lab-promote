import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    slug: 'temperature-chamber',
    title: 'Temperature Chamber',
    category: 'Environment',
    accent: 'blue',
    icon: 'thermometer',
    specs: [
      { label: 'Range A', value: '+200°C to -20°C' },
      { label: 'Range B', value: '+300°C to -20°C' },
    ],
    description:
      'High and low temperature exposure testing to validate component performance across operating ranges.',
    useCases: [
      'Long-term thermal aging',
      'High-temperature electronics validation',
      'Cold-start reliability',
    ],
    photoAlt: 'Temperature chamber testing equipment',
  },
  {
    id: 2,
    slug: 'temp-humidity-chamber',
    title: 'Temperature & Humidity Chamber',
    category: 'Environment',
    accent: 'blue',
    icon: 'droplets',
    specs: [
      { label: 'Temp Range A', value: '+150°C to -50°C' },
      { label: 'Temp Range B', value: '+100°C to -20°C' },
      { label: 'Humidity', value: '20–98% RH' },
    ],
    description:
      'Combined temperature and humidity stress to evaluate moisture ingress, corrosion, and insulation degradation.',
    useCases: [
      'Humidity-induced failure testing',
      'Tropical climate simulation',
      'Condensation resistance validation',
    ],
    photoAlt: 'Temperature and humidity chamber',
  },
  {
    id: 3,
    slug: 'thermal-shock-chamber',
    title: 'Thermal Shock Chamber',
    category: 'Environment',
    accent: 'blue',
    icon: 'zap',
    specs: [
      { label: 'Range', value: '+200°C to -70°C' },
      { label: 'Mode', value: 'Rapid zone transition' },
    ],
    description:
      'Rapid temperature cycling between extreme hot and cold zones to expose thermal fatigue and material expansion stress.',
    useCases: [
      'Solder joint reliability',
      'Thermal fatigue lifetime estimation',
      'Material delamination detection',
    ],
    photoAlt: 'Thermal shock chamber equipment',
  },
  {
    id: 4,
    slug: 'rapid-temp-change',
    title: 'Rapid Temperature Change',
    category: 'Environment',
    accent: 'blue',
    icon: 'arrow-up-down',
    specs: [
      { label: 'Range', value: '+180°C to -70°C' },
    ],
    description:
      'Controlled-rate temperature transitions for evaluating component response under dynamic thermal gradients.',
    useCases: [
      'Thermal ramp-rate sensitivity',
      'Component activation/deactivation cycle testing',
      'PCB and solder integrity under thermal gradient',
    ],
    photoAlt: 'Rapid temperature change chamber',
  },
  {
    id: 5,
    slug: 'vibration-tensile',
    title: 'Vibration + Tensile/Compression',
    category: 'Mechanical Stress',
    accent: 'amber',
    icon: 'activity',
    specs: [
      { label: 'Vibration', value: '5 Hz – 3 kHz, 50 G' },
      { label: 'Force', value: 'up to 20 kN' },
    ],
    description:
      'Mechanical stress testing covering vibration spectrum and static force loading to validate physical durability.',
    useCases: [
      'Automotive vibration profile compliance',
      'Mounting & housing strength validation',
      'Connector pull-out and crush resistance',
    ],
    photoAlt: 'Vibration and tensile testing machine',
  },
];

import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    slug: 'temperature-chamber',
    code: 'TC-01',
    title: 'Temperature Chamber',
    category: 'Environment',
    categoryShort: 'ENV',
    accent: 'blue',
    icon: 'thermometer',
    photo: '/machine-photos/photo-high-temp.png',
    specs: [
      { label: 'Range A', value: '+200', unit: '°C', suffix: '→ -20 °C' },
      { label: 'Range B', value: '+300', unit: '°C', suffix: '→ -20 °C' },
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
    code: 'TH-02',
    title: 'Temperature & Humidity Chamber',
    category: 'Environment',
    categoryShort: 'ENV',
    accent: 'blue',
    icon: 'droplets',
    photo: '/machine-photos/photo-temp-humidity.png',
    specs: [
      { label: 'Temp A', value: '+150', unit: '°C', suffix: '→ -50 °C' },
      { label: 'Temp B', value: '+100', unit: '°C', suffix: '→ -20 °C' },
      { label: 'Humidity', value: '20', unit: '', suffix: '→ 98 %RH' },
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
    code: 'TS-03',
    title: 'Thermal Shock Chamber',
    category: 'Environment',
    categoryShort: 'ENV',
    accent: 'blue',
    icon: 'zap',
    photo: '/machine-photos/photo-thermal-shock.png',
    specs: [
      { label: 'Range', value: '+200', unit: '°C', suffix: '→ -70 °C' },
      { label: 'Highlight', value: '', unit: '', suffix: 'Rapid hot ⇌ cold transition' },
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
    code: 'RT-04',
    title: 'Rapid Temperature Change',
    category: 'Environment',
    categoryShort: 'ENV',
    accent: 'blue',
    icon: 'arrow-up-down',
    photo: '/machine-photos/photo-rapid-temp.png',
    specs: [
      { label: 'Range', value: '+180', unit: '°C', suffix: '→ -70 °C' },
      { label: 'Profile', value: '', unit: '', suffix: 'Programmable ramp rate' },
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
    slug: 'vibration-test',
    code: 'VT-05',
    title: 'Vibration Test',
    category: 'Mechanical Stress',
    categoryShort: 'MECH',
    accent: 'amber',
    icon: 'activity',
    photo: '/machine-photos/photo-vibration.png',
    specs: [
      { label: 'Vibration', value: '5', unit: 'Hz', suffix: '→ 3 kHz' },
      { label: 'Acceleration', value: '50', unit: 'G', suffix: '' },
    ],
    description:
      'Full-spectrum vibration testing to validate mechanical integrity under automotive vibration profiles.',
    useCases: [
      'Automotive vibration profile compliance',
      'Resonance frequency identification',
      'Fatigue life under vibration loads',
    ],
    photoAlt: 'Vibration test machine',
  },
  {
    id: 6,
    slug: 'tensile-compression',
    code: 'VT-06',
    title: 'Tensile / Compression',
    category: 'Mechanical Stress',
    categoryShort: 'MECH',
    accent: 'amber',
    icon: 'move-vertical',
    photo: '/machine-photos/photo-tensile.png',
    specs: [
      { label: 'Force (Tensile / Compression)', value: '20', unit: 'kN', suffix: '' },
    ],
    description:
      'Static force loading to validate physical durability of connectors, housings, and mechanical joints.',
    useCases: [
      'Connector pull-out and crush resistance',
      'Mounting & housing strength validation',
      'Mechanical joint integrity testing',
    ],
    photoAlt: 'Tensile and compression testing machine',
  },
];

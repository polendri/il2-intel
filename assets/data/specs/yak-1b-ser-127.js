import Q from 'js-quantities';

export default {
  id: 'yak-1b-ser-127',
  type: 'Yak-1b',
  variant: 'Yak-1b series 127',
  combatDebut: new Date(1942, 3),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('132 km/h'), Q('145 km/h')],
      flight: [Q('153 km/h'), Q('169 km/h')],
    },
    diveSpeedLimit: Q('720 km/h'),
    maxLoadFactor: Q('10.3 gee'),
    stallAngles: {
      landing: Q('15.6 deg'),
      flight: Q('18 deg'),
    },
    takeoffSpeedRange: [Q('160 km/h'), Q('190 km/h')],
    glideslopeSpeedRange: [Q('195 km/h'), Q('205 km/h')],
    landingSpeedRange: [Q('135 km/h'), Q('145 km/h')],
    landingAngle: Q('12 deg'),
    length: Q('8.5 m'),
    wingspan: Q('10 m'),
    wingSurface: Q('17.15 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Nominal, 2550 RPM',
        speed: Q('530 km/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Nominal, 2700 RPM',
        speed: Q('567 km/h'),
      },
      {
        altitude: Q('4500 m'),
        engineMode: 'Nominal, 2700 RPM',
        speed: Q('600 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Nominal, 2700 RPM',
          speed: Q('270 km/h'),
          rate: Q('17.0 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Nominal, 2700 RPM',
          speed: Q('270 km/h'),
          rate: Q('15.0 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Nominal, 2700 RPM',
          speed: Q('270 km/h'),
          rate: Q('9.5 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Nominal, 2700 RPM',
          speed: Q('270 km/h'),
          time: Q('19.0 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Nominal, 2700 RPM',
          speed: Q('270 km/h'),
          time: Q('24.1 s'),
        },
      ],
    },
    serviceCeiling: Q('10600 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('2.0 h'),
      },
    ],
  },
  engine: {
    model: 'M-105PF',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Nominal, 2550 RPM',
        power: Q('1240 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Nominal, 2700 RPM',
        power: Q('1210 hp'),
      },
      {
        altitude: Q('800 m'),
        mode: 'Nominal, 2700 RPM',
        power: Q('1260 hp'),
      },
      {
        altitude: Q('2700 m'),
        mode: 'Nominal, 2700 RPM',
        power: Q('1200 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2550 rpm'),
        manifoldPressure: Q('1050 mmHg'),
      },
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2700 rpm'),
        manifoldPressure: Q('1050 mmHg'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('90 degC'), Q('100 degC')],
      },
      {
        name: 'Water',
        range: [Q('70 degC'), Q('85 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('115 degC'),
      },
      {
        name: 'Water',
        value: Q('100 degC'),
      },
    ],
    superchargerGearShiftAltitude: Q('2300 m'),
  },
  load: {
    emptyWeight: Q('2322 kg'),
    minimumWeight: Q('2543 kg'),
    standardWeight: Q('2887 kg'),
    maxTakeoffWeight: Q('3117 kg'),
    fuelLoad: [Q('304 kg'), Q('408 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 1,
          name: 'SsVAK',
          type: '20mm gun',
          count: 140,
          details: 'nose-mounted',
        },
        {
          qty: 1,
          name: 'UB',
          type: '12.7mm machine gun',
          count: 220,
          details: 'synchronized',
        },
      ],
      modifications: [],
    },
    defensive: [],
    bombs: [
      {
        qty: 2,
        name: 'FAB-50sv',
        type: '50kg general purpose bomb',
        details: null,
      },
      {
        qty: 2,
        name: 'FAB-100M',
        type: '104kg general purpose bomb',
        details: null,
      },
    ],
    rockets: [],
  },
  features: [
    {
      feature: 'Supercharger',
      details: ['Manual control', 'Two-stage (shift at 2300 m)'],
    },
    {
      feature: 'Mixture',
      details: ['Manual control'],
    },
    {
      feature: 'Governor',
      details: ['Automatically controls prop pitch to maintain required RPM'],
    },
    {
      feature: 'Oil & water radiator shutters',
      details: ['Manual control'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch'],
    },
    {
      feature: 'Flaps',
      details: ['Can only extend fully (no gradual extension)', 'At ≥ 220 km/h, airflow may press the flaps upwards'],
    },
    {
      feature: 'Tail wheel',
      details: ['Has a lock which disengages when rudder pedals are deflected ≥ 75%'],
    },
    {
      feature: 'Wheel brakes',
      details: ['Differential brakes with shared control lever', 'Differential is applied via rudder pedals'],
    },
    {
      feature: 'Fuel gauges',
      details: ['Located on left/right wings, outside the cokcpit', 'Show only the last 80 L of fuel'],
    },
    {
      feature: 'Canopy',
      details: ['Impossible to open/close at high speed', 'No emergency release'],
    },
    {
      feature: 'Salvo controller',
      details: ['Bomb modes: 2'],
    },
  ],
  procedures: {
    engineStart: [],
    takeoff: [],
    landing: [],
  },
};

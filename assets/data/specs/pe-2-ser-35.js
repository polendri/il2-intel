import Q from 'js-quantities';

export default {
  id: 'pe-2-ser-35',
  type: 'Pe-2',
  variant: 'Pe-2 series 35',
  combatDebut: new Date(1941, 7),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('148 km/h'), Q('169 km/h')],
      flight: [Q('175 km/h'), Q('200 km/h')],
    },
    diveSpeedLimit: Q('790 km/h'),
    maxLoadFactor: Q('11 gee'),
    stallAngles: {
      landing: Q('9.8 deg'),
      flight: Q('13.9 deg'),
    },
    takeoffSpeedRange: [Q('160 km/h'), Q('200 km/h')],
    glideslopeSpeedRange: [Q('220 km/h'), Q('240 km/h')],
    landingSpeedRange: [Q('155 km/h'), Q('165 km/h')],
    landingAngle: Q('12.5 deg'),
    length: Q('12.69 m'),
    wingspan: Q('17.12 m'),
    wingSurface: Q('40.8 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Nominal',
        speed: Q('434 km/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Nominal',
        speed: Q('476 km/h'),
      },
      {
        altitude: Q('5000 m'),
        engineMode: 'Nominal',
        speed: Q('521 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Nominal',
          speed: Q('270 km/h'),
          rate: Q('9.3 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Nominal',
          speed: Q('270 km/h'),
          rate: Q('8.4 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Nominal',
          speed: Q('270 km/h'),
          rate: Q('5.6 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Nominal',
          speed: Q('270 km/h'),
          time: Q('30.5 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Nominal',
          speed: Q('270 km/h'),
          time: Q('39.9 s'),
        },
      ],
    },
    serviceCeiling: Q('9100 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('300 km/h'),
        time: Q('3.7 h'),
      },
    ],
  },
  engine: {
    model: 'M-105RA',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Nominal',
        power: Q('1020 hp'),
      },
      {
        altitude: Q('2000 m'),
        mode: 'Nominal',
        power: Q('1100 hp'),
      },
      {
        altitude: Q('4000 m'),
        mode: 'Nominal',
        power: Q('1050 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2700 rpm'),
        manifoldPressure: Q('910 mmHg'),
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
        value: Q('110 degC'),
      },
      {
        name: 'Water',
        value: Q('100 degC'),
      },
    ],
    superchargerGearShiftAltitude: Q('2700 m'),
  },
  load: {
    emptyWeight: Q('6078 kg'),
    minimumWeight: Q('6640 kg'),
    standardWeight: Q('7697 kg'),
    maxTakeoffWeight: Q('8712 kg'),
    fuelLoad: [Q('1129 kg'), Q('1505 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 1,
          name: 'UB',
          type: '12.7mm machine gun',
          count: 150,
          details: 'nose-mounted',
        },
        {
          qty: 1,
          name: 'ShKAS',
          type: '7.62mm machine gun',
          count: 450,
          details: 'nose-mounted',
        },
      ],
      modifications: [],
    },
    defensive: [
      {
        qty: 1,
        name: 'UB',
        type: '12.7mm machine gun',
        count: 200,
        details: 'Top',
      },
      {
        qty: 1,
        name: 'UB',
        type: '12.7mm machine gun',
        count: 200,
        details: 'Belly',
      },
      {
        qty: 1,
        name: 'ShKAS',
        type: '7.62mm machine gun',
        count: 225,
        details: 'Side',
      },
      {
        qty: 1,
        name: 'UB',
        type: '12.7mm machine gun',
        count: 200,
        details: 'Top turret',
      },
    ],
    bombs: [
      {
        qty: 10,
        name: 'FAB-100M',
        type: '104kg general purpose bomb',
        details: null,
      },
      {
        qty: 4,
        name: 'FAB-250sv',
        type: '254kg general purpose bomb',
        details: null,
      },
      {
        qty: 2,
        name: 'FAB-500M',
        type: '512kg general purpose bomb',
        details: null,
      },
    ],
    rockets: [
      {
        qty: 10,
        name: 'ROS-132',
        type: '23kg rocket',
        details: 'HE payload mass 9.1 kg',
      },
    ],
  },
  features: [
    {
      feature: 'Supercharger',
      details: ['Manual control', 'Two-stage (shift at 2300 m)'],
    },
    {
      feature: 'Mixture control',
      details: ['Manual control'],
    },
    {
      feature: 'Governor',
      details: [
        'Automatically controls prop pitch to maintain required RPM',
        'Electrically actuated, slow to operate (up to 45 s from min to max)',
      ],
    },
    {
      feature: 'Oil & water radiator shutters',
      details: ['Manual control'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, roll, yaw', 'Horizontal stabilizer automatically controlled based on flaps extension'],
    },
    {
      feature: 'Airbrakes',
      details: ['Fence-type airbrakes located under the wing'],
    },
    {
      feature: 'Flaps',
      details: [
        'Can extend up to 50°',
        'When landing, flaps can cause the angle of attack for a stall to be lower than landing pitch angle. Do not extend flaps to more than 35° (70%) on landing.',
      ],
    },
    {
      feature: 'Tail wheel',
      details: ['Rotates freely and does not have a lock'],
    },
    {
      feature: 'Wheel brakes',
      details: ['Differential brakes with shared control lever', 'Differential is applied via rudder pedals'],
    },
    {
      feature: 'Fuel gauges',
      details: ['Three gauges (for fuselage, left wing tanks and right wing tanks)'],
    },
    {
      feature: 'Canopy',
      details: ['Has an emergency release'],
    },
    {
      feature: 'Salvo controller',
      details: ['Bomb modes: 1, 2, 4, All', 'Rocket modes: 1, 2, 4'],
    },
  ],
  procedures: {
    startup: [
      'Mixture: Full Rich',
      'Prop Pitch/RPM: Maximum',
      'Water Radiators: As required',
      'Oil Radiators: As required',
      'Throttle: 1”',
      'Press E to start',
    ],
    takeoff: [
      'Mixture: Full Rich',
      'RPM: Full forward',
      'Prop Pitch/RPM: Maximum',
      'Flaps: 15°',
      'Water/Oil Radiators: Fully open',
      '150 km/h: Rotate',
      'Climb to 200 m AGL',
      '200 km/h: Retract Flaps',
      'Climb: 270 km/h',
    ],
    landing: [
      {
        text: 'Downwind',
        steps: [
          'Mixture: Full Rich',
          'MP: 500 mmHG',
          'Prop Pitch/RPM: Maximum',
          'Airspeed: Below 300 km/h',
          'Gear: Extend',
          'Water/Oil Radiators: As required',
        ],
      },
      {
        text: 'End Downwind',
        steps: ['Airspeed: Below 250 km/h', 'Flaps: 15°'],
      },
      {
        text: 'Base to Final',
        steps: ['Flaps: 30°', 'Airspeed: 220 km/h'],
      },
    ],
  },
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=DDA5yJyUNoU&t=54s',
    startup: 'https://www.youtube.com/watch?v=DDA5yJyUNoU&t=3m54s',
    takeoff: 'https://www.youtube.com/watch?v=DDA5yJyUNoU&t=4m59s',
    landing: 'https://www.youtube.com/watch?v=DDA5yJyUNoU&t=7m07s',
  },
};

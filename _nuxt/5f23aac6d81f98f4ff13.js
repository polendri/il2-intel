(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{222:function(e,t,n){"use strict";n.r(t);var m=n(254),r=n.n(m);t.default={id:"fw-190-d-9",type:"Fw 190",variant:"Fw 190 D-9",combatDebut:new Date(1944,8),airframe:{indicatedStallSpeedRanges:{takeoffLanding:[r()("160 km/h"),r()("181 km/h")],flight:[r()("174 km/h"),r()("197 km/h")]},diveSpeedLimit:r()("850 km/h"),maxLoadFactor:r()("11 gee"),stallAngles:{landing:r()("18.1 deg"),flight:r()("19.5 deg")},takeoffSpeedRange:[r()("180 km/h"),r()("220 km/h")],glideslopeSpeedRange:[r()("215 km/h"),r()("225 km/h")],landingSpeedRange:[r()("160 km/h"),r()("180 km/h")],landingAngle:r()("12.5 deg"),length:r()("10.2 m"),wingspan:r()("10.51 m"),wingSurface:r()("18.3 m^2")},characteristics:{maxTrueAirspeeds:[{altitude:r()("0 m"),engineMode:"Combat",speed:r()("565 km/h")},{altitude:r()("3200 m"),engineMode:"Combat",speed:r()("623 km/h")},{altitude:r()("6500 m"),engineMode:"Combat",speed:r()("63 km/h")},{altitude:r()("0 m"),engineMode:"Emergency",speed:r()("607 km/h")},{altitude:r()("2000 m"),engineMode:"Emergency",speed:r()("641 km/h")},{altitude:r()("5200 m"),engineMode:"Emergency",speed:r()("694 km/h")}],maxPerformance:{climb:[{altitude:r()("0 m"),engineMode:"Combat",speed:r()("300 km/h"),rate:r()("19.0 m/s")},{altitude:r()("3000 m"),engineMode:"Combat",speed:r()("300 km/h"),rate:r()("17.3 m/s")},{altitude:r()("6000 m"),engineMode:"Combat",speed:r()("300 km/h"),rate:r()("14.6 m/s")}],turn:[{altitude:r()("0 m"),engineMode:"Emergency",speed:r()("300 km/h"),time:r()("20.0 s")},{altitude:r()("3000 m"),engineMode:"Emergency",speed:r()("300 km/h"),time:r()("29.0 s")}]},serviceCeiling:r()("11600 m"),flightEndurance:[{altitude:r()("3000 m"),speed:r()("350 km/h"),time:r()("2.5 h")}]},engine:{model:"Jumo-213 A1",maxPowers:[{altitude:r()("0 m"),mode:"Combat",power:r()("1900 hp")},{altitude:r()("5100 m"),mode:"Combat",power:r()("1680 hp")},{altitude:r()("0 m"),mode:"Emergency",power:r()("2130 hp")},{altitude:r()("3800 m"),mode:"Emergency",power:r()("1980 hp")}],modes:[{name:"Nominal",limit:null,rpm:r()("3000 rpm"),manifoldPressure:r()("1.42 atm")},{name:"Combat",limit:r()("30 min"),rpm:r()("3250 rpm"),manifoldPressure:r()("1.51 atm")},{name:"Emergency",limit:r()("3 min"),rpm:r()("3250 rpm"),manifoldPressure:r()("1.7 atm")},{name:"Emergency w/ MW-50",limit:r()("10 min"),rpm:r()("3250 rpm"),manifoldPressure:r()("1.8 atm")}],ratedTemps:[{name:"Oil",range:[r()("40 degC"),r()("110 degC")]},{name:"Water",range:[r()("55 degC"),r()("100 degC")]}],maxTemps:[{name:"Oil",value:r()("120 degC")},{name:"Water",value:r()("110 degC")}],superchargerGearShiftAltitude:null},load:{emptyWeight:r()("3443 kg"),minimumWeight:r()("3759 kg"),standardWeight:r()("4289 kg"),maxTakeoffWeight:r()("4832 kg"),fuelLoad:[r()("388 kg"),r()("524 L")]},armament:{forwardFiring:{standard:[{qty:2,name:"MG 151/20",type:"20mm cannon",count:250,details:"wing-mounted"},{qty:2,name:"MG 131",type:"13mm machine gun",count:475,details:"synchronized"}],modifications:[]},defensive:[],bombs:[{qty:4,name:"SD 70",type:"66kg fragmentation bomb"},{qty:1,name:"SC 250",type:"249kg general purpose bomb"},{qty:1,name:"SC 500",type:"500kg general purpose bomb"}],rockets:[{qty:2,name:"WGr.21",type:"rockets in jettisonable launchers",details:null},{qty:26,name:"R4M",type:"rocket",details:null}]},features:[{feature:"Governor",details:["Automatically controls prop pitch to maintain required RPM"]},{feature:"Mixture control",details:["Automatic"]},{feature:"Supercharger",details:["Automatic"]},{feature:"MW-50 water-methanol mixture injection system",details:["Engages automatically in Emergency engine mode","Prevents engine detonation"]},{feature:"Radiator flaps",details:["Automatic","Theromstat temperature can be set manually"]},{feature:"Trimmers",details:["Horizontal stabilizer"]},{feature:"Flaps",details:["Have 3 fixed positions: retracted, takeoff (13°) and landing (58°)","Indicated by lights on the left panel and on the wing itself"]},{feature:"Tail wheel",details:["Locks when the flight stick is pulled backward"]},{feature:"Wheel brakes",details:["Independent left and right brakes"]},{feature:"Fuel gauge",details:["Shows fuel in the front or rear tank (switches in-game every 10s)","Has emergency warning light (100 L)"]},{feature:"Canopy",details:["Cannot be opened at high speed, but it has an emergency release for bailouts"]},{feature:"Gunsight",details:["Has sliding sun filter"]}],procedures:{startup:["Throttle: 1”","Prop Pitch: Auto","Press E to start"],takeoff:["Canopy: Closed","Flaps: “Start” position","H-stab trim: +1.5°","Prop Pitch: Auto","Tailwheel: Locked (pull stick back)","100 km/hr: Stick neutral","200 km/hr: Rotate","Before 250 km/hr: Flaps Up ","Climb: 280 km/hr"],landing:[{text:"Downwind:",steps:["Airspeed: Below 300km/hr","Gear: Extend","Flaps: “Start” Position","H-Stab Trim: +1.5°","Prop Pitch: Auto or Manual 1130"]},{text:"End Downwind:",steps:["Airspeed: 250 km/hr","Flaps: “Landing” position"]},{text:"Base to final:",steps:["Airspeed: 200-220 km/hr"]}]},trainingVideos:{cockpit:"https://www.youtube.com/watch?v=O3JMpt66NU0&t=8s",startup:null,takeoff:"https://www.youtube.com/watch?v=O3JMpt66NU0&t=4m15s",landing:"https://www.youtube.com/watch?v=O3JMpt66NU0&t=5m57s"}}}}]);
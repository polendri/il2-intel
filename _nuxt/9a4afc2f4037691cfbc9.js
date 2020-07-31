(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{153:function(e,t,n){"use strict";n.r(t);var r=n(186),m=n.n(r);t.default={id:"fw-190-a-8",type:"Fw 190",variant:"Fw 190 A-8",combatDebut:new Date(1944),airframe:{indicatedStallSpeedRanges:{takeoffLanding:[m()("164 km/h"),m()("188 km/h")],flight:[m()("177 km/h"),m()("208 km/h")]},diveSpeedLimit:m()("850 km/h"),maxLoadFactor:m()("11 gee"),stallAngles:{landing:m()("18.1 deg"),flight:m()("19.5 deg")},takeoffSpeedRange:[m()("180 km/h"),m()("220 km/h")],glideslopeSpeedRange:[m()("215 km/h"),m()("225 km/h")],landingSpeedRange:[m()("160 km/h"),m()("180 km/h")],landingAngle:m()("12.5 deg"),length:m()("8.85 m"),wingspan:m()("10.51 m"),wingSurface:m()("18.3 m^2")},characteristics:{maxTrueAirspeeds:[{altitude:m()("0 m"),engineMode:"Combat",speed:m()("532 km/h")},{altitude:m()("3000 m"),engineMode:"Combat",speed:m()("558 km/h")},{altitude:m()("5800 m"),engineMode:"Combat",speed:m()("612 km/h")},{altitude:m()("0 m"),engineMode:"Emergency",speed:m()("558 km/h")},{altitude:m()("3000 m"),engineMode:"Emergency",speed:m()("580 km/h")},{altitude:m()("6200 m"),engineMode:"Emergency",speed:m()("641 km/h")}],maxPerformance:{climb:[{altitude:m()("0 m"),engineMode:"Combat",speed:m()("280 km/h"),rate:m()("13.8 m/s")},{altitude:m()("3000 m"),engineMode:"Combat",speed:m()("280 km/h"),rate:m()("10.1 m/s")},{altitude:m()("6000 m"),engineMode:"Combat",speed:m()("280 km/h"),rate:m()("7.8 m/s")}],turn:[{altitude:m()("0 m"),engineMode:"Emergency",speed:m()("280 km/h"),time:m()("24.2 s")},{altitude:m()("3000 m"),engineMode:"Emergency",speed:m()("280 km/h"),time:m()("33.0 s")}]},serviceCeiling:m()("10300 m"),flightEndurance:[{altitude:m()("3000 m"),speed:m()("350 km/h"),time:m()("3.8 h")}]},engine:{model:"BMW-801D",maxPowers:[{altitude:m()("700 m"),mode:"Combat",power:m()("1520 hp")},{altitude:m()("5300 m"),mode:"Combat",power:m()("1320 hp")},{altitude:m()("0 m"),mode:"Emergency",power:m()("1700 hp")},{altitude:m()("5700 m"),mode:"Emergency",power:m()("1440 hp")}],modes:[{name:"Nominal",limit:null,rpm:m()("2300 rpm"),manifoldPressure:m()("1.2 atm")},{name:"Combat",limit:m()("30 min"),rpm:m()("2400 rpm"),manifoldPressure:m()("1.32 atm")},{name:"Emergency",limit:m()("3 min"),rpm:m()("2700 rpm"),manifoldPressure:m()("1.42 atm")}],ratedTemps:[{name:"Oil intake",range:[m()("60 degC"),m()("70 degC")]},{name:"Oil output",range:[m()("105 degC")]},{name:"Cylinder head",range:[m()("180 degC")]}],maxTemps:[{name:"Oil intake",value:m()("85 degC")},{name:"Oil output",value:m()("120 degC")},{name:"Cylinder head",value:m()("220 degC")}],superchargerGearShiftAltitude:null},load:{emptyWeight:m()("3504 kg"),minimumWeight:m()("3697 kg"),standardWeight:m()("4391 kg"),maxTakeoffWeight:m()("5239 kg"),fuelLoad:[m()("498 kg"),m()("639 L")]},armament:{forwardFiring:{standard:[{qty:2,name:"MG 151/20",type:"20mm cannon",count:250,details:"synchronized"},{qty:2,name:"MG 151/20",type:"20mm cannon",count:140,details:"wing-mounted"},{qty:2,name:"MG 131",type:"13mm machine gun",count:475,details:"synchronized"}],modifications:[{qty:2,name:"MK 108",type:"30mm cannon",count:55,details:"wing-mounted"}]},defensive:[],bombs:[{qty:8,name:"SD 70",type:"66kg fragmentation bomb"},{qty:3,name:"SC 250",type:"249kg general purpose bomb"},{qty:1,name:"SC 500",type:"500kg general purpose bomb"},{qty:1,name:"SC 1000",type:"1000kg general purpose bomb"}],rockets:[{qty:2,name:"WGr.21",type:"rocket",details:null},{qty:12,name:"Panzerblitz 1",type:"rocket",details:"R-HL, M8"}]},features:[{feature:"Governor",details:["Automatically controls prop pitch to maintain required RPM"]},{feature:"Mixture control",details:["Automatic"]},{feature:"Supercharger",details:["Automatic"]},{feature:"Emergency engine mode system",details:["Increases pressure to 1.58 ATA (1st supercharger gear) or 1.65 ATA (2nd supercharger gear)","Engaged by the boost command when throttle is full forward, auto prop pitch is engaged, and altitude is lower than the critical altitude for the supercharger gear"]},{feature:"Outlet cowl shutters",details:["Manual control"]},{feature:"Trimmers",details:["Horizontal stabilizer"]},{feature:"Flaps",details:["Have 3 fixed positions: retracted, takeoff (13°) and landing (58°)","Indicated by lights on the left panel and on the wing itself"]},{feature:"Tail wheel",details:["Locks when the flight stick is pulled backward"]},{feature:"Wheel brakes",details:["Independent left and right brakes"]},{feature:"Fuel gauge",details:["Shows fuel in the front or rear tank (switches in-game every 10s)","Has emergency warning light (100 L)"]},{feature:"Canopy",details:["Cannot be opened during flight, but it has an emergency release for bailouts"]},{feature:"F-8 strike modification",details:["Includes additional fuselage bottom and engine armour, 70 kg underwing bomb/rocket holders, and removes the outer wing-mounted guns"]},{feature:"G-8 bomber modification",details:["Removes all wing-mounted guns and allows 250 kg underwing bombs, in addition to F-8 modifications"]},{feature:"Gunsight",details:["Has sliding sun filter"]}],procedures:{startup:["Throttle: 1”","Prop Pitch: Auto","Press E to start"],takeoff:["Canopy: Closed","Flaps: “Start” position","H-stab trim: +1.5°","Prop Pitch: Auto","Tailwheel: Locked (pull stick back)","100 km/hr: Stick neutral","180 km/hr: Rotate","Before 250 km/hr: Flaps Up ","Climb: 280 km/hr"],landing:[{text:"Downwind:",steps:["Airspeed: Below 300km/hr","Gear: Extend","Flaps: “Start” Position","H-Stab Trim: +1.5°","Prop Pitch: Auto or Manual 1130"]},{text:"End Downwind:",steps:["Airspeed: 250 km/hr","Flaps: “Landing” position"]},{text:"Base to final:",steps:["Airspeed: 200-220 km/hr"]}]},trainingVideos:{cockpit:"https://www.youtube.com/watch?v=o4GuzeciE28&t=9s",startup:null,takeoff:"https://www.youtube.com/watch?v=o4GuzeciE28&t=3m41s",landing:"https://www.youtube.com/watch?v=o4GuzeciE28&t=5m40s"}}}}]);
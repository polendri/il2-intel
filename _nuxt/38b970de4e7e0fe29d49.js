(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{155:function(e,t,o){"use strict";o.r(t);var n=o(174),l=o.n(n);t.default={id:"i-16-type-24",type:"I-16",variant:"I-16 type 24",combatDebut:new Date(1941,6),airframe:{indicatedStallSpeedRanges:{takeoffLanding:[l()("142 km/h"),l()("163 km/h")],flight:[l()("143 km/h"),l()("164 km/h")]},diveSpeedLimit:l()("620 km/h"),maxLoadFactor:l()("12 gee"),stallAngles:{landing:l()("15 deg"),flight:l()("17.6 deg")},takeoffSpeedRange:[l()("145 km/h"),l()("175 km/h")],glideslopeSpeedRange:[l()("185 km/h"),l()("195 km/h")],landingSpeedRange:[l()("135 km/h"),l()("145 km/h")],landingAngle:l()("15.3 deg"),length:l()("6.04 m"),wingspan:l()("9 m"),wingSurface:l()("14.54 m^2")},characteristics:{maxTrueAirspeeds:[{altitude:l()("0 m"),engineMode:"Boosted",speed:l()("448 km/h")},{altitude:l()("1800 m"),engineMode:"Nominal",speed:l()("460 km/h")},{altitude:l()("4500 m"),engineMode:"Nominal",speed:l()("490 km/h")}],maxPerformance:{climb:[{altitude:l()("0 m"),engineMode:"Boosted",speed:l()("230 m/s"),rate:l()("19.5 m/s")},{altitude:l()("3000 m"),engineMode:"Boosted",speed:l()("230 m/s"),rate:l()("13.8 m/s")},{altitude:l()("6000 m"),engineMode:"Boosted",speed:l()("230 m/s"),rate:l()("8.8 m/s")}],turn:[{altitude:l()("0 m"),engineMode:"Boosted",speed:l()("230 km/h"),time:l()("19.0 s")},{altitude:l()("3000 m"),engineMode:"Emergency",speed:l()("230 km/h"),time:l()("25.3 s")}]},serviceCeiling:l()("10500 m"),flightEndurance:[{altitude:l()("3000 m"),speed:l()("350 km/h"),time:l()("2.6 h")}]},engine:{model:"M-63",maxPowers:[{altitude:l()("0 m"),mode:"Nominal",power:l()("930 hp")},{altitude:l()("1800 m"),mode:"Nominal",power:l()("1000 hp")},{altitude:l()("4500 m"),mode:"Nominal",power:l()("900 hp")},{altitude:l()("0 m"),mode:"Boosted",power:l()("1100 hp")}],modes:[{name:"Nominal",limit:null,rpm:l()("2200 rpm"),manifoldPressure:l()("915 mmHg")},{name:"Boosted",limit:l()("5 min"),rpm:l()("2300 rpm"),manifoldPressure:l()("1065 mmHg")}],ratedTemps:[{name:"Oil",range:[l()("55 degC"),l()("90 degC")]},{name:"Cylinder head",range:[l()("120 degC"),l()("200 degC")]}],maxTemps:[{name:"Oil",value:l()("125 degC")},{name:"Cylinder head",value:l()("205 degC")}],superchargerGearShiftAltitude:l()("3000 m")},load:{emptyWeight:l()("1501 kg"),minimumWeight:l()("1633 kg"),standardWeight:l()("1878 kg"),maxTakeoffWeight:l()("2146 kg"),fuelLoad:[l()("191 kg"),l()("260 L")]},armament:{forwardFiring:{standard:[{qty:2,name:"ShKAS",type:"7.62mm machine gun",count:500,details:null},{qty:2,name:"ShKAS",type:"7.62mm machine gun",count:900,details:"wing-mounted"}],modifications:[{qty:2,name:"SsVAK",type:"20mm gun",count:90,details:"wing-mounted"}]},defensive:[],bombs:[{qty:2,name:"FAB-50sv",type:"50 kg general purpose bomb"},{qty:2,name:"FAB-100M",type:"104 kg general purpose bomb"}],rockets:[{qty:6,name:"ROS-82",type:"7kg rocket"}]},features:[{feature:"Boost",details:["To engage, set boost lever to full forward and increase engine to 2300 RPM"]},{feature:"Supercharger",details:["Manual control","Two-stage (shift at 3000 m)"]},{feature:"Mixture Control",details:["Automatic when set to full rich"]},{feature:"Governor",details:["Automatically controls prop pitch to maintain required RPM"]},{feature:"Oil radiator & air intake shutters",details:["Manual control"]},{feature:"Flaps",details:["Manually operated (slow to operate)","Can be extended up to 53°"]},{feature:"Landing gear",details:["Manually operated (slow to operate)"]},{feature:"Tail wheel",details:["Rotation is linked to rudder pedals"]},{feature:"Wheel brakes",details:["Independent left and right brakes"]},{feature:"Fuel gauge",details:["Displays only when manual sucker lever is pushed in (in-game every 10 s)"]},{feature:"Cockpit side doors",details:["Should be closed before takeoff"]},{feature:"Salvo controller",details:["Bomb modes: 1, 2","Rocket modes: 1, 2, 4"]},{feature:"Gunsight",details:["Has a sliding sun filter","Has a backup folding mechanical sight"]}],procedures:{engineStart:["Set throttle to idle","Set mixture to full rich","Set RPM to full forward","Close inlet cowl","Close oil radiator","Start engine"],takeoff:["Close cockpit door","Set throttle to idle","Set mixture to full rich","Set RPM to full forward","Fully open inlet cowl","Fully open oil radiator","Gradually open throttle to maximum","At 170 km/h, rotate"],landing:["Reduce airspeed to 220 km/h","Extend landing gear early","Close inlet cowl","Close oil radiator","Set flaps to 15°","On base leg, set flaps to 30°",{text:"On final approach",steps:["Set flaps as required","Reduce airspeed to 180-200 km/h"]}]}}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{159:function(e,t,n){"use strict";n.r(t);var o=n(186),m=n.n(o);t.default={id:"il-2-mod-1941",type:"IL-2",variant:"IL-2 model of 1941",combatDebut:new Date(1941,6),airframe:{indicatedStallSpeedRanges:{takeoffLanding:[m()("128 km/h"),m()("146 km/h")],flight:[m()("136 km/h"),m()("156 km/h")]},diveSpeedLimit:m()("570 km/h"),maxLoadFactor:m()("11.5 gee"),stallAngles:{landing:m()("17.5 deg"),flight:m()("19.4 deg")},takeoffSpeedRange:[m()("150 km/h"),m()("190 km/h")],glideslopeSpeedRange:[m()("185 km/h"),m()("195 km/h")],landingSpeedRange:[m()("130 km/h"),m()("140 km/h")],landingAngle:m()("11.7 deg"),length:m()("11.5 m"),wingspan:m()("14.6 m"),wingSurface:m()("38.5 m^2")},characteristics:{maxTrueAirspeeds:[{altitude:m()("0 m"),engineMode:"Nominal",speed:m()("421 km/h")},{altitude:m()("0 m"),engineMode:"Boosted",speed:m()("430 km/h")},{altitude:m()("2500 m"),engineMode:"Nominal",speed:m()("455 km/h")}],maxPerformance:{climb:[{altitude:m()("0 m"),engineMode:"Nominal",speed:m()("250 km/h"),rate:m()("9.4 m/s")},{altitude:m()("3000 m"),engineMode:"Nominal",speed:m()("250 km/h"),rate:m()("8.9 m/s")},{altitude:m()("6000 m"),engineMode:"Nominal",speed:m()("250 km/h"),rate:m()("3.9 m/s")}],turn:[{altitude:m()("0 m"),engineMode:"Boosted",speed:m()("250 km/h"),time:m()("23.1 s")},{altitude:m()("3000 m"),engineMode:"Boosted",speed:m()("250 km/h"),time:m()("32.6 s")}]},serviceCeiling:m()("7500 m"),flightEndurance:[{altitude:m()("3000 m"),speed:m()("300 km/h"),time:m()("1.7 h")}]},engine:{model:"AM-38",maxPowers:[{altitude:m()("0 m"),mode:"Nominal",power:m()("1500 hp")},{altitude:m()("1650 m"),mode:"Nominal",power:m()("1500 hp")},{altitude:m()("0 m"),mode:"Boosted",power:m()("1600 hp")}],modes:[{name:"Nominal",limit:null,rpm:m()("2050 rpm"),manifoldPressure:m()("1180 mmHg")},{name:"Boosted",limit:m()("10 min"),rpm:m()("2150 rpm"),manifoldPressure:m()("1280 mmHg")}],ratedTemps:[{name:"Oil intake",range:[m()("40 degC"),m()("80 degC")]},{name:"Oil output",range:[m()("115 degC")]},{name:"Water",range:[m()("80 degC"),m()("110 degC")]}],maxTemps:[{name:"Oil intake",value:m()("85 degC")},{name:"Oil",value:m()("120 degC")},{name:"Water",value:m()("120 degC")}],superchargerGearShiftAltitude:null},load:{emptyWeight:m()("4242 kg"),minimumWeight:m()("4464 kg"),standardWeight:m()("5049 kg"),maxTakeoffWeight:m()("5888 kg"),fuelLoad:[m()("470 kg"),m()("641 L")]},armament:{forwardFiring:{standard:[{qty:2,name:"SsVAK",type:"20mm gun",count:210,details:"wing-mounted"},{qty:2,name:"ShKAS",type:"7.62mm machine gun",count:750,details:"wing-mounted"}],modifications:[{qty:2,name:"VYa-23",type:"23mm gun",count:150,details:"wing-mounted"}]},defensive:[],bombs:[{qty:6,name:"FAB-50sv",type:"50kg general purpose bomb"},{qty:6,name:"FAB-100M",type:"104kg general purpose bomb"},{qty:2,name:"FAB-250sv",type:"254kg general purpose bomb"}],rockets:[{qty:8,name:"ROS-82",type:"7kg rocket",details:"HE payload mass 2.5 kg"},{qty:8,name:"RBS-82",type:"15kg rocket",details:"HEAT payload mass 7.2 kg"},{qty:8,name:"ROFS-132",type:"42kg rocket",details:"HE payload mass 21.3 kg"}]},features:[{feature:"Boost",details:["Engaged by setting mixture to full rich"]},{feature:"Supercharger",details:["Automatic","Single stage"]},{feature:"Mixture control",details:["Automatic when set to intermediate (50%)"]},{feature:"Governor",details:["Automatically controls prop pitch to maintain required RPM"]},{feature:"Oil & water radiator shutters",details:["Manual control","Oil radiator shutters are armoured; close during ground attacks"]},{feature:"Trimmers",details:["Pitch"]},{feature:"Flaps",details:["Can only extend fully (no gradual extension)","At ≥ 220 km/h, airflow may press the flaps upwards"]},{feature:"Tail wheel",details:["Has a manual lock"]},{feature:"Wheel brakes",details:["Differential brakes with shared control lever","Differential is applied via rudder pedals"]},{feature:"Fuel gauge",details:["Indicates fuel in front or bottom tanks (alternates in-game every 10 seconds)","Rear tank level is not indicated"]},{feature:"Canopy",details:["Has no lock in open position; may close in a steep dive","Impossible to open/close at high speed","Has no emergency release"]},{feature:"Salvo controller",details:["Bomb/rocket modes: 1, 2, 4"]},{feature:"Gunsight",details:["Installed on sliding bar which can be extended to increase FoV"]}],procedures:{engineStart:["Start engine"],takeoff:["Set oil and water radiators to full open","Set mixture to intermediate","Set RPM to maximum","Lock tail wheel","At 170 km/h, rotate","Retract landing gear","Set engine for climb (1800..2000 RPM)","Climb at 250 km/h"],landing:["Set RPM to maximum, MP to 5..6","Reduce airspeed to ≤ 250 km/h","Extend landing gear","Set oil and water radiators as required","Lock tail wheel","On base leg, extend flaps and reduce airspeed to ≤ 220 km/h","Set engine to 1500 RPM / 0.6 ata","Set horizontal stabilizer to -4..5°","At ≤ 350 km/h, extend landing gear","At ≤ 250 km/h, extend flaps to 20°","On base leg, descend at 150 m/min","On final approach, descend at 185 km/h"]},trainingVideos:{cockpit:"https://www.youtube.com/watch?v=LNDPtBGVcl4&t=5s",engineStart:"https://www.youtube.com/watch?v=LNDPtBGVcl4&t=2m38s",takeoff:"https://www.youtube.com/watch?v=LNDPtBGVcl4&t=4m37s",landing:"https://www.youtube.com/watch?v=LNDPtBGVcl4&t=6m"}}}}]);
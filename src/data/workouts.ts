export type Workout = { id:string; date:string; title:string; duration:string; exercises:number; volume:number; status:"Completed"|"Planned"; };
export const recentWorkouts: Workout[] = [
  {id:"w1",date:"Mon",title:"Upper Strength",duration:"58 min",exercises:7,volume:12840,status:"Completed"},
  {id:"w2",date:"Tue",title:"Cardio Conditioning",duration:"34 min",exercises:5,volume:4200,status:"Completed"},
  {id:"w3",date:"Thu",title:"Lower Body Power",duration:"64 min",exercises:8,volume:15650,status:"Completed"},
  {id:"w4",date:"Sat",title:"Push Pull Mix",duration:"52 min",exercises:6,volume:10920,status:"Planned"}
];
export const upcomingPlan = [
  {day:"Monday",title:"Upper Strength",target:"Chest, back, shoulders"},
  {day:"Wednesday",title:"Lower Power",target:"Squat, hinge, core"},
  {day:"Friday",title:"Hypertrophy Focus",target:"Arms, delts, accessories"},
  {day:"Sunday",title:"Mobility Reset",target:"Recovery and movement quality"}
];
export const exerciseBreakdown = [
  {name:"Bench Press",sets:12,volume:4200}, {name:"Back Squat",sets:10,volume:5400}, {name:"Deadlift",sets:8,volume:6200}, {name:"Lat Pulldown",sets:12,volume:3120}, {name:"Shoulder Press",sets:9,volume:2380}
];

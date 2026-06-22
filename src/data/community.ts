export type CommunityPostData = { id:string; name:string; role:string; initials:string; content:string; achievement:string; likes:number; comments:number; followed:boolean; };
export const communityPosts: CommunityPostData[] = [
  {id:"p1",name:"Maya Rahman",role:"Strength member",initials:"MR",content:"Finished week 4 of my beginner strength plan and finally hit a clean squat PR.",achievement:"New squat PR",likes:184,comments:26,followed:true},
  {id:"p2",name:"Rafi Ahmed",role:"Fat loss program",initials:"RA",content:"Seven consistent workouts this month. The streak tracker is keeping me honest.",achievement:"30-day consistency",likes:132,comments:18,followed:false},
  {id:"p3",name:"Nadia Chowdhury",role:"Coach plan user",initials:"NC",content:"My coach adjusted my program after reviewing volume and recovery data. Feeling stronger already.",achievement:"Coach check-in completed",likes:218,comments:34,followed:true}
];
export const challenges = [
  {title:"10K Steps Week",members:1280,progress:"72%"}, {title:"Push-Up Builder",members:860,progress:"64%"}, {title:"No Missed Monday",members:2140,progress:"81%"}
];

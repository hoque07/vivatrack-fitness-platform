export type PricingPlan = { name:string; price:string; period:string; description:string; features:string[]; highlighted:boolean; cta:string; };
export const pricingPlans: PricingPlan[] = [
  {name:"Free Plan",price:"$0",period:"forever",description:"For beginners who want to log workouts and build basic consistency.",features:["Workout logging","Basic routine builder","Limited progress history","Community access"],highlighted:false,cta:"Start Demo"},
  {name:"Pro Plan",price:"$9",period:"per month",description:"For serious users who want analytics, goals, and premium programs.",features:["Advanced analytics","Unlimited routines","Premium workout programs","Body metric tracking","Progress reports"],highlighted:true,cta:"Choose Pro"},
  {name:"Coach Plan",price:"$29",period:"per month",description:"For users who want coaching workflows and guided progress reviews.",features:["Coach dashboard preview","Program adjustments","Weekly check-in reports","Priority support","Trainer marketplace access"],highlighted:false,cta:"Choose Coach"}
];
export const revenueModels = ["Monthly subscriptions","Premium workout plans","Personal trainer marketplace","Fitness analytics reports","Brand partnerships","Corporate wellness plans"];

import { Activity, BarChart3, BookOpen, CalendarCheck, Dumbbell, Goal, History, LockKeyhole, MessageSquare, Scale, Trophy, Users } from "lucide-react";
import CTASection from "../components/CTASection";
import FeatureCard from "../components/FeatureCard";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
const features=[
  {icon:LockKeyhole,title:"User authentication preview",description:"Demo member access, onboarding, and account flow without real authentication."},
  {icon:BookOpen,title:"Exercise library",description:"Organize exercises by muscle group, equipment, training style, and difficulty."},
  {icon:Dumbbell,title:"Routine builder",description:"Create structured plans with warmups, main lifts, accessory work, and finishers."},
  {icon:CalendarCheck,title:"Workout logging",description:"Log sets, reps, weight, RPE, duration, completion status, and notes."},
  {icon:History,title:"Workout history",description:"Review past sessions, compare training weeks, and identify consistency patterns."},
  {icon:BarChart3,title:"Progress charts",description:"Track training volume, personal records, body weight, and weekly completion rate."},
  {icon:Scale,title:"Body metrics",description:"Monitor weight trends and key body metrics for goal-based fitness planning."},
  {icon:Goal,title:"Goal tracking",description:"Set strength, fat loss, muscle gain, consistency, or recovery goals."},
  {icon:Users,title:"Community feed",description:"Create a social layer with posts, achievements, comments, likes, and challenges."},
  {icon:Trophy,title:"Personal records",description:"Highlight PRs and milestones to improve motivation and product retention."},
  {icon:MessageSquare,title:"Coaching upsell",description:"Show how coaches can review analytics and guide premium users."},
  {icon:Activity,title:"Premium analytics",description:"Create upgrade value through deeper reports, streaks, trends, and forecasts."}
];
export default function Features(){return <Layout><PageHeader eyebrow="Features" title="A complete fitness product experience" description="VivaTrack is designed to look like a serious SaaS fitness platform, not a simple workout log. It shows product depth, user value, and monetization potential."/><section className="mx-auto max-w-7xl px-4 pb-16 lg:px-6"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{features.map(f=><FeatureCard key={f.title} {...f}/>)}</div></section><CTASection/></Layout>}

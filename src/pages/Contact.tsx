import { Handshake, Headphones, Users } from "lucide-react";
import ContactForm from "../components/ContactForm";
import FeatureCard from "../components/FeatureCard";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
export default function Contact(){return <Layout><PageHeader eyebrow="Contact" title="Talk about partnerships, coaching, or product support" description="This page contains a frontend-only contact form and business contact cards. The form shows a success message without sending real data."/><section className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 lg:grid-cols-[.9fr_1.1fr] lg:px-6"><div className="grid gap-5"><FeatureCard icon={Handshake} title="Partnership" description="For gyms, brands, wellness companies, and future business integrations."/><FeatureCard icon={Users} title="Coaching" description="For trainers who want client dashboards, check-ins, and workout plan delivery."/><FeatureCard icon={Headphones} title="Product support" description="For users who need help with routines, analytics, or account features in a real app."/></div><ContactForm/></section></Layout>}

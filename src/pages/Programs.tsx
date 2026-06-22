import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import ProgramCard from "../components/ProgramCard";
import { programs } from "../data/programs";
export default function Programs(){return <Layout><PageHeader eyebrow="Workout Programs" title="Programs users can follow and upgrade into" description="Show structured fitness products that can be free, premium, coach-guided, or sold as specialized workout plans."/><section className="mx-auto max-w-7xl px-4 pb-20 lg:px-6"><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{programs.map(p=><ProgramCard key={p.id} program={p}/>)}</div></section></Layout>}

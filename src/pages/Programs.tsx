import { ArrowRight, CheckCircle2, Clock, Dumbbell, Flame, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import ProgramDemoModal from "../components/ProgramDemoModal";
import { type V3Program, v3Programs } from "../data/v3Programs";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Programs() {
  const navigate = useNavigate();
  const [activeModalProgram, setActiveModalProgram] = useState<V3Program | null>(null);
  const [activeProgramId, setActiveProgramId] = useLocalStorage<string | null>(
    "vivatrack_active_program",
    null
  );

  function handleStartProgram(program: V3Program) {
    setActiveProgramId(program.id);
    setActiveModalProgram(null);
    navigate(`/programs/${program.id}`);
  }

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 inline-flex rounded-full border border-viva-green/30 bg-viva-green/10 px-4 py-2 text-sm text-viva-green">
            VivaTrack V3 Programs
          </p>
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Choose a workout program and preview the demo.
          </h1>
          <p className="mt-5 text-lg text-white/70">
            In Version 3, program buttons are functional. Users can open a demo,
            start a program, and view the full weekly plan.
          </p>
        </div>

        {activeProgramId && (
          <div className="glass mb-8 rounded-3xl p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm text-viva-green">Current Active Program</p>
                <p className="text-xl font-semibold text-white">
                  {v3Programs.find((program) => program.id === activeProgramId)?.title ?? "Saved program"}
                </p>
              </div>

              <button
                onClick={() => navigate(`/programs/${activeProgramId}`)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-viva-green/30 px-5 py-3 text-sm font-semibold text-viva-green hover:bg-viva-green hover:text-black"
              >
                Continue Program
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-3">
          {v3Programs.map((program) => (
            <article key={program.id} className="glass rounded-3xl p-6">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">
                    {program.level}
                  </p>
                  <h2 className="text-2xl font-bold text-white">{program.title}</h2>
                  <p className="mt-2 text-white/60">{program.subtitle}</p>
                </div>

                <div className="rounded-2xl bg-viva-green/10 p-3 text-viva-green">
                  <Dumbbell size={24} />
                </div>
              </div>

              <div className="mb-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Clock size={18} className="mb-2 text-viva-green" />
                  <p className="text-sm text-white/50">Duration</p>
                  <p className="font-semibold text-white">{program.duration}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Flame size={18} className="mb-2 text-viva-green" />
                  <p className="text-sm text-white/50">Calories</p>
                  <p className="font-semibold text-white">{program.estimatedCalories}</p>
                </div>
              </div>

              <div className="mb-6 space-y-3">
                {program.highlights.slice(0, 4).map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 size={17} className="shrink-0 text-viva-green" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {activeProgramId === program.id && (
                <div className="mb-5 flex items-center gap-2 rounded-2xl border border-viva-green/20 bg-viva-green/10 px-4 py-3 text-sm text-viva-green">
                  <Sparkles size={17} />
                  Active demo program
                </div>
              )}

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setActiveModalProgram(program)}
                  className="rounded-full bg-viva-green px-5 py-3 font-semibold text-black hover:shadow-[0_0_30px_rgba(71,240,125,0.3)]"
                >
                  View Demo
                </button>

                <button
                  onClick={() => handleStartProgram(program)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 font-semibold text-white/80 hover:border-viva-green/40 hover:text-white"
                >
                  Start Program
                  <ArrowRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ProgramDemoModal
        program={activeModalProgram}
        onClose={() => setActiveModalProgram(null)}
        onStart={handleStartProgram}
      />
    </Layout>
  );
}
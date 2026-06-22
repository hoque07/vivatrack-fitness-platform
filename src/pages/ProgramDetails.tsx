import { ArrowLeft, CheckCircle2, Clock, Dumbbell, Flame, Target } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { getProgramById } from "../data/v3Programs";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function ProgramDetails() {
  const navigate = useNavigate();
  const { programId } = useParams();
  const program = getProgramById(programId);
  const [activeProgramId, setActiveProgramId] = useLocalStorage<string | null>(
    "vivatrack_active_program",
    null
  );

  if (!program) {
    return (
      <Layout>
        <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Program not found</h1>
          <p className="mt-4 text-white/60">
            The program you are looking for does not exist.
          </p>
          <button
            onClick={() => navigate("/programs")}
            className="mt-8 rounded-full bg-viva-green px-6 py-3 font-semibold text-black"
          >
            Back to Programs
          </button>
        </section>
      </Layout>
    );
  }

  const isActive = activeProgramId === program.id;

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate("/programs")}
          className="mb-8 inline-flex items-center gap-2 text-white/70 hover:text-viva-green"
        >
          <ArrowLeft size={18} />
          Back to Programs
        </button>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass rounded-3xl p-6 md:p-8">
            <p className="mb-4 inline-flex rounded-full border border-viva-green/30 bg-viva-green/10 px-4 py-2 text-sm text-viva-green">
              {program.level} • {program.duration}
            </p>

            <h1 className="text-4xl font-bold text-white md:text-6xl">{program.title}</h1>
            <p className="mt-5 text-lg text-white/70">{program.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Clock className="mb-3 text-viva-green" size={22} />
                <p className="text-sm text-white/50">Duration</p>
                <p className="font-semibold text-white">{program.duration}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Dumbbell className="mb-3 text-viva-green" size={22} />
                <p className="text-sm text-white/50">Sessions</p>
                <p className="font-semibold text-white">{program.sessionsPerWeek}/week</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Flame className="mb-3 text-viva-green" size={22} />
                <p className="text-sm text-white/50">Calories</p>
                <p className="font-semibold text-white">{program.estimatedCalories}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Target className="mb-3 text-viva-green" size={22} />
                <p className="text-sm text-white/50">Goal</p>
                <p className="font-semibold text-white">{program.goal}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setActiveProgramId(program.id)}
                className="rounded-full bg-viva-green px-6 py-3 font-semibold text-black hover:shadow-[0_0_30px_rgba(71,240,125,0.3)]"
              >
                {isActive ? "Program Active" : "Mark as Active Program"}
              </button>

              <button
                onClick={() => navigate("/pricing")}
                className="rounded-full border border-white/10 px-6 py-3 font-semibold text-white/80 hover:border-viva-green/40 hover:text-white"
              >
                Upgrade for Full Tracking
              </button>
            </div>
          </div>

          <aside className="glass rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white">Program Summary</h2>

            <div className="mt-6 space-y-4">
              {program.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-center gap-3 text-white/75">
                  <CheckCircle2 size={18} className="shrink-0 text-viva-green" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/50">Equipment</p>
              <p className="mt-1 font-semibold text-white">{program.equipment}</p>
            </div>

            {isActive && (
              <div className="mt-5 rounded-2xl border border-viva-green/20 bg-viva-green/10 p-4 text-viva-green">
                This program is currently selected in your demo profile.
              </div>
            )}
          </aside>
        </div>

        <div className="mt-8 glass rounded-3xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-white">Weekly Workout Plan</h2>
          <p className="mt-3 text-white/60">
            This is a demo schedule. In a later backend version, completed workouts can be saved to a user account.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {program.schedule.map((workout) => (
              <div key={workout.day} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-viva-green">{workout.day}</p>
                <h3 className="mt-1 text-xl font-semibold text-white">{workout.title}</h3>
                <p className="mt-1 text-sm text-white/60">
                  {workout.focus} • {workout.duration}
                </p>

                <div className="mt-4 space-y-2">
                  {workout.exercises.map((exercise) => (
                    <div key={exercise} className="flex items-center gap-3 text-sm text-white/70">
                      <CheckCircle2 size={16} className="shrink-0 text-viva-green" />
                      <span>{exercise}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
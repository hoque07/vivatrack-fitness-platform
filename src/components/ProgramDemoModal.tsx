import { ArrowRight, CheckCircle2, Clock, Dumbbell, Flame, Target, X } from "lucide-react";
import type { V3Program } from "../data/v3Programs";

type ProgramDemoModalProps = {
  program: V3Program | null;
  onClose: () => void;
  onStart: (program: V3Program) => void;
};

export default function ProgramDemoModal({ program, onClose, onStart }: ProgramDemoModalProps) {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">
      <div className="glass modal-enter max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl p-6 md:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-viva-green/30 bg-viva-green/10 px-4 py-1 text-sm text-viva-green">
              {program.level} • {program.duration}
            </p>
            <h2 className="text-3xl font-bold text-white">{program.title}</h2>
            <p className="mt-2 max-w-2xl text-white/70">{program.description}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 p-3 text-white/70 hover:border-viva-green/40 hover:text-white"
            aria-label="Close program demo"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-4">
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

        <div className="mb-6 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-4 text-xl font-semibold text-white">Program Highlights</h3>
            <div className="space-y-3">
              {program.highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/75">
                  <CheckCircle2 size={18} className="shrink-0 text-viva-green" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-4 text-xl font-semibold text-white">Expected Outcomes</h3>
            <div className="space-y-3">
              {program.outcomes.map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/75">
                  <CheckCircle2 size={18} className="shrink-0 text-viva-green" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-3xl border border-white/10 bg-white/5 p-5">
          <h3 className="mb-4 text-xl font-semibold text-white">Demo Weekly Plan</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {program.schedule.map((workout) => (
              <div key={workout.day} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-viva-green">{workout.day}</p>
                <h4 className="mt-1 font-semibold text-white">{workout.title}</h4>
                <p className="mt-1 text-sm text-white/60">
                  {workout.focus} • {workout.duration}
                </p>
                <p className="mt-3 text-sm text-white/70">{workout.exercises.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => onStart(program)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-viva-green px-6 py-3 font-semibold text-black hover:shadow-[0_0_30px_rgba(71,240,125,0.3)]"
          >
            Start This Program
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onClose}
            className="rounded-full border border-white/10 px-6 py-3 font-semibold text-white/80 hover:border-viva-green/40 hover:text-white"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
}
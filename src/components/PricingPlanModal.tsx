import { ArrowRight, CheckCircle2, CreditCard, ShieldCheck, X } from "lucide-react";
import type { V3PricingPlan } from "../data/v3Pricing";

type PricingPlanModalProps = {
  plan: V3PricingPlan | null;
  onClose: () => void;
  onConfirm: (plan: V3PricingPlan) => void;
};

export default function PricingPlanModal({ plan, onClose, onConfirm }: PricingPlanModalProps) {
  if (!plan) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">
      <div className="glass modal-enter w-full max-w-3xl rounded-3xl p-6 md:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            {plan.badge && (
              <p className="mb-3 inline-flex rounded-full border border-viva-green/30 bg-viva-green/10 px-4 py-1 text-sm text-viva-green">
                {plan.badge}
              </p>
            )}
            <h2 className="text-3xl font-bold text-white">{plan.name} Plan</h2>
            <p className="mt-2 text-white/70">{plan.description}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 p-3 text-white/70 hover:border-viva-green/40 hover:text-white"
            aria-label="Close pricing modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mb-6 rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm text-white/50">Selected plan</p>
              <p className="text-4xl font-bold text-white">{plan.price}</p>
              <p className="text-white/60">{plan.billing}</p>
            </div>

            <div className="rounded-2xl border border-viva-green/20 bg-viva-green/10 px-4 py-3">
              <p className="text-sm text-white/50">Best for</p>
              <p className="font-semibold text-white">{plan.bestFor}</p>
            </div>
          </div>
        </div>

        <div className="mb-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-white">
              <ShieldCheck size={20} className="text-viva-green" />
              Included Features
            </h3>
            <div className="space-y-3">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-white/75">
                  <CheckCircle2 size={18} className="shrink-0 text-viva-green" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-white">
              <CreditCard size={20} className="text-viva-green" />
              V3 Demo Notes
            </h3>
            <div className="space-y-3">
              {plan.limits.map((limit) => (
                <div key={limit} className="flex items-center gap-3 text-white/75">
                  <CheckCircle2 size={18} className="shrink-0 text-viva-green" />
                  <span>{limit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm text-yellow-100">
          This is a demo plan selection flow. No real payment is processed in Version 3.
          Real payment can be added later using Stripe, SSLCommerz, bKash, Nagad, or another payment provider with a secure backend.
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => onConfirm(plan)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-viva-green px-6 py-3 font-semibold text-black hover:shadow-[0_0_30px_rgba(71,240,125,0.3)]"
          >
            {plan.contactOnly ? "Save Plan and Contact" : "Confirm Demo Plan"}
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onClose}
            className="rounded-full border border-white/10 px-6 py-3 font-semibold text-white/80 hover:border-viva-green/40 hover:text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
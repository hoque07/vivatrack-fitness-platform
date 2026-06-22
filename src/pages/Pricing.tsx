import { ArrowRight, BadgeCheck, CheckCircle2, DollarSign, Mail, Star, Zap } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import PricingPlanModal from "../components/PricingPlanModal";
import { getPlanById, type V3PricingPlan, v3PricingPlans } from "../data/v3Pricing";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Pricing() {
  const navigate = useNavigate();
  const [activePlan, setActivePlan] = useState<V3PricingPlan | null>(null);
  const [selectedPlanId, setSelectedPlanId] = useLocalStorage<string | null>(
    "vivatrack_selected_plan",
    null
  );

  const selectedPlan = getPlanById(selectedPlanId);

  function handleConfirmPlan(plan: V3PricingPlan) {
    setSelectedPlanId(plan.id);
    setActivePlan(null);

    if (plan.contactOnly) {
      navigate("/contact");
    }
  }

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 inline-flex rounded-full border border-viva-green/30 bg-viva-green/10 px-4 py-2 text-sm text-viva-green">
            VivaTrack V3 Pricing
          </p>
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Select a plan and continue with a demo flow.
          </h1>
          <p className="mt-5 text-lg text-white/70">
            Pricing buttons now open a plan modal, save the selected plan, and guide the user to the next action.
          </p>
        </div>

        {selectedPlan && (
          <div className="glass mb-8 rounded-3xl p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm text-viva-green">Current Demo Plan</p>
                <p className="text-xl font-semibold text-white">
                  {selectedPlan.name} • {selectedPlan.price} {selectedPlan.billing}
                </p>
              </div>

              <button
                onClick={() => setSelectedPlanId(null)}
                className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/80 hover:border-red-400/40 hover:text-red-300"
              >
                Clear Selection
              </button>
            </div>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-3">
          {v3PricingPlans.map((plan) => {
            const isSelected = selectedPlanId === plan.id;

            return (
              <article
                key={plan.id}
                className={`glass relative rounded-3xl p-6 ${
                  plan.badge ? "border-viva-green/30" : ""
                }`}
              >
                {plan.badge && (
                  <div className="absolute right-6 top-6 rounded-full bg-viva-green px-3 py-1 text-xs font-bold text-black">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <div className="mb-4 inline-flex rounded-2xl bg-viva-green/10 p-3 text-viva-green">
                    {plan.id === "starter" && <Zap size={24} />}
                    {plan.id === "pro" && <Star size={24} />}
                    {plan.id === "coach" && <Mail size={24} />}
                  </div>

                  <h2 className="text-2xl font-bold text-white">{plan.name}</h2>
                  <p className="mt-2 text-white/60">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="pb-2 text-white/50">{plan.billing}</span>
                  </div>
                  <p className="mt-3 text-sm text-white/60">{plan.bestFor}</p>
                </div>

                <div className="mb-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-white/75">
                      <CheckCircle2 size={17} className="shrink-0 text-viva-green" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {isSelected && (
                  <div className="mb-5 flex items-center gap-2 rounded-2xl border border-viva-green/20 bg-viva-green/10 px-4 py-3 text-sm text-viva-green">
                    <BadgeCheck size={17} />
                    Selected demo plan
                  </div>
                )}

                <button
                  onClick={() => setActivePlan(plan)}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold ${
                    plan.badge
                      ? "bg-viva-green text-black hover:shadow-[0_0_30px_rgba(71,240,125,0.3)]"
                      : "border border-white/10 text-white/80 hover:border-viva-green/40 hover:text-white"
                  }`}
                >
                  {isSelected ? "View Selected Plan" : plan.cta}
                  <ArrowRight size={17} />
                </button>
              </article>
            );
          })}
        </div>

        <div className="mt-10 glass rounded-3xl p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <DollarSign className="mb-4 text-viva-green" size={34} />
              <h2 className="text-3xl font-bold text-white">Payment Integration Later</h2>
              <p className="mt-3 text-white/60">
                Version 3 uses a safe demo plan selection system. Real payment should not be handled only from GitHub Pages frontend.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Stripe checkout backend",
                "SSLCommerz for Bangladesh",
                "bKash or Nagad payment",
                "Supabase user plan tracking"
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/75">
                  <CheckCircle2 className="mb-3 text-viva-green" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PricingPlanModal
        plan={activePlan}
        onClose={() => setActivePlan(null)}
        onConfirm={handleConfirmPlan}
      />
    </Layout>
  );
}
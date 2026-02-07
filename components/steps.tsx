"use client";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ClipboardList, CheckCircle2, Luggage, Send } from "lucide-react";
import { useState } from "react";
import { ReservationModal } from "@/components/reservation-modal";
import { useTranslation } from "react-i18next";

const steps = [
  { number: "01", titleKey: "steps.list.step1", icon: ClipboardList },
  { number: "02", titleKey: "steps.list.step2", icon: CheckCircle2 },
  { number: "03", titleKey: "steps.list.step3", icon: Luggage },
];

export function Steps() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const [reservationOpen, setReservationOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background pattern - topographic lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 Q250,150 500,200 T1000,200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
          />
          <path
            d="M0,250 Q250,200 500,250 T1000,250"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
          />
          <path
            d="M0,300 Q250,250 500,300 T1000,300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
          />
          <path
            d="M0,350 Q250,300 500,350 T1000,350"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
          />
          <path
            d="M0,400 Q250,350 500,400 T1000,400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
          />
        </svg>
      </div>

      {/* Paper airplane decoration */}
      <div
        className={`absolute top-16 right-8 lg:right-24 transition-all duration-1000 delay-500 ${
          sectionVisible
            ? "opacity-100 translate-x-0 translate-y-0"
            : "opacity-0 -translate-x-10 translate-y-10"
        }`}
      >
        <Send
          className="w-12 h-12 lg:w-16 lg:h-16 text-primary rotate-[-30deg]"
          strokeWidth={1}
        />
      </div>

      <div ref={sectionRef} className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`mb-16 lg:mb-20 max-w-2xl transition-all duration-700 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t("steps.title")}
          </h2>
          <p className="text-foreground/60 leading-relaxed">
            {t("steps.description")}
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
          >
            <path
              d="M100,320 C250,320 250,200 400,200 C550,200 550,80 700,80"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="8 8"
              className={`transition-all duration-1000 delay-300 ${
                sectionVisible ? "opacity-40" : "opacity-0"
              }`}
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center md:items-${
                  index === 2 ? "end" : index === 1 ? "" : "start"
                } md:mt-${
                  index === 1 ? "16" : index === 0 ? "32" : "0"
                } transition-all duration-700 ${
                  sectionVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                {index !== 2 && (
                  <span className="text-primary font-semibold text-lg mb-4">
                    {t("steps.step")} {step.number}
                  </span>
                )}
                <p
                  className={`text-foreground/80 text-center md:text-${
                    index === 2 ? "right" : index === 1 ? "" : "left"
                  } mb-6 max-w-[200px]`}
                >
                  {t(step.titleKey)}
                </p>
                <div className="relative">
                  <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center bg-background">
                    <step.icon
                      className="w-12 h-12 lg:w-14 lg:h-14 text-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                {index === 2 && (
                  <span className="text-primary font-semibold text-lg mb-4">
                    {t("steps.step")} {step.number}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-20 text-center transition-all duration-700 delay-700 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-foreground/60 mb-6">{t("steps.cta")}</p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full"
            onClick={() => setReservationOpen(true)}
          >
            {t("steps.bookButton")}
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

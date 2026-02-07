"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTranslation } from "react-i18next";

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();

  // FAQs defined directly inside the function
  const faqs = [
    {
      questionKey: "faq.list.cancellation.question",
      answerKey: "faq.list.cancellation.answer",
    },
    {
      questionKey: "faq.list.whyHTL.question",
      answerKey: "faq.list.whyHTL.answer",
    },
    {
      questionKey: "faq.list.advanceBooking.question",
      answerKey: "faq.list.advanceBooking.answer",
    },
    {
      questionKey: "faq.list.paymentMethods.question",
      answerKey: "faq.list.paymentMethods.answer",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
            {t("faq.title")}
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`bg-card border border-border rounded-xl lg:rounded-2xl px-6 overflow-hidden transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {t(faq.questionKey)}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-base pb-5">
                  {t(faq.answerKey)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const faqs = [
  {
    question: "Is cancellation charged?",
    answer: "Free cancellation up to 24 hours before the appointment.",
  },
  {
    question: "Why choose AN Group?",
    answer: "Luxury vehicles, professional drivers, guaranteed prices.",
  },
  {
    question: "How far in advance can I book?",
    answer:
      "Up to 3 months in advance, urgent transfers available within 2 hours.",
  },
  {
    question: "Payment methods?",
    answer: "Cards, PayPal, cash, and invoicing for companies.",
  },
];

export function Features() {
  const { ref, isVisible } = useScrollAnimation();

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
            Frequently Asked Questions
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
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-base pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

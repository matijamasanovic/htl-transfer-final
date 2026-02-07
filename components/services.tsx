"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTranslation } from "react-i18next";

import serviceImg1 from "../public/services-img1.jpg";
import serviceImg2 from "../public/services-img2.jpg";
import serviceImg3 from "../public/services-img3.jpg";
import serviceImg4 from "../public/services-img4.jpg";
import serviceImg5 from "../public/services-img5.jpg";
import serviceImg6 from "../public/services-img6.jpg";

function ServiceCard({
  service,
  index,
  className,
}: {
  service: { title: string; image: any };
  index: number;
  className?: string;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      className={`relative group overflow-hidden rounded-2xl lg:rounded-3xl cursor-pointer ${className} transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Image
        src={service.image || "/placeholder.svg"}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      <div className="absolute inset-0 flex items-end p-4 lg:p-6">
        <div className="transform transition-transform duration-500 group-hover:translate-y-0">
          <h3 className="text-foreground font-bold text-lg lg:text-2xl">
            {service.title}
          </h3>
          <div className="flex items-center gap-2 mt-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm">{t("services.learnMore")}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const { t } = useTranslation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  // Translatable services
  const services = [
    { title: t("services.list.carRental.title"), image: serviceImg1 },
    { title: t("services.list.airportTransfers.title"), image: serviceImg2 },
    { title: t("services.list.groupTransfers.title"), image: serviceImg3 },
    { title: t("services.list.limoService.title"), image: serviceImg4 },
    {
      title: t("services.list.internationalTransfers.title"),
      image: serviceImg5,
    },
    {
      title: t("services.list.eventBusinessTransfers.title"),
      image: serviceImg6,
    },
  ];

  return (
    <section id="usluge" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`mb-12 lg:mb-16 transition-all duration-700 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            {t("services.pageTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Row 1 */}
          <ServiceCard
            service={services[0]}
            index={0}
            className="aspect-square"
          />
          <ServiceCard
            service={services[1]}
            index={1}
            className="aspect-square"
          />
          <ServiceCard
            service={services[2]}
            index={2}
            className="aspect-square"
          />
          <ServiceCard
            service={services[3]}
            index={3}
            className="aspect-square lg:row-span-2 lg:aspect-auto"
          />

          {/* Row 2 */}
          <ServiceCard
            service={services[4]}
            index={4}
            className="col-span-2 aspect-[2/1]"
          />
          <ServiceCard
            service={services[5]}
            index={5}
            className="col-span-2 lg:col-span-1 aspect-[2/1] lg:aspect-square"
          />
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            titleVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link
            href="/usluge"
            className="inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors font-medium text-lg group"
          >
            {t("services.viewAll")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

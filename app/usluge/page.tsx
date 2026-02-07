"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

// Images
import aerodromski from "@/public/aerodromski-transferi.png";
import eventImg from "@/public/event.png";
import grupni from "@/public/grupni-transferi.png";
import limo from "@/public/limo-servis.png";
import medjunarodni from "@/public/medjunarodni-transferi.png";
import medjugradski from "@/public/medjugradski-transferi.png";
import svecane from "@/public/svecane-prilike.png";
import vozilo from "@/public/vozilo-sa-vozacem.png";

export default function UslugePage() {
  const { t } = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  const services = [
    {
      title: t("services.list.airportTransfers.title"),
      description: t("services.list.airportTransfers.description"),
      image: aerodromski,
      slug: "aerodromski-transferi",
    },
    {
      title: t("services.list.limoService.title"),
      description: t("services.list.limoService.description"),
      image: limo,
      slug: "limo-servis",
    },
    {
      title: t("services.list.intercityTransfers.title"),
      description: t("services.list.intercityTransfers.description"),
      image: medjugradski,
      slug: "medjugradski-transferi",
    },
    {
      title: t("services.list.internationalTransfers.title"),
      description: t("services.list.internationalTransfers.description"),
      image: medjunarodni,
      slug: "medjunarodni-transferi",
    },
    {
      title: t("services.list.carRental.title"),
      description: t("services.list.carRental.description"),
      image: vozilo,
      slug: "najam-vozila",
    },
    {
      title: t("services.list.specialOccasions.title"),
      description: t("services.list.specialOccasions.description"),
      image: svecane,
      slug: "svecane-prilike",
    },
    {
      title: t("services.list.eventBusinessTransfers.title"),
      description: t("services.list.eventBusinessTransfers.description"),
      image: eventImg,
      slug: "event-biznis",
    },
    {
      title: t("services.list.groupTransfers.title"),
      description: t("services.list.groupTransfers.description"),
      image: grupni,
      slug: "grupni-transferi",
    },
  ];

  function ServiceCard({
    service,
    index,
  }: {
    service: (typeof services)[0];
    index: number;
  }) {
    const { ref, isVisible } = useScrollAnimation();

    return (
      <div
        ref={ref}
        className={`relative rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.02] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="relative w-full h-72 sm:h-80 lg:h-64">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
            <h3 className="text-2xl sm:text-3xl lg:text-2xl font-bold text-white mb-1">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base text-white/90 mb-3 line-clamp-2">
              {service.description}
            </p>
            <Link href={`/kontakt`}>
              <Button
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10 rounded-full px-4 py-2 text-sm"
              >
                {t("services.learnMore")}
                <span className="ml-2">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background relative">
      {/* Topographic background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="topo-pattern"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 50 Q50 30 100 50 T200 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <path
                d="M0 100 Q50 80 100 100 T200 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <path
                d="M0 150 Q50 130 100 150 T200 150"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="100"
                cy="100"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="100"
                cy="100"
                r="50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#topo-pattern)"
            className="text-foreground"
          />
        </svg>
      </div>

      <Header />

      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div
            ref={headerRef}
            className={`mb-12 transition-all duration-700 ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              {t("services.pageTitle")}
            </h1>
            <p className="text-foreground/60 text-lg sm:text-xl">
              {t("services.pageDescription")}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

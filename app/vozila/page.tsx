"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Users, Briefcase } from "lucide-react";
import Image from "next/image";
import { ReservationModal } from "@/components/reservation-modal";
import { useTranslation } from "react-i18next";

const vehiclesData = [
  {
    key: "0",
    nameKey: "vehicles.list.0.name",
    descKey: "vehicles.list.0.description",
    passengers: 3,
    luggage: 3,
    classKey: "vehicles.list.0.classType",
    classColor: "bg-amber-600",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&h=600&fit=crop",
  },
  {
    key: "1",
    nameKey: "vehicles.list.1.name",
    descKey: "vehicles.list.1.description",
    passengers: 3,
    luggage: 3,
    classKey: "vehicles.list.1.classType",
    classColor: "bg-primary",
    image:
      "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&h=600&fit=crop",
  },
  {
    key: "2",
    nameKey: "vehicles.list.2.name",
    descKey: "vehicles.list.2.description",
    passengers: 7,
    luggage: 7,
    classKey: "vehicles.list.2.classType",
    classColor: "bg-primary",
    image:
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&h=600&fit=crop",
  },
];

function VehicleCard({ vehicle, index, onReserve }: any) {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Image
        src={vehicle.image || "/placeholder.svg"}
        alt={t(vehicle.nameKey)}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {t(vehicle.nameKey)}
          </h3>
          <p className="text-white/80 text-sm md:text-base max-w-md">
            {t(vehicle.descKey)}
          </p>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
              <Users className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">
                {vehicle.passengers}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
              <Briefcase className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">
                {vehicle.luggage}
              </span>
            </div>
          </div>

          <div className="mt-4">
            <span
              className={`${vehicle.classColor} text-white text-xs font-semibold px-3 py-1.5 rounded-full`}
            >
              {t(vehicle.classKey)}
            </span>
          </div>
        </div>

        <div>
          <Button
            variant="ghost"
            className="text-white hover:text-white hover:bg-white/20 p-0 h-auto font-medium"
            onClick={onReserve}
          >
            {t("buttons.reserveVehicle")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function VozilaPage() {
  const { t } = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 md:pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div
            ref={headerRef}
            className={`mb-12 transition-all duration-700 ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("vehicles.pageTitle")}
            </h1>
            <p className="text-foreground/60 text-lg">
              {t("vehicles.pageDescription")}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {vehiclesData.map((vehicle, index) => (
              <VehicleCard
                key={vehicle.key}
                vehicle={vehicle}
                index={index}
                onReserve={() => setReservationOpen(true)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

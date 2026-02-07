"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { ReservationModal } from "@/components/reservation-modal";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import logoHTD from "@/public/logo-htd.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLanguage === "en" ? "me" : "en");
  };

  const navLinks = [
    { href: "/usluge", en: "Services", me: "Usluge" },
    { href: "/vozila", en: "Our Vehicles", me: "Naša vozila" },
    { href: "/kontakt", en: "Contact", me: "Kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-24 h-24 lg:w-28 lg:h-28 relative">
              <Image
                src={logoHTD}
                alt="HTD Transfers logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-foreground/80 hover:text-foreground transition-colors"
                )}
              >
                {currentLanguage === "en" ? link.en : link.me}
              </Link>
            ))}

            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className={cn(
                "ml-4 px-3 py-1 border border-border rounded hover:bg-background/50 transition"
              )}
            >
              {currentLanguage === "en" ? "ME" : "EN"}
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setReservationOpen(true)}
            >
              {currentLanguage === "en"
                ? "Book Your Ride →"
                : "Rezervišite vožnju →"}
            </Button>
          </div>

          {/* Mobile Menu Toggle + Language */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 border border-border rounded hover:bg-background/50 transition"
            >
              {currentLanguage === "en" ? "ME" : "EN"}
            </button>

            {/* Hamburger Menu */}
            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-foreground/80 hover:text-foreground transition-colors py-2"
                  )}
                >
                  {currentLanguage === "en" ? link.en : link.me}
                </Link>
              ))}

              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2"
                onClick={() => setReservationOpen(true)}
              >
                {currentLanguage === "en"
                  ? "Book Your Ride →"
                  : "Rezervišite vožnju →"}
              </Button>
            </nav>
          </div>
        )}
      </div>

      {/* Reservation Modal */}
      <ReservationModal
        open={reservationOpen}
        onOpenChange={setReservationOpen}
        language={currentLanguage} // <--- prosleđujemo jezik
      />
    </header>
  );
}

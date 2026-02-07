"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const navigation = {
  main: [
    { name: "Home", href: "#" },
    { name: "Services", href: "#usluge" },
    { name: "Vehicles", href: "#vozila" },
    { name: "Pricing", href: "#cenovnik" },
    { name: "Contact", href: "/kontakt" },
  ],
  services: [
    { name: "Airport Transfer", href: "#" },
    { name: "Limo Service", href: "#" },
    { name: "International Transfer", href: "#" },
    { name: "Group Transportation", href: "#" },
  ],
};

export function Footer() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer
      ref={ref}
      className={`bg-card border-t border-border transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold text-primary">HTL</span>
              <span className="text-3xl font-bold text-foreground">
                {" "}
                Transfers
              </span>
            </Link>
            <p className="text-foreground/60 leading-relaxed">
              Luxury VIP passenger transfers domestically and internationally.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all"
              >
                <Facebook className="w-5 h-5 text-foreground/60" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all"
              >
                <Instagram className="w-5 h-5 text-foreground/60" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all"
              >
                <Linkedin className="w-5 h-5 text-foreground/60" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-foreground font-bold text-lg mb-6">Links</h3>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <a
                  href="tel:+38267506538"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  +382 67 506 538
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a
                  href="mailto:transfershtl@gmail.com"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  transfershtl@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground/60">
                  Podgorica, Montenegro
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/40">
            <p>© 2025 HTL Transfers. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

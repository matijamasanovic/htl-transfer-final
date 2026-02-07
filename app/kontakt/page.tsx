"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function KontaktPage() {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    message: "",
    email: "",
    phone: "",
    name: "",
  });

  // Remove spaces/special chars for links
  const phoneNumeric = t("contact.contactMethods.phone").replace(/\D/g, "");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="bg-background min-h-screen">
      <Header />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 800"
            preserveAspectRatio="none"
          >
            {[100, 200, 300, 400, 500, 600, 700].map((y) => (
              <path
                key={y}
                d={`M0,${y} Q250,${y - 50} 500,${y} T1000,${y}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary"
              />
            ))}
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div
            className={`mb-12 lg:mb-16 transition-all duration-700 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t("contact.pageTitle")}
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl">
              {t("contact.pageDescription")}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Contact Form */}
            <div
              className={`lg:col-span-1 transition-all duration-700 delay-100 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-foreground text-sm mb-2">
                    {t("contact.form.message")}{" "}
                    <span className="text-primary">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder={t("contact.form.messagePlaceholder")}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-foreground text-sm mb-2">
                    {t("contact.form.email")}{" "}
                    <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t("contact.form.emailPlaceholder")}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-foreground text-sm mb-2">
                    {t("contact.form.phone")}
                  </label>
                  <input
                    type="tel"
                    placeholder={t("contact.form.phonePlaceholder")}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-foreground text-sm mb-2">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("contact.form.namePlaceholder")}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full"
                >
                  {t("contact.form.sendButton")}
                </Button>
              </form>
            </div>

            {/* Contact Methods */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${phoneNumeric}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <Phone className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-foreground/80 group-hover:text-primary transition-colors">
                    {t("contact.contactMethods.phone")}
                  </span>
                </a>

                {/* WhatsApp / Viber */}
                <div className="flex items-center gap-4">
                  <a
                    href={`https://wa.me/${phoneNumeric}`}
                    className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary/50 transition-colors group"
                  >
                    {/* WhatsApp SVG */}
                  </a>

                  <a
                    href={`viber://chat?number=${phoneNumeric}`}
                    className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary/50 transition-colors group"
                  >
                    {/* Viber SVG */}
                  </a>
                </div>

                {/* WeChat */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-foreground/70" />
                  </div>
                  <span className="text-foreground/80">
                    {t("contact.contactMethods.wechat")}
                  </span>
                </div>

                {/* Email */}
                <a
                  href={`mailto:${t("contact.contactMethods.email")}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <Mail className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-foreground/80 group-hover:text-primary transition-colors">
                    {t("contact.contactMethods.email")}
                  </span>
                </a>
              </div>
            </div>

            {/* Company Info */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">
                      {t("contact.company.name")}
                    </p>
                    <p className="text-foreground/60">
                      {t("contact.company.address1")}
                    </p>
                    <p className="text-foreground/60">
                      {t("contact.company.address2")}
                    </p>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <p className="text-foreground/60">
                    {t("contact.company.vat")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

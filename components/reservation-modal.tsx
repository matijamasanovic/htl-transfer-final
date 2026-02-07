"use client";

import { useState, Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Calendar,
  User,
  Car,
  ArrowRight,
  ArrowLeft,
  Check,
} from "lucide-react";

interface ReservationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  language: string; // <--- obavezno proslediti jezik
}

interface FormData {
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  vehiclePreference: string;
  firstName: string;
  lastName: string;
  phone: string;
  specialRequests: string;
}

const initialFormData: FormData = {
  pickupLocation: "",
  dropoffLocation: "",
  date: "",
  time: "",
  vehiclePreference: "",
  firstName: "",
  lastName: "",
  phone: "",
  specialRequests: "",
};

export function ReservationModal({
  open,
  onOpenChange,
  language,
}: ReservationModalProps) {
  const { t, i18n } = useTranslation();

  // Ako jezik prop ne poklapa i18n, promeni ga
  if (i18n.language !== language) i18n.changeLanguage(language);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(1);
      setFormData(initialFormData);
      setIsSubmitted(false);
    }, 300);
  };

  const isStep1Valid = formData.pickupLocation && formData.dropoffLocation;
  const isStep2Valid = formData.date && formData.time;
  const isStep3Valid = formData.vehiclePreference.trim().length > 0;
  const isStep4Valid =
    formData.firstName && formData.lastName && formData.phone;

  const stepIndicators = [
    { number: 1, icon: MapPin, label: t("reservation.steps.destination") },
    { number: 2, icon: Calendar, label: t("reservation.steps.date") },
    { number: 3, icon: Car, label: t("reservation.steps.vehicle") },
    { number: 4, icon: User, label: t("reservation.steps.details") },
  ];

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Check className="w-8 h-8 text-primary" />
            </div>

            <DialogTitle className="text-2xl font-bold text-foreground mb-2">
              {t("reservation.success.title")}
            </DialogTitle>

            <DialogDescription className="text-foreground/60 mb-6">
              {t("reservation.success.description")}
            </DialogDescription>

            <Button
              onClick={handleClose}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {t("reservation.success.closeButton")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-2xl font-bold text-foreground">
            {t("reservation.title")}
          </DialogTitle>
          <DialogDescription className="text-foreground/60">
            {t("reservation.subtitle")}
          </DialogDescription>
        </DialogHeader>

        {/* Step Indicators */}
        <div className="flex items-center justify-between mb-6 px-2">
          {stepIndicators.map((indicator, index) => (
            <div key={indicator.number} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    step >= indicator.number
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground/40"
                  }`}
                >
                  <indicator.icon className="w-5 h-5" />
                </div>
                <span
                  className={`text-xs mt-2 transition-colors ${
                    step >= indicator.number
                      ? "text-primary"
                      : "text-foreground/40"
                  }`}
                >
                  {indicator.label}
                </span>
              </div>
              {index < stepIndicators.length - 1 && (
                <div
                  className={`w-8 sm:w-12 h-0.5 mx-1 sm:mx-2 mb-6 transition-colors ${
                    step > indicator.number ? "bg-primary" : "bg-secondary"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Forms */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>{t("reservation.form.pickupLocation")}</Label>
              <Input
                placeholder={t("reservation.form.pickupPlaceholder")}
                value={formData.pickupLocation}
                onChange={(e) =>
                  updateFormData("pickupLocation", e.target.value)
                }
              />
            </div>

            <div className="space-y-2">
              <Label>{t("reservation.form.dropoffLocation")}</Label>
              <Input
                placeholder={t("reservation.form.dropoffPlaceholder")}
                value={formData.dropoffLocation}
                onChange={(e) =>
                  updateFormData("dropoffLocation", e.target.value)
                }
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>{t("reservation.form.date")}</Label>
              <Input
                type="date"
                value={formData.date}
                onChange={(e) => updateFormData("date", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>{t("reservation.form.time")}</Label>
              <Input
                type="time"
                value={formData.time}
                onChange={(e) => updateFormData("time", e.target.value)}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <Label>{t("reservation.form.vehicle")}</Label>
            <Textarea
              placeholder={t("reservation.form.vehiclePlaceholder")}
              value={formData.vehiclePreference}
              onChange={(e) =>
                updateFormData("vehiclePreference", e.target.value)
              }
            />
            <p className="text-xs text-foreground/50">
              {t("reservation.form.vehicleNote")}
            </p>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>{t("reservation.form.firstName")}</Label>
                <Input
                  placeholder={t("reservation.form.firstNamePlaceholder")}
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                />
              </div>

              <div>
                <Label>{t("reservation.form.lastName")}</Label>
                <Input
                  placeholder={t("reservation.form.lastNamePlaceholder")}
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label>{t("reservation.form.phone")}</Label>
              <Input
                type="tel"
                placeholder={t("reservation.form.phonePlaceholder")}
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
              />
            </div>

            <div>
              <Label>{t("reservation.form.specialRequests")}</Label>
              <Textarea
                placeholder={t("reservation.form.specialRequestsPlaceholder")}
                value={formData.specialRequests}
                onChange={(e) =>
                  updateFormData("specialRequests", e.target.value)
                }
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between pt-4 mt-2 border-t border-border">
          {step > 1 ? (
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("reservation.buttons.back")}
            </Button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <Button onClick={handleNext}>
              {t("reservation.buttons.next")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting
                ? t("reservation.buttons.sending")
                : t("reservation.buttons.sendRequest")}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

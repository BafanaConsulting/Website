"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "lucide-react"

interface ConsultationDialogProps {
  trigger?: React.ReactNode
}

export function ConsultationDialog({ trigger }: ConsultationDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = {
      fullName: formData.get("fullName"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      consultationDate: formData.get("consultationDate"),
      consultationTime: formData.get("consultationTime"),
      business: formData.get("business"),
    }

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error("Failed to send your request")
      }

      setIsSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again or email us directly at bheki.malinga@bafanaconsulting.co.za")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Consultation
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Schedule a Consultation</DialogTitle>
          <DialogDescription>
            Fill out the form below and our team will get back to you within 24 hours to schedule your consultation.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Request Sent Successfully!</h3>
            <p className="text-center text-muted-foreground">
              Your information has been sent to our team. Someone from Bafana Consulting will be in contact with you shortly.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setIsSubmitted(false)
                setIsOpen(false)
              }}
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input id="fullName" name="fullName" placeholder="John Doe" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company Name *</Label>
              <Input id="company" name="company" placeholder="Your Company" required />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" placeholder="john.doe@company.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+27 11 123 4567" required />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="consultationDate">Preferred Date *</Label>
                <Input id="consultationDate" name="consultationDate" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="consultationTime">Preferred Time *</Label>
                <Input id="consultationTime" name="consultationTime" type="time" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="business">Message / Consultation Notes</Label>
              <Textarea
                id="business"
                name="business"
                placeholder="Please describe the services you're interested in or any additional notes for your consultation..."
                className="min-h-[120px]"
              />
            </div>
            {/* </CHANGE> */}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

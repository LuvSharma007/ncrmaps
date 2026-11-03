'use client'

import React, { useState } from 'react'
import { MessageCircle, Phone, CheckCircle2, Send, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const ContactCTASection = () => {
  const phoneNumber = '+91 62000-69000'
  const cleanPhone = '916200069000'

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    location: 'Noida',
    propertyType: 'Residential Plot',
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name.trim() || !formState.phone.trim()) return

    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <section id="contact-advisory" className="relative w-full bg-zinc-950 text-white py-20 px-6 md:px-12 border-b border-zinc-800/80 font-sans">
      <div className="relative z-10 max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Direct Contact Options */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
              Personalized Guidance
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
              Speak With A Local NCR Property Advisor
            </h2>

            <p className="text-sm md:text-base text-zinc-400 leading-relaxed [text-wrap:balance]">
              Whether you need high-resolution sector blueprints, boundary measurements, or on-ground plot verification, our senior consultants are available 7 days a week.
            </p>

            {/* Direct Connect Pills / Quick Actions */}
            <div className="pt-2 space-y-3">
              <a
                href={`tel:${cleanPhone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-400/50 hover:bg-zinc-800/60 transition-all group"
              >
                <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:bg-amber-500/20">
                  <Phone className="size-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Direct Advisory Hotline</div>
                  <div className="text-sm md:text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {phoneNumber}
                  </div>
                </div>
              </a>

              <a
                href={`https://wa.me/${cleanPhone}?text=Hi,%20I%20would%20like%20to%20discuss%20property%20maps%20and%20plots%20in%20NCR.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-800/60 transition-all group"
              >
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500/20">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Instant WhatsApp Chat</div>
                  <div className="text-sm md:text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Chat with Advisory Team
                  </div>
                </div>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-500">
              <Clock className="size-3.5 text-amber-400" />
              <span>Average response time: under 15 minutes</span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Request Received Successfully
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formState.name}</strong>. An advisor specializing in{' '}
                    <strong className="text-amber-400">{formState.location}</strong> will contact you at{' '}
                    <span className="font-mono text-white">{formState.phone}</span> shortly with verified layout details.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false)
                      setFormState({
                        name: '',
                        phone: '',
                        location: 'Noida',
                        propertyType: 'Residential Plot',
                        notes: ''
                      })
                    }}
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 hover:text-white"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Schedule Free Consultation &amp; Site Visit
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Fill out your requirement and we will prepare relevant sector layout blueprints for you.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-300">Your Full Name *</label>
                      <Input
                        required
                        type="text"
                        placeholder="e.g. Rajesh Sharma"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="bg-zinc-950 border-zinc-700 text-white placeholder:text-zinc-500 rounded-xl text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-300">Phone Number *</label>
                      <Input
                        required
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="bg-zinc-950 border-zinc-700 text-white placeholder:text-zinc-500 rounded-xl text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-300">Area of Interest</label>
                      <select
                        value={formState.location}
                        onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-700 text-white rounded-xl px-3 py-2.5 text-sm outline-none focus:border-amber-400 cursor-pointer"
                      >
                        <option value="Noida">Noida (Sectors 1 to 168)</option>
                        <option value="Greater Noida">Greater Noida (Alpha, Gamma, Ecotech)</option>
                        <option value="Yamuna Expressway">Yamuna Expressway (Airport Corridor)</option>
                        <option value="General Investment">General Investment Advisory</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-300">Property Category</label>
                      <select
                        value={formState.propertyType}
                        onChange={(e) => setFormState({ ...formState, propertyType: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-700 text-white rounded-xl px-3 py-2.5 text-sm outline-none focus:border-amber-400 cursor-pointer"
                      >
                        <option value="Residential Plot">Authority Residential Plot</option>
                        <option value="Apartment / Villa">Apartment / Luxury Villa</option>
                        <option value="Commercial Shop/Office">Commercial / Retail Office</option>
                        <option value="Industrial Plot">Industrial Land / Warehouse</option>
                        <option value="Farmer Quota">Farmer Quota (5% / 7% Abadi)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">Specific Sector or Question (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Looking for Sector 18 YEIDA 300 sqm plot layout..."
                      value={formState.notes}
                      onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-700 text-white placeholder:text-zinc-500 rounded-xl px-3 py-2 text-sm outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold py-3 rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span>Scheduling...</span>
                    ) : (
                      <>
                        <Send className="size-4" />
                        <span>Confirm Consultation Request</span>
                      </>
                    )}
                  </Button>

                  <p className="text-[11px] text-zinc-500 text-center">
                    Zero spam promise. Your information is only used to coordinate your property inquiry.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ContactCTASection
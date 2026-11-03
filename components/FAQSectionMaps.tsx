'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const FAQSectionMaps = () => {
  const faqs = [
    {
      question: 'Which maps are available on Chhabra Properties?',
      answer: 'You can find Greater Noida sector maps, the Yamuna Expressway (YEIDA) layout and master plan, and the Noida and Noida Extension master plan.',
    },
    {
      question: 'How do I find a specific sector map?',
      answer: 'Open the Greater Noida map page and use the search box or zone filters. Each sector has its own page with a layout map and nearby locality details.',
    },
    {
      question: 'Are these maps useful before buying a plot or house?',
      answer: 'Yes. A layout map shows roads, blocks, parks and commercial belts, so you can compare locations and plan a site visit. Always confirm plot details with the authority and our team before buying.',
    },
    {
      question: 'Can I schedule a property visit?',
      answer: 'Absolutely! You can easily book a free site visit with our expert property advisors who will accompany you and guide you through the property.',
    },
    {
      question: 'Can NCRMAPS help me choose a location?',
      answer: 'Yes. Share your budget and purpose and we will shortlist residential, commercial or industrial options in Greater Noida, Noida and along the Yamuna Expressway. Call +91 62000-69000.',
    },
  ]

  return (
    <section className="relative w-full bg-black text-white py-24 px-6 md:px-12 overflow-hidden font-sans">
      
      {/* Grid Pattern Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.12]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(234, 179, 8, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(234, 179, 8, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-amber-400">
            FAQS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Got Questions? Have Answers
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl">
            Quick answers about property buying, selling, investment, loans and legal documentation.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="w-full bg-zinc-950/80 border border-amber-500/20 rounded-2xl p-2 md:p-4 backdrop-blur-md shadow-xl">
          <Accordion defaultValue={['item-0']} className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-amber-500/20 last:border-b-0 px-4 py-1 data-[state=open]:bg-zinc-900/50 rounded-xl transition-colors"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-white hover:text-amber-400 py-4 transition-colors [&[data-state=open]]:text-amber-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-zinc-400 leading-relaxed pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  )
}

export default FAQSectionMaps

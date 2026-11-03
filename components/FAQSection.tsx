'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const FAQSection = () => {
  const faqs = [
    {
      question: 'What types of properties do you deal in?',
      answer: 'We deal in residential, commercial, industrial, agricultural and investment properties across Noida, Greater Noida, Delhi NCR and other prime locations.',
    },
    {
      question: 'Do you help with home loans and financing?',
      answer: 'Yes, we assist our clients with end-to-end loan processing, partnering with leading banks and financial institutions to secure the best interest rates.',
    },
    {
      question: 'Is there any brokerage or hidden charge?',
      answer: 'We maintain 100% transparency with clear and honest pricing. All terms are discussed upfront with no hidden charges.',
    },
    {
      question: 'Can I schedule a property visit?',
      answer: 'Absolutely! You can easily book a free site visit with our expert property advisors who will accompany you and guide you through the property.',
    },
    {
      question: 'Do you provide legal and documentation support?',
      answer: 'Yes, from property title verification and agreement drafting to final registry assistance, our legal experts handle the entire paperwork safely.',
    },
    {
      question: 'Do you work with investors as well?',
      answer: 'Yes, we specialize in high-ROI commercial and residential investment advisory tailored to long-term wealth creation strategies.',
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

export default FAQSection

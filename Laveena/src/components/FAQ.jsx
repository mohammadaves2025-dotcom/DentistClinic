import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: "Is the PRP skin renewal treatment painful?",
    answer: "Not at all. We use a topical numbing cream before the procedure to ensure you are completely comfortable. Most patients only feel a mild tingling sensation. The downtime is minimal, and you can resume normal activities quickly."
  },
  {
    question: "Do you offer painless root canals?",
    answer: "Yes! Advanced dentistry has evolved. We use the latest rotary endodontics and highly effective local anesthesia to ensure your root canal is as painless and comfortable as a routine filling."
  },
  {
    question: "Where exactly is the clinic located in Batla House?",
    answer: "We are located at H, Batla House, Jamia, Okhla. The easiest landmark is the PNB ATM on 92 Muradi Road in Jamia Nagar. You can find our exact Google Maps pin in the footer below."
  },
  {
    question: "How do I book an appointment?",
    answer: "The fastest way to book is by clicking the WhatsApp button on your screen or calling us directly at +91 84452 47520. We will help you find a slot that fits your schedule."
  },
  {
    question: "Do you provide consultations for cosmetic dentistry?",
    answer: "Absolutely. Whether you are looking for teeth whitening, invisible aligners, or a complete smile makeover, Dr. Laveena provides comprehensive consultations to discuss your goals and treatment options."
  }
];

const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-teal-600' : 'text-slate-900 group-hover:text-teal-600'}`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`shrink-0 ml-4 p-2 rounded-full ${isOpen ? 'bg-teal-50 text-teal-600' : 'bg-slate-50 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-600'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed pr-8 md:pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6">
            <MessageCircleQuestion size={32} />
          </div>
          <h2 className="text-teal-600 font-bold tracking-wide uppercase text-sm mb-3">Got Questions?</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">Frequently Asked Questions</h3>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-200/20">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
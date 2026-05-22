'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormField {
  id: string;
  label: string;
  type: 'text' | 'tel' | 'email' | 'select' | 'textarea';
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

const formFields: FormField[] = [
  {
    id: 'name',
    label: "What's your name?",
    type: 'text',
    placeholder: 'Your full name',
    required: true,
  },
  {
    id: 'business',
    label: 'What business do you run?',
    type: 'text',
    placeholder: 'Business name',
    required: true,
  },
  {
    id: 'phone',
    label: 'Best number to reach you?',
    type: 'tel',
    placeholder: '+971 XX XXX XXXX',
    required: true,
  },
  {
    id: 'email',
    label: 'Your email address',
    type: 'email',
    placeholder: 'you@business.com',
    required: true,
  },
  {
    id: 'adSpend',
    label: 'Current monthly ad spend?',
    type: 'select',
    placeholder: 'Select range',
    options: ['Under 5,000 AED', '5,000 – 15,000 AED', '15,000 – 50,000 AED', '50,000+ AED', 'Not spending yet'],
  },
  {
    id: 'goal',
    label: 'What would you like to improve?',
    type: 'textarea',
    placeholder: 'Share a bit about what you need help with...',
    required: false,
  },
];

const BookCallModal: React.FC<BookCallModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setStep(0);
      setFormData({});
      setSubmitted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const currentField = formFields[step];
  const totalSteps = formFields.length;

  const updateValue = (value: string) => {
    setFormData(prev => ({ ...prev, [currentField.id]: value }));
  };

  const handleNext = () => {
    if (currentField.required && !formData[currentField.id]?.trim()) return;
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const message = formFields
      .map(f => `${f.label}\n${formData[f.id] || '—'}`)
      .join('\n\n');

    // Send email via PHP mailer
    try {
      const formPayload = new FormData();
      formPayload.append('subject', 'New Strategy Call Request');
      formPayload.append('from_name', formData['name'] || 'Website Visitor');
      formPayload.append('from_email', formData['email'] || 'noreply@kemetads.ae');
      formPayload.append('message', message);

      await fetch('/mailer.php', {
        method: 'POST',
        body: formPayload,
      });
    } catch (e) {
      // Email failed, still proceed to WhatsApp
    }

    const whatsappUrl = `https://wa.me/971501412159?text=${encodeURIComponent(
      `📋 *New Strategy Call Request*\n\n${message}`
    )}`;
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !(currentField.type === 'textarea')) {
      handleNext();
    }
  };

  const progress = ((step + 1) / totalSteps) * 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="relative w-full max-w-lg"
          >
            <div className="relative rounded-3xl border border-white/[0.08] bg-[#0d1a30] overflow-hidden shadow-2xl shadow-emerald-500/10">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a30] via-[#0a1628] to-[#0d1a30]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.06)_0%,transparent_60%)]" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/[0.08] transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative z-10 p-8 md:p-10">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-emerald-400/70 uppercase">
                      Free Strategy Call
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {submitted
                      ? '🎉 You\'re all set!'
                      : 'Let\'s Build Your Growth Plan'}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                    {submitted
                      ? 'We\'ll review your responses and reach out shortly to schedule your free strategy call.'
                      : 'Answer a few quick questions so we can prepare before we talk.'}
                  </p>
                </div>

                {!submitted && (
                  <>
                    {/* Progress bar */}
                    <div className="w-full h-[2px] bg-white/[0.06] rounded-full mb-8 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      />
                    </div>

                    {/* Step indicator */}
                    <div className="flex items-center gap-2 mb-6">
                      {formFields.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                            i <= step ? 'bg-emerald-400/40' : 'bg-white/[0.04]'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Form field */}
                    <div className="min-h-[160px] flex flex-col justify-center">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                        >
                          <label className="block text-sm font-medium text-white mb-3">
                            {currentField.label}
                          </label>

                          {currentField.type === 'textarea' ? (
                            <textarea
                              value={formData[currentField.id] || ''}
                              onChange={(e) => updateValue(e.target.value)}
                              placeholder={currentField.placeholder}
                              rows={4}
                              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/30 focus:ring-1 focus:ring-emerald-500/20 transition-all resize-none"
                            />
                          ) : currentField.type === 'select' ? (
                            <div className="grid grid-cols-1 gap-2">
                              {currentField.options?.map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => {
                                    updateValue(opt);
                                    setTimeout(handleNext, 200);
                                  }}
                                  className={`text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 border ${
                                    formData[currentField.id] === opt
                                      ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400'
                                      : 'bg-white/[0.02] border-white/[0.06] text-zinc-300 hover:bg-white/[0.04] hover:border-white/[0.10]'
                                  }`}
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          ) : (
                            <input
                              type={currentField.type}
                              value={formData[currentField.id] || ''}
                              onChange={(e) => updateValue(e.target.value)}
                              onKeyDown={handleKeyDown}
                              placeholder={currentField.placeholder}
                              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/30 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                              autoFocus
                            />
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between mt-6 gap-4">
                      <button
                        onClick={() => step > 0 ? setStep(step - 1) : onClose()}
                        className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                      >
                        {step > 0 ? '← Back' : 'Cancel'}
                      </button>

                      <div className="flex items-center gap-3">
                        <span className="text-[11px] text-zinc-600">
                          Step {step + 1} of {totalSteps}
                        </span>
                        {currentField.type !== 'select' && (
                          <button
                            onClick={handleNext}
                            disabled={currentField.required && !formData[currentField.id]?.trim()}
                            className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            {step < totalSteps - 1 ? 'Next →' : 'Submit ✓'}
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center gap-4"
                  >
                    {/* Success animation */}
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <motion.svg
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-8 h-8 text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </motion.svg>
                    </div>
                    <p className="text-sm text-zinc-500 text-center">
                      Redirecting to WhatsApp to send your request...
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Bottom gradient edge */}
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookCallModal;
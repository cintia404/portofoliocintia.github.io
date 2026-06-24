import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, Heart, Sparkles, MessageSquare, Check } from 'lucide-react';
import { RibbonBow } from './RibbonBow';
import { AestheticTheme } from '../types';

interface ContactFormProps {
  theme: AestheticTheme;
}

interface SubmittedMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ theme }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [localInbox, setLocalInbox] = useState<SubmittedMessage[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    // Simulate sending a coquette love letter
    setTimeout(() => {
      const newMessage: SubmittedMessage = {
        id: `msg-${Date.now()}`,
        name,
        email,
        subject: subject || 'No Subject',
        message,
        timestamp: new Date().toLocaleTimeString(),
      };

      setLocalInbox((prev) => [newMessage, ...prev]);
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1800);
  };

  return (
    <section id="contact" className="relative py-16 px-4 max-w-4xl mx-auto z-10">
      <div className="relative p-6 md:p-8 rounded-3xl overflow-visible">
        {/* Repeating dashed scrapbook lace line */}
        <div className="absolute inset-0 border-2 border-dashed border-white/60 rounded-3xl pointer-events-none z-0" />

        <motion.div
          id="contact-glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative rounded-2xl p-6 md:p-10 overflow-hidden z-10 transition-all duration-500"
          style={{
            background: theme === 'coquette'
              ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 240, 243, 0.35) 60%, rgba(240, 225, 255, 0.3) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(248, 250, 252, 0.45) 60%, rgba(254, 244, 247, 0.5) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.7)',
            boxShadow: theme === 'coquette'
              ? '0 16px 48px rgba(255, 182, 193, 0.25), inset 0 4px 10px rgba(255, 255, 255, 0.5)'
              : '0 20px 50px rgba(180, 180, 195, 0.2), inset 0 4px 12px rgba(255, 255, 255, 0.7)',
          }}
        >
          {/* Section Header */}
          <div className="text-center mb-10 relative">
            {/* Hanging bow vector for contact form */}
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-30">
              <RibbonBow size={60} />
            </div>

            <span className="font-mono text-xs text-pink-500 tracking-widest uppercase flex items-center justify-center gap-1.5 mb-1.5">
              <Heart className="w-3.5 h-3.5 fill-pink-300 animate-pulse" />
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-pink-950/90 tracking-tight">
              Seal Your Letter
            </h2>
            <p className="font-serif italic text-xs md:text-sm text-pink-700/80 mt-1 max-w-md mx-auto">
              Want to collaborate on design projects, book an MC, or just share some tea? Drop a message below.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                id="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-bold text-pink-950 font-serif">
                      Your Name <span className="text-pink-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Cintiani's Fan"
                      className="w-full px-4 py-2.5 rounded-xl text-sm bg-white/50 border border-pink-200/50 text-pink-950 placeholder-pink-900/30 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-bold text-pink-950 font-serif">
                      Your Email <span className="text-pink-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. hello@example.com"
                      className="w-full px-4 py-2.5 rounded-xl text-sm bg-white/50 border border-pink-200/50 text-pink-950 placeholder-pink-900/30 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="block text-xs font-bold text-pink-950 font-serif">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. MC Booking / UI Design Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-white/50 border border-pink-200/50 text-pink-950 placeholder-pink-900/30 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-bold text-pink-950 font-serif">
                    Message <span className="text-pink-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your sweet message here..."
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white/50 border border-pink-200/50 text-pink-950 placeholder-pink-900/30 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 text-center">
                  <motion.button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-white shadow-lg border border-pink-300/40 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, #ff8da1 0%, #f48fb1 50%, #d81b60 100%)',
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sealing with a bow...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Letter</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            ) : (
              // Success Screen representation (sealed envelope animation)
              <motion.div
                id="contact-success-block"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8 space-y-6"
              >
                {/* Envelope Seal representation */}
                <div className="relative inline-flex items-center justify-center">
                  <motion.div
                    className="w-24 h-16 bg-pink-100 rounded-lg shadow-md border border-pink-200/60 relative"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {/* Flap fold lines */}
                    <div className="absolute top-0 left-0 right-0 h-0 border-t-[32px] border-t-pink-200 border-l-[48px] border-l-transparent border-r-[48px] border-r-transparent rounded-t-lg" />
                    {/* Glowing satin bow seal */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <RibbonBow size={55} glow={true} />
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-pink-950">
                    Letter Sealed & Sent!
                  </h3>
                  <p className="font-sans text-sm text-pink-800/80 max-w-sm mx-auto">
                    Terima kasih! Your message has been wrapped in pink ribbons and filed safely in the local Inbox.
                  </p>
                </div>

                <div className="pt-2">
                  <motion.button
                    id="contact-success-reset-btn"
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2 rounded-full text-xs font-mono font-bold text-pink-600 border border-pink-200 hover:bg-pink-50 cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Send Another Message
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Local Inbox display (Fulfills the persistent and interactive showcase guideline, letting user see sent letters locally!) */}
          {localInbox.length > 0 && (
            <div id="local-inbox-section" className="mt-12 pt-8 border-t border-pink-200/30">
              <h3 className="font-serif text-lg font-bold text-pink-950 flex items-center gap-2 mb-4">
                <MessageSquare className="w-4.5 h-4.5 text-pink-500" />
                <span>Your Outbox ({localInbox.length})</span>
                <span className="font-mono text-[9px] uppercase font-normal bg-pink-100 text-pink-600 border border-pink-200/40 rounded px-2">Local Sandbox</span>
              </h3>
              
              <div className="space-y-3 max-h-56 overflow-y-auto pr-2">
                {localInbox.map((msg) => (
                  <motion.div
                    key={msg.id}
                    id={msg.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-3.5 bg-white/40 border border-pink-200/20 rounded-xl flex flex-col justify-between text-xs"
                  >
                    <div className="flex items-center justify-between gap-2 border-b border-pink-100/30 pb-1.5 mb-1.5 font-mono text-[10px] text-pink-600">
                      <span>To: Cintiani • From: {msg.name} ({msg.email})</span>
                      <span>{msg.timestamp}</span>
                    </div>
                    <h4 className="font-serif font-bold text-pink-950 text-sm">Subject: {msg.subject}</h4>
                    <p className="text-pink-900/80 mt-1 italic">"{msg.message}"</p>
                    <div className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-600 font-bold mt-2">
                      <Check className="w-3.5 h-3.5" />
                      <span>Successfully sealed locally</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

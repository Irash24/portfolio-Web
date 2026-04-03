import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, Phone, Facebook, Instagram, CheckCircle2, AlertCircle } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setStatus('idle');

    emailjs
      .sendForm(
        'service_r2122rj',
        'template_qivwlqt',
        form.current,
        'KLx8jFwlCYSSgW_lE'
      )
      .then(
        () => {
          setStatus('success');
          setIsSubmitting(false);
          form.current?.reset();
          
          // Reset success message after 5 seconds
          setTimeout(() => setStatus('idle'), 5000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus('error');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Let's Connect
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                I'm currently looking for new opportunities, internships, and collaborations. My inbox is always open!
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:irashsasanga99@gmail.com" className="flex items-center group">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors shadow-sm border border-slate-100 dark:border-slate-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
                  <p className="text-base font-semibold text-slate-900 dark:text-white">irashsasanga99@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/94763253241" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors shadow-sm border border-slate-100 dark:border-slate-700">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">WhatsApp</p>
                  <p className="text-base font-semibold text-slate-900 dark:text-white">+94 76 325 3241</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/irash-kasthuri-arachchi-8a1806357" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors shadow-sm border border-slate-100 dark:border-slate-700">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">LinkedIn</p>
                  <p className="text-base font-semibold text-slate-900 dark:text-white">Irash Kasthuri Arachchi</p>
                </div>
              </a>

              <a href="https://github.com/Irash24/" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors shadow-sm border border-slate-100 dark:border-slate-700">
                  <Github className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">GitHub</p>
                  <p className="text-base font-semibold text-slate-900 dark:text-white">Irash24</p>
                </div>
              </a>

              <a href="https://www.facebook.com/share/17qhQwJepU/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors shadow-sm border border-slate-100 dark:border-slate-700">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Facebook</p>
                  <p className="text-base font-semibold text-slate-900 dark:text-white">Irash Kasthuri Arachchi</p>
                </div>
              </a>

              <a href="https://www.instagram.com/irash_sk?igsh=MWdsYTBibGljYWFqbw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors shadow-sm border border-slate-100 dark:border-slate-700">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Instagram</p>
                  <p className="text-base font-semibold text-slate-900 dark:text-white">@irash_sk</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow text-slate-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow text-slate-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow text-slate-900 dark:text-white"
                  placeholder="How can I help you?"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow text-slate-900 dark:text-white resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              {status === 'success' && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-xl flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-xl flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Failed to send message. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

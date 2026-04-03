import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-3">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Irash Kasthuri Arachchi
          </h1>
          <h3 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-6">
            Aspiring Network Engineer & Cybersecurity Enthusiast
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Passionate about building secure, resilient network infrastructures and exploring the ever-evolving landscape of cybersecurity and technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-full transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40"
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-blue-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img
              src="https://i.postimg.cc/gkvNDQ3R/IMG-8809-JPG.jpg"
              alt="Irash Kasthuri Arachchi"
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { FileText, Download } from 'lucide-react';

export function Resume() {
  return (
    <section id="resume" className="py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary-600 dark:bg-primary-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interested in my full profile?
            </h2>
            <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
              Download my resume to see a detailed overview of my education, skills, certifications, and project experience in networking and cybersecurity.
            </p>
            <a
              href="https://github.com/Irash24/portfolio-Web/blob/main/Irash_Resume.pdf"
              download="Irash_Resume.pdf"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary-600 bg-white hover:bg-slate-50 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

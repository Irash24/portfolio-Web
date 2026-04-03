import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ExternalLink, X } from 'lucide-react';

export function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certifications = [
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      date: '02 Aug 2025',
      link: 'https://i.postimg.cc/15Q52VVC/1754125062339.jpg',
    },
    {
      title: 'Introduction to IoT and Digital Transformation',
      issuer: 'Cisco',
      date: '02 Aug 2025',
      link: 'https://i.postimg.cc/kgZrrLhx/1754141137061.jpg',
    },
    {
      title: 'Python Essentials 1',
      issuer: 'Cisco',
      date: '03 Aug 2025',
      link: 'https://i.postimg.cc/sgbLH7vV/1754222155651.jpg',
    },
    {
      title: 'Python Essentials 2',
      issuer: 'Cisco',
      date: '06 Aug 2025',
      link: 'https://i.postimg.cc/Y9zySP8h/1754492583416.jpg',
    },
    {
      title: 'Build a Smart AI Chatbot using Microsoft Azure Tools',
      issuer: 'Microsoft',
      date: '2025',
      link: 'https://i.postimg.cc/zfnxdMmN/1754758169828.jpg',
    },
    {
      title: 'How to Deploy Docker Image to Azure Container Registrys',
      issuer: 'Microsoft',
      date: '2025',
      link: 'https://i.postimg.cc/fTJB4k4H/1759768568499.jpg',
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 group flex flex-col hover:shadow-md hover:border-primary-100 dark:hover:border-primary-900/30 transition-all"
            >
              <div className="flex items-center text-primary-600 dark:text-primary-400 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mr-4">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider">{cert.issuer}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight flex-grow">
                {cert.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                Issued: {cert.date}
              </p>
              <button
                onClick={() => setSelectedImage(cert.link)}
                className="inline-flex items-center text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors mt-auto self-start"
              >
                View Credential <ExternalLink className="w-4 h-4 ml-1.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white bg-slate-800/50 hover:bg-slate-800 p-2 rounded-full transition-all"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage}
                alt="Certificate Credential"
                className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

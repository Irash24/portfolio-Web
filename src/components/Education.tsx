import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
  const educationData = [
    {
      degree: 'BT (Hons) in Information and Communication Technology',
      institution: 'General Sir John Kotelawala Defence University (KDU)',
      location: 'Ratmalana, Sri Lanka',
      period: '2024 - Present',
      description: 'Pursuing a degree at a prestigious UGC-recognized institution that provides high-quality university education to both military personnel and civil day scholars.',
    },
    {
      degree: 'Cisco CCNA v7',
      institution: 'Cisco Networking Academy',
      location: '',
      period: 'Present',
      description: 'Currently pursuing comprehensive training in networking fundamentals, routing and switching, network security, and programmability to build a strong foundation in IT infrastructure.',
    },
    {
      degree: 'Advanced Level',
      institution: 'Pinnawala Central College-Technology Faculty',
      location: 'Pinnawala, Sri Lanka',
      period: '2020-2022',
      description: 'Completed secondary education at a prominent national school in Rambukkana, Sri Lanka, which educates nearly 3,000 students across junior and senior levels.',
    }
  ];

  return (
    <section id="education" className="py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 gap-8 items-start">
                {/* Timeline dot and line for mobile */}
                <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-slate-200 dark:bg-slate-700"></div>
                <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary-500 ring-4 ring-white dark:ring-slate-950"></div>

                {/* Left side: Period */}
                <div className="md:col-span-1 md:text-right mb-2 md:mb-0 pt-1">
                  <span className="inline-flex items-center text-sm font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {item.period}
                  </span>
                </div>

                {/* Right side: Content */}
                <div className="md:col-span-4 bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 relative">
                  {/* Timeline dot for desktop */}
                  <div className="hidden md:block absolute -left-10 top-8 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-white dark:ring-slate-950 z-10"></div>
                  {/* Timeline line for desktop */}
                  {index !== educationData.length - 1 && (
                    <div className="hidden md:block absolute -left-8 top-12 bottom-[-4rem] w-px bg-slate-200 dark:bg-slate-700"></div>
                  )}

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2 text-primary-500" />
                    {item.degree}
                  </h3>
                  <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {item.institution}
                  </h4>
                  {item.location && (
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {item.location}
                    </div>
                  )}
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

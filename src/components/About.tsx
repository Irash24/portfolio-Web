import { motion } from 'motion/react';
import { Server, Shield, Terminal } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Server className="w-6 h-6 text-primary-500" />,
      title: 'Networking',
      desc: 'Fascinated by how data travels across the globe.',
    },
    {
      icon: <Shield className="w-6 h-6 text-primary-500" />,
      title: 'Cybersecurity',
      desc: 'Dedicated to protecting systems from emerging threats.',
    },
    {
      icon: <Terminal className="w-6 h-6 text-primary-500" />,
      title: 'Infrastructure',
      desc: 'Building robust and scalable IT environments.',
    },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
              My Journey
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              I am currently pursuing my <strong className="font-semibold text-slate-900 dark:text-white">BT (Hons) in Information and Communication Technology</strong> at <strong className="font-semibold text-slate-900 dark:text-white">General Sir John Kotelawala Defence University (KDU)</strong>. My interest in technology began with a curiosity about how computers communicate and how networks operate behind the scenes. This curiosity gradually grew into a strong passion for networking and cybersecurity.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Throughout my academic journey, I have been actively learning networking fundamentals, cybersecurity concepts, and scripting with Python to strengthen my technical foundation. I enjoy exploring network configurations, troubleshooting connectivity issues, and understanding how to secure systems from potential threats.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              My ultimate career goal is to become a skilled <strong className="font-semibold text-slate-900 dark:text-white">Network Engineer and Cybersecurity Professional</strong>. I am continuously improving my knowledge, working on practical projects, and staying updated with industry trends to build a strong foundation for my future career.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid gap-6"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700"
              >
                <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-xl mr-4">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

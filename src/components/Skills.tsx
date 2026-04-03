import { motion } from 'motion/react';
import { Network, ShieldAlert, Wrench, Code, Terminal } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Networking',
      icon: <Network className="w-6 h-6" />,
      skills: ['TCP/IP', 'DNS', 'DHCP', 'Subnetting', 'Routing & Switching'],
    },
    {
      title: 'Cybersecurity',
      icon: <ShieldAlert className="w-6 h-6" />,
      skills: ['Basic Security', 'Firewalls', 'VPN', 'Threat Detection', 'Access Control'],
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['Wireshark', 'Cisco Packet Tracer', 'Linux', 'Nmap', 'VirtualBox'],
    },
    {
      title: 'Programming / Scripting',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Python'],
    },
    {
      title: 'Web Basics',
      icon: <Code className="w-6 h-6" />,
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

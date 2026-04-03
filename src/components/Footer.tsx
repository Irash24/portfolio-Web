import { Github, Linkedin, Mail, Facebook, Instagram, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 py-12 border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <a href="#home" className="text-2xl font-bold tracking-tighter text-primary-600 dark:text-primary-400 inline-block mb-2">
            IK
          </a>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Aspiring Network Engineer & Cybersecurity Enthusiast.
          </p>
        </div>

        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <a
            href="https://www.linkedin.com/in/irash-kasthuri-arachchi-8a1806357"
            target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Irash24/"
            target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.facebook.com/share/17qhQwJepU/?mibextid=wwXIfr"
            target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/irash_sk?igsh=MWdsYTBibGljYWFqbw%3D%3D&utm_source=qr"
            target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/94763253241"
            target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-colors"
            aria-label="WhatsApp"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href="mailto:irashsasanga99@gmail.com"
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <div className="text-slate-500 dark:text-slate-400 text-sm text-center md:text-right">
          &copy; {currentYear} Irash Kasthuri Arachchi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

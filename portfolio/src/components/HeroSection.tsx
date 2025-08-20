'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('heroTitle')}
          </motion.h1>

          <motion.h2 
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('heroSubtitle')}
          </motion.h2>

          <motion.p 
            className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('heroDescription')}
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={scrollToProjects}
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="flex items-center gap-2">
                {t('viewProjects')}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  →
                </motion.div>
              </span>
            </button>

            <button
              onClick={scrollToContact}
              className="group border-2 border-gray-300 hover:border-white text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {t('contact')}
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center items-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <a 
              href="https://github.com/LuccaMilanoDev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/lucca-milano" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:luccamilano2018@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        
      </div>
    </section>
  );
}

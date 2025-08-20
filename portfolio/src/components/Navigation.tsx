'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

export default function Navigation() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'experience', href: '#experience' },
    { key: 'education', href: '#education' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={scrollToTop}
          >
            <span className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Lucca Milano
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.key}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-purple-600 ${
                  isScrolled ? 'text-gray-700' : 'text-gray-200 hover:text-white'
                }`}
              >
                {t(item.key)}
              </motion.button>
            ))}

            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300 ${
                isScrolled 
                  ? 'border-gray-300 text-gray-700 hover:border-purple-400 hover:text-purple-600' 
                  : 'border-white/30 text-white hover:border-white hover:bg-white/10'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language.toUpperCase()}
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Globe className="w-5 h-5" />
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors duration-300"
                  >
                    {t(item.key)}
                  </motion.button>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  className="pt-4 border-t border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">Language:</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm ${language === 'pt' ? 'text-purple-600 font-medium' : 'text-gray-500'}`}>
                        PT
                      </span>
                      <motion.div
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleLanguage}
                        className={`w-12 h-6 rounded-full border-2 cursor-pointer transition-all duration-300 ${
                          language === 'en' 
                            ? 'bg-purple-600 border-purple-600' 
                            : 'bg-gray-200 border-gray-300'
                        }`}
                      >
                        <motion.div
                          animate={{ x: language === 'en' ? 24 : 2 }}
                          transition={{ duration: 0.3 }}
                          className="w-5 h-5 bg-white rounded-full shadow-sm"
                        />
                      </motion.div>
                      <span className={`text-sm ${language === 'en' ? 'text-purple-600 font-medium' : 'text-gray-500'}`}>
                        EN
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Code2, Coffee, Lightbulb } from 'lucide-react';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('aboutTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-120 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg shadow-lg flex items-center justify-center">
                <div className="w-full h-full">
                  <img 
                    src="/image.jpeg" 
                    alt="Profile"
                    className="w-full h-full object-cover rounded-lg"
                  />   
                </div>
              </div>   
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-50"></div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('aboutDescription')}
              </p>

              {/* Key Points */}
              <div className="grid md:grid-cols-1 gap-4 pt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Back-end Expertise</h4>
                    <p className="text-gray-600 text-sm">Spring Boot, Docker, PostgreSQL</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Agile Methodologies</h4>
                    <p className="text-gray-600 text-sm">Scrum, Kanban, Git/GitHub</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Innovation Mindset</h4>
                    <p className="text-gray-600 text-sm">Scalable & Efficient Solutions</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

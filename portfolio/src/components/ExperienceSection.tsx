'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building, Calendar, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  const { t } = useLanguage();

  const responsibilities = [
    t('resp1'),
    t('resp2'),
    t('resp3'),
    t('resp4'),
    t('resp5'),
    t('resp6')
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('experienceTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-600 to-blue-600"></div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-start"
            >
              {/* Timeline Dot */}
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center relative z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                <Building className="w-8 h-8 text-white" />
              </div>

              {/* Experience Content */}
              <div className="ml-8 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Company & Position */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t('currentPosition')}
                    </h3>
                    <div className="flex items-center gap-2 text-purple-600 font-semibold mb-2 md:justify-end">
                      <Building className="w-4 h-4" />
                      <span>{t('company')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 md:justify-end">
                      <Calendar className="w-4 h-4" />
                      <span>{t('period')}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 md:text-right">
                      {t('responsibilities')}
                    </h4>
                    <div className="space-y-3">
                      {responsibilities.map((responsibility, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 md:flex-row-reverse md:text-right"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {responsibility}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.2 }}
                    viewport={{ once: true }}
                    className="mt-6 pt-4 border-t border-gray-100"
                  >
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {['Spring Boot', 'Java', 'PostgreSQL', 'Docker', 'Next.js', 'JWT'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 text-xs font-medium rounded-full border border-purple-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Current Status Indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                viewport={{ once: true }}
                className="absolute -top-2 right-4 md:right-auto md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-8"
              >
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  {t('currentPositionLabel')}
                </span>
              </motion.div>
            </motion.div>

            {/* Future Timeline Placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true }}
              className="relative mt-12 flex items-center justify-center"
            >
              <div className="w-8 h-8 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center relative z-10 bg-white">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 text-sm mt-12 italic">
                  {t('moreExperiences')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

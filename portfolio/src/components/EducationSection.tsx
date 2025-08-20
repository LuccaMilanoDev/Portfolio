'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';

export default function EducationSection() {
  const { t } = useLanguage();

  const subjects = t('subjects').split(', ');
  
  const complementaryCourses = [
    {
      name: t('javaCourseName'),
      platform: t('platform'),
      year: '2023'
    },
    {
      name: t('frontendCourseName'),
      platform: t('platform'),
      year: '2024'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('educationTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* University Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 mb-12 border border-purple-100 shadow-lg"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {t('degree')}
                    </h3>
                    <p className="text-lg text-purple-700 font-semibold mb-2">
                      {t('university')}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600 bg-white px-4 py-2 rounded-full border border-gray-200">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{t('educationPeriod')}</span>
                  </div>
                </div>

                {/* Current Status */}
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full border border-green-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    {t('currentlyEnrolled')}
                  </span>
                </div>

                {/* Relevant Subjects */}
                <div className="mb-6">
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-4">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    {t('relevantSubjects')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {subjects.map((subject, index) => (
                      <motion.span
                        key={subject}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-300 hover:border-purple-300 hover:shadow-sm transition-all duration-300"
                      >
                        {subject}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Complementary Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              {t('complementaryCourses')}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {complementaryCourses.map((course, index) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.2) }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md hover:border-purple-300 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-800 transition-colors duration-300">
                        {course.name}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="text-purple-600 font-medium text-sm">
                          {course.platform}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {course.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Academic Achievement Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6 border border-purple-200">
              <p className="text-gray-700 font-medium">
                {t('academicAchievement')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

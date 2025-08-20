'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  SiJavascript, 
  SiPython, 
  SiTypescript,
  SiSpringboot, 
  SiReact, 
  SiNextdotjs,
  SiPostgresql, 
  SiMysql,
  SiDocker, 
  SiGit, 
  SiHtml5,
  SiCss3,
  SiJest
} from 'react-icons/si';
import { Database, Shield, Coffee, Code } from 'lucide-react';

export default function SkillsSection() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('languages'),
      skills: [
        { name: 'Java', icon: Coffee, color: 'text-orange-500' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
        { name: 'Python', icon: SiPython, color: 'text-blue-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      ]
    },
    {
      title: t('frameworks'),
      skills: [
        { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-500' },
        { name: 'React', icon: SiReact, color: 'text-cyan-500' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900' },
      ]
    },
    {
      title: t('databases'),
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
      ]
    },
    {
      title: t('tools'),
      skills: [
        { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
        { name: 'Git/GitHub', icon: SiGit, color: 'text-orange-600' },
        { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
        { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
        { name: 'JPA', icon: Database, color: 'text-purple-600' },
        { name: 'JWT', icon: Shield, color: 'text-green-600' },
        { name: 'Unit Testing', icon: SiJest, color: 'text-red-600' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('skillsTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    
                    return (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                        className="group flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300"
                      >
                        <div className="mb-3">
                          {typeof IconComponent === 'function' ? (
                            <IconComponent className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                          ) : (
                            <skill.icon className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-700 text-center group-hover:text-gray-900 transition-colors duration-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('skillsDescription')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react';

export default function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: "CRUD Spring + PostgreSQL + Docker",
      description: "CRUD simples de usuário utilizando Spring Boot, banco PostgreSQL em container Docker e boas práticas de API REST.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/LuccaMilanoDev/CRUD-spring-Postgree",
      demoUrl: null,
      icon: <Database className="w-6 h-6" />,
      gradient: "from-green-600 to-emerald-600"
    },
    {
      id: 2,
      title: "8-puzzle (IDA* / DFS Iterativo)",
      description: "Duas versões da função do 8‑puzzle: uma copiando e editando a estrutura e outra modificando o estado do pai (com undo). Implementação de busca em profundidade iterativa e comparação de performance.",
      technologies: ["Java", "Algoritmos", "Busca", "Estruturas de Dados"],
      githubUrl: "https://github.com/LuccaMilanoDev/8-puzzle",
      demoUrl: null,
      icon: <Code className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 3,
      title: "Milano Seguros (Site)",
      description: "Website institucional desenvolvido com Next.js, TypeScript e TailwindCSS.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS"],
      githubUrl: "https://github.com/LuccaMilanoDev/Milano-seguros",
      demoUrl: "https://milano-seguros.vercel.app/",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 4,
      title: "Todo List (Vanilla JS)",
      description: "Todo list com pesquisa, filtro e persistência em LocalStorage. Feita com HTML, CSS e JavaScript puro.",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      githubUrl: "https://github.com/LuccaMilanoDev/todo-list",
      demoUrl: "https://todo-list-beryl-tau.vercel.app/",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      id: 5,
      title: "GitPlus - Plataforma de Streaming (Back4App)",
      description: "Simulação de plataforma de streaming: cadastro de clientes no Back4App, lista de filmes por cliente e assinatura com até 3 perfis. Projeto em grupo da faculdade.",
      technologies: ["JavaScript", "Back4App", "Parse", "Vercel"],
      githubUrl: "https://github.com/RianDelou/GitPlus",
      demoUrl: "https://git-plus-es.vercel.app/",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 6,
      title: "iPhone 13 Page (Clone)",
      description: "Cópia da landing page do iPhone utilizando apenas HTML, CSS e JavaScript puro.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/LuccaMilanoDev/iphone13Page",
      demoUrl: "https://iphone13-page.vercel.app/",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-teal-500 to-cyan-600"
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('projectsTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('projectsDescription')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-500"
              >
                {/* Project Header */}
                <div className={`h-32 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                      {t('technologiesUsed')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded border group-hover:bg-purple-100 group-hover:text-purple-700 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors duration-300 flex-1 justify-center"
                    >
                      <Github className="w-4 h-4" />
                      {t('viewGithub')}
                    </a>
                    
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white text-sm font-medium rounded-lg transition-opacity duration-300 flex-1 justify-center`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t('viewDemo')}
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            {t('interestedCollaboration')}
          </p>
          <a
            href="https://github.com/LuccaMilanoDev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5" />
            {t('viewAllProjects')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

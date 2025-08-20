'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Hero Section
    heroTitle: "Lucca Milano Casado Dos Santos",
    heroSubtitle: "Desenvolvedor Full Stack | Java | Spring Boot | React | Next | PostgreSQL | Docker",
    heroDescription: "Construindo soluções escaláveis e inovadoras para o mundo digital.",
    viewProjects: "Ver Projetos",
    contact: "Entrar em Contato",
    
    // About Section
    aboutTitle: "Sobre Mim",
    aboutDescription: "Estudante do 8º semestre de Ciência da Computação com sólida experiência prática em desenvolvimento back-end e colaboração em front-end. Apaixonado por construir soluções escaláveis e eficientes, utilizando Spring Boot, Docker e PostgreSQL. Experiência com metodologias ágeis (Scrum e Kanban) e proficiência em Git/GitHub. Busca constante por novos desafios para aprimorar habilidades e contribuir para soluções impactantes e inovadoras.",
    
    // Skills Section
    skillsTitle: "Habilidades",
    languages: "Linguagens",
    frameworks: "Frameworks/Bibliotecas",
    databases: "Bancos de Dados",
    tools: "Ferramentas/Outros",
    
    // Experience Section
    experienceTitle: "Experiência Profissional",
    currentPosition: "Estagiário em Desenvolvimento",
    company: "Web Star Studio (former Client Hall)",
    period: "Outubro 2024 – Presente",
    responsibilities: "Responsabilidades:",
    resp1: "Desenvolvimento de APIs RESTful escaláveis e seguras com Spring Boot e Java",
    resp2: "Modelagem de dados com JPA para PostgreSQL",
    resp3: "Implementação de autenticação e autorização com JWT",
    resp4: "Gerenciamento de aplicações com Docker",
    resp5: "Participação na equipe de front-end com Next.js",
    resp6: "Foco na qualidade do código e testes unitários",
    
    // Education Section
    educationTitle: "Educação",
    degree: "Ciência da Computação",
    university: "UNICAP - Universidade Católica de Pernambuco",
    educationPeriod: "Fevereiro 2022 - Dezembro 2025 (Cursando)",
    relevantSubjects: "Disciplinas Relevantes:",
    subjects: "Java, Padrões de projeto, MySQL, PostgreSQL, JavaScript, Python, Testes Unitários, React",
    complementaryCourses: "Cursos Complementares:",
    javaCourseName: "Java COMPLETO: Do Zero ao Profissional",
    frontendCourseName: "Formação Front-end",
    platform: "Udemy",
    
    // Projects Section
    projectsTitle: "Projetos",
    projectName: "Nome do Projeto",
    projectDescription: "Descrição concisa do projeto e problema resolvido",
    technologiesUsed: "Tecnologias Utilizadas:",
    viewGithub: "Ver no GitHub",
    viewDemo: "Ver Demo",
    
    // Contact Section
    contactTitle: "Contato",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    getInTouch: "Entre em Contato",
    contactDescription: "Vamos nos conectar e discutir oportunidades para colaborar em projetos empolgantes.",
    sendMessage: "Enviar Mensagem",
    name: "Nome",
    subject: "Assunto",
    message: "Mensagem",
    nameField: "Seu nome",
    emailField: "seu.email@exemplo.com",
    subjectField: "Colaboração em projeto",
    messageField: "Conte-me sobre seu projeto ou como podemos trabalhar juntos...",
    sendMessageButton: "Enviar Mensagem",
    emailResponse: "Ou entre em contato diretamente via email para uma resposta mais rápida",
    
    // Skills Section
    skillsDescription: "Sempre aprendendo e explorando novas tecnologias para me manter atualizado com as tendências e melhores práticas da indústria.",
    
    // Experience Section
    currentPositionLabel: "Posição Atual",
    moreExperiences: "Mais experiências em breve...",
    
    // Education Section
    currentlyEnrolled: "Atualmente Matriculado - 8º Semestre",
    academicAchievement: "Combinando conhecimento acadêmico com experiência prática da indústria para construir expertise técnica abrangente.",
    
    // Projects Section
    projectsDescription: "Uma demonstração das minhas habilidades técnicas e abordagem de resolução de problemas através de vários projetos de desenvolvimento.",
    interestedCollaboration: "Interessado em ver mais do meu trabalho ou colaborar em um projeto?",
    viewAllProjects: "Ver Todos os Projetos no GitHub",
    
    // Navigation
    about: "Sobre",
    skills: "Habilidades",
    experience: "Experiência",
    education: "Educação",
    projects: "Projetos"
  },
  en: {
    // Hero Section
    heroTitle: "Lucca Milano Casado Dos Santos",
    heroSubtitle: "Full Stack Developer | Java | Spring Boot | React | Next | PostgreSQL | Docker",
    heroDescription: "Building scalable and innovative solutions for the digital world.",
    viewProjects: "View Projects",
    contact: "Get in Touch",
    
    // About Section
    aboutTitle: "About Me",
    aboutDescription: "8th semester Computer Science student with solid practical experience in back-end development and front-end collaboration. Passionate about building scalable and efficient solutions using Spring Boot, Docker, and PostgreSQL. Experienced with agile methodologies (Scrum and Kanban) and proficient in Git/GitHub. Constantly seeking new challenges to improve skills and contribute to impactful and innovative solutions.",
    
    // Skills Section
    skillsTitle: "Skills",
    languages: "Languages",
    frameworks: "Frameworks/Libraries",
    databases: "Databases",
    tools: "Tools/Others",
    
    // Experience Section
    experienceTitle: "Professional Experience",
    currentPosition: "Development Intern",
    company: "Web Star Studio (former Client Hall)",
    period: "October 2024 – Present",
    responsibilities: "Responsibilities:",
    resp1: "Development of scalable and secure RESTful APIs with Spring Boot and Java",
    resp2: "Data modeling with JPA for PostgreSQL",
    resp3: "Implementation of authentication and authorization with JWT",
    resp4: "Application management with Docker",
    resp5: "Participation in front-end team with Next.js",
    resp6: "Focus on code quality and unit testing",
    
    // Education Section
    educationTitle: "Education",
    degree: "Computer Science",
    university: "UNICAP - Catholic University of Pernambuco",
    educationPeriod: "February 2022 - December 2025 (In Progress)",
    relevantSubjects: "Relevant Subjects:",
    subjects: "Java, Design Patterns, MySQL, PostgreSQL, JavaScript, Python, Unit Testing, React",
    complementaryCourses: "Complementary Courses:",
    javaCourseName: "Complete Java: From Zero to Professional",
    frontendCourseName: "Front-end Training",
    platform: "Udemy",
    
    // Projects Section
    projectsTitle: "Projects",
    projectName: "Project Name",
    projectDescription: "Concise description of the project and problem solved",
    technologiesUsed: "Technologies Used:",
    viewGithub: "View on GitHub",
    viewDemo: "View Demo",
    
    // Contact Section
    contactTitle: "Contact",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    getInTouch: "Get in Touch",
    contactDescription: "Let's connect and discuss opportunities to collaborate on exciting projects.",
    sendMessage: "Send a Message",
    name: "Name",
    subject: "Subject",
    message: "Message",
    nameField: "Your name",
    emailField: "your.email@example.com",
    subjectField: "Project collaboration",
    messageField: "Tell me about your project or how we can work together...",
    sendMessageButton: "Send Message",
    emailResponse: "Or reach out directly via email for a faster response",
    
    // Skills Section
    skillsDescription: "Constantly learning and exploring new technologies to stay current with industry trends and best practices.",
    
    // Experience Section
    currentPositionLabel: "Current Position",
    moreExperiences: "More experiences coming soon...",
    
    // Education Section
    currentlyEnrolled: "Currently Enrolled - 8th Semester",
    academicAchievement: "Combining academic knowledge with practical industry experience to build comprehensive technical expertise.",
    
    // Projects Section
    projectsDescription: "A showcase of my technical skills and problem-solving approach through various development projects.",
    interestedCollaboration: "Interested in seeing more of my work or collaborating on a project?",
    viewAllProjects: "View All Projects on GitHub",
    
    // Navigation
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    projects: "Projects"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

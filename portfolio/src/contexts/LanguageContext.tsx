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
    heroTitle: "Transformando ideias em código funcional e inovador",
    heroSubtitle: "Desenvolvedor Full Stack | Java | Spring Boot | React | Next | PostgreSQL | Docker",
    heroDescription: "Construindo soluções escaláveis e inovadoras para o mundo digital.",
    viewProjects: "Ver Projetos",
    contact: "Entrar em Contato",
    
    // About Section
    aboutTitle: "Sobre Mim",
    aboutDescription: "Formado em Ciência da Computação atuando como Desenvolvedor Full Stack Júnior. Tenho experiência prática na construção de APIs escaláveis (Java/Spring Boot, Node.js) e interfaces modernas (React/Next.js), focando em código limpo, Docker e metodologias ágeis.",
    
    // Skills Section
    skillsTitle: "Habilidades",
    languages: "Linguagens",
    frameworks: "Frameworks/Bibliotecas",
    databases: "Bancos de Dados",
    tools: "Ferramentas/Outros",
    
    // Experience Section
    experienceTitle: "Experiência Profissional",
    currentPosition: "Desenvolvedor Full Stack Júnior",
    company: "Web Star Studio",
    period: "Outubro 2025 – Presente",
    responsibilities: "Responsabilidades:",
    resp1: "Desenvolvimento e manutenção de APIs RESTful com Java (Spring Boot) e Node.js",
    resp2: "Implementação de segurança via JWT",
    resp3: "Modelagem de banco de dados (PostgreSQL)",
    resp4: "Gerenciamento de containers Docker",
    resp5: "",
    resp6: "",
    // Intern position
    internPosition: "Estagiário em Desenvolvimento",
    internCompany: "Web Star Studio",
    internPeriod: "Outubro 2024 – Setembro 2025",
    internResp1: "Atuação no front-end utilizando Next.js, TypeScript e Tailwind CSS",
    internResp2: "Participação ativa em Code Reviews",
    internResp3: "Aplicação de testes unitários",
    internResp4: "Versionamento de código seguindo GitFlow",
    
    // Education Section
    educationTitle: "Educação",
    degree: "Ciência da Computação",
    university: "UNICAP - Universidade Católica de Pernambuco",
    educationPeriod: "Fevereiro 2022 - Dezembro 2025",
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
    emailSuccess: "Email enviado com sucesso, entrarei em contato em breve.",
    
    // Skills Section
    skillsDescription: "Sempre aprendendo e explorando novas tecnologias para me manter atualizado com as tendências e melhores práticas da indústria.",
    
    // Experience Section
    currentPositionLabel: "Posição Atual",
    moreExperiences: "Mais experiências em breve...",
    
    // Education Section
    currentlyEnrolled: "Concluído",
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
    heroTitle: "Transforming ideas into functional and innovative code.",
    heroSubtitle: "Full Stack Developer | Java | Spring Boot | React | Next | PostgreSQL | Docker",
    heroDescription: "Building scalable and innovative solutions for the digital world.",
    viewProjects: "View Projects",
    contact: "Get in Touch",
    
    // About Section
    aboutTitle: "About Me",
    aboutDescription: "Computer Science graduate working as a Junior Full Stack Developer. I have hands-on experience building scalable APIs (Java/Spring Boot, Node.js) and modern interfaces (React/Next.js), focusing on clean code, Docker, and agile methodologies.",
    
    // Skills Section
    skillsTitle: "Skills",
    languages: "Languages",
    frameworks: "Frameworks/Libraries",
    databases: "Databases",
    tools: "Tools/Others",
    
    // Experience Section
    experienceTitle: "Professional Experience",
    currentPosition: "Junior Full Stack Developer",
    company: "Web Star Studio",
    period: "October 2025 – Present",
    responsibilities: "Responsibilities:",
    resp1: "Development and maintenance of RESTful APIs with Java (Spring Boot) and Node.js",
    resp2: "Security implementation via JWT",
    resp3: "Database modeling (PostgreSQL)",
    resp4: "Docker container management",
    resp5: "",
    resp6: "",
    // Intern position
    internPosition: "Development Intern",
    internCompany: "Web Star Studio",
    internPeriod: "October 2024 – September 2025",
    internResp1: "Front-end development using Next.js, TypeScript, and Tailwind CSS",
    internResp2: "Active participation in Code Reviews",
    internResp3: "Unit testing implementation",
    internResp4: "Code versioning following GitFlow",
    
    // Education Section
    educationTitle: "Education",
    degree: "Computer Science",
    university: "UNICAP - Catholic University of Pernambuco",
    educationPeriod: "February 2022 - December 2025",
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
    emailSuccess: "Email sent successfully, I will get back to you soon.",
    
    // Skills Section
    skillsDescription: "Constantly learning and exploring new technologies to stay current with industry trends and best practices.",
    
    // Experience Section
    currentPositionLabel: "Current Position",
    moreExperiences: "More experiences coming soon...",
    
    // Education Section
    currentlyEnrolled: "Completed",
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

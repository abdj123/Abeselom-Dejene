import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/7.png";
import project3 from "../assets/projects/portii.png";

export const HERO_CONTENT = `I am a Software Engineer with 3+ years of experience in mobile app development, working with both native and hybrid technologies. I have strong communication skills, excel in teamwork, and can work independently to deliver scalable solutions. My expertise includes full-stack development and leading projects for startups, with a focus on clean, maintainable code.`;

export const ABOUT_TEXT = `I am a dedicated Software Engineer with over 3 years of experience in developing innovative solutions that address real-world challenges. My expertise lies in building mobile and web-based products, with a strong focus on scalable architecture and impactful results. I have had the privilege of leading cross-functional teams to deliver solutions for startups and businesses, including an e-commerce platform and a recipe-sharing app, leveraging Clean Architecture to enhance flexibility and maintainability.

Through my experience with the African to Silicon Valley (A2SV) Foundation, I have gained deep proficiency in data structures, algorithms, and full-stack development, specializing in mobile technologies. Additionally, I have mentored junior developers at startups, helping them grow and apply best practices in software engineering.

Beyond coding, I am passionate about music and enjoy playing Ethiopian melodies on both the guitar and piano.`;

export const EXPERIENCES = [
  {
    year: "06/2024 – 09/2024",
    role: "Software Engineering Intern",
    company: "Eskalate LLC",
    description: `Led a cross-functional team of 5 developers to design and develop an e-commerce platform
    focused on solving real-world societal problems.
    Implemented Flutter Clean Architecture resulting in enhanced maintainability, testability,
    flexibility, and error`,
    technologies: ["Flutter", "Dart", "Firebase", "AI/ML"],
  },
  {
    year: "07/2023 – 10/2023",
    role: "Flutter Developer",
    company: "Yenga Suq",
    description: `Independently led the full development cycle for a versatile e-commerce app, with an
    estimated 500 daily users.
    Spearheaded frontend development using Flutter, delivering an optimized user experience
    and robust performance.`,
    technologies: ["Flutter", "Dart", "Flask", "Firebase"],
  },
  {
    year: "04/2023 – 10/2023",
    role: "Flutter Devloper",
    company: "Awura Computing",
    description: `Led a cross-functional team to design and develop a food recipe sharing platform.
    Implemented Flutter Clean Architecture, improving maintainability, testability, and
    flexibility.`,
    technologies: ["Flutter", "Dart", "Django", "Figma"],
  },
  
];

export const PROJECTS = [
  {
    title: "Millions-Recipe-Android-App",
    image: project1,
    description:
      `Launched a personalized nutrition app that integrates user preferences and dietary
      restrictions; achieved a 25% increase in user retention rates and facilitated over 1,000
      recipe submissions in the first quarter.`,
    technologies: ["Figma","Flutter","Django"],
  },
  {
    title: "Yenga Suq",
    image: project2,
    description:
      `Developed a business and e-commerce app enabling users to connect, chat, create, and
      share products with clients.`,
    technologies: ["Flutter", "Flask API", "SQLite", "Firebase","Socket.IO"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["TypeScript", "Tailwind", "React","CSS"],
  },
 
];

export const CONTACT = {
  address: "Ethiopia, Adiss Ababa ",
  phoneNo: "+251 942 074 778 ",
  email: "abeslom12@gmail.com",
};

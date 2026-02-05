
import { Project, Experience, Education, Tool } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Isometric House",
    tags: ["Illustrations", "3D Render"],
    description: "Isometric House is a stunning visual project blending illustration and 3D rendering techniques. This creative piece showcases a detailed isometric view of a modern house, highlighting architectural features with precision.",
    image: "https://picsum.photos/id/1/800/800"
  },
  {
    title: "Dashboard Template",
    tags: ["UI Design", "Figma"],
    description: "A sleek and functional UI design created for modern web and mobile applications. Focused on intuitive navigation and efficient data visualization.",
    image: "https://picsum.photos/id/2/800/800"
  },
  {
    title: "ZayyChinnTaung",
    tags: ["E-Commerce", "Web Dev"],
    description: "A Myanmar-based traditional gift shop web application missioned to preserve and promote Myanmar's rich cultural heritage.",
    image: "https://picsum.photos/id/3/800/800",
    link: "https://vera93203.github.io/ZayChinTaung/index.html"
  },
  {
    title: "Weatherwise",
    tags: ["Machine Learning", "Data Analysis"],
    description: "Machine Learning Model Web Application for flight ticket fare prediction based on Weather Condition and location data.",
    image: "https://picsum.photos/id/4/800/800"
  },
  {
    title: "AsianNoodle",
    tags: ["Web Dev", "Menu Design"],
    description: "Authentic Myanmar noodle shop web presence. Modern flipbook menu and responsive design for a London-based business.",
    image: "https://picsum.photos/id/5/800/800",
    link: "https://asiannoodles.co.uk/"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    year: "2020 - 2021",
    title: "Freelance Website Developer",
    source: "Upwork",
    description: "Designed responsive layouts and implemented functionality with HTML, CSS, and JS for global clients.",
    sourceLink: "https://www.upwork.com"
  },
  {
    year: "2022 - 2023",
    title: "Graphic Designer & Project Manager",
    source: "Million Chances 2.0",
    description: "Created branding, adverts, and signage media products for a youth organization."
  },
  {
    year: "2023 - 2024",
    title: "Full Stack Developer",
    source: "Myanmar Yulin Co. Ltd",
    description: "Developed comprehensive web applications using JS and PHP for Chinese business interests.",
    sourceLink: "https://www.dica.gov.mm"
  }
];

export const EDUCATION: Education[] = [
  {
    year: "2020 - 2021",
    title: "HNC in Information Technology",
    institution: "Edinburgh Napier University",
    description: "Fundamental Programming and Web Development.",
    link: "https://www.napier.ac.uk/"
  },
  {
    year: "2022 - 2023",
    title: "HND in Software Engineering",
    institution: "Edinburgh Napier University",
    description: "Advanced Web Development and Technologies.",
    link: "https://www.napier.ac.uk/"
  },
  {
    year: "2024 - Present",
    title: "BSc (Hons) Computing with AI",
    institution: "Northumbria University",
    description: "Specializing in AI systems, ML, and Intelligent systems development.",
    link: "https://www.northumbria.ac.uk"
  }
];

export const TOOLS: Tool[] = [
  { name: "Photoshop", icon: "fa-brands fa-adobe" },
  { name: "Figma", icon: "fa-brands fa-figma" },
  { name: "Blender", icon: "fa-solid fa-cube" },
  { name: "HTML5", icon: "fa-brands fa-html5" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt" },
  { name: "React", icon: "fa-brands fa-react" },
  { name: "Python", icon: "fa-brands fa-python" },
  { name: "Java", icon: "fa-brands fa-java" }
];

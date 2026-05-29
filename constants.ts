
import { Project, Experience, Education, Tool } from './types';

export const PROJECTS: Project[] = [
 {
    title: "SaaS Dashboard",
    tags: ["React", "Analytics", "Chart.js", "Tailwind CSS"],
    description: "An enterprise-ready administrative workspace displaying interactive business intelligence dashboards, real-time telemetry, and user management features.",
    image: "/images/saasdashboard.png",
    link: "https://saas-dashboard-507307610839.europe-west2.run.app/"
    
  },
  {
    title: "Real-time Collaboration Workspace",
    tags: ["WebSockets", "Collaboration", "React", "Live Sync"],
    description: "An interactive, real-time multi-user canvas with instant document synchronization, active user list, state persistence, and communication boards.",
    image: "/images/realtime.png",
    link: "https://real-time-collaboration-workspace-507307610839.europe-west2.run.app"
  },
  {
    title: "Rest API Studio Docs",
    tags: ["API Design", "Developer Tools", "Markdown"],
    description: "An interactive design and simulation sandbox for building, analyzing, and documenting RESTful APIs with elegant mock response visualizations.",
    image: "/images/restapistudiodocs.png",
    link: "https://rest-api-studio-docs-507307610839.europe-west2.run.app"
  },
  {
    title: "Full-stack E-commerce Platform",
    tags: ["Ecommerce", "Payment Gateways", "Next.js", "Tailwind CSS"],
    description: "Comprehensive storefront backend and front-end hub including dynamic shopping baskets, stripe checkouts, and database inventory tracking.",
    image: "/images/ecommerce.png",
    link: "https://full-stack-e-commerce-platform-507307610839.europe-west2.run.app"
  },
  {
    title: "Envault Sandbox",
    tags: ["Security", "Cryptography", "Identity", "React"],
    description: "A client-side cryptographic playground and sandbox environment validating advanced authentication mechanisms and key derivations safely.",
    image: "/images/envault.png",
    link: "https://envault-sandbox-507307610839.europe-west2.run.app"
  },
   {
    title: "Forge UI Studio",
    tags: ["Design System", "CSS Engine", "Component Staging"],
    description: "An advanced workspace for developing customized design tokens, responsive Tailwind templates, and complex UI layouts live.",
    image: "/images/forgeui.png",
    link: "https://forge-ui-studio-507307610839.europe-west2.run.app"
  },
  {
    title: "Analytics Monitoring Dashboard",
    tags: ["D3.js", "Telemetry", "Server Diagnostics", "React"],
    description: "High-throughput server performance and telemetry dashboard visualization tool measuring core processing latency and network bandwidth.",
    image: "/images/analyse.png",
    link: "https://analytics-monitoring-dashboard-507307610839.europe-west2.run.app"
  },
  {
    title: "ZayyChinnTaung",
    tags: ["E-Commerce", "Web Dev"],
    description: "A Myanmar-based traditional gift shop web application missioned to preserve and promote Myanmar's rich cultural heritage.",
    image: "/images/zaychintaung.png",
    link: "https://vera93203.github.io/ZayChinTaung/index.html"
  },
  
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

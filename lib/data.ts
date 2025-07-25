import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import baptismImg from "@/public/baptismImg.png";
import receiptImg from "@/public/receiptImg.png";
import youthImg from "@/public/youthImg.png";
import troveImg from "@/public/troveImg.png";
import cinemaGuruImg from "@/public/cinemaGuruImg.png";
import atlasQAImg from "@/public/atlasQAImg.png";
import kanbanImg from "@/public/kanbanImg.png";
import todoImg from "@/public/todoImg.png";
import shellImg from "@/public/shellImg.png";
import smileImg from "@/public/smileImg.png";
import airbnbImg from "@/public/airbnbImg.png";
import tulsaImg from "@/public/tulsaImg.png";
import dashboardImg from "@/public/dashboardImg.png";
import natureImg from "@/public/natureImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Web Developer",
    location: "Victory Christian Center • Tulsa, OK",
    description:
      "Rebuilt a 30+ page website using Next.js, Tailwind CSS, and TypeScript. Managed full Azure deployment, blob storage, and CDN. Integrated REST APIs, Redis caching, and built tools using Supabase, Microsoft Graph API, and Twilio. Maintained legacy ASP.NET pages and built internal dashboards and registration systems.",
    icon: React.createElement(FaReact),
    date: "Jul 2024 – Present",
  },
  {
    title: "Student Full-Stack Software Engineer",
    location: "Atlas School • Tulsa, OK",
    description:
      "Completed a 20-month project-based curriculum covering full-stack development, data structures, algorithms, DevOps, and mobile. Built real-world apps using React, Next.js, Python, SQL/NoSQL databases, Docker, and Git. Explored advanced concepts like state management, caching, and deployment pipelines.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2023 – Dec 2024",
  },
  {
    title: "Student Tutor",
    location: "Atlas School • Tulsa County, OK",
    description:
      "Facilitated peer learning through live coding sessions, manual project reviews, and mentoring. Collaborated with instructors to reinforce concepts like DOM manipulation, jQuery, and recursion.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 – Apr 2024",
  },
  {
    title: "Refugee Case Worker",
    location: "YWCA Tulsa • Tulsa, OK",
    description:
      "Provided support for newly arrived refugees, including case intake, database management, employment assistance, and translation. Liaised with service providers to streamline support processes.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2023 – Apr 2023",
  },
  {
    title: "Online English Language Teacher",
    location: "First Future • Remote (China/Ukraine)",
    description:
      "Taught conversational English to students in China for 6+ years. Delivered engaging online lessons, evaluated student progress, created learning materials, and conducted demo classes to grow enrollment.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2016 – Mar 2022",
  },
  {
    title: "Public School English Teacher",
    location: "Kyiv, Ukraine",
    description:
      "Taught English language and literature to school students. Developed engaging lesson plans and facilitated classroom instruction in English. Focused on communication, critical thinking, and cross-cultural awareness.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2012 – Jun 2014",
  },
  {
    title: "Master of Arts in Philology",
    location: "Kyiv National Linguistic University • Kyiv, Ukraine",
    description:
      "Graduated with honors in Philology, specializing in English, French, and foreign literature. Developed strong linguistic, analytical, and communication skills.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2011 – Jun 2012",
  },
  {
    title: "Bachelor of Arts in Philology",
    location: "Kyiv National Linguistic University • Kyiv, Ukraine",
    description:
      "Completed studies in English Philology and Pedagogy. Trained as a teacher of English language and literature, with emphasis on grammar, phonetics, and education methodology.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2007 – Jun 2011",
  },
] as const;

export const projectsData = [
  {
    title: "Victory Forms Hub",
    description:
      "Centralized platform for multiple registration forms used across Victory Church. Includes dynamic workflows for guest signups, baptism automation, and receipt submission. Supports Twilio-based SMS communication, Microsoft Graph email confirmations, and admin dashboards for internal tracking.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Twilio", "Microsoft Graph API", "NextAuth", "UI/UX"],
    imageUrl: dashboardImg,
    url: "https://forms.victory.com",
  },
    {
      title: "Baptism Automation",
      description:
        "An automated workflow for managing baptism signups. Includes SMS communication via Twilio, Excel sheet population via Microsoft Graph API, and dynamic certificate generation sent directly to the printer.",
      tags: ["Next.js", "Tailwind CSS", "Twilio", "Microsoft Graph API", "PDF Generation", "Azure"],
      imageUrl: baptismImg,
      url: "https://forms.victory.com/baptism-signup",
    },
    {
      title: "Receipt Submission",
      description:
        "A secure internal app for uploading receipt data, with Microsoft account authentication, backend storage, and email confirmation. Includes real-time accounting dashboard powered by Supabase.",
      tags: ["Next.js", "NextAuth", "Supabase", "Tailwind CSS", "Microsoft Graph", "Email Automation"],
      imageUrl: receiptImg,
      url: "https://forms.victory.com/submit-receipt",
    },
    {
      title: "Victory Youth Website",
      description:
        "Modern marketing site for Victory Youth built in collaboration with designers. Fully responsive, themed UI built with Tailwind and optimized for mobile.",
      tags: ["Next.js", "Tailwind CSS", "UI/UX", "Responsive Design", "Collaboration", "Supabase", "Microsoft Graph", "Email Automation"],
      imageUrl: youthImg,
      url: "https://youth.victory.com",
    },
    {title: "Trove",
    description:
      "Trove is a financial literacy app helping families manage allowances and build smart spending habits. It includes a parent-facing web app and a mobile experience for children. Developed using modern tooling with auth and cross-platform design.",
    tags: ["Next.js", "React", "Tailwind CSS", "React Native", "NextAuth", "Prisma", "Vercel"],
    imageUrl: troveImg,
    url: "https://trove-capstone.vercel.app/",
    },
    {
    title: "Cinema Guru",
    description:
      "Cinema Guru is a movie discovery app built with Next.js and Supabase. It allows users to filter, favorite, and save movies to a Watch Later list. Features include activity tracking, responsive UI, and server-side data fetching.",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "NextAuth", "React"],
    imageUrl: cinemaGuruImg,
    url: "https://atlas-cinema-guru-virid.vercel.app",
  },
  {
    title: "Atlas Q&A",
    description:
      "A full-stack Q&A platform where users can log in, ask questions, vote, and join discussions. It features topic creation, real-time updates, and database integration, fully deployed on Vercel.",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "React"],
    imageUrl: atlasQAImg,
    url: "https://atlas-nextjs-spavlovska.vercel.app/",
  },
  {
    title: "Atlas Kanban Board",
    description:
      "Trello-style Kanban board featuring drag-and-drop, local state persistence, and advanced Redux techniques. Built with Dnd Kit and styled for responsive usability.",
    tags: ["React", "Redux", "Dnd Kit", "Tailwind CSS"],
    imageUrl: kanbanImg,
    url: "https://atlas-react-redux-spavlovska.netlify.app/",
  },
  {
    title: "To-Do App",
    description:
      "A classic to-do list built in Vanilla JavaScript with task input, filtering, and DOM manipulation. Clean UI and accessible layout.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: todoImg,
    url: "https://svitlanapavl.github.io/ToDoList/",
  },
  {
    title: "Simple Shell",
    description:
      "A command-line interpreter built in C that mimics UNIX shell behavior. Handles command parsing, execution, and signal handling in a low-level system programming environment.",
    tags: ["C", "UNIX", "GCC", "GNU"],
    imageUrl: shellImg,
    url: "https://github.com/SvitLanaPavl/holbertonschool-simple_shell?tab=readme-ov-file",
  },
  {
    title: "America's Natural Canvas",
    description:
      "Interactive digital exhibit built from scratch, allowing users to search, filter, and explore U.S. states by climate type. The experience showcases America's natural beauty with dynamic visuals powered by Chart.js and Firebase. Created in partnership with Christopher Stephens.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Firebase", "Chart.js", "Visily", "Responsive Web Design"],
    imageUrl: natureImg,
    url: "https://america-s-natural-canvas.web.app/",
  },
  {
    title: "Smiling School",
    description:
      "Three-stage project evolving from a static HTML/CSS site to a fully dynamic, API-driven experience. Built from Figma designs and progressively enhanced with Bootstrap and JavaScript.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Figma", "JQuery", "Responsive Web Design"],
    imageUrl: smileImg,
    url: "https://svitlanapavl.github.io/atlas-smiling-school",
  },
  {
    title: "Airbnb Console Clone",
    description:
      "A Python-based CLI tool for creating, updating, and managing Airbnb-style data models. Supports storage persistence via JSON and includes unit tests.",
    tags: ["Python", "JSON", "Unit Testing"],
    imageUrl: airbnbImg,
    url: "https://github.com/SvitLanaPavl/holbertonschool-AirBnB_clone"
  },
  {
    title: "Winter In Tulsa",
    description:
      "Festive tourism microsite promoting winter events in Tulsa, designed with Bootstrap and custom JS interactions. Focused on engaging visuals and accessibility.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Figma"],
    imageUrl: tulsaImg,
    url: "https://svitlanapavl.github.io/Hacksprint-2023/",
  },
];

export const skillsData = [
  // Frontend
  "HTML",
  "CSS",
  "SASS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Tailwind CSS",
  "Bootstrap",
  "Framer Motion",

  // UI/UX & Prototyping
  "Figma",
  "Visily",

  // Backend & Auth
  "Node.js",
  "Express",
  "NextAuth.js",
  "OAuth2",
  "RESTful APIs",
  "Microsoft Graph API",
  "Supabase",

  // Databases
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Redis",
  "Prisma",

  // DevOps & Infra
  "Git",
  "GitHub",
  "GitHub Actions",
  "Docker",
  "Microsoft Azure",
  "Azure DevOps",

  // Messaging & Automation
  "Twilio",
  "Microsoft Graph Email API",

  // Other Languages/Frameworks
  "Python",
  "Flask",
  "C",
  "ASP.NET"
] as const;


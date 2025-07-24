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
import canvasImg from "@/public/canvasImg.png";
import smileImg from "@/public/smileImg.png";
import airbnbImg from "@/public/airbnbImg.png";
import tulsaImg from "@/public/tulsaImg.png";

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
] as const;

export const projectsData = [
    {
      title: "Baptism Automation",
      description:
        "An automated workflow for managing baptism signups. Includes SMS communication via Twilio, Excel sheet population via Microsoft Graph API, and dynamic certificate generation sent directly to the printer.",
      tags: ["Next.js", "Tailwind CSS", "Twilio", "Microsoft Graph API", "PDF Generation", "Azure"],
      imageUrl: baptismImg,
    },
    {
      title: "Receipt Submission",
      description:
        "A secure internal app for uploading receipt data, with Microsoft account authentication, backend storage, and email confirmation. Includes real-time accounting dashboard powered by Supabase.",
      tags: ["Next.js", "NextAuth", "Supabase", "Tailwind CSS", "Microsoft Graph", "Email Automation"],
      imageUrl: receiptImg,
    },
    {
      title: "Victory Youth Website",
      description:
        "Modern marketing site for Victory Youth built in collaboration with designers. Fully responsive, themed UI built with Tailwind and optimized for mobile.",
      tags: ["Next.js", "Tailwind CSS", "UI/UX", "Responsive Design", "Collaboration"],
      imageUrl: youthImg,
    },
    {title: "Trove",
    description:
      "Trove is a financial literacy app helping families manage allowances and build smart spending habits. It includes a parent-facing web app and a mobile experience for children. Developed using modern tooling with seamless auth and cross-platform design.",
    tags: ["Next.js", "React", "Tailwind CSS", "React Native", "NextAuth", "Prisma", "Vercel"],
    imageUrl: troveImg,
    },
    {
    title: "Cinema Guru",
    description:
      "Cinema Guru is a movie discovery app built with Next.js and Supabase. It allows users to filter, favorite, and save movies to a Watch Later list. Features include activity tracking, responsive UI, and server-side data fetching.",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "NextAuth", "React"],
    imageUrl: cinemaGuruImg,
  },
  {
    title: "Atlas Q&A",
    description:
      "A full-stack Q&A platform where users can log in, ask questions, vote, and join discussions. It features topic creation, real-time updates, and database integration, fully deployed on Vercel.",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "React"],
    imageUrl: atlasQAImg,
  },
  {
    title: "Atlas Kanban Board",
    description:
      "Trello-style Kanban board featuring drag-and-drop, local state persistence, and advanced Redux techniques. Built with Dnd Kit and styled for responsive usability.",
    tags: ["React", "Redux", "Dnd Kit", "Tailwind CSS"],
    imageUrl: kanbanImg,
  },
  {
    title: "To-Do App",
    description:
      "A classic to-do list built in Vanilla JavaScript with task input, filtering, and DOM manipulation. Clean UI and accessible layout.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: todoImg,
  },
  {
    title: "Simple Shell",
    description:
      "A command-line interpreter built in C that mimics UNIX shell behavior. Handles command parsing, execution, and signal handling in a low-level system programming environment.",
    tags: ["C", "UNIX", "GCC", "GNU"],
    imageUrl: shellImg,
  },
  {
    title: "America's Natural Canvas",
    description:
      "An interactive exhibit site that filters and displays U.S. states by climate. Features include dynamic range filtering with Chart.js and Firebase backend.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Firebase", "Chart.js", "Visily", "Responsive Web Design"],
    imageUrl: canvasImg,
  },
  {
    title: "Smiling School",
    description:
      "Three-stage project evolving from a static HTML/CSS site to a fully dynamic, API-driven experience. Built from Figma designs and progressively enhanced with Bootstrap and JavaScript.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Figma", "JQuery", "Responsive Web Design"],
    imageUrl: smileImg,
  },
  {
    title: "Airbnb Console Clone",
    description:
      "A Python-based CLI tool for creating, updating, and managing Airbnb-style data models. Supports storage persistence via JSON and includes unit tests.",
    tags: ["Python", "JSON", "Unit Testing"],
    imageUrl: airbnbImg,
  },
  {
    title: "Winter In Tulsa",
    description:
      "Festive tourism microsite promoting winter events in Tulsa, designed with Bootstrap and custom JS interactions. Focused on engaging visuals and accessibility.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Figma"],
    imageUrl: tulsaImg,
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


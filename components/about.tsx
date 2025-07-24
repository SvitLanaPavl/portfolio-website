"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  My journey into tech started after more than a decade working in the education field. I hold a{" "}
  <span className="font-medium">Bachelor’s and Master’s degree in Education and English</span>, and spent over 10 years as an{" "}
  <span className="font-medium">ESL instructor, translator, proofreader, and curriculum developer</span>. While I deeply valued that work, I eventually became drawn to the world of technology and began learning web development on my own.
</p>

<p className="mb-3">
  Eager to grow further, I enrolled in <span className="font-medium">Atlas School</span>, a full-time software engineering program where I spent 19 months in an intense, project-based, peer-driven environment. There, I gained hands-on experience with everything from{" "}
  <span className="font-medium">C programming, Python, and databases</span> to{" "}
  <span className="font-medium">frontend technologies, React, Next.js, mobile development, and DevOps</span>. There, I also worked as a{" "}
  <span className="font-medium">student tutor</span>, leading live coding sessions and helping peers through manual reviews and debugging.
</p>

<p className="mb-3">
  Most recently, I’ve been working as a <span className="font-medium">web developer at Victory Church</span>, where I’ve had the opportunity to build real-world tools that streamline internal processes, automate workflows, and support multi-department collaboration, not to mention website management. I work across the stack — frontend, backend, and DevOps — and I truly enjoy bringing ideas to life through code.
</p>

<p>
  I’m excited to keep growing as a developer and continue exploring this fast-moving field of technology. Whether I’m building a form, connecting an API, or improving performance, I love solving problems that make people’s lives easier.
</p>

    </motion.section>
  );
}

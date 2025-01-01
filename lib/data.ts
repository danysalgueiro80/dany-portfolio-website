import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import MarketingCloudEmailSpecialist_Dany from "@/public/MarketingCloudEmailSpecialist_Dany.jpg";
import MarketingCloudDeveloper_Dany from "@/public/MarketingCloudDeveloper_Dany.jpg";
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
    title: "Bachelor Degree in Marketing",
    location: "University of Aveiro, Portugal",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2020",
  },
  {
    title: "Digital Marketing Intern",
    location: "Hey Digital Ventures",
    description:
      "Escrever aqui uma breve descrição",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Postgraduate degree in Digital Marketing",
    location: "IPAM, Porto",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Campaign Specialist",
    location: "VML MAP",
    description:
    "Create and implement HTML e-mails; Create target segmentation through SQL and Adobe workflows; Work with Salesforce Marketing Cloud and Adobe Campaign Standard.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Master’s degree in Marketing and Innovation",
    location: "IADE - School of Design, Technology, and Communication",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2024",
  },
  {
    title: "Senior Solution Expert",
    location: "VML MAP",
    description:
    "Create and implement HTML e-mails; Create target segmentation through SQL and Adobe workflows; Work with Salesforce Marketing Cloud and Adobe Campaign Standard.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2025",
  },
  {
    title: "Salesforce Marketing Cloud Consultant",
    location: "Making Science, Madrid",
    description:
    "Create and implement HTML e-mails; Create target segmentation through SQL and Adobe workflows; Work with Salesforce Marketing Cloud and Adobe Campaign Standard.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Salesforce Marketing Cloud Email Specialist",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["Salesforce Marketing Cloud", "", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: MarketingCloudEmailSpecialist_Dany,
  },
  {
    title: "Salesforce Marketing Cloud Developer",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: MarketingCloudDeveloper_Dany,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SQL",
  "Salesforce Marketing Cloud",
  "Salesforce Data Cloud",
  "Salesforce Personalization",
  "JavaScript",
] as const;
"use client";

import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

// import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

// about
const about = {
  title: "About me",
  description:
    "Frontend developer with experience in ReactJS and Angular. Also have the familiarity of working with PHP, Laravel, and NodeJS frameworks.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Firoj Kabir",
    },
    {
      fieldName: "Phone",
      fieldValue: "+49 176 30169444",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Firoj.10",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "firoj.kabir65@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, German",
    },
  ],
};

// experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Frontend developer with experience in ReactJS and Angular. Also have the familiarity of working with PHP, Laravel, and NodeJS frameworks.",
  items: [
    {
      company: "Apprenticeship · Self-employed",
      position: "Software Developer(apprentice)",
      duration: "april 2023 - Present",
    },
    {
      company: "OB//CC GmbH & CO. KG",
      position: "Software Developer(part-time)",
      duration: "september 2022 - march 2022",
    },
    {
      company: "Switchboard GmbH",
      position: "Frontend Developer(intern)",
      duration: "march 2022 - august 2022",
    },
    {
      company: "a2i Programme",
      position: "E-commerce Professional",
      duration: "september 2018 - october 2019",
    },
  ],
};

// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Frontend developer with experience in ReactJS and Angular. Also have the familiarity of working with PHP, Laravel, and NodeJS frameworks.",
  items: [
    {
      institution: "Fulda University of Applied Sciences",
      degree: "Masters' in Global Software Development",
      duration: "october 2019 - Present",
    },
    {
      institution: "Daffodil International University",
      degree: "Bachelor's in Computer Science and Engineering",
      duration: "may 2013 - may 2017",
    },
  ],
};

// skills
const skills = {
  title: "My skills",
  description:
    "Frontend developer with experience in ReactJS and Angular. Also have the familiarity of working with PHP, Laravel, and NodeJS frameworks.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import {
  ArrowDownUpIcon,
  ArrowUpRight,
  ExternalLink,
  Link2,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "ibikoranezadieudonneblog",
    category: "Blog & Newsletter",
    title: "IBIKORANEZA Dieudonne's Blog",
    src: "/assets/projects-screenshots/blog/2.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://ibikoraneza-dieudonne-blog.vercel.app/",
    github:
      "https://github.com/Dieudonne-Ibikoraneza/ibikoraneza-dieudonne-blog",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vite,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            This is a personal blog website created to share insights,
            tutorials, and experiences related to software development,
            technology, and personal growth. Built with a clean, responsive
            design, the blog features categorized posts, a searchable archive,
            and a user-friendly interface. Whether you&apos;re a developer or a
            tech enthusiast, you&apos;ll find valuable and engaging content
            regularly updated by IBIKORANEZA Dieudonne.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/blog/1.png`,
              `${BASE_PATH}/blog/2.png`,
              `${BASE_PATH}/blog/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "noteit",
    category: "Full stack",
    title: "NoteIt: Note Taking Platform",
    src: "/assets/projects-screenshots/noteit/1.png",
    screenshots: ["/assets/projects-screenshots/noteit/1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [],
    },
    live: "https://noteit-rose-vercel.app",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Noteit: Note taking Platform
          </TypographyP>
          <TypographyP className="font-mono ">
            A modern note-taking application built with Next.js and Convex,
            featuring real-time collaboration, markdown support, and seamless
            GitHub authentication.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Architecture </TypographyH3>
          <p className="font-mono mb-2">
            The platform includes these main functionalities: 1. Login/Signup
            with Github 2. Create pages and mainly notes 3. Publish the created
            notes/pages
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/noteit/1.png`,
              `${BASE_PATH}/noteit/2.png`,
              `${BASE_PATH}/noteit/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/myportfolio/landing.png",
    screenshots: ["assets/projects-screenshots/myportfolio/landing.png"],
    live: "https://www.abhijitzende.com/",
    github: "https://github.com/Abhiz2411/3D-interactive-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/myportfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/projects.png`,
              `${BASE_PATH}/myportfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  {
    id: "parkingmanagementsystem",
    category: "IoT",
    title: "Automated Parking Management System",
    src: "/assets/projects-screenshots/pms/01.jpeg",
    screenshots: ["01.jpeg", "03.png"],
    live: "https://github.com/Dieudonne-Ibikoraneza/parking-management-system",
    github:
      "https://github.com/Dieudonne-Ibikoraneza/parking-management-system",
    skills: {
      frontend: [PROJECT_SKILLS.html],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.arduino],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A smart parking management system integrating license plate
            recognition, RFID-based payment, and real-time dashboard monitoring.
            Designed for automated vehicle entry/exit, payment processing, and
            security alerts.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/pms/01.jpeg`,
              `${BASE_PATH}/pms/03.png`,
              `${BASE_PATH}/pms/04.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "hoobank",
    category: "Web Development",
    title: "HooBank - The next Generation Payment",
    src: "/assets/projects-screenshots/hoobank/01.png",
    screenshots: [
      "01.png",
      "02.png",
      "03.png",
    ],
    live: "https://hoo-bank-vert.vercel.app",
    github: "https://github.com/Dieudonne-Ibikoraneza/hoo-bank",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vite,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/hoobank/01.png`,
              `${BASE_PATH}/hoobank/02.png`,
              `${BASE_PATH}/hoobank/03.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "otherportfolio",
    category: "Portfolio",
    title: "Portfolio",
    src: "/assets/projects-screenshots/otherportfolio/01.png",
    screenshots: ["01.png", "02.png", "03.png"],
    live: "https://ibikoraneza-dieudonne-portfolio.vercel.app/",
    github:
      "https://github.com/Dieudonne-Ibikoraneza/ibikoraneza-dieudonne-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.spline,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vite,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            3D Inspired portfolio, crafted with gentleness. Step into an
            immersive digital experience where creativity meets purpose. This
            portfolio reflects Dieudonne&apos;s unique harmony between
            technology and soul — a space where every interaction feels alive,
            intentional, and deeply human. Built with modern craftsmanship and a
            vision for meaningful design, it embodies elegance, innovation, and
            serenity. Each element flows seamlessly, inviting you to explore the
            story of a developer who transforms code into connection. 💻🕊️
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/otherportfolio/01.png`,
              `${BASE_PATH}/otherportfolio/02.png`,
              `${BASE_PATH}/otherportfolio/03.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;

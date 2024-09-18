import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Sukhchand Kisku",
  title: "Hi all, I'm Sukhchand Kisku",
  description:
    "Senior Software Engineer with 10 Years of Experience Designing and Developing High-Performance Systems in React.js, Node.js, Express.js, MongoDB, and MySQL. Led a Team of 6 to Build Custom In-House Libraries, Metadata-Driven UIs, and a Core Platform for Application Deployments. Ready to Leverage Expertise in a Tech Lead Role.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "Sukhchand",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:sukhchand38@gmail.com",
  linkedin: "https://www.linkedin.com/in/sukhchand-kisku",
  github: "https://github.com/sukhchand"
};

export const skillsSection: SkillsSectionType = {
  title: "SKILLSET",
  subTitle: "",
  data: [
    {
      title: "Frontend Technology",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
      ],
      softwareSkills: [
        {
          skillName: "HTML",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS",
          iconifyTag: "vscode-icons:file-type-css",
        },
        {
          skillName: "Javascript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Typescript",
          iconifyTag: "skill-icons:typescript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "LESS",
          iconifyTag: "logos:less",
        },
        {
          skillName: "Tailwind",
          iconifyTag: "devicon:tailwindcss",
        },
        {
          skillName: "Bootstrap",
          iconifyTag: "skill-icons:bootstrap",
        },
      ],
    },
    {
      title: "Backend Technology",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
      ],
      softwareSkills: [
        {
          skillName: "Nodejs",
          iconifyTag: "devicon:nodejs",
        },
        {
          skillName: "Expressjs",
          iconifyTag: "devicon:express",
        }
      ],
    },
    {
      title: "Database",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
      ],
      softwareSkills: [
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb-icon",
        },
        {
          skillName: "MySQL",
          iconifyTag: "logos:mysql-icon",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "devicon:postgresql",
        }
      ],
    },
    {
      title: "Devops & Tools",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Kubernetes",
          iconifyTag: "devicon:kubernetes",
        },
        {
          skillName: "NPM",
          iconifyTag: "logos:npm",
        },
        {
          skillName: "Github",
          iconifyTag: "devicon:github",
        }
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "React.js",
    progressPercentage: "85",
  },
  {
    Stack: "Node.js",
    progressPercentage: "80",
  },
  {
    Stack: "Express.js",
    progressPercentage: "70",
  },
  {
    Stack: "MongoDB",
    progressPercentage: "70",
  },
  {
    Stack: "Postgres SQL, MySQL",
    progressPercentage: "60",
  },
  {
    Stack: "NextJs",
    progressPercentage: "60",
  },
  {
    Stack: "Docker",
    progressPercentage: "65",
  },
  {
    Stack: "Kubernetes",
    progressPercentage: "50",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Gandhi Institute for Technological Advancement",
    subHeader: "Electronics and Communication Engineering",
    duration: "August 2009 - July 2013",
    desc: "",
    grade: "7.03",
    descBullets: [],
  },
  {
    schoolName: "Kendriya Vidyalaya Puri",
    subHeader: "HSC/12th",
    duration: "August 2008 - July 2009",
    desc: "",
    grade: "68.3",
    descBullets: [],
  },
  {
    schoolName: "Kendriya Vidyalaya Puri",
    subHeader: "SSC/10th",
    duration: "August 2006 - July 2007",
    desc: "",
    grade: "72.3",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Senior Software Developer",
    company: "Wisetech Global/Blume Global",
    companyLogo: "/img/icons/common/wisetech_global_logo.jpeg",
    date: "Aug 2021 - Present",
    desc: "",
    descBullets: [
      {
        client: "",
        technology: "",
        platform: "",
        type: "product",
        description: "Leading a team of six members responsible for managing custom UI libraries used across WiseTech teams."
      },
      {
        client: "",
        technology: "",
        platform: "",
        type: "product",
        description: "Overseeing the core deployment platform to ensure seamless application deployment and an enhanced user experience."
      },
      {
        client: "",
        technology: "",
        platform: "",
        type: "product",
        description: "Providing generic solutions to application teams by managing core UI libraries."
      },
      {
        client: "",
        technology: "",
        platform: "",
        type: "product",
        description: "Delivering metadata-driven UIs, including dashboards and application screens, to enhance flexibility and user experience."
      },
    ]
  },
  {
    role: "Senior Software Developer",
    company: "Manhattan Associates",
    companyLogo: "/img/icons/common/manhattan_associates_logo.png",
    date: "July 2017 - Aug 2021",
    desc: "",
    descBullets: [
    	{
        client: "",
        technology: "",
        platform: "",
        type: "product",
        description: "Delivering IT solutions for warehouse management to ensure timely execution within established parameters."
      },
      {
        client: "",
        technology: "",
        platform: "",
        type: "product",
        description: "Configuring and maintaining the necessary integrations between selected supply chain technologies."
      },
      {
        client: "",
        technology: "",
        platform: "",
        type: "product",
        description: "Collaborating with clients to identify business needs, requirements, and specifications."
      },
      {
        client: "",
        technology: "",
        platform: "",
        type: "product",
        description: "Conducting system and data analysis on applications and products to assess functional design requirements, performance accuracy, and efficiency."
      }
    ],
  },
  {
    role: "Software Developer",
    company: "Echidna",
    companyLogo: "/img/icons/common/echidna_logo.jpeg",
    date: "July 2014 - July 2017",
    desc: "",
    descBullets:[
      {
        client: "Bachmans",
        technology: "AngularJs, UnderscoreJs, NodeJs, ExpressJs, Bootstrap, HTML, Sass ",
        platform: "Four51",
        type: "client"
      },
      {
        client: "Shopwise Market",
        technology: "Jquery, HTML, CSS",
        platform: "OCC",
        type: "client"
      },
      {
        client: "Aveda",
        technology: "AngularJs, UnderscoreJs, NodeJs, ExpressJs, Bootstrap, HTML, Sass ",
        platform: "Four51",
        type: "client"
      },
      {
        client: "Echidna Labs",
        technology: "AngularJs, Bootstrap, HTML, CSS ",
        platform: "Custom",
        type: "client"
      },
    ]
  }
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Sukhchand Kisku | Portfolio",
  description: greetings.description,
  author: "Sukhchand Kisku",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://portfolio-sukhchand.vercel.app/",
  keywords: [
    "Sukhchand",
    "Sukhchand Kisku",
    "Portfolio",
    "Sukhchand Portfolio ",
    "Sukhchand Kisku Portfolio",
  ],
};

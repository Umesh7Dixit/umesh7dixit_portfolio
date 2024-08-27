import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project4 from "../assets/project4.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "React, Next.js, Node, MongoDb, Tailwind, MySql, Javascript, HTML, CSS , ";

export const PROJECTS = [
  {
    id: 1,
    title: "PeerPulse",
    description:
      "Created a platform for people to connect with friends and have real-time chat conversations.",
    imgSrc: project1,
    link: "https://peerpulse-with-realtime-chat.onrender.com",
  },
  {
    id: 2,
    title: "ConvoAI",
    description:
      "Developed a conversational AI web app with instant smart responses to any queries.",
    imgSrc: project2,
    link: "https://convo-kohl.vercel.app",
  },
  {
    id: 4,
    title: "Crypto Exchanges",
    description:
      "Created a responsive application where we can choose cryptocurrency exchanges",
    imgSrc: project4,
    link: "https://crypto-exchange-web-app.vercel.app/",
  },

];

export const ABOUT =
  "As a dedicated Full Stack Developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies.  My expertise includes working with JavaScript frameworks such as React and Node.js, as well as proficiency in databases like MongoDB and SQL. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.";

export const EXPERIENCES = [
  {
    company: "StartConnect-Hub",
    role: "open-source contributor",
    year: " May 2024",
    description:
      "Build the Explore-Us page with image integration and component alignment.Utilized HTML, CSS, JavaScript and React.js to build the responsive web page.",
  },
  {
    company: "Review App",
    role: "open-source contributor",
    year: "Oct 2023",
    description:
      "Developed a user-friendly About page for the review applicationn and Applied JavaScript, CSS and React.js.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Umesh7Dixit",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/umesh-dixit/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects..",
  email: "umesh7dixit@gmail.com",
  phone: " 9368823454",
};

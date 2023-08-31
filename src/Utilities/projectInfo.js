import pokedex from "../Assets/pokedex.png";
import chatApp from "../Assets/chat app.png";
import soulful from "../Assets/soulful.png";
import quote from "../Assets/quote-generator.png";
import hotel from "../Assets/hotel.png";
import babyNest from "../Assets/baby-nest.png";
import vlog from "../Assets/vlog.png";
import clone from "../Assets/clone.png";
import goodPr from "../Assets/GoodPR.png";
import visualCalendar from "../Assets/Visual-Calendar.png";

const projects = [
  {
    id: 1,
    imgSrc: pokedex,
    alt: "pokedex",
    title: "Pokedex",
    link: "https://andriana-pokedex.netlify.app/",
    description:
      "This was my 1st frontend application using React. I tried my hand at using routes and counters.",
  },
  {
    id: 2,
    imgSrc: quote,
    alt: "quote",
    title: "Quote Generator",
    link: "https://andriana-quote-generator.onrender.com",
    description:
      "This project features a Frontend, backend and database using React, Node.JS and PostgreSQL.",
  },
  {
    id: 3,
    imgSrc: chatApp,
    alt: "chat",
    title: "Hub Chat",
    link: "https://chat-website-oerg.onrender.com",
    description:
      "This is my second Frontend and backend webpage using React and Node.JS",
  },
  {
    id: 4,
    imgSrc: soulful,
    alt: "affirmation",
    title: "Soulful Truths",
    link: "https://soulful-truths.netlify.app",
    description: "Frontend webpage using HTML, CSS and JavaScript",
  },
  {
    id: 5,
    imgSrc: hotel,
    alt: "hotel",
    title: "Andriana Hotel",
    link: "https://cyf-andriana-hotel-react.netlify.app",
    description:
      "Frontend and backend webpage using React and Node.JS. Large screen version only",
  },
  {
    id: 6,
    imgSrc: vlog,
    alt: "vlog",
    title: "Rap N Blues",
    link: "https://video-blog.onrender.com",
    description:
      "Frontend, backend and database webpage using React, Node.JS and PostgreSQL",
  },
  {
    id: 7,
    imgSrc: babyNest,
    alt: "babyNest",
    title: "Baby Name Nest",
    link: "https://baby-name-nest.onrender.com/",
    description:
      "Frontend, backend and database webpage using React, Node.JS and PostgreSQL",
  },
  {
    id: 8,
    imgSrc: clone,
    alt: "wix-clone",
    title: "Resume Clone",
    link: "https://clone-resume-1c2295.netlify.app/",
    description: "Frontend webpage using HTML and CSS",
  },

  {
    id: 9,
    imgSrc: goodPr,
    alt: "pr-tracker",
    title: "Pull Request Tracker",
    link: "https://the-goodpr.onrender.com/",
    description:
      "This is a team Full Stack Project that was completed as a final project for the bootcamp. A PERN stack was used",
  },
  {
    id: 10,
    imgSrc: visualCalendar,
    alt: "product presentation",
    title: "Visual Calendar",
    link: "https://docs.google.com/presentation/d/1B-J1xA9wYSJLsBiyz4t-vCYnYUQ1pFsF/edit?usp=sharing&ouid=106874600262243080126&rtpof=true&sd=true",
    description:
      "This is a presentation I created while on the Product Management pathway during my time at the bootcamp",
  },
];

export default projects;

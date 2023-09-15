import pokedex from "../Assets/pokedex.png";
import chatApp from "../Assets/chat.png";
import soulful from "../Assets/soulful.png";
import quote from "../Assets/quotes.png";
import hotel from "../Assets/hotel.png";
import babyNest from "../Assets/baby.png";
import vlog from "../Assets/rap.png";
import clone from "../Assets/clone.png";
import goodPr from "../Assets/pr.png";
import visualCalendar from "../Assets/Visual-Calendar.png";

const projects = [
  {
    id: 1,
    imgSrc: pokedex,
    alt: "pokedex",
    title: "Pokedex",
    date: "02/2023",
    github: "https://github.com/AndrianaOS/pokedex",
    link: "https://andriana-pokedex.netlify.app/",
    description:
      "This was my 1st frontend application using React. I tried my hand at using routers and counters.",
  },
  {
    id: 2,
    imgSrc: quote,
    alt: "quote",
    title: "Quotes",
    date: "03/2023",
    github: "https://github.com/AndrianaOS/Node-Coursework-Week1",
    link: "https://andriana-quote-generator.onrender.com",
    description:
      "This project features a Frontend, backend and database using React, Node.JS and PostgreSQL.",
  },
  {
    id: 3,
    imgSrc: chatApp,
    alt: "chat",
    title: "Hub Chat",
    date: "03/2023",
    github: "https://github.com/AndrianaOS/cyf-chat-react",
    link: "https://chat-website-oerg.onrender.com",
    description:
      "This is my second Frontend and backend webpage using React and Node.JS",
  },
  {
    id: 4,
    imgSrc: soulful,
    alt: "affirmation",
    title: "Soulful Truths",
    date: "01/2023",
    github: "https://github.com/AndrianaOS/Affirmation-page",
    link: "https://soulful-truths.netlify.app",
    description: "Frontend webpage using HTML, CSS and JavaScript",
  },
  {
    id: 5,
    imgSrc: hotel,
    alt: "hotel",
    title: "Andriana Hotel",
    date: "03/2023",
    github: "https://github.com/AndrianaOS/cyf-hotel-react",
    link: "https://cyf-andriana-hotel-react.netlify.app",
    description:
      "Frontend and backend webpage using React and Node.JS. Large screen version only. This is still in progress.",
  },
  {
    id: 6,
    imgSrc: vlog,
    alt: "vlog",
    title: "Rap N Blues",
    date: "06/2023",
    github: "https://github.com/AndrianaOS/Full-Stack-Project-Assessment",
    link: "https://video-blog.onrender.com",
    description:
      "Frontend, backend and database webpage using React, Node.JS and PostgreSQL.",
  },
  {
    id: 7,
    imgSrc: babyNest,
    alt: "babyNest",
    title: "Baby Names",
    date: "06/2023",
    github: "https://github.com/AndrianaOS/baby-picker",
    link: "https://baby-name-nest.onrender.com/",
    description:
      "Frontend, backend and database webpage using React, Node.JS and PostgreSQL",
  },
  {
    id: 8,
    imgSrc: clone,
    alt: "wix-clone",
    title: "Resume Clone",
    date: "11/2022",
    github: "https://github.com/AndrianaOS/responsive-grid-project",
    link: "https://clone-resume-1c2295.netlify.app/",
    description:
      "Frontend webpage using HTML and CSS. The template was taken from Wix.com",
  },

  {
    id: 9,
    imgSrc: goodPr,
    alt: "pr-tracker",
    title: "Pull Request Tracker",
    date: "07/2023",
    github: "https://github.com/AndrianaOS/GOOD-PR-v3",
    link: "https://the-goodpr.onrender.com/",
    description:
      "This is a team Full Stack Project that was completed as a final project for the bootcamp. A PERN stack was used",
  },
  {
    id: 10,
    imgSrc: visualCalendar,
    alt: "product presentation",
    title: "Visual Calendar",
    date: "07/2023",
    link: "https://docs.google.com/presentation/d/1B-J1xA9wYSJLsBiyz4t-vCYnYUQ1pFsF/edit?usp=sharing&ouid=106874600262243080126&rtpof=true&sd=true",
    description:
      "This is a presentation I created while on the Product Management pathway during my time at the bootcamp",
  },
];

export default projects;

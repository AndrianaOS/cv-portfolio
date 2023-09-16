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
    id: 9,
    imgSrc: goodPr,
    alt: "pr-tracker",
    title: "Pull Request Tracker",
    date: "07/2023",
    github: "https://github.com/AndrianaOS/GOOD-PR-v3",
    link: "https://the-goodpr.onrender.com/",
    info: "Good PR is an application that pulls information from GitHub to track team members participating in the final project at Code Your Future. This was to ensure that members were contributing fairly to the project. During this project, I acted in the capacity of a Technical lead and a Full Stack Developer",
    description:
      "Team Full Stack Project completed as a final project. A PERN stack was used",
  },
  {
    id: 6,
    imgSrc: vlog,
    alt: "vlog",
    title: "Rap N Blues",
    date: "06/2023",
    github: "https://github.com/AndrianaOS/Full-Stack-Project-Assessment",
    link: "https://video-blog.onrender.com",
    info: "Rap and Blues project was an assessment during my time on the course. This backend follows the CRUD method",
    description:
      "Frontend, backend and database webpage. A PERN stack was used",
  },
  {
    id: 2,
    imgSrc: quote,
    alt: "quote",
    title: "Quotes",
    date: "03/2023",
    github: "https://github.com/AndrianaOS/Node-Coursework-Week1",
    link: "https://andriana-quote-generator.onrender.com",
    info: "The Quotes Generator originally did not include the database until I learnt PostgreSQL. I then modified the project to include a database. This is my 1st project that included a backend making GET requests to the database.",
    description:
      "Frontend, backend and database using React, Node.JS and PostgreSQL.",
  },
  {
    id: 4,
    imgSrc: soulful,
    alt: "affirmation",
    title: "Soulful Truths",
    date: "01/2023",
    github: "https://github.com/AndrianaOS/Affirmation-page",
    link: "https://soulful-truths.netlify.app",
    info: "Soulful truths was my first team project where I was the project manager as well as being responsible for the UX/UI and the Frontend. This project helped me understand how to interact and work with GitHub in a collaborative way to avoid merge conflicts.",
    description: "Team Frontend webpage using HTML, CSS and JavaScript.",
  },
  {
    id: 7,
    imgSrc: babyNest,
    alt: "babyNest",
    title: "Baby Names",
    date: "06/2023",
    github: "https://github.com/AndrianaOS/baby-picker",
    link: "https://baby-name-nest.onrender.com/",
    info: "Baby Name Nest was my own take on a React challenge which gave a json file with names. I decided to make it a challenge for myself to include a database and unisex option. Each sex option gives the name a different background color when chosen",
    description:
      "Frontend, backend and database using React, Node.JS and PostgreSQL",
  },
  {
    id: 3,
    imgSrc: chatApp,
    alt: "chat",
    title: "Hub Chat",
    date: "03/2023",
    github: "https://github.com/AndrianaOS/cyf-chat-react",
    link: "https://chat-website-oerg.onrender.com",
    info: "The Hub Chat project makes GET, POST and DELETE requests. This the 1st project I made using more than the GET request",
    description:
      "Frontend and backend only webpage using React and Node.JS",
  },
  {
    id: 1,
    imgSrc: pokedex,
    alt: "pokedex",
    title: "Pokedex",
    date: "02/2023",
    github: "https://github.com/AndrianaOS/pokedex",
    link: "https://andriana-pokedex.netlify.app/",
    info: "This was my 1st project using an external REST API to fetch data. After figuring out how to utilise the JSON results, I was able to adapt a function to make different calls to the API.",
    description:
      "This was my 1st frontend application using React, routers and counters.",
  },
  {
    id: 8,
    imgSrc: clone,
    alt: "wix-clone",
    title: "Resume Clone",
    date: "11/2022",
    github: "https://github.com/AndrianaOS/responsive-grid-project",
    link: "https://clone-resume-1c2295.netlify.app/",
    info: "Wix clone was an HTML and CSS challenge to try and recreate a resume. This helped me about having a plan of how to tackle moving parts on a page instead of just jumping in to start coding",
    description:
      "Wix template Frontend webpage using HTML and CSS.",
  },

  {
    id: 5,
    imgSrc: hotel,
    alt: "hotel",
    title: "Andriana Hotel",
    date: "03/2023",
    github: "https://github.com/AndrianaOS/cyf-hotel-react",
    link: "https://cyf-andriana-hotel-react.netlify.app",
    info: "The hotel project was the first big React project that had to be completed over 3 weeks.",
    description:
      "Frontend and backend webpage using React and Node.JS. Large screen version only. This is still in progress.",
  },

  {
    id: 10,
    imgSrc: visualCalendar,
    alt: "product presentation",
    title: "Visual Calendar",
    date: "07/2023",
    link: "https://docs.google.com/presentation/d/1B-J1xA9wYSJLsBiyz4t-vCYnYUQ1pFsF/edit?usp=sharing&ouid=106874600262243080126&rtpof=true&sd=true",
    info: "The Visual Calendar was a presentation I created to solve what I saw as a gap in regards to booking meetings and finding out peoples schedules and availabilities in the organization.",
    description:
      "This is a presentation I created while on the Product Management pathway during my time at the bootcamp",
  },
];

export default projects;

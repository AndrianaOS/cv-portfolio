import pokedex from "../Assets/pokedex.webp";
import chatApp from "../Assets/chat.webp";
import soulful from "../Assets/soulful.webp";
import quote from "../Assets/quotes.webp";
import hotel from "../Assets/hotel.webp";
import babyNest from "../Assets/baby.webp";
import vlog from "../Assets/rap.webp";
import clone from "../Assets/clone.webp";
import goodPr from "../Assets/pr.webp";
import visualCalendar from "../Assets/visual-Calendar.webp";
import medicApp from "../Assets/medic-app.webp"
import readme from "../Assets/readme-hireme2.webp"
import tvc from "../Assets/the_village_consult.png"

const projects = [
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
    id: 2,
    imgSrc: quote,
    alt: "quote",
    title: "Quotes",
    date: "03/2023",
    github: "https://github.com/AndrianaOS/Node-Coursework-Week1",
    link: "https://andriana-quote-generator.onrender.com",
    info: "The Quotes Generator was originally a backend project showcasing GET requests from a JSON file. To help improve on my skills, I added a frontend to showcase the quotes and included a database later on once I learnt PostgreSQL.",
    description:
      "Frontend, backend and database using React, Node.JS and PostgreSQL.",
  },
  {
    id: 3,
    imgSrc: chatApp,
    alt: "chat",
    title: "Hub Chat",
    date: "03/2023",
    github: "https://github.com/AndrianaOS/cyf-chat-react",
    link: "https://chat-website-oerg.onrender.com",
    info: "The Hub Chat project makes GET, POST and DELETE requests. This the 1st project I made using more of the CRUD method. As this project does not have a database yet, the messages only persist for a while before disappearing.",
    description:
      "Solo Frontend and backend only webpage using React and Node.JS",
  },
  {
    id: 4,
    imgSrc: soulful,
    alt: "affirmation",
    title: "Soulful Truths",
    date: "01/2023",
    github: "https://github.com/AndrianaOS/Affirmation-page",
    link: "https://soulful-truths.netlify.app",
    info: "Soulful Truths was my first team project where I was the Project Manager as well as being responsible for the UX/UI and the Frontend. This project helped me understand how to interact and work with GitHub in a collaborative way to avoid merge conflicts. This project was also my 1st introduction to JavaScript.",
    description:
      "Team project made on frontend webpage using HTML, CSS and JavaScript.",
  },
  {
    id: 5,
    imgSrc: hotel,
    alt: "hotel",
    title: "Andriana Hotel",
    date: "03/2023",
    github: "https://github.com/AndrianaOS/cyf-hotel-react",
    link: "https://cyf-andriana-hotel-react.netlify.app",
    info: "The hotel project was the first big React project that had to be completed over 3 weeks. I learnt how to reuse components and functions",
    description:
      "Large screen only webpage using React and Node.JS. Mobile version in progress.",
  },
  {
    id: 6,
    imgSrc: vlog,
    alt: "vlog",
    title: "Rap N Blues",
    date: "06/2023",
    github: "https://github.com/AndrianaOS/Full-Stack-Project-Assessment",
    link: "https://video-blog.onrender.com",
    info: "Rap and Blues project my final solo assessment during my time on the course. This backend follows the CRUD (Create, Read, Update, Delete) method",
    description:
      "Frontend, backend and database using React, Node and PostgreSQL. A PERN stack was used",
  },
  {
    id: 7,
    imgSrc: babyNest,
    alt: "babyNest",
    title: "Baby Names",
    date: "06/2023",
    github: "https://github.com/AndrianaOS/baby-picker",
    link: "https://baby-name-nest.onrender.com/",
    info: "Using a JSON file of baby names, I created a website using React, NodeJS and Express.JS for the frontend and server. I decided to make it a challenge for myself to include a database and unisex option. Each sex option gives the name a different background color when chosen.",
    description:
      "Frontend, backend and database using React, Node.JS and PostgreSQL",
  },
  {
    id: 8,
    imgSrc: clone,
    alt: "wix-clone",
    title: "Resume Clone",
    date: "11/2022",
    github: "https://github.com/AndrianaOS/responsive-grid-project",
    link: "https://clone-resume-1c2295.netlify.app/",
    info: "Wix clone was an HTML and CSS challenge to try and recreate a resume from a Wix template. This helped learn more about the use of grids and flex boxes to tackle moving elements and how to position items in mobile and large screens.",
    description: "Wix template Frontend webpage using HTML and CSS.",
  },
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
    id: 10,
    imgSrc: visualCalendar,
    alt: "product presentation",
    title: "Visual Calendar",
    date: "07/2023",
    link: "https://docs.google.com/presentation/d/1B-J1xA9wYSJLsBiyz4t-vCYnYUQ1pFsF/edit?usp=sharing&ouid=106874600262243080126&rtpof=true&sd=true",
    info: "The Visual Calendar presentation included: A Product Vision Board to indicate the reason why this product will be beneficial; Prioritisation Matrix to find out the important features; Product road map to prioritse implementation of important features and a Delivery plan for time estimation of the features.",
    description:
      "Presentation created during Product Management identifying a gap in the organisation and proposing a solution for said problem.",
  },
  {
    id: 11,
    imgSrc: readme,
    alt: "readme hireme",
    title: "ReadMe HireMe",
    date: "12/2023",
    github: "https://github.com/AndrianaOS/graduates-page",
    link: "https://graduates-page.onrender.com/",
    info: "ReadMe HireMe is an application that showcases graduates from the CodeYourFuture to potential recruiters. The server code is on a different repository and built using Python the Flask framework. I learnt and implemented the framework within 5 weeks as well as learning how to connect to the database. The frontend is built using React with some Material UI for the form section. This is still a work in progress as the data derived from GitHub takes a longer time to display.",
    description:
      "Frontend, backend and database using React, Python and PostgreSQL",
  },
  {
    id: 12,
    imgSrc: medicApp,
    alt: "medic app",
    title: "Doctors Inn",
    date: "04/2023",
    github: "https://github.com/Gayle-Thompson-Igwebike/medical-app",
    link: "https://bwc-medical-app.netlify.app/",
    info: "Doctors Inn is an application that was created to showcase a range of doctors of different specialties for possible patients to find and message to book an initial appointment to get look at. This is a team project which is currently halted but will be back in progress soon. The server is on a different repository and the database utilises AWS.",
    description:
      "Frontend, backend and database using React, Node.JS and PostgreSQL",
  },
  // {
  //   id: 13,
  //   imgSrc: tvc,
  //   alt: "the village consult",
  //   title: "The Village Consult",
  //   date: "03/2024",
  //   github: "https://github.com/AndrianaOS/tvc-webpage",
  //   link: "https://thevillageconsult.onrender.com/",
  //   info: "The Village Consult is an application that humanizes and bridges the gap between the public and social work.",
  //   description:
  //     "Static webpage using React.",
  // },
];

export default projects;

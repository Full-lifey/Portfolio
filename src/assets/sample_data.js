import sfrImage from "./img/SFR.PNG";
import Tabless from "./img/Tabless.PNG";
import MMM from "./img/MMM.PNG";

export const sampleData = [
  {
    title: "Miracle Messages Map",
    description:
      "Miracle Messages Map is a web application built to connect homeless people to their families. I was the back-end enginner on the project and I implemented a RESTful API designed using NodeJS with a PostgreSQL database.",
    image: MMM,
    deployment: "https://mmm-api-docs.netlify.com/",
    repo: "https://github.com/miracle-mm/back-end"
  },
  {
    title: "Tabless Thursday",
    description:
      "Tabless Thursday is a web application built to save tabs in order to reduce CPU and RAM usage by allowing users to save and close open tabs in browsers. I was one of two assigned to the front end of this application. We decided to build a single-page React application using Router and Redux.",
    image: Tabless,
    deployment: "https://tabless-thursday-fe.netlify.com/",
    repo:
      "https://github.com/tabless-thursday-6-27-2019/tabless-thursday-frontend"
  },
  {
    title: "Secret Family Recipes",
    description:
      "This is the landing page for the Secret Family Recipes application. I created this in four days using the HTML, CSS, and Javascript skills I learned the first four weeks in Lambda School.",
    image: sfrImage,
    deployment: "https://secret-family-recipes-marketing.netlify.com/",
    repo: "https://github.com/family-recipes-buildweek/Joel-Perez-UI"
  }
];

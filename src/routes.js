import React from "react";
import CV from "./component/CV/CV";
import Contact from "./component/ContactForm/Contact";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <CV></CV>,
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact></Contact>,
  },
];

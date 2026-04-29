// import type {
//   TNavLink,
//   TService,
//   TTechnology,
//   TExperience,
//   TTestimonial,
//   TProject,
// } from "../types";

// import {
//   mobile,
//   backend,
//   creator,
//   web,
//   javascript,
//   typescript,
//   html,
//   css,
//   reactjs,
//   redux,
//   tailwind,
//   nodejs,
//   mongodb,
//   git,
//   figma,
//   NULLClass,
//   greencart,
//   ecommerce,
//   booksale,
//   threejs,
//   BPR,
//   Wipro,
//   // Numpy,
//   // Pandas
// } from "../assets";

// export const navLinks: TNavLink[] = [
//   {
//     id: "about",
//     title: "About",
//   },
//   {
//     id: "work",
//     title: "Work",
//   },
//   {
//     id: "contact",
//     title: "Contact",
//   },
// ];

// const services: TService[] = [
//   {
//     title: "Front-end Developer",
//     icon: web,
//   },
//   {
//     title: "MERN Stack Developer",
//     icon: mobile,
//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   },
//   {
//     title: "Data Analyst",
//     icon: creator,
//   },
// ];

// const technologies: TTechnology[] = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   // {
//   //   name: "Numpy",
//   //   icon: Numpy,
//   // },
//   // {
//   //   name:"Pandas",
//   //   icon:Pandas
//   // }
// ];

// const experiences: TExperience[] = [
//   {
//     title: "Full Stack Developer",
//     companyName: "BPR Pvt Ltd ,Patna",
//     icon: BPR,
//     iconBg: "#FFFFFF",
//     date: "March 2024 - June 2024",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "MERN-STACK Developer",
//     companyName: "Null-Class Technology Pvt Ltd",
//     icon: NULLClass,
//     iconBg: "#000000",
//     date: "Dec 2024 - June 2025",
//     points: [
//       "Developing and maintaining web applications using MERN Stack and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "L1 Developer Trainee",
//     companyName: "Wipro Technology PVT Ltd, Hydrabad",
//     icon: Wipro,
//     iconBg: "#FFFFFF",
//     date: "JUL 2025 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
 
// ];

// const testimonials: TTestimonial[] = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
//    {
//     testimonial:
//       "I didn’t think any website could match the elegance of our product—until Sachin showed me otherwise.",
//     name: "Sara",
//     designation: "CFO",
//     company: "Wipro pvt Ltd",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
// ];

// const projects: TProject[] = [
//   {
//     name: "Green-Cart",
//     description:
//       "Built MERN grocery app with login, products, cart, orders, and admin panel for managing products, stock, and orders with responsive UI.I.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//       {
//         name :  "Node js",
//         color: ""
//       },
//       {
//         name:"express",
//         color: ""
//       },
//       {
//         name:"jwt",
//         color: ""
//       },
//       {
//         name:"redux",
//         color: ""
//       }
//     ],
//     image: greencart,
//     sourceCodeLink: "https://github.com/Mishra-je/QuickShowFrontend-",
//   },
//   {
//     name: "Book Selling",
//     description:
//       "Developed a MERN stack-based platform for buying and selling books with JWT authentication, protected routes, and a toggleable Dark Mode using Tailwind CSS.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "green-text-gradient",
//       },
//       {
//         name: "react-router",
//         color: "pink-text-gradient",
//       },
      
//     ],
//     image: booksale,
//     sourceCodeLink: "https://github.com/Mishra-je/BookSelling",
//   },
//   {
//     name: "E-commerce",
//     description:
//       "Built a fully responsive e-commerce website using React.js and Tailwind CSS featuring login/signup, categoryfilters, product search, dynamic routing, and real-time data fetching.",
//     tags: [
//       {
//         name: "React",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: ecommerce,
//     sourceCodeLink: "https://github.com/Mishra-je/CoralEcommerce",
//   },
   
// ];

// export { services, technologies, experiences, testimonials, projects };


// import type {
//   TNavLink,
//   TService,
//   TTechnology,
//   TExperience,
//   TTestimonial,
//   TProject,
// } from "../types";

// import {
//   mobile,
//   backend,
//   creator,
//   web,
//   javascript,
//   typescript,
//   html,
//   css,
//   reactjs,
//   redux,
//   tailwind,
//   nodejs,
//   mongodb,
//   git,
//   figma,
//   NULLClass,
//   greencart,
//   ecommerce,
//   booksale,
//   threejs,
//   BPR,
//   Wipro,
// } from "../assets";

// export const navLinks: TNavLink[] = [
//   { id: "about", title: "About" },
//   { id: "work", title: "Work" },
//   { id: "contact", title: "Contact" },
// ];

// const services: TService[] = [
//   { title: "Front-end Developer", icon: web },
//   { title: "MERN Stack Developer", icon: mobile },
//   { title: "Backend Developer", icon: backend },
//   { title: "Data Analyst", icon: creator },
// ];

// const technologies: TTechnology[] = [
//   { name: "HTML 5", icon: html },
//   { name: "CSS 3", icon: css },
//   { name: "JavaScript", icon: javascript },
//   { name: "TypeScript", icon: typescript },
//   { name: "React JS", icon: reactjs },
//   { name: "Redux Toolkit", icon: redux },
//   { name: "Tailwind CSS", icon: tailwind },
//   { name: "Node JS", icon: nodejs },
//   { name: "MongoDB", icon: mongodb },
//   { name: "Three JS", icon: threejs },
//   { name: "git", icon: git },
//   { name: "figma", icon: figma },
// ];

// const experiences: TExperience[] = [
//   {
//     title: "Full Stack Developer",
//     companyName: "BPR Pvt Ltd ,Patna",
//     icon: BPR,
//     iconBg: "#FFFFFF",
//     date: "March 2024 - June 2024",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback.",
//     ],
//   },
//   {
//     title: "MERN-STACK Developer",
//     companyName: "Null-Class Technology Pvt Ltd",
//     icon: NULLClass,
//     iconBg: "#000000",
//     date: "Dec 2024 - June 2025",
//     points: [
//       "Developing and maintaining web applications using MERN Stack.",
//       "Collaborating with cross-functional teams.",
//       "Implementing responsive UI and cross-browser support.",
//       "Participating in code reviews.",
//     ],
//   },
//   {
//     title: "L1 Developer Trainee",
//     companyName: "Wipro Technology PVT Ltd, Hydrabad",
//     icon: Wipro,
//     iconBg: "#FFFFFF",
//     date: "JUL 2025 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js.",
//       "Working with teams to build high-quality products.",
//       "Ensuring responsive design.",
//       "Participating in reviews and improvements.",
//     ],
//   },
// ];

// const testimonials: TTestimonial[] = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%.",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
//   {
//     testimonial:
//       "I didn’t think any website could match the elegance of our product—until Sachin showed me otherwise.",
//     name: "Sara",
//     designation: "CFO",
//     company: "Wipro pvt Ltd",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
// ];

// const projects: TProject[] = [
//   {
//     name: "Green-Cart",
//     description:
//       "Built MERN grocery app with login, products, cart, orders, and admin panel with responsive UI.",
//     tags: [
//       { name: "react", color: "blue-text-gradient" },
//       { name: "mongodb", color: "green-text-gradient" },
//       { name: "tailwind", color: "pink-text-gradient" },
//       { name: "Node js", color: "green-text-gradient" },
//       { name: "express", color: "yellow-text-gradient" },
//       { name: "jwt", color: "green-text-gradient" },
//       { name: "redux", color: "blue-text-gradient" },
//     ],
//     image: greencart,
//     sourceCodeLink: "https://github.com/Mishra-je/QuickShowFrontend-",
//   },
//   {
//     name: "Book Selling",
//     description:
//       "MERN platform for buying/selling books with JWT auth, protected routes, and dark mode.",
//     tags: [
//       { name: "react", color: "blue-text-gradient" },
//       { name: "tailwind", color: "green-text-gradient" },
//       { name: "react-router", color: "pink-text-gradient" },
//     ],
//     image: booksale,
//     sourceCodeLink: "https://github.com/Mishra-je/BookSelling",
//   },
//   {
//     name: "E-commerce",
//     description:
//       "Responsive e-commerce site with login, filters, search, routing, and real-time data.",
//     tags: [
//       { name: "React", color: "blue-text-gradient" },
//       { name: "tailwind", color: "green-text-gradient" },
//       { name: "css", color: "pink-text-gradient" },
//     ],
//     image: ecommerce,
//     sourceCodeLink: "https://github.com/Mishra-je/CoralEcommerce",
//   },
//   {
//     name: "Portfolio",
//     description:
//       "Responsive e-commerce site with login, filters, search, routing, and real-time data.",
//     tags: [
//       { name: "React", color: "blue-text-gradient" },
//       { name: "tailwind", color: "green-text-gradient" },
//       { name: "css", color: "pink-text-gradient" },
//     ],
//     image: ecommerce,
//     sourceCodeLink: "https://github.com/Mishra-je/CoralEcommerce",
//   },
// ];

// export { services, technologies, experiences, testimonials, projects };



import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  NULLClass,
  greencart,
  ecommerce,
  booksale,
  threejs,
  BPR,
  Wipro,
  portfolio,
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services: TService[] = [
  { title: "Front-end Developer", icon: web },
  { title: "MERN Stack Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Data Analyst", icon: creator },
];

const technologies: TTechnology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Developer",
    companyName: "BPR Pvt Ltd ,Patna",
    icon: BPR,
    iconBg: "#FFFFFF",
    date: "March 2024 - June 2024",
    points: [
      "Developing React.js applications.",
      "Team collaboration and UI building.",
      "Responsive design implementation.",
      "Code reviews.",
    ],
  },
  {
    title: "MERN-STACK Developer",
    companyName: "Null-Class Technology Pvt Ltd",
    icon: NULLClass,
    iconBg: "#000000",
    date: "Dec 2024 - June 2025",
    points: [
      "Building MERN applications.",
      "Improving UI/UX.",
      "Responsive development.",
      "Code optimization.",
    ],
  },
  {
    title: "L1 Developer Trainee",
    companyName: "Wipro Technology PVT Ltd, Hydrabad",
    icon: Wipro,
    iconBg: "#FFFFFF",
    date: "JUL 2025 - Present",
   points: [
  "Developing and maintaining React-based web applications with reusable components.",
  "Optimizing application performance and improving load times.",
  "Building responsive and scalable UI using Tailwind CSS.",
  "Collaborating with team members using Git and Agile practices.",
  "Debugging issues and ensuring cross-browser compatibility.",
],
  },
];

// const testimonials: TTestimonial[] = [
//   {
//     testimonial:
//       "I didn’t think any website could match the elegance of our product—until Sachin showed me otherwise.",
//     name: "Sara",
//     designation: "CFO",
//     company: "Wipro pvt Ltd",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
// ];
const testimonials: TTestimonial[] = [ { testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.", name: "Sara Lee", designation: "CFO", company: "Acme Co", image: "https://randomuser.me/api/portraits/women/4.jpg", }, { testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.", name: "Chris Brown", designation: "COO", company: "DEF Corp", image: "https://randomuser.me/api/portraits/men/5.jpg", }, { testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!", name: "Lisa Wang", designation: "CTO", company: "456 Enterprises", image: "https://randomuser.me/api/portraits/women/6.jpg", }, { testimonial: "I didn’t think any website could match the elegance of our product—until Sachin showed me otherwise.", name: "Sara", designation: "CFO", company: "Wipro pvt Ltd", image: "https://randomuser.me/api/portraits/women/4.jpg", }, ];
const projects: TProject[] = [
  {
    name: "Green-Cart",
    description:
      "MERN grocery app with authentication, cart, orders, and admin panel.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "node", color: "green-text-gradient" },
      { name: "express", color: "yellow-text-gradient" },
      { name: "jwt", color: "purple-text-gradient" },
      { name: "redux", color: "blue-text-gradient" },
    ],
    image: greencart,
    sourceCodeLink: "https://github.com/Mishra-je/QuickShowFrontend-",
    liveLink: "https://grocery-app-mocha.vercel.app/",
  },
   {
    name: "Portfolio",
    description:
      "Portfolio with React, Tailwind, Framer Motion, and EmailJS.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "motion", color: "pink-text-gradient" },
      { name: "emailjs", color: "yellow-text-gradient" },
    ],
    image: portfolio,
    sourceCodeLink: "https://github.com/Mishra-je/ReactPortfolioAnimated",
    liveLink: "https://sachin-sandy.vercel.app/",
  },
  {
    name: "Book Selling",
    description:
      "MERN book marketplace with JWT authentication and dark mode.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "router", color: "pink-text-gradient" },
    ],
    image: booksale,
    sourceCodeLink: "https://github.com/Mishra-je/BookSelling",
    liveLink: "https://bookselling-6uf0.onrender.com/",
  },
  {
    name: "E-commerce",
    description:
      "Responsive e-commerce UI with filters, search, and routing.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: ecommerce,
    sourceCodeLink: "https://github.com/Mishra-je/CoralEcommerce",
    liveLink: "https://mycoral03.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
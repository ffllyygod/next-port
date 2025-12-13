
export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "Fast React Pizza",
    description:
      "Pizza ordering web application focused on speed and simplicity. Users place orders without accounts, enter their name once, and select pizzas from a dynamic menu loaded via API. Built for clean UX and fast interactions.",
    tags: ["React", "API", "State Management", "UX"],
    github: "https://github.com/ffllyygod/Fast-React-Pizza-Co.",
    live: "https://ffllyy-pizza.netlify.app/",
  },
  {
    title: "ETL Tool",
    description:
      "Data Analytics as a Service platform that extracts data from multiple local and cloud sources in different formats. Built using a microservice architecture and deployed on AWS.",
    tags: ["React", "Flask", "ETL", "Docker", "AWS", "Microservices"],
    github: "https://github.com/ffllyygod/ETL_Tool",
  },
  {
    title: "WorldWise",
    description:
      "Interactive travel tracking web app that allows users to log and visualize places they’ve visited. Built to showcase routing, React Context API, and map-based UI using Leaflet.",
    tags: ["React", "Context API", "Routing", "Leaflet", "Maps"],
    github: "https://github.com/ffllyygod/World-Wise",
  },
  {
    title: "Free Udemy Courses Archive",
    description:
      "Curated archive of DevOps, MERN, Next.js, React, and security-related learning resources distributed via torrent files for offline access.",
    tags: ["DevOps", "MERN", "Next.js", "React", "Security"],
    github: "https://github.com/ffllyygod/Free-Udemy-Courses",
  },
];

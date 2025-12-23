// components/experience/experience.data.ts

export type ExperienceType = "work" | "education";

export interface Experience {
  company: string;
  role: string;
  location?: string;
  duration: string;
  description: string[];
  tech: string[];
  type: ExperienceType;
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    company: "Ingenious e-Brain",
    role: "Software Development Engineer – Full Stack",
    location: "Gurugram, India",
    duration: "Aug 2024 – Nov 2024",
    current: true,
    type: "work",
    description: [
      "Built and deployed 5+ AI/RAG applications using FastAPI microservices for 10M+ biomedical datasets.",
      "Developed scalable LLM workflows using OpenAI, Anthropic, DeepSeek, and Vertex AI.",
      "Designed high-volume ETL pipelines for PubMed and clinical-trial data with knowledge-graph ingestion.",
      "Deployed inference and backend workloads on AWS & Azure, optimizing cost and latency.",
    ],
    tech: [
      "FastAPI",
      "Python",
      "RAG",
      "LLMs",
      "Elasticsearch",
      "AWS",
      "Azure",
      "Docker",
    ],
  },
  {
    company: "Willings, Inc",
    role: "Software Engineering Intern",
    location: "Remote",
    duration: "Jun 2023 – Nov 2023",
    type: "work",
    description: [
      "Built backend for matchmaking app supporting 1K+ daily active users.",
      "Integrated Firebase storage and secure profile flows.",
      "Used Google Maps APIs for geolocation and spatial queries.",
      "Built React + Node admin dashboard reducing ops overhead by 40%.",
    ],
    tech: ["React", "Node.js", "Firebase", "Google Maps API"],
  },
  {
    company: "Indian Institute of Technology Jodhpur",
    role: "Bachelor of Technology",
    duration: "2020 – 2024",
    type: "education",
    description: [
      "Focused on software engineering, systems programming, and backend development.",
    ],
    tech: ["C++", "Python", "Data Structures", "Systems Programming"],
  },
];


export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
}

export const projects: Project[] = [
  {
    title: "Conflux",
    description:
      "Modular, actor-based real-time collaboration engine written in Rust. Provides CRDT sync, presence awareness, and WebSocket-based chat with JWT auth.",
    tags: ["Rust", "CRDT", "WebSockets", "JWT Auth", "Yrs", "Tokio"],
    github: "https://github.com/Kayleexx/conflux",
  },
  {
    title: "Veridian",
    description:
      "Git-like version control system in Rust. Implements repo init, object storage, trees, and commits to explore Git internals.",
    tags: ["Rust", "Git Internals", "Content-addressable storage", "CLI"],
    github: "https://github.com/Kayleexx/veridian",
  },
  {
    title: "Veil",
    description:
      "Multi-purpose encryption and secret-sharing framework with AES, Shamir’s Secret Sharing, and basic MPC.",
    tags: ["Rust", "AES", "Shamir", "MPC", "CLI"],
    github: "https://github.com/Kayleexx/veil",
  },
  {
    title: "Nexus",
    description:
      "Rust CLI tool that scans codebases to generate file-level dependency graphs and detect circular dependencies.",
    tags: ["Rust", "Clap", "Graph analysis", "petgraph"],
    github: "https://github.com/Kayleexx/Nexus",
  },
  {
    title: "VitalCheck",
    description:
      "Multi-agent health consultant built for a bounty. Handles complex health query flows with modular agents.",
    tags: ["Python", "dataclasses", "logging", "CLI"],
    github: "https://github.com/Kayleexx/VitalCheck",
  },
  {
    title: "WebWalker",
    description:
      "Blazing-fast async web crawler with recursion, rate limiting, and domain scoping.",
    tags: ["Rust", "Tokio", "Reqwest", "Scraper", "Serde"],
    github: "https://github.com/Kayleexx/webwalker",
  },
  {
    title: "AquaMint",
    description:
      "DEX tool to create ERC-20 pairs and launch liquidity pools on a Uniswap-style exchange (testnet).",
    tags: ["Solidity", "Ethers.js", "React", "TypeScript"],
    github: "https://github.com/Kayleexx/aquamint-dex",
  },
  {
    title: "CryptoFusion",
    description:
      "Real-time crypto dashboard showing token prices, market trends, and news via public APIs.",
    tags: ["React", "Redux", "Chart.js", "APIs"],
    github: "https://github.com/Kayleexx/CryptoFusion",
  },
];

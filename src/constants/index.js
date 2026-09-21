import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";

export const HERO_CONTENT = `An Emerging Machine Learning Engineer with a dual foundation in ICT engineering and Biological Sciences, this profile excels at taking data-driven models from experimental evaluation into production deployment. Demonstrating a rigorous, multi-variable analytical approach, I applied data mining and machine learning techniques to battery performance optimization research in my thesis. On the technical side, I bring hands-on experience deploying ML applications via React, Firebase, Docker, GCP, and CI/CD pipelines, supported by core IT infrastructure skills in Linux, TCP/IP, and networking. What sets this profile apart is a strong background in technical sales and business development, highlighted by driving a 15% revenue increase in three months and earning an award nomination for securing key strategic partnerships—all guided by a structured "plan before action" principle and a commitment to continuous learning in AI.`;

export const ABOUT_TEXT = {
  description: `I have a dual background in Information and Communication Technology and Biological Science, focused on building practical, data-driven solutions at the intersection of machine learning, computer vision, and healthcare technology. My thesis applied data mining and machine learning techniques to optimize battery performance, with findings revealing that battery depletion is influenced by multiple interacting variables rather than any single factor. The Random Forest classifier was selected as the best-performing model. During my Full Stack Developer Internship, I developed and integrated machine learning features into production applications using React, Firebase, and cloud-based functions. Earlier, as a Data Network Assistant at JAMK, I gained hands-on experience with IT infrastructure and networking, including Linux, shell scripting, VPNs, TCP/IP, DNS, and network diagnostics using tools such as Wireshark and Cisco Packet Tracer.

Before moving into technology, I worked in business development and technical sales, managing relationships with international suppliers across Germany, Italy, India, and Malaysia, as well as local customers. In that role, I identified, evaluated, and secured a new supplier with the team for a fragrance project—an initiative later nominated at the Hayleys Awards Night in Sri Lanka.

I hold a Bachelor of Engineering in Information and Communication Technology and a Bachelor of Science in Biological Science. I have served as Vice President of the Plant Biotechnology Society at the University of Sri Jayewardenepura and as a degree tutor at Jyväskylä University of Applied Sciences. Outside my professional work, I captained my table tennis team at All-Island Championships and annual house sports championships and have received recognition in table tennis, English, and art competitions.`,

  sections: [
    {
      title: "Frontend Technologies",
      items: [
        "ReactJS",
        "JavaScript",
        "HTML",
        "CSS",
        "TailwindCSS",
        "VueJS",
        "Angular",
      ],
    },
    {
      title: "Backend Technologies",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Web Tokens (JWT)",
        "WebSockets",
      ],
    },
    {
      title: "Database Management",
      items: ["MongoDB", "MySQL"],
    },
    {
      title: "Version Control & CI/CD",
      items: ["GitHub", "Jenkins", "GitLab"],
    },
    {
      title: "Programming Concepts",
      items: [
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms",
      ],
    },
    {
      title: "Testing & Automation",
      items: ["Jest"],
    },
    {
      title: "Cloud Platforms & DevOps",
      items: ["Google Firebase", "Docker", "GCP"],
    },
  ],
};

export const EXPERIENCES = [
  {
    year: "Sep 2025 - Mar 2026",
    role: "Full Stack Developer - Internship",
    company: "Kyky-today (Finland)",
    description: [
      "Identified, analyzed, and fixed bugs in web and mobile applications",
      "Debugged front-end and back-end issues to improve application performance and stability",
      "Assisted in resolving UI/UX issues and functional errors reported by users and QA teams",
      "Wrote clean, maintainable code while following best practices",
      "Designed and implemented user interface components based on design guidelines and mockups",
      "Improved existing UI elements to enhance usability and responsiveness",
      "Ensured cross-browser and cross-device compatibility",
      "Supported the development and maintenance of server-side logic and APIs",
      "Helped optimize application performance and application security",
      "Implemented new features according to project requirements",
      "Wrote and executed basic unit and integration tests",
      "Ensured that fixes and new features met functional and technical requirements",
      "Collaborated with the development team using version control tools such as Git",
    ],
  },
  {
    year: "May 2024 - Oct 2025",
    role: "Data Network Assistant",
    company: "JAMK University of Applied Sciences",
    description: [
      "Material management and assisting lecturers during lab sessions",
      "Testing and configuring network setups",
      "Maintaining user access permissions and supporting VPN and firewall configurations",
      "Conducting basic tests of network hardware and software",
      "Monitoring network traffic to identify bottlenecks and performance issues",
      "Assisting in deployment of new subnets and network expansions",
      "Testing DHCP, DNS, TCP/IP protocols and HTTP traffic using Wireshark",
      "Shell scripting and working with VMware and Linux (Ubuntu)",
    ],
  },
  {
    year: "Dec 2019 - Aug 2023",
    role: "Business Development Executive",
    company: "Hayleys Aventura (PVT) Ltd.",
    description: [
      "Achieving new projects for innovative products and technologies while meeting revenue targets",
      "Introducing new innovations, technologies, and market trends",
      "Coordinating between clients and overseas suppliers",
      "Procuring new clients through direct engagement and referrals",
      "Negotiating with suppliers to secure competitive pricing",
      "Reviewing client feedback and implementing improvements",
      "Maintaining long-term relationships with overseas suppliers",
      "Participating in technical training sessions with international suppliers",
      "Preparing and delivering technical and sales presentations for internal teams and customers",
    ],
  },
  {
    year: "Jan 2015 - Dec 2019",
    role: "Sales Assistant",
    company: "Queens Mobile",
    description: [
      "Gain new orders for mobile phones and achieve the target revenue.",
    ],
  },
];

export const PROJECTS = [
  {
    id: "thesis-robotics",
    title: "Thesis - A Data Mining and Machine Learning Approach into Autonomous Robotics Systems",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    category: "AI & Data",
    featured: true,
    description: "Academic thesis research focusing on data mining and machine learning applications for optimizing battery performance in autonomous mobile robots.",
    technologies: ["Python", "Data Analytics", "Machine Learning", "Robotics"],
    githubUrl: "https://www.theseus.fi/server/api/core/bitstreams/176fc0b9-9140-49f6-b3c5-ace65acceb12/content",
    liveUrl: "https://www.theseus.fi/items/f264b031-760a-46ff-ab34-981fbb7536f7",
    highlights: [
      "Telemetry dataset cleaning, feature engineering, and statistical analysis",
      "Empirical performance evaluation and predictive modeling",
      "Data Mining and Machine Learning techniques applied to battery performance optimization",
      "Random Forest classifier identified as the best-performing model for battery depletion prediction",
      "Findings revealed that battery depletion is influenced by multiple interacting variables rather than any single factor"
    ]
  },
  {
    id: "cyber-security-data-analytics",
    title: "Cyber Security with Data Analytics",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    category: "AI & Cyber Security",
    featured: false,
    description: "A project exploring the intersection of cyber-security, data analytics, and machine learning. Focused on anomaly detection, threat prediction, and real-time monitoring.",
    technologies: ["Python", "Machine Learning", "Data Analytics", "Cyber Security"],
    githubUrl: "https://github.com/jayani9/Cyber-security-data-analytics-project",
    highlights: [
      "Anomaly detection using supervised machine learning algorithms",
      "Threat prediction, log parsing, and real-time network monitoring"
    ]
  },
  
  {
    id: "kyky-app",
    title: "Kyky React Web & Mobile Platform (Internship Project)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    category: "Full Stack",
    featured: true,
    description: "Production web/mobile application enhancements involving bug resolution, UI optimization, Firebase back-end integration, and custom server-side API endpoints.",
    technologies: ["React", "SCSS", "Firebase", "Node.js", "GitHub"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    highlights: [
      "Optimized front-end rendering performance for cross-device usage",
      "Resolved critical UI/UX issues reported by QA teams",
      "Integrated Firebase real-time data sync and authentication"
    ]
  },
  
  {
    id: "flutter-mobile",
    title: "Flutter Mobile Application Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    category: "Mobile",
    featured: false,
    description: "Cross-platform Android and iOS mobile application built using Flutter. Employs clean architecture patterns, efficient state management, and smooth visual transitions.",
    technologies: ["Flutter", "Firebase", "Android Studio"],
    githubUrl: "https://github.com/jayani9/Cross-Platform-Mobile-Application",
    highlights: [
      "Clean UI component design adhering to Material Design guidelines",
     "Flutter based calculator application with responsive layouts",
    ]
  },
  {
    id: "future-factory",
    title: "Future Factory (JAMK University Group Project)",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    category: "DevOps & Systems",
    featured: false,
    description: "Collaborative group development project focusing on custom PrestaShop module integration, Dockerized deployment environments, and GitLab version management.",
    technologies: ["PrestaShop", "PHP", "Docker", "GitLab", "React"],
    highlights: [
      "Docker container setup for standardized development environments",
      "PrestaShop theme custom module extension and configuration",
      "Agile project management and continuous deployment pipelines"
    ]
  },
  
  {
    id: "data-networks",
    title: "Data Networks",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    category: "IT Infrastructure",
    featured: false,
    description: "A practical project focused on data networks, utilizing Linux environments and Wireshark for deep network analysis, packet inspection, and performance monitoring.",
    technologies: ["Linux", "Wireshark", "TCP/IP", "Networking"],
    githubUrl: "https://github.com/jayani9/Data-Networks",
    highlights: [
      "Network traffic analysis and packet inspection using Wireshark",
      "Designing network topologies and configuring virtual routing",
      "TCP/IP protocol stack analysis and packet troubleshooting"
    ]
  },
  {
    id: "portfolio-v2",
    title: "Interactive Portfolio Platform",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    category: "Full Stack",
    featured: false,
    description: "A dark glassmorphic personal portfolio showcasing interactive project filters, modal dialogs, career milestones, and responsive design animations.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/jayani9/my-new-portfolio",
    liveUrl: "https://jayani9.github.io/my-new-portfolio/",
    highlights: [
      "Dark-mode futuristic glassmorphic UI architecture",
      "Animated category filtering and interactive project inspection modals",
      "100% responsive layout with accessible semantic markup"
    ]
  },
  {
    id: "e-commerce",
    title: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
    category: "Full Stack",
    featured: true,
    description: "A full-featured online storefront with real-time product filtering, dynamic shopping cart management, user authentication, and RESTful API endpoints.",
    technologies: ["React", "Node.js", "Express.js" ],
    githubUrl: "https://github.com/jayani9/shopping-basket",
    highlights: [
      "JWT-based user registration and authentication flow",
      "MongoDB database modeling for scalable product catalogs",
      "Responsive cart management with real-time price calculations"
    ]
  },
];

export const EDUCATION = [
  {
    title:
      "Bachelor of Engineering in Information and Communication Technology",
    institution: "JAMK University of Applied Sciences, Finland",
    year: "2023 - 2026",
    description:
      "Specialized in Software Development, Cloud Computing, Full Stack Programming, and Data Analytics.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Python",
      ".NET",
      "C#",
      "Kotlin",
      "Flutter",
      "Docker",
      "GCP",
      "Linux",
      "Shell Scripting",
      "Data Structures",
      "Machine Learning",
      "Data Analytics",
      "Cyber Security",
      "IT Infrastructure and Networking",
      "TCP/IP",
      "Wireshark",
      "Git"
    ],
  },
  {
    title: "Bachelor of Science in Biological Science",
    institution: "University of Sri Jayewardenepura, Sri Lanka",
    year: "2015 - 2018",
    description:
      "Analytical research foundation with coursework in Zoology, Chemistry, and Microbiology.",
    technologies: [
      "Zoology",
      "Chemistry",
      "Microbiology",
      "Scientific Method",
      "Data Collection",
      "Laboratory Techniques",
      "Laboratory Experiments",
    ],
  },
];
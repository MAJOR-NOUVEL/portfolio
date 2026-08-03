const portfolioData = {
  personalInfo: {
    name: "Vivek Narendra Saindane",
    title: "Software Engineer",
    subtitles: ["Full-Stack Developer", "Mobile App Developer", "Technical Writer", "ECE Engineer"],
    email: "viveksaindane71@gmail.com",
    phone: "+91 8830869055",
    location: "Jalgaon, Maharashtra, India",
    github: "https://github.com/MAJOR-NOUVEL",
    linkedin: "https://linkedin.com/in/vivek-saindane71",
    resumeUrl: "resume.pdf",
    web3formsKey: "4345f0bc-a21c-47fd-b841-06edb245aa85", // Get a free access key from https://web3forms.com to receive form submissions in your email
    bio: "Motivated Software Engineer (graduating 2026, ECE) with hands-on experience in full-stack application development, REST APIs, and database-driven systems. Proficient in C++, Python, JavaScript, and SQL with strong foundations in Data Structures & Algorithms, OOP, DBMS, Operating Systems, and Computer Networks. Eager to contribute to large-scale software engineering projects and build scalable solutions."
  },
  skills: [
    {
      category: "Languages",
      items: ["C++", "Python", "JavaScript", "Dart", "SQL", "Java (Fundamentals)"]
    },
    {
      category: "Core Computer Science",
      items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"]
    },
    {
      category: "Web & Mobile Development",
      items: ["React.js", "Node.js", "Flutter", "Android SDK", "FastAPI", "HTML5 & CSS3"]
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "SQLite", "Firebase Firestore"]
    },
    {
      category: "Tools & Practices",
      items: ["Git & GitHub", "Docker", "AWS Basics", "REST APIs", "Agile Methodologies", "Unit Testing", "Debugging", "Linux"]
    }
  ],
  experience: [
    {
      role: "Web Developer Intern",
      company: "Blockly Technologies",
      period: "May 2024 – Jul 2024",
      certificateUrl: "https://drive.google.com/file/d/1JOc-XlNvvKtDly9pXJ8eVl5VbrPna3Tw/view?usp=drive_link",
      description: [
        "Developed responsive, scalable web applications using React.js and JavaScript, improving application performance through systematic debugging.",
        "Designed and integrated REST APIs to support data-driven features; worked with SQL databases for efficient data storage, retrieval, and management.",
        "Collaborated effectively within a team using Git-based workflows including branching and pull requests; participated in Agile ceremonies and sprint cycles."
      ]
    },
    {
      role: "Technical Content Writer Intern",
      company: "GeeksforGeeks",
      period: "Jan 2024 – Dec 2024",
      certificateUrl: "https://drive.google.com/file/d/1ydc23sUHR_0105ZXESIGgzRDn4sTFT8g/view?usp=sharing",
      description: [
        "Authored high-quality technical articles on programming, DSA, and software engineering topics for a global developer audience.",
        "Translated complex computer science concepts into clear, structured, and search-engine-optimized (SEO) content for beginner and intermediate developers.",
        "Followed strict editorial review standards and peer-review processes to maintain technical accuracy and clarity."
      ]
    }
  ],
  education: [
    {
      degree: "B.E. Electronics & Telecommunication Engineering",
      institution: "SSBT's College of Engineering and Technology, Jalgaon, Maharashtra",
      period: "2022 – 2026",
      score: "CGPA: 8.33 / 10",
      coursework: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "OOP", "Software Engineering", "Embedded Systems"]
    }
  ],
  projects: [
    {
      title: "Color Path Game",
      subtitle: "Mobile Arcade Game | Flutter, Dart",
      category: "Mobile",
      tech: ["Flutter", "Dart", "Flame Engine", "Canvas", "Play Store Pipeline"],
      description: "An interactive, visually engaging mobile arcade game featuring procedural path generation, dynamic color-matching mechanics, and fluid gesture control physics. Prepared for a production release on the Google Play Store.",
      details: [
        "Engineered procedural path generation logic and collision detection in Flutter/Dart, achieving 60 FPS gameplay on Android devices.",
        "Designed interactive color-matching mechanics with custom canvas drawings, particle effects, and dynamic difficulty scaling.",
        "Implemented local secure storage for persistence of high scores and user game progression.",
        "Configured Play Store signing, build workflows (AAB/APK optimization), and readying the application deployment pipeline."
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/MAJOR-NOUVEL/color-path-game"
    },
    {
      title: "Drone & UAV Detection System",
      subtitle: "Computer Vision & Deep Learning | Python",
      category: "AI/ML",
      tech: ["Python", "OpenCV", "Deep Learning", "YOLO", "TensorFlow"],
      description: "A real-time drone and UAV detection application using deep learning classification for accurate object identification, threat detection, and automated alert generation from video streams.",
      details: [
        "Designed and trained custom object detection models to classify UAVs/drones in real-time video frames with high accuracy.",
        "Built a modular, scalable monitoring workflow with real-time alerting, multi-threaded video stream processing, and structured error handling.",
        "Demonstrated capability in building low-latency computer vision pipelines for production-ready surveillance systems."
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/MAJOR-NOUVEL"
    },
    {
      title: "Notes App",
      subtitle: "Offline-First Productivity | Flutter, SQLite",
      category: "Mobile",
      tech: ["Flutter", "Dart", "SQLite", "Provider", "Android SDK"],
      description: "An offline-first, full-CRUD notes application with persistent local storage, optimized SQL queries, robust error handling, and adaptive dark/light theming.",
      details: [
        "Created an optimized SQLite local database schema with custom indexing to ensure microsecond search times across thousands of records.",
        "Implemented state management using Provider to handle adaptive UI changes and smooth transitions.",
        "Completed signed Google Play Store release preparations including asset optimization and Keystore configuration."
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/MAJOR-NOUVEL"
    },
    {
      title: "World Time App",
      subtitle: "REST API Integration | Flutter, REST API",
      category: "Web & API",
      tech: ["Flutter", "Dart", "REST API", "HTTP Client", "JSON Parsing"],
      description: "A dynamic timezone tracking application integrating external REST APIs with async networking, JSON parsing, loading state management, and structured error handling.",
      details: [
        "Integrated TimezoneDB API utilizing asynchronous HTTP clients to retrieve and parse timezone information dynamically.",
        "Developed full offline fallback mechanisms and custom error screens to gracefully handle network dropouts.",
        "Completed production build configurations for deployment with signed APK packages."
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/MAJOR-NOUVEL"
    }
  ],
  achievements: [
    {
      title: "Smart India Hackathon Participant",
      description: "Collaborated in a team to build solutions for real-world national problems defined by ministries."
    },
    {
      title: "Google Cloud Arcade - Legend Milestone Achiever",
      description: "Successfully completed advanced cloud engineering quests, labs, and skill badges on Google Cloud Skills Boost."
    },
    {
      title: "Technical Content Writer at GeeksforGeeks",
      description: "Authored multiple technical articles viewed by thousands of developers globally, promoting software best practices."
    }
  ],
  certifications: [
    {
      name: "NPTEL – Programming and Problem Solving in C",
      issuer: "IIT / National Programme on Technology Enhanced Learning"
    },
    {
      name: "Google Cloud – Introduction to Generative AI",
      issuer: "Google Cloud"
    }
  ]
};

// Export if running in a module environment, otherwise attach to window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
} else {
  window.portfolioData = portfolioData;
}

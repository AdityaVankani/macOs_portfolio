const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
    action: "wifi",
  },
  {
    id: 2,
    img: "/icons/search.svg",
    action: "search",
  },
  {
    id: 3,
    img: "/icons/user.svg",
    action: "profile",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
    action: "theme",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "profile",
    name: "Profile",
    icon: "profile.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Jun 27, 2025",
    title:
      "Programming Achievement: LC",
    image: "/images/blog1.jpeg",
    link: "https://www.linkedin.com/posts/adityavankani_knight-leetcode-dsa-activity-7344205358770315265-qnh5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD77MBABk7J4lPe2GrfkZ_UdePMdvuWoMp0",
  },
  {
    id: 2,
    date: "Feb 02, 2025",
    title:
      "Hackathon Experience and 2 days Product",
    image: "/images/blog2.png",
    link: "https://www.linkedin.com/posts/adityavankani_mined2025-hackathon-cactuscommunication-activity-7291877113240981505-234Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD77MBABk7J4lPe2GrfkZ_UdePMdvuWoMp0",
  },
  {
    id: 3,
    date: "Dec 10, 2024",
    title:
      "Amazon-Ml-Challenge",
    image: "/images/blog3.png",
    link: "https://www.linkedin.com/posts/abhaypatel1915_github-venjix007amazon-ml-2024-fine-tuning-activity-7272121901836083201-XdC_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD77MBABk7J4lPe2GrfkZ_UdePMdvuWoMp0",
  },
  
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "TypeScript"],
  },
  {
    category: "Programming Languages",
    items: ["C/C++", "Python", "HTML","JavaScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express","Flask"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL","Supabase"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
  {
    category: "Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-Learn", "Keras", "OpenCV"],
  },
  {
    category: "Cloud Platforms",
    items: ["GCP" ,"AWS"],
  },
  {
    category: "Courseworks In AI",
    items: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning", "Soft Computing", "DSA",
 "MLOps"],
  },
  {
    category: "Coursework in Other fields",
    items: [ "DSA","OOPs", "DBMS", "Data Analysis & Visualisation"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },

];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/AdityaVankani",
  },
  {
    id: 2,
    text: "Discord",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://discordapp.com/users/1052991220458201159",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/Adi_Vankani",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/adityavankani/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Quotes",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Certificates",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/picofme-2.png",
  },
  {
    id: 2,
    img: "/images/mypic2.png",
  },
  {
    id: 3,
    img: "/images/quote7.png",
  },
  {
    id: 4,
    img: "/images/quote9.png",
  },
  {
    id: 5,
    img: "/images/u=mgh.jpeg",
  },
  
  {
    id: 6,
    img: "/images/wallpaper-14.jpg",
  },
  {
    id: 7,
    img: "/images/wallpaper10.jpg",
  },
  
  {
    id: 8,
    img: "/images/wallpaper24.jpg",
  },
  {
    id: 9,
    img: "/images/MineD_hac.png",
  },
  {
    id: 10,
    img: "/images/flipkart_certi.png",
  },
  {
    id: 11,
    img: "/images/Hackout(DAIICT) 2023 certificate.png",
  },
];



export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
  internships,
  certificates,
  codingProfiles,
  education,
};

const internships = [
  {
    id: 1,
    company: "360 Design",
    role: "Software Engineering Intern",
    duration: "May 2025 - June 2025",
    files: [
      {
        id: 1,
        name: "Desc.txt",
        icon: "/images/txt.png",
        fileType: "txt",
        description: [
          "company: 360 Design",
          "Role: Software Engineering Intern",
          "Duration: May 2025 - June 2025",
          "Developed core full-stack features for jewellery auction app with 2 user roles, managing 100+ real-time bids and secure JWT-based access.",
"Constructed a role-based dashboard with real-time stats across 5+ key metrics, enhancing user insights and tracking.",
"Integrated Razor-pay, Cloudinary & node-cron to automate 100% of auction closures and payment flow.",
        ],
      },
      {
        id: 2,
        name: "Certificate.pdf",
        icon: "/icons/file.svg",
        fileType: "pdf",
        imageUrl: "/images/360Design_Certificate.pdf",
      },
      {
        id: 3,
        name: "Github.com",
        icon: "/images/safari.png",
        fileType: "url",
        href: "https://github.com/AdityaVankani/Bidding-system",
        
      },
      {
        id: 4,
        name: "Demo.com",
        icon: "/images/safari.png",
        fileType: "url",
        href: "https://bidding-system-brown.vercel.app/",
        
      },
      {
          id: 5,
          name: "Bidding System.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/bidding system.png",
        },
    ],

  },
];


const certificates = [
  {
    id: 1,
    title: "AWS Academy Graduate - Cloud Foundations - Training Badge",
    issuer: "Amazon Web Services Training and Certification",
    date: "April 27, 2025",
    link: "https://www.credly.com/badges/5595c27f-d04a-4538-a01c-4866cfde09ef/linked_in_profile",
  },
  {
    id: 2,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Sept 28 2025",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E2055AE06998919CF6829E6A4EB85F1BC4A0FBEF3BA3A717B3D1EE682B9E7A9A",
  },
];

const codingProfiles = [
  { id: 1, platform: "LeetCode", link: "https://leetcode.com/u/adi_v_/" ,icon:"images/leetcode.png"},
  { id: 2, platform: "Codeforces", link: "https://codeforces.com/profile/adi_vankani",icon:"images/codeforces.png" },
  { id: 3, platform: "Codechef", link: "https://www.codechef.com/users/adi_vankani",icon:"images/codechef.png" },
];

const education = [
  {
    id: 1,
    institution: "Nirma University",
    degree: "B.Tech in Computer Science",
    year: "2026",
    details: ["CGPA: 8.89","Minor in Adaptive AI"],
  },
  {
    id: 2,
    institution: "Modi schools, GSEB",
    degree: "Class 12th",
    year: "2022",
    details: ["Percentage: 90%"],
  },
  {
    id: 3,
    institution: "JEE Mains",
    degree: "Class 12th",
    year: "2022",
    details: ["Percentile: 98%ile"],
  },
  {
    id: 4,
    institution: "JEE Advanced(IIT)",
    degree: "Class 12th",
    year: "2022",
    details: ["AIR ~12K"],
  },
];

const PROFILE_LOCATION = {
  id: 5,
  type: "profile",
  name: "Profile",
  icon: "/icons/user.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Internships",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-10",
      children: internships.map(internship => ({
        id: internship.id,
        name: internship.company,
        icon: "/images/folder.png",
        kind: "folder",
        children: internship.files.map(file => ({
          ...file,
          kind: "file",
        })),
      })),
    },
    {
      id: 2,
      name: "Certificates",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-40",
      children: certificates.map(c => ({
        id: c.id,
        name: c.title,
        icon: "/images/pdf.png",
        kind: "file",
        fileType: "url",
        href: c.link,
      })),
    },
    {
      id: 3,
      name: "Coding Profiles",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-10",
      children: codingProfiles.map(p => ({
        id: p.id,
        name: p.platform,
        icon: p.icon,
        kind: "file",
        fileType: "url",
        href: p.link,
      })),
    },
    {
      id: 4,
      name: "Education",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-40",
      children: education.map(e => ({
        id: e.id,
        name: e.degree,
        icon: "/images/txt.png",
        kind: "file",
        fileType: "txt",
        description: [
          e.institution,
          `Year: ${e.year}`,
          ...(e.details || []),
        ],
      })),
    },
  ],
}


const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Sketch’N’Solve ",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] right-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Desc.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            
            "Tech Stack: React.js, MathJax, Tailwind CSS, Node.js, Gemini API, Python(fastapi)",

            "Crafted an interactive sketch-to-solve platform using React, enabling real-time interpretation and capable of answering handwritten expressions (any kind) and drawings with >90% accuracy.",
            "Configured LaTeX rendering via MathJax and enhanced usability by implementing draggable output components for a seamless user experience.",
            "Built canvas utilities (draw, erase, reset, export), enabling 1000+ users to generate and download clean, annotated .png notes with sketch-to-output."
          ],
        },
        {
          id: 2,
          name: "demo.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://sketchnsolvefrontend.vercel.app",
          position: "top-10 right-10",
        },
        {
          id: 3,
          name: "Github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/AdityaVankani/sketchNsolve?tab=readme-ov-file",
          position: "top-30 right-40",
        },
        {
          id: 4,
          name: "sketchNsolve.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/sketchNsolve.png",
        },
        {
          id: 5,
          name: "Guide_Video.mp4",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://drive.google.com/file/d/1EPh3Yhqr6Uv0Zco8K_Ed50RjgeJOX4hr/view?usp=sharing",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "ResearchGen",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] right-7",
      children: [
        {
          id: 1,
          name: "Desc.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "ResearchGen :: A tool that can generate alternative-form content from research papers ",
            "Tech Stack: LLMs(Llama-3, Black-forest-labs), LangChain, LangGraph, Python, StableDiﬀusion, Cloudinary, GTTS, OpenAI- whisper,React.js",
            "Engineered an AI-powered pipeline that extracts and summarises academic papers using LLaMA 3.3 70B, transforming them into podcasts, videos, PPTs, and graphical abstracts.",
            "Incorporated advanced tools (GTTS, Whisper, Stable Diﬀusion, python-pptx) to automate audio-visual content generation for enhanced research comprehension, significantly reducing academic content digestion time by 70%.",
          ],
        },
        {
          id: 3,
          name: "Github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/AdityaVankani/ResearchGen",
          position: "top-30 right-40",
        },
        {
          id: 4,
          name: "Researchgen.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/researchgen.png",
        },
        {
          id: 5,
          name: "Product_Video.mp4",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://drive.google.com/file/d/1fh8MN2b3GRobpSntig3xUf4xEX1BlIzH/view?usp=sharing",
          position: "top-60 left-5",
        },
      ],
    },

    {
      id: 7,
      name: "AI_quizzer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-30",
      windowPosition: "top-[50vh] right-7",
      children: [
        {
          id: 1,
          name: "Desc.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Quizzer is a full-stack educational application that leverages Generative AI to create personalized, adaptive assessments. It features a FastAPI backend for robust logic and data management, and a Streamlit frontend for an interactive user experience.",
            " Key Features:",
"🤖 AI-Powered Generation: Instantly generates quizzes for any subject and grade level (1–12) using Google Gemini.",
"📈 Adaptive Difficulty: Automatically adjusts question difficulty (Easy/Medium/Hard) based on the user's historical performance.",
"💡 Real-Time Hints: Users can request AI-generated hints for specific questions without revealing the answer.",
"📝 Detailed Explanations: Provides instant feedback with detailed AI explanations for every correct and incorrect answer.",
"📊 Analytics & History: Tracks performance over time with history logs, scoring percentages, and retake capabilities.",
"🏆 Leaderboard: Displays top-performing students filtered by grade and subject.",
"🔒 Secure Authentication: JWT-based authentication for secure user signup and login.",

          ],
        },
        {
          id: 3,
          name: "Github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/AdityaVankani/ai_quizzer",
          position: "top-10 right-100",
        },
        {
          id: 7,
          name: "Demo.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://aiquizzer.streamlit.app",
          position: "top-30 right-70",
        },
        {
          id: 4,
          name: "AI_Quizzer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/aiquizzer.png",
        },
        {
          id: 5,
          name: "Product_Video.mp4",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://drive.google.com/file/d/1RaOR00rj5Ul9O-rVMha09lHYUkbv-Aqy/view?usp=sharing",
          position: "top-60 left-5",
        },
      ],
    },

    

    // ▶ Project 3
    {
      id: 8,
      name: "TradeZone",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] right-8",
      children: [
        {
          id: 1,
          name: "TradeZone.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "TradeZone :: Virtual Trading Platform for College Competitions",
            "Tech Stack: React.js, Flask, Supabase, Material-UI, JWT, REST API",
            "Launched a virtual stock market platform with real-time trading events for university clubs and events with 100+ participants in stock market competitions.",
            "Role-based authentication, market control, portfolio management, leaderboards track top 10 traders, admin controlled market.",
            "Market news system handled by admin and Stock statistics updates every 30 seconds.",
          ],
        },
        
        {
          id: 4,
          name: "tradezone.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/tradezone.png",
        },
        {
          id: 3,
          name: "Github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/AdityaVankani/TradeZone",
          position: "top-30 right-40",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/mypic2.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/mypic2.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/picofme-2.png",
    },

    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/picofme-2.png",
      description: [
  "Hey! I’m Aditya 👋, a software engineer who loves building scalable web apps and intelligent systems that actually solve real problems.",
  "I specialize in React, fullstack development, and AI/ML—focused on making products fast, reliable, and genuinely useful.",
  "I care deeply about clean architecture, solid system design, and writing code that’s easy to read, maintain, and scale.",
  "When I’m not coding, you’ll probably find me refining UI details late at night, exploring new tech, or leveling up through books, projects, and competitive programming 🚀",
],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/wallpaper11.png",
    },
    {
      id: 2,
      name: "resume2.pdf",
      icon: "/images/image.png",
      kind: "file",
      fileType: "pdf",
      position: "top-40 left-80",
      imageUrl: "/images/resume2.pdf",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
  profile: PROFILE_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  profile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  certi: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
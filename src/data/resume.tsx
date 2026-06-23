import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Kemal Aditya Zulfikar",
  initials: "KAZ",
  url: "https://adityakemal.vercel.app/",
  location: "Bandung",
  locationLink: "https://www.google.com/maps/place/bandung",
  description:
    "Principal Full-Stack Engineer & AI Product Founder. 7+ years shipping high-stakes enterprise systems and solo AI products. Open for consulting.",
  summary: `Principal Full-Stack Engineer with [7+ years](/#work) of experience building high-stakes systems for Indonesia's largest enterprises (**BRI**, **Pertamina**, **Bank Muamalat**) and shipping solo AI products from scratch. Specialized in high-performance backends (Elysia, Bun), offline-first mobile architecture, and production-grade LLM orchestration. I build autonomous, cost-efficient software where AI solves real user friction—not just API cost inflation. **Currently open for senior engineering roles and high-level consulting.**`,
  avatarUrl: "/ava.jpeg",
  avatarUrlCartoon: "/me.jpeg",
  skills: [
    {
      category: "Core / AI Integration",
      items: [
        { name: "DeepSeek AI", className: "hover:bg-indigo-600 hover:text-white" },
        { name: "Mistral AI", className: "hover:bg-orange-500 hover:text-white" },
        { name: "Elysia (Bun)", className: "hover:text-gray-900 hover:bg-white" },
        { name: "Node.js", className: "hover:bg-green-400 hover:text-black" },
        { name: "Hono", className: "hover:text-white hover:bg-orange-400" },
        { name: "Python / Django", className: "hover:bg-yellow-500 hover:text-black" },
        { name: "Google Maps API", className: "hover:bg-green-600 hover:text-white" },
      ],
    },
    {
      category: "Frontend Architect",
      items: [
        { name: "React", className: "hover:bg-sky-400 hover:text-black" },
        { name: "Next.js", className: "hover:bg-black hover:text-white" },
        { name: "React Native (Expo)", className: "hover:bg-sky-400 hover:text-black" },
        { name: "Blazor (.NET/C#)", className: "hover:bg-purple-700 hover:text-white" },
        { name: "TypeScript", className: "hover:bg-blue-600 hover:text-white" },
        { name: "Tailwind CSS", className: "hover:bg-teal-500 hover:text-white" },
        { name: "PWA", className: "hover:bg-violet-500 hover:text-white" },
        { name: "Zustand", className: "hover:bg-[#453F39] hover:text-white" },
        { name: "React Query", className: "hover:bg-red-500 hover:text-white" },
        { name: "Redux", className: "hover:bg-purple-600 hover:text-white" },
      ],
    },
    {
      category: "Data & Infra",
      items: [
        { name: "PostgreSQL", className: "hover:bg-blue-800 hover:text-white" },
        { name: "Drizzle ORM", className: "hover:bg-lime-500 hover:text-black" },
        { name: "Docker", className: "hover:bg-blue-500 hover:text-white" },
        { name: "Coolify", className: "hover:bg-emerald-600 hover:text-white" },
        { name: "Beszel (Monitoring)", className: "hover:bg-cyan-600 hover:text-white" },
        { name: "CI/CD", className: "hover:bg-gray-600 hover:text-white" },
        { name: "S3 Backups", className: "hover:bg-amber-600 hover:text-white" },
      ],
    },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "kadityafikar@gmail.com",
    tel: "+6281296760145",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kemal-aditya-z-b4276614a/",
        icon: Icons.linkedin,
        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/6281296760145?text=I'm%20interested%20in%20your%20portfolio%20for%20a%20potential%20hiring%20opportunity.",
        icon: Icons.whatsapp,
        navbar: true,
      },
      sesaKu: {
        name: "sesaKu",
        url: "https://sesaku.id",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kadityafikar@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      download: {
        name: "Download Resume",
        url: "/ResumeFE_Kemal_2025.pdf",
        icon: Icons.download,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "sesaKu",
      href: "https://sesaku.id",
      badges: [],
      location: "Bandung",
      title: "Founder & Solo Engineer",
      logoUrl: "/project/sesaku/logo.png",
      start: "2026",
      end: "Present",
      description: `
        <li>Launched an AI-driven personal finance PWA to alpha testers, managing the entire lifecycle from product discovery to server deployment.</li>
        <li>Automated ~90% of manual expense entry using <strong>Mistral AI</strong> for receipt OCR and <strong>DeepSeek</strong> for voice-to-text in Bahasa Indonesia.</li>
        <li>Owned the entire product lifecycle: backend architecture, AI prompt engineering, frontend, infrastructure, SEO, and user acquisition strategy.</li>
        <li>Designed a conflict-free real-time sync architecture for "Saku Bersama" (shared wallet) using optimistic locking and row-level access control on <strong>PostgreSQL</strong>, ensuring strict data consistency across concurrent family users.</li>
        <li>Self-hosted the entire infrastructure with <strong>Coolify</strong> and <strong>Docker</strong>, keeping operational costs under control while maintaining production-grade monitoring (<strong>Beszel</strong>) and automated backups (<strong>S3</strong>).</li>
      `,
    },
    {
      company: "Balesin.id",
      href: "https://balesin.id/",
      badges: [],
      location: "Jakarta",
      title: "Frontend & Mobile Engineer",
      logoUrl: "/balesin.png",
      start: "Feb 2022",
      end: "Jan 2026",
      description: `
        <li>Led frontend architecture for a product-transaction platform using <strong>Next.js</strong>, reducing page load time by ~30% and improving conversion rates.</li>
        <li>Engineered an offline-first mobile POS with <strong>React Native (Expo)</strong> — local-first data persistence ensuring 100% uptime for daily retail operations, deployed to Google Play.</li>
        <li>Created a modular internal CMS that accelerated marketing content deployment speed, reducing publish cycles from days to hours.</li>
        <li>Optimized Core Web Vitals (LCP, CLS) on high-traffic landing pages to secure sustainable organic search rankings.</li>
      `,
    },
    {
      company: "Arnatech",
      href: "https://arnatech.id/",
      badges: ["Freelance"],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/arnatech.png",
      start: "2024",
      end: "2025",
      description: `
        <li>Architected the frontend data layer for <strong>EMS+</strong>, an AI-powered employee monitoring system — consuming real-time activity streams via <strong>WebSocket</strong> feeds into productivity dashboards with anomaly detection, reducing manual HR reporting overhead.</li>
        <li>Led frontend architecture for <strong>Pertamina Learning Hub</strong> using <strong>Blazor/.NET</strong> — defined component library, state management, and development flow for an enterprise KMS serving <strong>10k+ employees</strong> nationwide.</li>
        <li>Designed <strong>BRI Mikro Unit Task Monitoring</strong> — a multi-level approval dashboard that cut savings & loan performance review cycles, enabling data-driven decisions from regional to national level.</li>
      `,
    },
    {
      company: "SAGARA Technology",
      href: "https://sagaratechnology.com/",
      badges: [],
      location: "Bandung",
      title: "Frontend Developer",
      logoUrl: "/sagara.jpg",
      start: "Feb 2021",
      end: "Feb 2022",
      description: `
        <li>Delivered the <strong>BRI Emergency Report</strong> geolocation system and <strong>BRI cashless payment</strong> web app — two production apps serving nationwide banking operations.</li>
        <li>Shipped the <strong>Hukum Online</strong> frontend, improving page performance and legal content discoverability.</li>
      `,
    },
    {
      company: "Wir Group",
      href: "https://wir.group/en/",
      badges: [],
      location: "Jakarta",
      title: "Frontend Developer",
      logoUrl: "/wir.png",
      start: "Apr 2019",
      end: "Feb 2021",
      description: `
        <li>Delivered production web apps across B2B banking and retail initiatives for <strong>Alfamart</strong>, <strong>Mandiri</strong>, and <strong>Bank Muamalat</strong> — including the Hijrah Groceries ordering platform integrated into Muamalat's mobile banking.</li>
      `,
    },
    {
      company: "Yuna & Co",
      href: "https://yuna.co/en/",
      badges: [],
      location: "Jakarta",
      title: "Junior Fullstack Developer",
      logoUrl: "/yuna.jpg",
      start: "Feb 2018",
      end: "Apr 2019",
      description: `
        <li>Built backend validation with <strong>Node.js</strong> using <strong>hapi/joi</strong> for robust data quality across APIs.</li>
        <li>Developed product gallery and web applications using <strong>Django</strong>, handling both frontend and backend.</li>
      `,
    },
  ],
  education: [
    {
      school: "Makers Institute",
      href: "https://makersinstitute.io/home",
      degree: "Full Stack Development (Bootcamp)",
      logoUrl: "/makers.jpg",
      start: "2017",
      end: "2018",
      description: "",
    },
  ],
  projects: [
    // --- FEATURED (top 3) ---
    {
      title: "sesaKu — AI Personal Finance",
      href: "https://sesaku.id",
      dates: "2026",
      subtitle: "Full-Stack Product · Solo Build",
      description:
        "End-to-end architecture: Elysia (Bun) + PostgreSQL backend with custom auth and real-time sync, React PWA frontend with offline-first strategy, DeepSeek prompt pipeline for NLP categorization, and Mistral vision model for receipt OCR. Deployed on self-hosted Coolify/Docker infra with automated S3 backups.",
      active: true,
      technologies: [
        "React",
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "React Query",
        "Elysia (Bun)",
        "PostgreSQL",
        "DeepSeek AI",
        "Mistral AI",
        "PWA",
        "Coolify",
        "Payment Gateway",
      ],
      links: [
        {
          type: "Website",
          href: "https://sesaku.id",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "App",
          href: "https://app.sesaku.id",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      thumbnail: "/project/sesaku/logo.png",
      listToShow: {
        type: "iframe" as "imageList" | "iframe" | "video",
        imageList: [],
        iframe: "https://sesaku.id",
        video: "",
      },
    },
    {
      title: "Pertamina Learning Hub",
      href: "https://arnatech.id/portfolio/pertamina-learning-hub-knowledge-management-system/",
      dates: "2025",
      subtitle: "Enterprise System Architecture · Blazor/.NET",
      description:
        "Led frontend architecture decisions for a Blazor/.NET enterprise KMS — defined component library, state management patterns, project structure, and development flow for the team. System centralizes organizational knowledge and enables measurable learning outcomes across Pertamina.",
      active: true,
      technologies: [
        "Blazor",
        ".NET",
        "C#",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Case Study",
          href: "https://arnatech.id/portfolio/pertamina-learning-hub-knowledge-management-system/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      thumbnail: "/project/pertamina/PLH with Text.webp",
      listToShow: {
        type: "imageList" as "imageList" | "iframe" | "video",
        imageList: [
          "/project/pertamina/PLH with Text.webp",
        ],
        iframe: "",
        video: "",
      },
    },
    {
      title: "POS / Cashier Application",
      href: "",
      dates: "2024",
      subtitle: "Mobile Engineering · Offline-First Architecture",
      description:
        "Engineered a local-first data persistence layer using Zustand to ensure 100% offline uptime for high-volume daily retail sales tracking. Deployed to Google Play with fast cashier workflows, inventory management, and automatic data sync on reconnect.",
      active: true,
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "NativeWind",
        "Zustand",
      ],
      links: [
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.balesinid.poscashierbalesin&hl=en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      thumbnail: "/project/pos/pos1.png",
      listToShow: {
        type: "imageList" as "imageList" | "iframe" | "video",
        imageList: [
          "/project/pos/pos5.png",
          "/project/pos/pos2.png",
          "/project/pos/pos4.png",
          "/project/pos/pos3.png",
        ],
        iframe: "",
        video: "",
      },
    },
    {
      title: "EMS+ — AI Employee Monitoring",
      href: "https://arnatech.id/portfolio/ai-powered-employee-monitoring-system-for-secure-efficient-workflows/",
      dates: "2025",
      subtitle: "AI Product Integration & Frontend",
      description:
        "Architected the frontend data layer to consume real-time AI analytics feeds — processing employee activity streams into actionable productivity dashboards with anomaly detection and automated risk flagging.",
      active: true,
      technologies: [
        "ReactJS",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "Antd",
      ],
      links: [
        {
          type: "Case Study",
          href: "https://arnatech.id/portfolio/ai-powered-employee-monitoring-system-for-secure-efficient-workflows/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      thumbnail: "/project/ems/dash1.png",
      listToShow: {
        type: "imageList" as "imageList" | "iframe" | "video",
        imageList: [
          "/project/ems/dash1.png",
          "/project/ems/dash2.png",
          "/project/ems/dash3.png",
        ],
        iframe: "",
        video: "",
      },
    },
    // --- ARCHIVE ---
    {
      title: "BRI Mikro Unit Task Monitoring",
      href: "",
      dates: "",
      subtitle: "Enterprise Dashboard · Multi-level Auth",
      description:
        "Complex role-based dashboard with cascading approval flows — from branch level to national management. Built real-time data visualization comparing targets vs. actuals for savings and loan performance across hundreds of BRI micro units.",
      active: true,
      technologies: [
        "ReactJS",
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "Antd",
      ],
      links: [
        {
          type: "Staging Website",
          href: "https://fe-brimonitoring.arnatech.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      thumbnail: "/project/bri/thumb.png",
      listToShow: {
        type: "video" as "imageList" | "iframe" | "video",
        imageList: [],
        iframe: "",
        video: "project/bri/bri.mp4",
      },
    },
    {
      title: "ESCROW SG",
      href: "",
      dates: "",
      subtitle: "Fintech Platform · Next.js",
      description:
        "Escrow web platform enabling secure, transparent transactions between individuals and businesses, with role-based flows, real-time status tracking, and push notifications via OneSignal.",
      active: true,
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "Antd",
        "OneSignal",
      ],
      links: [
        {
          type: "Website",
          href: "https://app.escrowsg.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      thumbnail: "/project/escrow/thumb.webp",
      listToShow: {
        type: "imageList" as "imageList" | "iframe" | "video",
        imageList: [
          "/project/escrow/1.png",
          "/project/escrow/2.png",
          "/project/escrow/3.png",
          "/project/escrow/4.png",
          "/project/escrow/5.webp",
        ],
        iframe: "",
        video: "",
      },
    },
    {
      title: "Utility Fielding",
      href: "",
      dates: "",
      subtitle: "Geospatial Engineering · Maps & Canvas API",
      active: true,
      description:
        "Web application for underground and aerial field inspection and design. Integrated Google Maps API for line drawing, marking, and pole coordination, and Canvas API for drafting.",
      technologies: [
        "ReactJS",
        "TypeScript",
        "Material UI",
        "Tailwind CSS",
        "Google Maps API",
        "Redux Toolkit",
        "Canvas API",
      ],
      links: [
        {
          type: "Website",
          href: "https://utilityfielding.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      thumbnail: "/project/utility/thumb.png",
      listToShow: {
        type: "video" as "imageList" | "iframe" | "video",
        imageList: [],
        iframe: "",
        video: "project/utility/utility.mp4",
      },
    },
    {
      title: "EMORY",
      href: "",
      dates: "",
      subtitle: "Multi-role E-commerce · Firebase",
      active: true,
      description:
        "Multi-role e-commerce management platform for suppliers, resellers, and stockists. Supports product catalog, inventory, orders, sales insights, and Firebase-powered live chat.",
      technologies: [
        "ReactJS",
        "TypeScript",
        "Material UI",
        "SASS",
        "Firebase",
        "Redux",
      ],
      links: [
        {
          type: "Website",
          href: "https://admin.emorystyle.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      thumbnail: "/project/emory/thumb.png",
      listToShow: {
        type: "imageList" as "imageList" | "iframe" | "video",
        imageList: [
          "project/emory/dash.png",
          "project/emory/chat.png",
          "project/emory/addproduct.png",
          "project/emory/reseller.png",
          "project/emory/supplier.png",
          "project/emory/thumb.png",
        ],
        iframe: "",
        video: "",
      },
    },
    {
      title: "Hijrah Groceries Bank Muamalat",
      href: "",
      dates: "",
      subtitle: "B2B Banking Integration · React",
      active: true,
      description:
        "Web application that allows businesses to access a retail partner's products through Bank Muamalat's mobile banking app, enabling B2B ordering and payment within a secure platform.",
      technologies: [
        "ReactJS",
        "TypeScript",
        "Antd",
        "Tailwind CSS",
        "Google Maps API",
        "Zustand",
      ],
      links: [
        {
          type: "App",
          href: "https://play.google.com/store/apps/details?id=com.muamalatdin&pcampaignid=web_share",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      thumbnail: "/project/muamalat/thumb.png",
      listToShow: {
        type: "video" as "imageList" | "iframe" | "video",
        imageList: [],
        iframe: "",
        video: "project/muamalat/vid.mp4",
      },
    },
  ],
} as const;

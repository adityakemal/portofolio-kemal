import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Kemal Aditya Zulfikar",
  initials: "KAZ",
  url: "https://adityakemal.vercel.app/",
  location: "Bandung",
  locationLink: "https://www.google.com/maps/place/bandung",
  description:
    "Frontend & Mobile Engineer. Enterprise systems (BRI, Pertamina) and AI products.",
  summary: `Frontend & mobile engineer with [7+ years](/#work) of experience — built production systems for Indonesia's largest enterprises and shipped AI products from zero to users. I specialize in complex frontend architecture, offline-first mobile, and LLM integration that solves real friction.`,
  avatarUrl: "/ava.jpeg",
  avatarUrlCartoon: "/me.jpeg",
  skills: [
    {
      category: "Backend & AI",
      items: [
        {
          name: "Bun / Elysia",
          className: "hover:text-gray-900 hover:bg-white",
        },
        { name: "Node.js", className: "hover:bg-green-400 hover:text-black" },
        {
          name: "Python / Django",
          className: "hover:bg-yellow-500 hover:text-black",
        },
        {
          name: "DeepSeek AI",
          className: "hover:bg-indigo-600 hover:text-white",
        },
        {
          name: "Mistral AI",
          className: "hover:bg-orange-500 hover:text-white",
        },
        { name: "PostgreSQL", className: "hover:bg-blue-800 hover:text-white" },
        {
          name: "Drizzle ORM",
          className: "hover:bg-lime-500 hover:text-black",
        },
        {
          name: "Redis",
          className: "hover:bg-red-500 hover:text-black",
        },
        {
          name: "REST API",
          className: "hover:bg-cyan-400 hover:text-black",
        },
      ],
    },
    {
      category: "Frontend & Mobile",
      items: [
        { name: "React", className: "hover:bg-sky-400 hover:text-black" },
        { name: "Next.js", className: "hover:bg-black hover:text-white" },
        { name: "Vue.js", className: "hover:bg-green-400 hover:text-black" },
        {
          name: "React Native (Expo)",
          className: "hover:bg-sky-400 hover:text-black",
        },
        {
          name: "Blazor (.NET/C#)",
          className: "hover:bg-purple-700 hover:text-white",
        },
        { name: "TypeScript", className: "hover:bg-blue-600 hover:text-white" },
        {
          name: "Tailwind CSS",
          className: "hover:bg-teal-500 hover:text-white",
        },
        { name: "PWA", className: "hover:bg-violet-500 hover:text-white" },
        { name: "Zustand", className: "hover:bg-amber-600 hover:text-white" },
        { name: "Shadcn UI", className: "hover:bg-black hover:text-white" },
        { name: "TanStack Query", className: "hover:bg-red-500 hover:text-white" },
      ],
    },
    {
      category: "Infra",
      items: [
        { name: "Docker", className: "hover:bg-blue-500 hover:text-white" },
        { name: "CI/CD (GitHub Actions)", className: "hover:bg-gray-600 hover:text-white" },
        { name: "Coolify", className: "hover:bg-violet-500 hover:text-white" },
        { name: "Uptime & Monitoring", className: "hover:bg-emerald-500 hover:text-black" },
        { name: "Cloudflare", className: "hover:bg-orange-500 hover:text-white" },
        { name: "NGINX", className: "hover:bg-green-600 hover:text-white" },
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
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:kadityafikar@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/adityakemal",
        icon: Icons.github,
        navbar: true,
      },
      download: {
        name: "Download Resume",
        url: "/ResumeFE_Kemal_2026.pdf",
        icon: Icons.download,
        navbar: false,
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
        <li>Built and launched an AI personal finance PWA from zero — backend, frontend, AI pipeline, infra, all solo.</li>
        <li>Automated ~90% of manual expense entry with <strong>Mistral AI</strong> (receipt OCR) and <strong>DeepSeek</strong> (voice-to-text, Bahasa Indonesia).</li>
        <li>Self-hosted production infra on <strong>Coolify + Docker</strong> with automated backups and monitoring.</li>
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
        <li>Led frontend architecture with <strong>Next.js</strong> — cut page load ~30%, improved conversion.</li>
        <li>Built offline-first mobile POS with <strong>React Native (Expo)</strong> — 100% uptime for daily retail, shipped to Play Store.</li>
        <li>Built internal CMS that cut marketing publish cycles from days to hours.</li>
      `,
    },
    {
      company: "Arnatech",
      href: "https://arnatech.id/",
      badges: ["Freelance"],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/arnatech.png",
      start: "2021",
      end: "2025",
      description: `
        <li><strong>EMS+</strong> — Frontend data layer for AI employee monitoring: real-time WebSocket feeds into productivity dashboards with anomaly detection.</li>
        <li><strong>Pertamina Learning Hub</strong> — Led Blazor/.NET frontend architecture for enterprise KMS serving <strong>10k+ employees</strong>.</li>
        <li><strong>BRI Mikro Task Monitoring</strong> — Multi-level approval dashboard for savings & loan performance across hundreds of micro units.</li>
        <li><strong>BRI Emergency Report</strong> (geolocation) and <strong>BRI cashless payment</strong> — production apps for nationwide banking.</li>
      `,
    },
    {
      company: "Wir Group",
      href: "https://wir.group/en/",
      badges: [],
      location: "Jakarta",
      title: "Senior Frontend Developer",
      logoUrl: "/wir.png",
      start: "Apr 2019",
      end: "Feb 2021",
      description: `
        <li>Delivered production web apps for <strong>Alfamart</strong>, <strong>Mandiri</strong>, and <strong>Bank Muamalat</strong> — including B2B ordering integrated into Muamalat mobile banking.</li>
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
        <li>Built backend APIs with <strong>Node.js</strong> and <strong>Django</strong> — validation, data quality, and product gallery features.</li>
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
        "AI-powered expense tracker with receipt OCR, voice input in Bahasa Indonesia, shared wallets with real-time sync, and offline-first PWA. Self-hosted infra.",
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
      subtitle: "Enterprise KMS · Blazor/.NET",
      description:
        "Led frontend architecture for Pertamina's knowledge management system — component library, state patterns, and dev workflow for a team building for 10k+ employees.",
      active: true,
      technologies: ["Blazor", ".NET", "C#", "Tailwind CSS"],
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
        imageList: ["/project/pertamina/PLH with Text.webp"],
        iframe: "",
        video: "",
      },
    },
    {
      title: "POS / Cashier Application",
      href: "",
      dates: "2024",
      subtitle: "Mobile · Offline-First",
      description:
        "Offline-first cashier app for high-volume retail. Local-first persistence, fast checkout flows, inventory management, auto-sync on reconnect. Live on Play Store.",
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
      subtitle: "AI Dashboard · Real-time Analytics",
      description:
        "Real-time productivity dashboards consuming AI activity streams — anomaly detection, automated risk flagging, replacing manual HR reporting.",
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
        "Role-based approval dashboard for BRI savings & loan performance — branch to national level, real-time target vs actuals visualization.",
      active: true,
      technologies: [
        "ReactJS",
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "Antd",
      ],
      links: [],
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
      subtitle: "Fintech · Next.js",
      description:
        "Secure escrow platform with role-based flows, real-time status tracking, and push notifications.",
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
      dates: "2021",
      subtitle: "Geospatial · Maps & Canvas API",
      active: true,
      description:
        "Field inspection and design tool with Google Maps for line drawing, marking, and pole coordination.",
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
      dates: "2021",
      subtitle: "E-commerce · Multi-role Platform",
      active: true,
      description:
        "Multi-role e-commerce platform — suppliers, resellers, stockists with catalog, inventory, orders, and live chat.",
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
      subtitle: "B2B Banking · React",
      active: true,
      description:
        "B2B grocery ordering platform integrated into Bank Muamalat's mobile banking.",
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

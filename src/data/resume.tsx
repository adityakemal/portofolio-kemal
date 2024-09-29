import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kemal Aditya Zulfikar",
  initials: "KAZ",
  url: "https://adityakemal.vercel.app/",
  location: "Bandung",
  locationLink: "https://www.google.com/maps/place/bandung",
  description:
    "A Software Engineer passionate about building and helping people create innovative solutions.",
  summary: `My journey started with [a Full-Stack course](/#education), leading to a year as a junior fullstack developer. Over the past 5+ years, I have focused on frontend development, while also gaining experience in backend and mobile app projects. I’m continually motivated to explore and learn new technologies to enhance my expertise.`,
  avatarUrl: "/ava.jpeg",
  avatarUrlCartoon: "/me.jpeg",
  skills: [
    { name: "ReactJS", className: "hover:bg-sky-400 hover:text-black" },
    { name: "NextJS", className: "hover:bg-black hover:text-white" },
    { name: "VueJS", className: "hover:bg-green-500 hover:text-white" },
    { name: "JavaScript", className: "hover:bg-yellow-300 hover:text-black" },
    { name: "TypeScript", className: "hover:bg-blue-600 hover:text-white" },
    { name: "Redux", className: "hover:bg-purple-600 hover:text-white" },
    { name: "Zustand", className: "hover:bg-[#453F39] hover:text-white" },
    { name: "CSS/SASS", className: "hover:bg-pink-500 hover:text-white" },
    { name: "Tailwind CSS", className: "hover:bg-teal-500 hover:text-white" },
    { name: "Express", className: "hover:text-black hover:bg-white" },
    { name: "Hono", className: "hover:text-white hover:bg-orange-400" },
    { name: "NodeJS", className: "hover:bg-green-400 hover:text-black" },
    { name: "Bun", className: "hover:text-gray-900 hover:bg-white" },
    { name: "NGINX", className: "hover:bg-green-600 hover:text-white" },
    { name: "React Native", className: "hover:bg-sky-400 hover:text-black" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kadityafikar@gmail.com",
    tel: "+6281296760145",
    social: {
      // GitHub: {
      //   name: "GitHub",
      //   url: "https://dub.sh/dillion-github",
      //   icon: Icons.github,
      //   navbar: true,
      // },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kemal-aditya-z-b4276614a/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/6281296760145?text=I'm%20interested%20in%20your%20portfolio%20for%20a%20potential%20hiring%20opportunity.",
        icon: Icons.whatsapp,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kadityafikar@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Balesin.id",
      href: "https://balesin.id/",
      badges: [],
      location: "Jakarta",
      title: "Frontend Engineer",
      logoUrl: "/balesin.png",
      start: "Feb 2022",
      end: "Present",
      description: `
        <li>Developed a scalable web application for product transactions using <strong>NuxtJS</strong>, significantly improving the user experience and reducing load times by 30%.</li>
        <li>Created a dynamic landing page using <strong>ReactJS</strong>, enhancing customer engagement and conversion rates.</li>
        <li>Built a CMS dashboard with <strong>ReactJS</strong> for efficient content management by internal teams.</li>
        <li>Developed a cashier application using <strong>React Native Expo</strong>, allowing seamless mobile-based transactions.</li>
        <li>Consistently improved the <strong>UI and UX</strong> of each application to ensure a better user experience.</li>
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
        <li>Designed and developed the <strong>BRI Emergency Report</strong> web app, utilizing <strong>Google APIs</strong> for geolocation, contributing to better emergency response efficiency.</li>
        <li>Created the BRI Bantuan Bayar Non Tunai web app using <strong>ReactJS</strong>, <strong>Bootstrap</strong>, and <strong>Redux</strong>, leading to a more efficient payment system for users.</li>
        <li>Developed the <strong>Hukum Online</strong> web app's frontend using SASS, enhancing legal service accessibility for users.</li>
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
        <li>As a <strong>Frontend Developer</strong>, I collaborated on the development of <strong>B2B busines models</strong>, contributing to implementation of <strong>web applications, dashboards</strong> and <strong>landing pages</strong> optimized for usability and performance.</li>
        <li>Collaborated with clients, including prominent banks and various retail companies such as <strong>Alfamart</strong>, <strong>Mandiri</strong>, and <strong>Muamalat</strong>, among others, to develop customized web solutions that addressed their specific needs and supported the implementation of B2B business models.</li>      `,
    },
    {
      company: "Yuna & Co",
      href: "https://yuna.co/en/",
      badges: [],
      location: "Jakarta",
      title: "Junior Fullstack",
      logoUrl: "/yuna.jpg",
      start: "Feb 2018",
      end: "Apr 2019",
      description: `
        <li>Developed backend testing features using Node.js with <strong>Happy Joi</strong> for robust data validation.</li>
        <li>Created email templates and integrated them into various applications to improve customer communication efficiency.</li>
        <li>Developed landing page and web application for gallery products using <strong>Django</strong>.</li>`,
    },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "NIOMIC (Online Course)",
      href: "https://niomic.id/",
      degree: "Frontend",
      logoUrl: "/niomic.png",
      start: "2019",
      end: "2020",
      description: ``,
    },
    {
      school: "Makers Institute",
      href: "https://makersinstitute.io/home",
      degree: "Full Stack Javascript",
      logoUrl: "/makers.jpg",
      start: "2017",
      end: "2018",
      description: "",
    },
    {
      school: "UIN Bandung",
      href: "https://uinsgd.ac.id/",
      degree: "Electrical Engineering",
      logoUrl: "/uin.png",
      start: "2011",
      end: "2016",
      description: "",
    },
  ],
  projects: [
    {
      title: "Utility Fielding",
      href: "https://magicui.design",
      dates: "",
      active: true,
      description: `Web application for underground and aerial field inspection and design. Integrated **Google Maps API to allow drawing line, marking and pole coordination**. Implemented **drawing functionality using Canvas API**. The app enables users to design and inspect field operations efficiently.`,
      technologies: [
        "ReactJS",
        "Typescript",
        "Material UI",
        "TailwindCSS",
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
        type: "video", //iframe, video, imageList
        imageList: [
          // "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
          // "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
          // "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
        ],
        iframe: "",
        video: "project/utility/utility.mp4",
      },
    },
    {
      title: "Hijrah Groceries",
      href: "",
      dates: "",
      active: true,
      description:
        "This Web Application enables businesses to access a retail company’s products through **Bank Muamalat’s mobile banking app**. It facilitates B2B transactions, allowing companies to manage orders, process payments, and conduct business efficiently within a secure platform.",
      technologies: [
        "ReactJS",
        "Typescript",
        "Antd",
        "TailwindCSS",
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
        type: "video", //iframe, video, imageList
        imageList: [
          // "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
          // "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
          // "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
        ],
        iframe: "",
        video: "project/muamalat/vid.mp4",
      },
    },
    {
      title: "EMORY",
      href: "",
      dates: "",
      active: true,
      description:
        "This website is a versatile e-commerce management platform designed for different user roles like **suppliers, resellers, and stockists**. It offers features for handling and showing product listings, inventory, orders, sales, inventory insights and customer data all in one place. The platform includes a **live chat feature using Firebase**.",
      technologies: [
        "ReactJS",
        "Typescript",
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
        type: "imageList", //iframe, video, imageList
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
  ],

  // certificates: [
  //   {
  //     title: "fdsfsdf1",
  //     description: "desc1",
  //     img: "/certificates/kominfo.jpg",
  //   },
  //   {
  //     title: "python",
  //     description: "desc1",
  //     img: "/certificates/python.jpg",
  //   },
  //   {
  //     title: "fdsfsdf2",
  //     description: "desc2",
  //     img: "/certificates/dqlab1.jpg",
  //   },
  //   {
  //     title: "fdsfsdf3",
  //     description: "desc3",
  //     img: "/certificates/dqlab2.jpg",
  //   },
  //   {
  //     title: "fdsfsdf4",
  //     description: "desc4",
  //     img: "/certificates/dqlab3.jpg",
  //   },
  // ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;

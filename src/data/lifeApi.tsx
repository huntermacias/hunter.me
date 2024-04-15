import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { XIcon } from '../components/icons/XIcon';
import RaiderLogo from '../images/logos/raiders.jpg';
import EventlyLogo from '../images/logos/evently.png';
import MissionBit from '../images/logos/missionbit.jpg';
import HunterLogo from '../images/logos/logome.png';
import Leadbird from '../images/logos/leadbird.jpg';
import PythonLogo from '../images/logos/pythonlogo.png';
import Candor from '../images/logos/candor.png';
import CoderSchool from '../images/logos/coderschool.jpg';
import NFTLogo from "../images/logos/nftlogo.png"
import BitcoinLogo from "../images/logos/bitcoin.png"
import NotionLogo from '../images/logos/notionlogo.png';
import VideoShareLogo from "../images/logos/videosharelogo.png";
import KobeLogo from "../images/logos/kobe.jpg";
import CureChatLogo from "../images/logos/curechat.png";
import PeerChatLogo from "../images/logos/peerchat.png";
import JobSearchLogo from "../images/logos/jobsearch.png";
import OpenSeaLogo from "../images/logos/opensea.png"
import AIMessengerLogo from "../images/logos/chatgptlogo.png";
import TextSimLogo from "../images/logos/textsim.png";
import PortfolioLogo from "../images/logos/threeDinitial.png";
import FrameRateLogo from "../images/logos/framerate.png";
import LotteryLogo from "../images/logos/lotteryapp.png";
import AcquisitionLogo from "../images/logos/acquisition.png"
import CameraLogo from "../images/logos/camera.jpg"
import CalendarLogo from "../images/logos/calendar.jpg"
import Lingo from "../images/logos/lingo.jpg"
import USFCALogo from '../images/logos/usflogo.png';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';

export const Name = 'Hunter Macias';

export const About = (
  <>
    {`Hi, I'm Hunter Macias, a Full Stack Engineer based in Seattle, Washington. I specialize in crafting dynamic and efficient code for cutting-edge applications, with a passion for exploring new technologies and leveraging innovation to solve challenges. My journey in the tech industry spans over five years, during which I've honed my skills in front-end and back-end development to deliver user-centric solutions that are both technically proficient and engaging.`}{' '}

    {`For further discussions and collaboration, please feel free to reach out to me via email.`}{' '}
    <ExternalLink href="https://hunters-resume.vercel.app/">send me an email.</ExternalLink>
  </>
);
export const AboutExtended =
  `I'm a passionate Full Stack Engineer with over five years of experience in crafting dynamic and efficient code for cutting-edge applications. My journey in the tech industry is fueled by a relentless drive to explore new technologies and an unwavering belief in the power of innovation to solve challenges.
With a robust background in both front-end and back-end development, I pride myself on delivering solutions that are not only technically proficient but also user-centric. My expertise spans across a wide range of programming languages and frameworks, enabling me to adapt and thrive in fast-paced development environments.
At the heart of my approach is a can-do attitude and a problem-solving mindset, guided by the principle that every challenge presents an opportunity for innovation. Whether working on complex projects or navigating the nuances of new technologies, my goal remains the same: to build software that makes a difference.
As I continue to evolve as a developer and a tech enthusiast, I remain open to exploring new horizons and embracing the endless possibilities that the world of technology has to offer.`;

export type Project = {
  video?: any;
  title: string;
  techStack: string[];
  description: string;
  logo: any;
  link?: {
    label: string;
    href: string;
  };
};

export const MyCurrentProjects: Project[] = [
  {
    title: 'Lingo',
    techStack: [
      'Next.js 14',
      'React.js',
      'Drizzle ORM',
      'PostgreSQL',
      'Stripe',
      'Server Actions',
      'ShadcnUI',
      'Tailwind CSS',
      'Elevenlabs AI',
      'Clerk',
      'KenneyNL Characters',
      'React Admin',
      'NeonDB',
      'Vercel',
    ],
    description: "Lingo redefines language learning with an interactive SaaS platform inspired by Duolingo. Dive into a world where language learning meets gamification, enhanced with AI voices, beautiful design, engaging characters, and immersive sound effects. Master new languages through guided lessons built on the latest tech stack including Next.js 14, Drizzle ORM, and PostgreSQL. Experience personalized education with our unique features: AI-generated voices, character-driven narratives, sound effects, a hearts system, an XP system, interactive pop-ups, a leaderboard, quest milestones, and a shop system. Lingo's Pro tier, powered by Stripe, offers unlimited hearts for uninterrupted learning. Our platform, responsive across devices, is designed for learners of all ages. Get started on your language journey with Lingo, and explore the richness of languages in a fun, engaging way.",
    logo: Lingo, 
    link: {
      label: 'Explore Lingo',
      href: 'https://lingo-aehvptrt5-huntermacias.vercel.app/',
    }
  },
  
  {
    title: 'Headshot Hub',
    techStack: ['Next.js', 'Leap AI', 'Supabase', 'Stripe Connect', 'Resend'],
    description: "Headshot Hub - An Elite SaaS application to generate Professional Headshots like never before.",
    logo: CameraLogo,
    link: {
      label: 'Headshot Hub',
      href: 'https://headshothub.vercel.app/',
    }

  },
  {
    title: 'Stratify',
    techStack: ['Next.js', 'Bun', 'Stripe Connect', 'Prisma', 'MySQL'],
    description: "Welcome to the ultimate SaaS Website Builder and Project Management platform, tailored for agencies and sub-accounts looking to streamline their online presence and internal workflows. Built on the cutting-edge Next.js 14 and leveraging the speed of Bun, this solution integrates Stripe Connect for seamless financial transactions, Prisma for robust database management, and MySQL for data storage. Dive into a world where connecting a user's Stripe account, syncing products, and crafting unique websites and funnels from scratch is the norm - all hosted on custom subdomains within the app.",
    logo: AcquisitionLogo,
    link: {
      label: 'Stratify: Agency Manangement',
      href: 'https://stratifyapp.vercel.app/',
    }

  },

  {
    title: 'Python Documentation Portal',
    techStack: ['Web Development', 'Typescript', 'Documentation'],
    description:
      'Created a Python Documentation Portal using Next.js and TailwindCSS. The platform offers features such as documentation search, documentation filtering, and documentation navigation, fostering an engaging and interactive community experience.',
    logo: PythonLogo,
    link: {
      label: 'Explore Pygame Docs',
      href: 'https://pydocs-aoc.vercel.app',
    },
  },
  {
    title: 'Evently',
    techStack: ['Side Project', 'TailwindCSS', 'Next.js', 'Server Actions'],
    description:
      "Evently is a comprehensive event management app, featuring a robust backend and a modern UI/UX design. It's a one-stop solution for event organizers and attendees alike.",
    logo: CalendarLogo,
    link: {
      label: 'https://meetix.vercel.app/',
      href: 'https://meetix.vercel.app/',
    },
  },
  {
    title: 'FrameRate',
    techStack: ['Side Project', 'TailwindCSS', 'Next.js', 'MovieAPI'],
    description:
      "At FrameRate, every review counts. Share your perspective, rate movies, and contribute to a community-driven rating system that values authenticity and diversity of opinion.",
    logo: FrameRateLogo,
    link: {
      label: 'FrameRate',
      href: 'https://better-letterboxd.vercel.app/',
    },
  },
  {
    title: 'Hunter.me',
    techStack: ['Side Project', 'Next.js', 'MDX', 'Notion API'],
    description: 'My personal website you are currently on, built with Next.js.',
    logo: HunterLogo,
    link: {
      label: 'github.com',
      href: 'https://hunter-me.vercel.app',
    },
  },
  {
    title: 'Raiders Rundown',
    techStack: ['Side Project', 'Sanity', 'React.js'],
    description:
      "The ultimate resource for Las Vegas Raiders fans, featuring game recaps, player profiles, draft predictions, and the latest updates. It's a one-stop destination for all things Raiders.",
    logo: RaiderLogo,
    link: {
      label: 'https://www.raidersrundown.com',
      href: 'https://www.raidersrundown.com',
    },
  },
];

export const MyPastProjects: Project[] = [
  {
    title: 'Notionary',
    techStack: ['Side Project', 'Stripe', 'SaaS', 'Drizzle ORM', 'Supabase', 'Sockets'],
    description:
      'Developed a Notion inspired web application using Next.js, Supabase, and Stripe. The platform offers features such as user authentication, subscription payments, and real-time collaboration, fostering an engaging and interactive community experience.',
    logo: NotionLogo,
    link: {
      label: 'Notionary',
      href: 'https://notionary.vercel.app/',
    },
  },
  {
    title: 'Video-Sharing Social Network',
    techStack: ['Side Project', 'TypeScript', 'Next.js', 'Sanity Management'],
    description:
      'Developed an interactive web application using Next.js and Sanity.io, designed to create a shared space for users to connect with friends and family through video content. The platform offers features such as video sharing, commenting, liking, and user search, fostering an engaging and interactive community experience.',
    logo: VideoShareLogo,
    link: {
      label: 'ShareMe',
      href: 'https://symphonious-kitten-397f94.netlify.app/',
    },
  },
  {
    title: 'Similarity Scout',
    techStack: ['Side Project', 'Typescript', 'Animations', 'Radix UI'],
    description: 'API Service that compares the similarity of two pieces of text',
    logo: TextSimLogo,
    link: {
      label: 'SimilarityScout',
      href: 'https://similarityscout.netlify.app/',
    },
  },
  {
    title: 'Comprehensive Job Search Mobile App',
    techStack: ['Side Project', 'React Native', 'RapidAPI'],
    description:
      'A powerful job search tool leveraging RapidAPI for comprehensive job listings. Features modern UX/UI design and robust search functionality to match users with their ideal job roles.',
    logo: JobSearchLogo,
    link: {
      label: 'Job Hunt - RN',
      href: 'https://expo.dev/@huntermacias/job-search-app?serviceType=classic&distribution=expo-go',
    },
  },
  {
    title: 'NFT Marketplace React Native App',
    techStack: ['Side Project', 'React Native', 'TailwindCSS'],
    description:
      'Created an NFT Marketplace mobile app using React Native. Integrated modern UI/UX principles with efficient backend handling for a seamless digital asset trading experience.',
    logo: NFTLogo,
    link: {
      label: 'NFT Marketplace - RN',
      href: 'https://pro-nef-x.netlify.app/',
    },
  },
  {
    title: 'Web3 Crypto Lottery App',
    techStack: ['Side Project', 'Smart Contracts', 'Solidity', 'Blockchain', 'Next.js'],
    description:
      'Designed a cryptocurrency lottery application leveraging Next.js and Solidity smart contracts. Featured Metamask integration for secure blockchain transactions.',
    logo: LotteryLogo,
    link: {
      label: 'Web3 Lottery App',
      href: 'https://lottery-draw.netlify.app/',
    },
  },
  {
    title: 'CureChat',
    techStack: ['Side Project', 'React.js', 'Twilio', 'Stream', 'SSA'],
    description:
      'With Direct and Group Chats, emojis & Reactions, Built-in Gif support, the ability to edit & delete messages, specialized commands, and much more',
    logo: CureChatLogo,
    link: {
      label: 'CureChat',
      href: 'https://curechat.netlify.app/',
    },
  },
  {
    title: 'PeerChat',
    techStack: ['Side Project', 'WebRTC', 'SDP', 'React.js'],
    description:
      'Video Calling application built using WebRTC, similiar to zoom. Features include video on/off, mic on/off, chat, live participants, screen share, highlight video',
    logo: PeerChatLogo,
    link: {
      label: 'Peer Chat - Twitch Rooms',
      href: 'https://lively-pastelito-3c6253.netlify.app/',
    },
  },
  {
    title: 'Blockchain-Powered Crowdfunding Platform',
    techStack: ['Side Project', 'Smart Contracts', 'Solidity', 'Web3'],
    description:
      "A blockchain-based crowdfunding platform, featuring Metamask integration, smart contract interactions, and Ethereum transactions. It's a comprehensive demonstration of creating and participating in blockchain-enabled campaigns.",
    logo: BitcoinLogo,
    link: {
      label: 'CrowdFund with Web3',
      href: 'https://cool-cactus-84bc7e.netlify.app/',
    },
  },
  {
    title: 'NFT Marketplace: OpenSea',
    techStack: ['Side Project', 'Next.js', 'Web3'],
    description:
      'An NFT marketplace mimicking OpenSea, showcasing a variety of blockchain use cases. It stands out with features like multi-test support and comprehensive NFT trading functionalities.',
    logo: OpenSeaLogo,
    link: {
      label: 'NFT Marketplace - OpenSea',
      href: 'https://opensea-hm.netlify.app',
    },
  },
  {
    title: "Kobe Bryant's Legacy: A Data Visualization",
    techStack: ['Side Project', 'D3.js', 'Data Visualization'],
    description: 'Interactive Data Visualization with D3.js',
    logo: KobeLogo,
    link: {
      label: 'Kobe Bryant - A Visual Story',
      href: 'https://huntermacias.github.io/data-vis-basketball/index.html',
    },
  },
  {
    title: 'AI-Powered Messaging Platform',
    techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    description:
      "ChatGPT Messenger revolutionizes communication with AI-driven conversations, leveraging NLP and ML for personalized user interactions. It's a seamless blend of technology and user experience",
    logo: AIMessengerLogo,
    link: {
      label: 'AI-Responds',
      href: 'https://chatgpt-messenger-three.vercel.app/',
    },
  },
  {
    title: '3D Interactive Developer Portfolio',
    techStack: ['Side Project', 'Three.js', 'Framer Motion'],
    description: 'Personal Portfolio Creation with Three.js & Framer Motion',
    logo: PortfolioLogo,
    link: {
      label: '3D Portfolio',
      href: 'https://huntercodes.netlify.app/',
    },
  },
  {
    title: 'Evently',
    techStack: ['Side Project', 'TailwindCSS', 'Next.js', 'Server Actions'],
    description:
      "Evently is a comprehensive event management app, featuring a robust backend and a modern UI/UX design. It's a one-stop solution for event organizers and attendees alike.",
    logo: EventlyLogo,
    link: {
      label: 'Meetix',
      href: 'https://meetix.vercel.app/',
    },
  },
];

export const SocialMedia = [
  { name: 'Twitter', link: 'https://twitter.com/huntermacias_', icon: XIcon },
  { name: 'Instagram', link: 'https://www.instagram.com/huntermacias/', icon: InstagramIcon },
  { name: 'Github', link: 'https://github.com/huntermacias', icon: GitHubIcon },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/huntermacias/', icon: LinkedInIcon },
] as const;

export const Work = [
  {
    company: 'TheCoderSchool',
    title: 'Lead Instructor',
    logo: CoderSchool,
    start: 'Jun 2020',
    roles: [],
    end: 'Present',
  },
  {
    company: 'USFCA',
    logo: USFCALogo,
    title: '',
    roles: [
      {
        title: 'Teaching Assistant for Computer Science 245',
        start: 'Jul 2020',
        end: 'Jan 2021 · 7 mos',
      },
      {
        title: 'Teaching Assistant for Computer Science 110',
        start: 'Apr 2019',
        end: 'Aug 2019 · 5 mos',
      },
    ],
    start: '',
    end: '',
  },
  {
    company: 'Mission Bit',
    title: 'Coding Instructor',
    logo: MissionBit,
    roles: [],
    start: 'Jan 2020',
    end: 'Mar 2022 · 2 yrs 3 mos',
  },
  {
    company: 'Leadbird',
    title: 'Software Developer',
    logo: Leadbird,
    roles: [],
    start: 'Jan 2021',
    end: 'Jun 2021 · 6 mos',
  },
  {
    company: 'Candor',
    title: 'Frontend Developer',
    logo: Candor,
    roles: [],
    start: 'Sep 2021',
    end: 'Jan 2022 · 5 mos',
  },
] as const;

export const Books = [
  {
    name: 'Shoe Dog: A Memoir by the Creator of Nike by Phil Knight',
    link: 'https://www.amazon.com/Shoe-Dog-Memoir-Creator-Nike-ebook/dp/B0176M1A44',
  },
  {
    name: 'The Black Swan: The Impact of the Highly Improbable by Nassim Nicholas Taleb',
    link: 'https://amzn.to/2NwihaS',
  },
  {
    name: 'Antifragile: Things That Gain from Disorder by Nassim Nicholas Taleb',
    link: 'https://amzn.to/3aIG805',
  },
  {
    name: 'Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets by Nassim Nicholas Taleb',
    link: 'https://amzn.to/3kbvaD9',
  },
  {
    name: 'Daily stoic by Ryan Holiday',
    link: 'https://amzn.to/3n8ATuC',
  },
  {
    name: 'A Guide to the Good Life: The Ancient Art of Stoic Joy by William B. Irvine',
    link: 'https://amzn.to/3iuL1ud',
  },
  {
    name: 'Atomic Habits by James Clear',
    link: 'https://amzn.to/3iqimpZ',
  },
] as const;

export const Podcasts = [
  {
    name: 'Lex Fridman Podcast',
    link: 'https://www.youtube.com/@lexfridman',
  },
  {
    name: 'Huberman Lab',
    link: 'https://www.youtube.com/@hubermanlab',
  },
  {
    name: 'Joe Rogan',
    link: 'https://www.youtube.com/@joerogan',
  },
  {
    name: 'The Tim Ferriss Show',
    link: 'https://www.youtube.com/channel/UCznv7Vf9nBdJYvBagFdAHWw',
  },
  {
    name: 'Build your SaaS',
    link: 'https://saas.transistor.fm/',
  },
] as const;

export const PeopleWorthFollowingOnTwitter = [
  {
    name: 'Andrew Wilkinson',
    link: 'https://twitter.com/awilkinson',
  },
  {
    name: 'Oliur',
    link: 'https://twitter.com/UltraLinx',
  },
  {
    name: 'Jack Butcher',
    link: 'https://twitter.com/jackbutcher',
  },
  {
    name: 'Sahil Lavingia',
    link: 'https://twitter.com/shl',
  },
  {
    name: 'James Clear',
    link: 'https://twitter.com/JamesClear',
  },
  {
    name: 'Naval',
    link: 'https://twitter.com/naval',
  },
  {
    name: 'Paul Graham',
    link: 'https://twitter.com/paulg',
  },
  {
    name: "John O'Nolan",
    link: 'https://twitter.com/JohnONolan',
  },
  {
    name: 'Jon Yongfook',
    link: 'https://twitter.com/yongfook',
  },
  {
    name: 'Joel Gascoigne',
    link: 'https://twitter.com/joelgascoigne',
  },
  {
    name: 'Pieter Levels',
    link: 'https://twitter.com/levelsio',
  },
] as const;

export const Blogs = [
  {
    name: 'Wait but why',
    link: 'https://waitbutwhy.com/',
  },
  {
    name: 'Paul Graham',
    link: 'http://www.paulgraham.com/',
  },
  {
    name: 'Joel Hooks',
    link: 'https://joelhooks.com',
  },
  {
    name: 'David Perell',
    link: 'https://www.perell.com/',
  },
  {
    name: 'Dan Abramov',
    link: 'https://overreacted.io',
  },
  {
    name: 'Lee Robinson',
    link: 'https://leerob.io',
  },
  {
    name: 'Naval Ravikant',
    link: 'https://nav.al/',
  },
] as const;

export const Quotes = [
  {
    content: 'We have two lives, and the second begins when we realize we only have one.',
    author: '― Confucius',
  },
  {
    content: 'The man who moves a mountain begins by carrying away small stones.',
    author: '― Confucius',
  },
  {
    content:
      'The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.',
    author: '― Confucius',
  },
  {
    content:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did so. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: '― Mark Twain',
  },
  {
    content:
      "You have no responsibility to live up to what other people think you ought to accomplish. I have no responsibility to be like they expect me to be. It's their mistake, not my failing.",
    author: '― Mark Twain',
  },
  {
    content:
      'Watch your thoughts, they become your words; watch your words, they become your actions; watch your actions, they become your habits; watch your habits, they become your character; watch your character, it becomes your destiny.',
    author: '― Laozi',
  },
  {
    content: 'If you are going through hell, keep going.',
    author: '― Winston S. Churchill',
  },
  {
    content: 'Attitude is a little thing that makes a big difference.',
    author: '― Winston S. Churchill',
  },
  {
    content:
      'To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking.',
    author: '― Johann Wolfgang von Goethe',
  },
  {
    content: 'It is not death that a man should fear, but he should fear never beginning to live.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'If it is not right do not do it; if it is not true do not say it.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'You have power over your mind - not outside events. Realize this, and you will find strength.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'The happiness of your life depends upon the quality of your thoughts.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'There is no easy way from the earth to the stars',
    author: '― Seneca',
  },
  {
    content: 'We suffer more often in imagination than in reality',
    author: '― Seneca',
  },
  {
    content: "A language that doesn't affect the way you think about programming, is not worth knowing.",
    author: '- Alan Perlis'
  }
] as const;

export const Tools = {
  Workstation: [
    {
      title: 'Apple M3 Pro chip with 11‑core CPU, 14‑core GPU, 16‑core Neural Engine',
      description:
        "This MacBook Pro M3 represents the latest leap in my computing journey, embodying cutting-edge technology and performance. Its sleek design and powerful M3 chip enable me to tackle the most demanding projects, from coding to content creation. With this machine, I'm equipped to explore new horizons and push the boundaries of what's possible in my work.",
      href: 'https://www.apple.com/shop/buy-mac/macbook-pro/14-inch-space-black-apple-m3-pro-with-11-core-cpu-and-14-core-gpu-18gb-memory-512gb?afid=p238%257CsF7IpQiKR-dc_mtid_1870765e38482_pcrid_652759409002_pgrid_146259541814_pntwk_g_pchan_local_pexid__&cid=aos-us-kwgo-pla-mac_lia--slid---product-MTLC3LL/A',
    },
  ],
  Software: [
    {
      title: 'Visual Studio Code',
      description: `Long gone are the days of Eclipse. I now use Visual Studio for all my web development needs. `,
      href: 'https://code.visualstudio.com/',
    },

    {
      title: 'Figma',
      description: `I'm not a designer but it allows me to quickly mock up interfaces and play with my ideas. One day I'll learn how to use it properly.`,
      href: 'https://www.figma.com/',
    },
    {
      title: 'Notion',
      description: `I use it for everything. I have a separate workspace for each of my projects and I use it to keep track of my tasks, notes, and ideas. I'm even using Notion as a database for this portfolio :)`,
      href: 'https://www.notion.so/',
    },
    {
      title: 'Excalidraw',
      description: `I use Excalidraw to quickly sketch out ideas and concepts. It's a great tool for visualizing your thoughts and sharing them with others.`,
      href: 'https://www.Excalidraw.com',
    },
  ],
} as const;

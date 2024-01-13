import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { XIcon } from '../components/icons/XIcon';
import AmbitLogo from '../images/logos/ambit.png';
import BarepapersLogo from '../images/logos/barepapers.svg';
import BimLogo from '../images/logos/bim.png';
import CDGOLogo from '../images/logos/cdgo.png';
import MissionBit from '../images/logos/missionbit.jpg';
import EvercastLogo from '../images/logos/evercast.svg';
import Howdy from '../images/logos/howdy.png';
import HunterLogo from '../images/logos/logome.png';
import Leadbird from '../images/logos/leadbird.jpg';
import MonitoLogo from '../images/logos/monito.svg';
import Consultly from '../images/logos/consultly.svg';
import MobileVikingsLogo from '../images/logos/mv.png';
import Candor from '../images/logos/candor.png';
import CoderSchool from '../images/logos/coderschool.jpg';
import TastyCloudLogo from '../images/logos/tastycloud.png';
import YearProgressLogo from '../images/logos/yearprogress.svg';
import Minimal from '../images/logos/minimal.svg';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';

export const Name = 'Hunter Macias';

export const About = (
  <>
    {`I am a pragmatic software developer with a foundational background in computer science, marked by an energetic pursuit of innovative project work. My academic knowledge, while not fully complete, has been the springboard for a diverse portfolio of hands-on tech creations. I've spearheaded cutting-edge projects ranging from a real-time collaborative platform reminiscent of Notion, to advanced solutions in blockchain crowdfunding and AI-driven communication platforms. These endeavors highlight a fluency in contemporary tools such as React, Next.js, and Python, showcasing my ability to not only adapt to but also anticipate the shifting tides of the tech landscape. Engaging with my work reveals a developer dedicated to building not just functional, but captivating, user-centric applications that drive forward the intersection of technology and practicality.`}{' '}
    <ExternalLink href="https://hunters-resume.vercel.app/">send me an email.</ExternalLink>
  </>
);
export const AboutExtended = `About Section - Extended [add more personal info here]`;

export type Project = {
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
    title: "Python Documentation Portal",
    techStack: ["Web Development", "Typescript", "Documentation"],
    description: "Created a Python Documentation Portal using Next.js and TailwindCSS. The platform offers features such as documentation search, documentation filtering, and documentation navigation, fostering an engaging and interactive community experience.",
    logo: MonitoLogo, 
    link: {
      label: "Explore Pygame Docs",
      href: "https://pydocs-aoc.vercel.app"
    }
  },
  {
    title: "Evently: Event Management Mobile App",
    techStack: ["Side Project", "TailwindCSS", "Next.js", "Server Actions"],
    description:
      "Evently is a comprehensive event management app, featuring a robust backend and a modern UI/UX design. It's a one-stop solution for event organizers and attendees alike.",
    logo: CDGOLogo,
    link: {
      label: "https://meetix.vercel.app/",
      href: "https://meetix.vercel.app/",
    },
  },
  {
    title: 'Hunter.me',
    techStack: ['Side Project', 'Next.js', 'MDX'],
    description: 'My personal website you are currently on, built with Next.js.',
    logo: HunterLogo,
    link: {
      label: 'github.com',
      href: 'https://hunter-me.vercel.app',
    },
  },
  {
    title: "Las Vegas Raiders Fan Blog",
    techStack: ["Side Project", "Sanity", "React.js"],
    description:
      "The ultimate resource for Las Vegas Raiders fans, featuring game recaps, player profiles, draft predictions, and the latest updates. It's a one-stop destination for all things Raiders.",
    logo: AmbitLogo,
    link: {
      label: "https://www.raidersrundown.com",
      href: "https://www.raidersrundown.com",
    },
  },
  
];

export const MyPastProjects: Project[] = [
  {
    title: "Notionary",
    techStack: ["Side Project", "Stripe", "SaaS", "Drizzle ORM", "Supabase", "Sockets"],
    description:
      "Developed a Notion inspired web application using Next.js, Supabase, and Stripe. The platform offers features such as user authentication, subscription payments, and real-time collaboration, fostering an engaging and interactive community experience.",
    logo: MonitoLogo,
    link: {
      label: "Notionary",
      href: "https://notionary.vercel.app/",
    },
  },
  {
    title: "Video-Sharing Social Network",
    techStack: ["Side Project", "TypeScript", "Next.js", "Sanity Management"],
    description:
      "Developed an interactive web application using Next.js and Sanity.io, designed to create a shared space for users to connect with friends and family through video content. The platform offers features such as video sharing, commenting, liking, and user search, fostering an engaging and interactive community experience.",
    logo: MonitoLogo,
    link: {
      label: "shareme.dev",
      href: "https://symphonious-kitten-397f94.netlify.app/",
    },
  },
  {
    title: "Similarity Scout",
    techStack: ["Side Project", "Typescript", "Animations", "Radix UI"],
    description:
      "API Service that compares the similarity of two pieces of text",
    logo: EvercastLogo,
    link: {
      label: "SimilarityScout",
      href: "https://similarityscout.netlify.app/",
    },
  },
  {
    title: "Comprehensive Job Search Mobile App",
    techStack: ["Side Project", "React Native", "RapidAPI"],
    description:
      "A powerful job search tool leveraging RapidAPI for comprehensive job listings. Features modern UX/UI design and robust search functionality to match users with their ideal job roles.",
    logo: BarepapersLogo,
    link: {
      label: "Job Hunt - RN",
      href: "https://expo.dev/@huntermacias/job-search-app?serviceType=classic&distribution=expo-go",
    },
  },
  {
    title: "NFT Marketplace React Native App",
    techStack: ["Side Project", "React Native", "TailwindCSS"],
    description: "Created an NFT Marketplace mobile app using React Native. Integrated modern UI/UX principles with efficient backend handling for a seamless digital asset trading experience.",
    logo: YearProgressLogo,
    link: {
      label: "NFT Marketplace - RN",
      href: "https://pro-nef-x.netlify.app/",
    },
  },
  {
    title: "Web3 Crypto Lottery App",
    techStack: [
      "Side Project",
      "Smart Contracts",
      "Solidity",
      "Blockchain",
      "Next.js",
    ],
    description:
      "Designed a cryptocurrency lottery application leveraging Next.js and Solidity smart contracts. Featured Metamask integration for secure blockchain transactions.",
    logo: EvercastLogo,
    link: {
      label: "Web3 Lottery App",
      href: "https://lottery-draw.netlify.app/",
    },
  },
  {
    title: "CureChat",
    techStack: [
      "Side Project",
      "React.js",
      "Twilio",
      "Stream",
      "SSA",
    ],
    description: "With Direct and Group Chats, emojis & Reactions, Built-in Gif support, the ability to edit & delete messages, specialized commands, and much more",
    logo: EvercastLogo,
    link: {
      label: "CureChat",
      href: "https://curechat.netlify.app/",
    },
  },
  {
    title: "Blockchain-Powered Crowdfunding Platform",
    techStack: [
      "Side Project",
      "Smart Contracts",
      "Solidity",
      "Web3",
    
    ],
    description:
      "A blockchain-based crowdfunding platform, featuring Metamask integration, smart contract interactions, and Ethereum transactions. It's a comprehensive demonstration of creating and participating in blockchain-enabled campaigns.",
    logo: EvercastLogo,
    link: {
      label: "crowdfund-campaign.app",
      href: "https://cool-cactus-84bc7e.netlify.app/",
    },
  },
  {
    title: "NFT Marketplace: OpenSea",
    techStack: ["Side Project", "Next.js", "Web3"],
    description:
      "An NFT marketplace mimicking OpenSea, showcasing a variety of blockchain use cases. It stands out with features like multi-test support and comprehensive NFT trading functionalities.",
    logo: MobileVikingsLogo,
    link: {
      label: "NFT Marketplace - OpenSea",
      href: "https://opensea-hm.netlify.app",
    },
  },
  {
    title: "Kobe Bryant's Legacy: A Data Visualization",
    techStack: ["Side Project", "D3.js", "Data Visualization"],
    description:
      "Interactive Data Visualization with D3.js",
    logo: Howdy,
    link: {
      label: "Kobe Bryant - A Visual Story",
      href: "https://huntermacias.github.io/data-vis-basketball/index.html",
    },
  },
  {
    title: "AI-Powered ChatGPT Messaging Platform",
    techStack: ["Lead Android Developer", "Android", "Kotlin"],
    description:
      "ChatGPT Messenger revolutionizes communication with AI-driven conversations, leveraging NLP and ML for personalized user interactions. It's a seamless blend of technology and user experience",
    logo: TastyCloudLogo,
    link: {
      label: "AI-Responds",
      href: "https://chatgpt-messenger-three.vercel.app/",
    },
  },
  {
    title: "3D Interactive Developer Portfolio",
    techStack: ["Side Project", "Three.js", "Framer Motion"],
    description:
      "Personal Portfolio Creation with Three.js & Framer Motion",
    logo: BimLogo,
    link: {
      label: "3D Portfolio",
      href: "https://huntercodes.netlify.app/",
    },
  },
  {
    title: "Evently: Event Management Mobile App",
    techStack: ["Side Project", "TailwindCSS", "Next.js", "Server Actions"],
    description:
      "Evently is a comprehensive event management app, featuring a robust backend and a modern UI/UX design. It's a one-stop solution for event organizers and attendees alike.",
    logo: CDGOLogo,
    link: {
      label: "Meetix",
      href: "https://meetix.vercel.app/",
    },
  },
]

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
    start: '2020',
    end: 'Present',
  },
  {
    company: 'Mission Bit',
    title: 'Coding Instructor',
    logo: MissionBit,
    start: '2020',
    end: '2022',
  },
  {
    company: 'Leadbird',
    title: 'Web App Developer → Lead Developer',
    logo: Leadbird,
    start: '2021',
    end: '2022',
  },
  {
    company: 'Candor',
    title: 'Frontend Developer',
    logo: Candor,
    start: '2021',
    end: '2021',
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
] as const;

export const Tools = {
  Workstation: [
    {
      title: '13.5” Surface Book (1st Gen), 8GB RAM (2021)',
      description:
        'While my laptop may be old and outdated to some, this is the laptop that kickstarted my coding journey over 6 years ago. Every project, assignment, job, or meeting, this laptop has gotten me through it.',
      href: 'https://amzn.to/3XkWxhF',
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
      description: `I use it for everything. I have a separate workspace for each of my projects and I use it to keep track of my tasks, notes, and ideas.`,
      href: 'https://www.notion.so/',
    },
    {
      title: 'Excalidraw',
      description: `I use Excalidraw to quickly sketch out ideas and concepts. It's a great tool for visualizing your thoughts and sharing them with others.`,
      href: 'https://www.Excalidraw.com',
    },

  ],
} as const;

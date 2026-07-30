import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { XIcon } from '../components/icons/XIcon';
import RaiderLogo from '../images/logos/raiders.jpg';
import EventlyLogo from '../images/logos/evently.png';
import MissionBit from '../images/logos/missionbit.jpg';
import HunterLogo from '../images/logos/logome.png';
import Leadbird from '../images/logos/leadbird.jpg';
import Candor from '../images/logos/candor.png';
import CoderSchool from '../images/logos/coderschool.jpg';
import NotionLogo from '../images/logos/notionlogo.png';
import KobeLogo from "../images/logos/kobe.jpg";
import PeerChatLogo from "../images/logos/peerchat.png";
import JobSearchLogo from "../images/logos/jobsearch.png";
import FrameRateLogo from "../images/logos/framerate.png";
import AcquisitionLogo from "../images/logos/acquisition.png"
import CameraLogo from "../images/logos/camera.jpg"
import Lingo from "../images/logos/lingo.jpg"
import USFCALogo from '../images/logos/usflogo.png';
import CostcoLogo from "../images/logos/costcoLogo.png"
import CostcoTravelLogo from "../images/logos/costcotravel.webp";
import StarbucksLogo from "../images/logos/starbucks.png";
import { LinkedInIcon } from '../components/icons/LinkedInIcon';

export const Name = 'Hunter Macias';

export const About = (
  <>
    {`Hi, I'm Hunter Macias, a Quality Engineer at Costco Travel focused on test strategy, performance engineering, and release confidence for large-scale booking systems. I care more about catching problems before they ship than about hitting a test count.`}{' '}

    {`For further discussions and collaboration, please feel free to reach out to me via email.`}{' '}
    <ExternalLink href="https://hunters-resume.vercel.app/">send me an email.</ExternalLink>
  </>
);
export const AboutExtended =
  `I'm a Quality Engineer II at Costco Travel, where I work on the systems behind cruise, hotel, and vacation package bookings — the kind of software where a missed edge case means a real customer's trip goes sideways, not just a failed unit test.
My background is a mix of hands-on testing and systems thinking. I spend as much time reading logs in Splunk and profiling API latency as I do writing test automation, and I'd rather catch a problem upstream than triage it downstream. Most of what I build reflects that: shift-left contract tests, self-service performance tooling, CI-integrated vulnerability monitoring — things that move quality earlier in the pipeline instead of bolting it on at the end.
Before testing became the job, it was practice. I spent a few years teaching kids to code at TheCoderSchool and Mission Bit, and I still build side projects on my own time — partly to stay sharp on the other side of the stack, partly because I like building things. Below is a rundown of both: the professional work, and the stuff I build for fun.`;

export type ProfessionalRole = {
  role: string;
  /** Parseable as `new Date('<Month> 1, <Year>')`, e.g. 'Nov 2025'. */
  start: string;
  /** Omit for a role that's still current. */
  end?: string;
  current: boolean;
  title: string;
  summary: string;
  /** Labeled, prose-level breakdown of what the role actually involved. */
  details?: { label: string; body: string }[];
  /** Big-number metrics, e.g. a latency reduction figure. */
  stats?: { value: string; label: string }[];
  /** Named achievements/launches, shown as tags rather than metrics. */
  highlights?: string[];
};

export const ProfessionalExperience: ProfessionalRole[] = [
  {
    role: 'Quality Engineer II',
    start: 'Nov 2025',
    current: true,
    title: 'Modernizing the cruise search platform',
    summary:
      "I own quality, performance, and release confidence for Costco Travel's cruise search platform modernization, working within a cross-functional team that includes a product owner, a scrum master, three QAs (one offshore in India), and six developers split evenly onshore and offshore. My scope stays inside the Shopping portfolio roughly 90–95% of the time, stepping outside it only when a bug traces back to an upstream or downstream system.",
    details: [
      {
        label: 'Shift-left API testing',
        body: "Built a contract-based acceptance testing practice, written before a feature is code-complete, so development validates against a production-ready test suite throughout implementation instead of finding gaps in a regression pass afterward. It wasn't an easy sell at first — developers were wary of QA working directly in the same repo, worried it would become a flaky gatekeeper slowing them down. Within two sprints that concern flipped: developers started actively pointing out how much faster issues were getting caught and resolved, and how much sharper the coverage was on business-rule and endpoint-level detail that used to slip through.",
      },
      {
        label: 'Performance testing platform',
        body: 'Stood up an engineering-owned performance testing platform on k6 and Jenkins with automated reporting, replacing a coordination-heavy process with self-service load testing any team can run on their own. A FY27 goal is scaling that further — bringing at least two more Shopping-portfolio teams onto k6 and shift-left testing, backed by Splunk APM for request-level visibility.',
      },
      {
        label: 'Architecture benchmarking',
        body: 'Used that platform to benchmark legacy and microservice architectures head to head, validating 63–99% latency reductions across key search endpoints and directly informing how we sequenced the production rollout.',
      },
      {
        label: 'Security & dependency management',
        body: 'Built proactive dependency vulnerability monitoring into CI pipelines, so remediation starts before a CVE becomes an org-wide advisory instead of after.',
      },
      {
        label: 'Mentoring',
        body: "Mentoring an incoming intern whose team owns a business-rules microservice, walking them through the STLC end to end — how to scope a test plan, decide what's worth automating versus testing manually, and build the automation itself.",
      },
      {
        label: 'QA tooling enablement',
        body: 'Most QAs across the org don’t have the consumer and agent apps developers rely on for debugging set up, leaving them limited to logs and traces. A FY27 goal is closing that gap — either a written setup guide or a live session for the broader QA org (20–60 people) — so more QAs can debug with the same visibility developers have.',
      },
    ],
    stats: [
      { value: '63–99%', label: 'Latency reduced' },
      { value: 'k6 + Jenkins', label: 'Perf platform built' },
      { value: 'Shift-left', label: 'API contract testing' },
      { value: 'CI-integrated', label: 'CVE remediation' },
    ],
  },
  {
    role: 'Software Development Engineer in Test I',
    start: 'Aug 2024',
    end: 'Nov 2025',
    current: false,
    title: 'Shipping QA across major product launches',
    summary:
      'My first 16 months were spent writing automated and manual tests in Java, JavaScript, and SQL for vacation package shopping, working across the full testing stack to ship QA coverage behind some of the bigger launches on the roadmap.',
    details: [
      {
        label: 'Test automation',
        body: 'Wrote automated and manual tests in Java, JavaScript, and SQL, focused on vacation package shopping features across the booking flow.',
      },
      {
        label: 'Full-stack testing coverage',
        body: 'Worked across the full testing stack: API testing with Postman, Swagger, and RestAssured; observability through Splunk and Grafana; and UI regression with Selenium.',
      },
      {
        label: 'Automation observability',
        body: 'Helped build a Grafana dashboard that scraped Jenkins automation job reports into a database, surfacing metrics like top failing tests and pass/fail trend lines so the team could see automation health at a glance instead of digging through individual build logs.',
      },
    ],
    highlights: [
      'Theme park ticket customization',
      'Hotel + theme park ticket bundles',
      'Australia cruise market launch',
      'CMS migration (Cascade → Magnolia)',
    ],
  },
];

export const CoreSkills = [
  'TypeScript',
  'Java',
  'React / Next.js',
  'Playwright',
  'Selenium',
  'Postman',
  'Jenkins',
  'Splunk',
  'Azure DevOps',
] as const;

export type Project = {
  video?: any;
  title: string;
  techStack: string[];
  description: string;
  logo: any;
  /** Renders larger, in the first grid position, to call out flagship work. */
  featured?: boolean;
  link?: {
    label: string;
    href: string;
  };
};

export const MyCurrentProjects: Project[] = [
  {
    title: 'Lingo',
    featured: true,
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
      'NeonDB',
      'Vercel',
    ],
    description: "A Duolingo-inspired language learning platform with AI-generated voice lines, character-driven lessons, an XP/hearts progression system, and a Stripe-backed Pro tier. Built to explore full-stack SaaS mechanics end to end: auth, billing, a course-authoring admin, and a gamified learning loop.",
    logo: Lingo,
    link: {
      label: 'Explore Lingo',
      href: 'https://lingo-aehvptrt5-huntermacias.vercel.app/',
    }
  },
  {
    title: 'Stratify',
    techStack: ['Next.js', 'Bun', 'Stripe Connect', 'Prisma', 'MySQL'],
    description: "A multi-tenant website builder and project management tool for agencies, with sub-account support and Stripe Connect so agencies can bill their own clients through the platform. Every site is deployable to a custom subdomain from a shared funnel/page builder.",
    logo: AcquisitionLogo,
    link: {
      label: 'Stratify: Agency Management',
      href: 'https://stratifyapp.vercel.app/',
    }
  },
  {
    title: 'JSLy',
    techStack: ['Nuxt.js', 'TailwindCSS', 'StackBlitz'],
    description: "A JavaScript documentation portal built with Nuxt.js, with searchable, filterable docs and in-browser code playgrounds via StackBlitz.",
    logo: CameraLogo,
    link: {
      label: 'JSLy',
      href: 'https://jsly.vercel.app/',
    }
  },
  {
    title: 'FrameRate',
    techStack: ['Next.js', 'TailwindCSS', 'MovieAPI'],
    description:
      "A community movie-rating app in the spirit of Letterboxd — rate films, write reviews, and browse a rating system built around authentic, individual opinions rather than aggregate scores.",
    logo: FrameRateLogo,
    link: {
      label: 'FrameRate',
      href: 'https://better-letterboxd.vercel.app/',
    },
  },
  {
    title: 'Raiders Rundown',
    techStack: ['Sanity', 'React.js'],
    description:
      "A Sanity-backed content site for Las Vegas Raiders fans — game recaps, player profiles, and draft coverage, all editable through a headless CMS.",
    logo: RaiderLogo,
    link: {
      label: 'raidersrundown.com',
      href: 'https://www.raidersrundown.com',
    },
  },
  {
    title: 'Hunter.me',
    techStack: ['Next.js', 'MDX', 'Notion API'],
    description: 'The site you’re on right now — built with Next.js, with notes pulled and rendered from a Notion database.',
    logo: HunterLogo,
    link: {
      label: 'github.com',
      href: 'https://hunter-me.vercel.app',
    },
  },
];

export const MyPastProjects: Project[] = [
  {
    title: 'Notionary',
    techStack: ['Next.js', 'Stripe', 'Supabase', 'Sockets'],
    description:
      'A Notion-inspired workspace app with auth, subscription billing, and real-time collaborative editing over web sockets.',
    logo: NotionLogo,
    link: {
      label: 'Notionary',
      href: 'https://notionary.vercel.app/',
    },
  },
  {
    title: 'Evently',
    techStack: ['Next.js', 'TailwindCSS', 'Server Actions'],
    description:
      'An event management app covering the full organizer/attendee flow — event creation, RSVPs, and a modern UI built on Next.js Server Actions.',
    logo: EventlyLogo,
    link: {
      label: 'Meetix',
      href: 'https://meetix.vercel.app/',
    },
  },
  {
    title: 'PeerChat',
    techStack: ['WebRTC', 'SDP', 'React.js'],
    description:
      'A Zoom-style video calling app built directly on WebRTC — screen share, live participant tiles, and chat, with no third-party video SDK.',
    logo: PeerChatLogo,
    link: {
      label: 'Peer Chat',
      href: 'https://lively-pastelito-3c6253.netlify.app/',
    },
  },
  {
    title: 'Comprehensive Job Search Mobile App',
    techStack: ['React Native', 'RapidAPI'],
    description:
      'A React Native job search app pulling listings from RapidAPI, with saved searches and a native mobile UX.',
    logo: JobSearchLogo,
    link: {
      label: 'Job Hunt - RN',
      href: 'https://expo.dev/@huntermacias/job-search-app?serviceType=classic&distribution=expo-go',
    },
  },
  {
    title: "Kobe Bryant's Legacy: A Data Visualization",
    techStack: ['D3.js', 'Data Visualization'],
    description: 'An interactive D3.js visualization of Kobe Bryant’s career statistics and milestones.',
    logo: KobeLogo,
    link: {
      label: 'Kobe Bryant - A Visual Story',
      href: 'https://huntermacias.github.io/data-vis-basketball/index.html',
    },
  },
];

export const SocialMedia = [
  // { name: 'Twitter', link: 'https://twitter.com/huntermacias_', icon: XIcon },
  { name: 'Instagram', link: 'https://www.instagram.com/huntermacias/', icon: InstagramIcon },
  { name: 'Github', link: 'https://github.com/huntermacias', icon: GitHubIcon },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/huntermacias/', icon: LinkedInIcon },
] as const;

export const Work = [
  {
    company: 'Costco Travel',
    logo: CostcoTravelLogo,
    roles: [
      {
        title: 'Quality Engineer II',
        start: 'Nov 2025',
        end: 'Present'
      },
      {
        title: 'Software Development Engineer in Test I',
        start: 'Aug 2024',
        end: 'Nov 2025',
      },
    ],
  },
  {
    company: 'Costco Wholesale',
    logo: CostcoLogo,
    roles: [
      {
        title: 'Warehouse Stocker',
        start: 'Oct 2023',
        end: 'Aug 2024',
      },
    ],
  },
  {
    company: 'Starbucks',
    logo: StarbucksLogo,
    roles: [
      {
        title: 'Barista',
        start: 'Apr 2023',
        end: 'Oct 2023',
      },
    ],
  },
  {
    company: 'TheCoderSchool',
    logo: CoderSchool,
    roles: [
      {
        title: 'Lead Instructor',
        start: 'Jun 2020',
        end: 'Present',
      },
    ],
  },
  {
    company: 'USFCA',
    logo: USFCALogo,
    roles: [
      {
        title: 'Teaching Assistant for Computer Science 245',
        start: 'Jul 2020',
        end: 'Jan 2021',
      },
      {
        // I was on the womens basketball practice squad from like nov 2018 to march 2020
        title: 'USFCA Womens Basketball Practice Squad',
        start: 'Nov 2018',
        end: 'Mar 2020',
      },
      {
        title: 'OneCard IT Technical Support',
        start: 'Jan 2019',
        end: 'Jan 2020',
      },
      {
        title: 'Teaching Assistant for Computer Science 110',
        start: 'Apr 2019',
        end: 'Aug 2019',
      },
    ],
  },
  {
    company: 'Mission Bit',
    logo: MissionBit,
    roles: [
      {
        title: 'Coding Instructor',
        start: 'Jan 2020',
        end: 'Mar 2022',
      },
    ],
  },
  {
    company: 'Candor',
    logo: Candor,
    roles: [
      {
        title: 'Frontend Developer',
        start: 'Sep 2021',
        end: 'Jan 2022',
      },
    ],
  },
  {
    company: 'Leadbird',
    logo: Leadbird,
    roles: [
      {
        title: 'Software Developer',
        start: 'Jan 2021',
        end: 'Jun 2021',
      },
    ],
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
      title: 'MacBook Pro (Apple M3 Pro)',
      intent: 'primary',
      description:
        'My primary development machine. The M3 Pro provides the performance and battery life needed for running local services, automation suites, containers, and multiple browsers simultaneously without friction.',
      href: 'https://www.apple.com/macbook-pro/',
    },
  ],

  'Languages & Frameworks': [
    {
      title: 'TypeScript',
      intent: 'primary',
      description:
        'My default language for frontend, backend, and automation work. Strong typing and editor tooling help prevent entire classes of bugs before they ever reach runtime.',
      href: 'https://www.typescriptlang.org/',
    },
    {
      title: 'Java',
      intent: 'primary',
      description:
        'Used extensively for enterprise-grade test automation and backend validation. I value Java for its maturity, ecosystem, and suitability for long-lived frameworks.',
      href: 'https://www.oracle.com/java/',
    },
    {
      title: 'React / Next.js',
      intent: 'primary',
      description:
        'Used for building production UIs, internal tools, and this site. I focus on predictable rendering, accessibility, and performance over novelty.',
      href: 'https://nextjs.org/',
    },
  ],

  'Testing & Automation': [
    {
      title: 'Playwright',
      intent: 'primary',
      description:
        'My preferred tool for modern UI and end-to-end testing. Deterministic execution, strong debugging tools, and cross-browser support make it ideal for validating critical user flows.',
      href: 'https://playwright.dev/',
    },
    {
      title: 'Selenium (Java)',
      intent: 'supporting',
      description:
        'Used in legacy and enterprise automation frameworks. While heavier than modern tools, it remains relevant in large, established codebases.',
      href: 'https://www.selenium.dev/',
    },
    {
      title: 'JUnit / TestNG',
      intent: 'supporting',
      description:
        'Core test runners for Java-based automation. Familiar, stable, and well-integrated into CI pipelines.',
      href: 'https://junit.org/',
    },
    {
      title: 'Postman',
      intent: 'primary',
      description:
        'Useful for exploratory API testing, contract validation, and debugging integration issues before automation is introduced.',
      href: 'https://www.postman.com/',
    },
  ],

  'CI, Observability & Infrastructure': [
    {
      title: 'Jenkins',
      intent: 'primary',
      description:
        'Primary CI system for running automation, gating releases, and validating changes at scale. I care deeply about fast feedback and actionable failure signals.',
      href: 'https://www.jenkins.io/',
    },
    {
      title: 'Splunk',
      intent: 'primary',
      description:
        'Used for log analysis, debugging production issues, and validating system behavior across distributed services.',
      href: 'https://www.splunk.com/',
    },
    {
      title: 'Azure DevOps (ADO)',
      intent: 'primary',
      description:
        'Used for work item tracking, test planning, pipelines, and release coordination in large teams.',
      href: 'https://azure.microsoft.com/en-us/products/devops',
    },
    {
      title: 'Docker',
      intent: 'supporting',
      description:
        'Used for local development, reproducible environments, and isolating dependencies during testing.',
      href: 'https://www.docker.com/',
    },
  ],

  'Developer Tools & Productivity': [
    {
      title: 'Visual Studio Code',
      intent: 'primary',
      description:
        'My primary editor for TypeScript, JavaScript, and automation work. Extensions, debugging tools, and Git integration make it a reliable daily driver.',
      href: 'https://code.visualstudio.com/',
    },
    {
      title: 'IntelliJ IDEA',
      intent: 'primary',
      description:
        'Essential for Java-heavy projects and large enterprise codebases. Strong refactoring tools and static analysis help maintain long-lived systems.',
      href: 'https://www.jetbrains.com/idea/',
    },
    {
      title: 'Notion',
      intent: 'supporting',
      description:
        'Used for documentation, planning, and knowledge capture. I treat documentation as part of the system, not an afterthought.',
      href: 'https://www.notion.so/',
    },
    {
      title: 'Excalidraw',
      intent: 'supporting',
      description:
        'Used for lightweight architecture diagrams, test flow sketches, and system discussions. Optimized for thinking, not polish.',
      href: 'https://excalidraw.com/',
    },
  ],

  'Design & Collaboration': [
    {
      title: 'Figma',
      intent: 'supporting',
      description:
        'Used to understand designs, mock ideas quickly, and collaborate with designers—primarily as a communication tool, not a design crutch.',
      href: 'https://www.figma.com/',
    },
    {
      title: "Teams",
      intent: 'primary',
      description:
        'Day-to-day communication at Costco Travel — cross-functional collaboration, incident coordination, and the running conversation with devs that makes shift-left testing work in practice.',
      href: 'https://www.microsoft.com/en/microsoft-teams/group-chat-software',
    },
    {
      title: 'Slack',
      intent: 'supporting',
      description:
        'Where I keep up with side-project collaborators and a few engineering communities outside of work.',
      href: 'https://slack.com/',
    },
  ],
} as const;


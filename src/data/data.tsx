import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage4 from '../images/portfolio/donations.jpg';
import porfolioImage2 from '../images/portfolio/galileo.jpg';
import porfolioImage5 from '../images/portfolio/github-actions.jpg';
import porfolioImage3 from '../images/portfolio/osiris.jpg';
import porfolioImage6 from '../images/portfolio/web-app.jpg';
import porfolioImage1 from '../images/portfolio/yoda.jpg';
import profilepic from '../images/profilepic.png';
import {
  About,
  ContactSection,
  ContactType,
  Home,
  HomepageMeta,
  PortfolioItem,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

export const homePageMeta: HomepageMeta = {
  title: 'My Portfolio',
  description: 'My portfolio built with react and next js',
};

export const SectionId = {
  Home: 'home',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

export const homeData: Home = {
  imageSrc: heroImage,
  name: `I'm Fazal Abbas.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">Careem</strong>, my enthusiasm lies in crafting sophisticated and
        maintainable code to address intricate challenges and provide value to users.My background includes the
        development of scalable, high-performance, and user-centric web solutions.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      As a <strong>software engineer</strong>, I am passionate about creating elegant, maintainable code that solves
      complex problems and delivers value to users. With proficiency in a variety of technologies, including{' '}
      <strong>ReactJS,AngularJS, NextJS, NodeJS, TypeScript, and Redux</strong>, I have experience developing scalable,
      performant, and user-friendly web solutions.
    </>
  ),
  aboutItems: [
    {label: 'Location', text: 'Lahore, Pakistan', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Pakistani', Icon: FlagIcon},
    {label: 'Interests', text: 'Learning new technologies', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Punjab (PUCIT)', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Careem (Uber Inc.)', Icon: BuildingOffice2Icon},
  ],
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Galileo',
    description:
      'Developing state-of-the-art dynamic configuration and experimentation platform named Galileo. Galileo enables the organization to run A/B testing, multivariate testing, feature rollouts as well as providing reliable solution for dynamic configuration. In just a few months after a first release, we were able to completely deprecate most of external vendors and enabled client-side experimentation across the company with unprecedented reliability and simplicity.',
    url: 'https://blog.careem.com/en/galileo-analysis-and-reporting-of-experiments/',
    image: porfolioImage2,
  },

  {
    title: 'Donation CMS',
    description:
      'Build a Donation CMS for donation mini app to change the donations text in the app dynamically instead of manual changes in the app by pushing build of app again.',
    url: 'https://www.careem.com/en-AE/donations/',
    image: porfolioImage4,
  },
  {
    title: 'Osiris',
    description: `The inbuilt tool employed at Careem serves as a versatile solution for managing data configurations. Integrated with Slack and Jira, it automates the generation of tickets and facilitates Slack notifications. The tool's functionalities extend to the creation of Kafka topics, database connections, events, and SQL jobs crucial to Careem's operations. The individual has actively contributed to the development of numerous features within this tool, making it an instrumental asset. Its capabilities streamline the automation of repetitive tasks, thereby enhancing overall efficiency in various aspects of Careem's workflow.`,
    url: '',
    image: porfolioImage3,
  },

  {
    title: 'Github Migration',
    description: `I played a key role in a significant GitHub migration project within our team, where our primary responsibility was to seamlessly transfer approximately 2700 organizational repositories from Bitbucket or GitLab to GitHub. Subsequently, we undertook the task of deprecating Jenkins for service deployment, opting for the implementation of GitHub Actions workflows across nearly 760 repositories. My specific contribution involved enhancing around 80 repositories by integrating GitHub Actions and, in some cases, implementing Dockerization for services that had not been dockerized previously. This initiative aimed to streamline our development and deployment processes, leveraging GitHub's robust features for a more efficient and cohesive workflow.`,
    url: 'https://blog.careem.com/?s=donations',
    image: porfolioImage5,
  },
  {
    title: 'Yoda',
    description:
      'Building a highly scalable platform for managing end-to-end machine learning lifecycle which is called Yoda. Yoda provides users with the tools necessary to develop, deploy, and improve machine learning models, automate data workflows, accelerate data processing, and optimize related functionality. One of the key feature is called "one click deployment" which is pretty self-descriptive :)',
    url: 'https://medium.com/careem-tech/yoda-scaling-machine-learning-careem-d4bc8b1be195',
    image: porfolioImage1,
  },

  {
    title: 'Customer Web App',
    description: `
    The customer web application stands as a public web portal, providing a user-friendly interface for individuals seeking to initiate current bookings or plan future reservations without the need for an account. This platform caters to the convenience of guests, allowing them to effortlessly create bookings in real-time and schedule future reservations through the intuitive web portal. By eliminating the requirement for user accounts, the portal ensures a seamless and accessible experience for customers, enhancing their ability to engage with the booking process effortlessly. This customer-centric approach not only simplifies immediate bookings but also encourages individuals to plan and schedule their future reservations with ease, contributing to a streamlined and user-friendly booking experience.`,
    url: 'https://app.careem.com',
    image: porfolioImage6,
  },
];

export const education: TimelineItem[] = [
  {
    date: 'Sep 2017 - Jul 2021',
    location: 'University of Punjab (PUCIT)',
    title: 'BS Software Engineering',
    content: (
      <p>
        <strong style={{color: '#f97316 !important'}}>Skills:</strong> React.js · Next.js · Node.js · TypeScript ·
        Redux.js · Redux Thunk · Gitlab · Git · Ant Design · GitHub{' '}
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2022 - Present',
    location: 'Lahore, Punjab Pakistan',
    title: 'Software Engineer at Careem',
    content: (
      <p>
        <strong style={{color: '#f97316 !important'}}>Skills:</strong> jQuery · Tailwind CSS · Web Engineering · Amazon
        Web Services (AWS) · docker · Software Deployment · Agile Methodologies · Kubernetes · JavaServer Pages (JSP) ·
        AngularJS · Gitlab · Ant Design · Jenkins · TypeScript · React.js · GitHub · Redux.js · Cascading Style Sheets
        (CSS) · Bootstrap · JavaScript · Redux Thunk · Go (Programming Language)
      </p>
    ),
  },
  {
    date: 'August 2021 - June 2022',
    location: 'Lahore, Punjab Pakistan',
    title: 'Software Engineer at Munch:ON',
    content: (
      <p>
        Munch:ON was a product-based business that offered meal services in KSA and the UAE. I worked on this product's
        web application to maintain it and add a lot of new features including favourite meals, adding items to the cart
        and placing order from cart, in-app tutorials and many others.
        <span style={{display: 'block', marginTop: '10px'}}>
          <strong style={{color: '#f97316 !important'}}>Skills:</strong> jQuery · Tailwind CSS · TypeScript · React.js ·
          GitHub · Redux.js · Node.js · Next.js · Cascading Style Sheets (CSS) · Bootstrap · JavaScript · Redux Thunk{' '}
        </span>
      </p>
    ),
  },
];

export const testimonial: TestimonialSection = {
  imageSrc: '',
  testimonials: [
    {
      href: 'https://www.linkedin.com/in/selcukkizilkaya/',
      name: 'Selcuk Kizilkaya',
      text: 'Fazal demonstrates a strong focus on achieving outcomes and skillfully navigating through numerous challenges. Despite encountering several obstacles, he adeptly resolved each issue by engaging in collaborative discussions with team members, ensuring he could progress and successfully reach the intended goals.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/yasar1/',
      name: 'Yasar Rahman',
      text: 'Fazal demonstrated a commendable ability to work independently, delivering a high-quality final product with meticulous attention to detail.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/vimbaimidzi/',
      name: 'Vimbai Beverly Midzi',
      text: `Fazal's work was instrumental in making sure I had the foundations for a donations CMS. Before this, there was an overdependency on engineering support that was very difficult to secure. He listened to my needs and made edits where necessary to make it more usable to me.`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/azan-ibrar-9b03a3202/',
      name: 'Azan Ibrar',
      text: `You're an outstanding engineer, and an even more remarkable friend. Your constant support and willingness to help other falcons make a significant impact. Thanks for all the fantastic contributions you bring to the table!`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/zaid-iqbal-702b55150/',
      name: 'Zaid Iqbal',
      text: `Thanks for being a supportive colleague.`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/sumran-waheed/',
      name: 'Samran Waheed',
      text: `I want to highlight the outstanding collaboration with Fazal on our recent project. As the Back-End Developer, I worked closely with Fazal, who handled the Front-End tasks.

      Fazal's quick and efficient Front-End work greatly contributed to our project's success. His clear communication and proactive approach ensured seamless collaboration. Despite facing challenges on the Back-End, Fazal consistently provided valuable support, pushing the project forward.
      
      I commend Fazal for his dedication, proficiency, and positive attitude. Working with him was a pleasure, and I look forward to future collaborations.`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/hamza-sohail1/',
      name: 'Hamza Sohail',
      text: `Thank you, Fazal, for always being so supportive and helpful with any kind of technical issue. You possesses great knowledge and the ability to share it with others. Thanks for dedicating your time to guide and support me and many others.`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/mohsin-khalid-a25669218/',
      name: 'Mohsin Khalid',
      text: `I would like to praise Fazal for always supporting me and guiding me during the start of my career. Your dedication and creativity are truly inspiring. Thank you for always helping me about the little details and overall structure of how things work at Careem.`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: (
    <>
      <strong style={{color: 'rgba(249, 115, 22, 1) !important'}}>Reach out</strong> to me through the following social
      links, and let's make things happen! 🚀.Looking forward to connecting with you! 🌟
    </>
  ),
  items: [
    {
      type: ContactType.Email,
      text: 'ranafazalabbasjoyia@gmail.com',
      href: 'ranafazalabbasjoyia@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Lahore Punjab, Pakistan',
      href: 'https://maps.app.goo.gl/Cw3YU4yxsnjadtBX6',
    },
    {
      type: ContactType.Instagram,
      text: '@fazal_joyia.js',
      href: 'https://www.instagram.com/fazal_joyia.js',
    },
    {
      type: ContactType.Github,
      text: 'fazaljoyia',
      href: 'https://github.com/fazaljoyia',
    },
  ],
};

export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/fazaljoyia'},
  {label: 'FaceBook', Icon: FacebookIcon, href: 'https://www.facebook.com/FazalJoyia0786?mibextid=ZbWKwL'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/fazal-abbas-careem/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/fazal_joyia.js/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/Fazal__Joyia'},
];

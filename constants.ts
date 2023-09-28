
export const METADATA = {
  title: "We Int | Official",
  description:
    "We Grow Together",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Web Application Development",
  "Ai and Block Chain Solution",
  "App and Game Development",
  "Social Media Marketing",
];

export const EMAIL = "zainulabideenbaloch@proton.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/zain-ul-abideen-baloch/",
  github: "https://github.com/zaindgr8",
  instagram: "https://www.instagram.com/weintdm360/",
  facebook: "https://www.facebook.com/weintdigmarketing",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Real Estate Portal",
    image: "/projects/resite.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "UI/UX on Figma | Code on Typescript & Tailwind",
    gradient: ["#1F6582", "#1ABCFE"],
    tech: ["typescript", "figma", "tailwind", "next"],
  },
  {
    name: "Converted - E Commerce Store",
    image: "/projects/fig.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "UI/UX on Figma | Code on Typescript & Tailwind",
    gradient: ["#1F6582", "#1ABCFE"],

    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "Crypto NFT Market Place",
    image: "/projects/nft.png",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "Front End With Next JS| Back End with BlockChain",
    gradient: ["#3A0000", "#771E1E"],
    
    tech: ["gsap", "next", "typescript"],
  },
  {
    name: "Audio Streaming & Store",
    image: "/projects/audio.png",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "Built the application from zero to production 🚀",
    gradient: ["#003052", "#167187"],
    
    tech: ["react", "javascript", "figma"],
  },
  {
    name: "Stera- Affiliate Marketing Store",
    image: "/projects/stera.png",
    blurImage: "/projects/blur/stera.png",
    description: "Web Development of Marketing Site| Sales Funnel",
    gradient: ["#17007B", "#3A2C79"],
   
    tech: ["javascript", "react"],
  },
  {
    name: "Pet Shop Start Up",
    image: "/projects/memate.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "From Development to Digital Marketing",
    gradient: ["#153BB9", "#0E2C8B"],
  
    tech: ["react", "next", "gsap", "tailwind"],
  },
  {
    name: "Coffee Product- Web Development",
    image: "/projects/capsule.png",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Product Launching| Development| Marketing/ Branding",
    gradient: ["#245B57", "#004741"],
   
    tech: ["figma", "angular", "gsap"],
  },
  {
    name: "Restaurant Web | Social Media| SEO",
    image: "/projects/rest.png",
    blurImage: "/projects/blur/rest.png",
    description: "From Web Development to Branding & Marketing",
    gradient: ["#17007B", "#3A2C79"],
   
    tech: ["javascript", "next", "gsap"],
  },

];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "Web Development",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Next JS, Tailwind CSS, GSAP & 3JS",
    size: ItemSize.SMALL,
    subtitle: "We can make Business or E Commerce website- responsive, dynamic & modern design of any niche.",
    image: "",
    slideImage: "/timeline/appdev1.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "App Development",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Flutter/ React Native and Android Studio",
    size: ItemSize.SMALL,
    subtitle:
      "We can make awesome hybrid applications for you, that will run on both Android & IOS",
    image: "",
    slideImage: "/timeline/appdev4.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Block Chain Solutions",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Solidity, Tuffle, ERC's & Web 3.0",
    size: ItemSize.SMALL,
    subtitle:
      "From DApp Development to Tokenization and Smart Contract Development, we've got you covered.",
    image: "",
    slideImage: "/timeline/bc1.gif",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Artificial Intelligence & Datascience",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Python, Tensorflow, Google Ai",
    size: ItemSize.SMALL,
    subtitle:
      "From Natural Language Processing to Reinforcement Learning and Ai Model Deployment, get every solution.",
    image: "",
    slideImage: "/timeline/ai1.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX & Figma Design",
    size: ItemSize.SMALL,
    subtitle:
      "We have got most creative team for your Web or Application Design, doubt that? Try it out!",
    image: "",
    slideImage: "/timeline/ui2.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Game Development",
    size: ItemSize.SMALL,
    subtitle:
      "We have got quality Unity 3D developers and 3D designers for your game development needs.",
    image: "",
    slideImage: "/timeline/game2.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Digital Marketing",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "SEO, SEM & Social Media Marketing",
    size: ItemSize.SMALL,
    subtitle:
      "Whether you aim to achieve top-ranking status on the web or make a significant social media impact, your concerns are our priority.",
    image: "",
    slideImage: "/timeline/social1.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";

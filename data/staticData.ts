import {
  AboutUsType,
  ServicesType,
  ContactsType,
  LocationsType,
  Testimonial,
  YearData,
  ItemsMapType,
} from "@/types";


export const brands = [
  "/assets/partner1.png",
  "/assets/partner2.png",
  "/assets/partner3.png",
  "/assets/partner4.png",
  "/assets/partner5.png",
  "/assets/partner6.png",
  "/assets/partner7.png",
  "/assets/partner8.png",
  "/assets/partner9.png",
  "/assets/partner10.png",
  "/assets/partner11.png",
  "/assets/partner12.png",
  "/assets/partner13.png",
];

export const aboutUsDetails: AboutUsType[] = [
  {
    digit: "100+",
    title: "Projects Implemented",
    content:
      "Successfully delivered over 50 projects across diverse industry sectors, showcasing our expertise and innovation.",
  },
  {
    digit: "10+",
    title: "Years of Experience",
    content:
      "Leveraging over 10 years of experience to craft robust, future-ready solutions for various business needs.",
  },
  {
    digit: "15+",
    title: "AI, GenAI & Data Engineering Projects",
    content:
      "Extensive experience in AI, Generative AI, and Data Engineering, delivering groundbreaking solutions to complex challenges.",
  },
  {
    digit: "10",
    title: "Unique Users Reached",
    content:
      "Building lasting partnerships by delivering value-driven solutions to a diverse client base.",
  },
  {
    digit: "50000",
    title: "Daily Active Users",
    content:
      "Proven track record in developing applications capable of handling more than 50,000 users daily, ensuring seamless performance.",
  },
  {
    digit: "25+",
    title: "Strategic Partners",
    content:
      "Building strong partnerships with strategic allies to drive innovation and enhance business capabilities.",
  },
];

export const servicesDetails: ServicesType[] = [
  {
    image: "/assets/services1.svg",
    title: "Artificial Intelligence",
  },
  {
    image: "/assets/services2.svg",
    title: "Mobile App Development",
  },
  {
    image: "/assets/services3.svg",
    title: "Software Development",
  },
  {
    image: "/assets/services4.svg",
    title: "Digital Transformation",
  },
  {
    image: "/assets/services5.svg",
    title: "Data Science & Analytics",
  },
  {
    image: "/assets/services6.svg",
    title: "Cloud Services",
  },
  {
    image: "/assets/services7.svg",
    title: "Blockchain Services",
  },
  {
    image: "/assets/services8.svg",
    title: "Ideation and Design Strategy",
  },
  {
    image: "/assets/services9.svg",
    title: "IT Consulting",
  },
  {
    image: "/assets/services10.svg",
    title: "Devops",
  },
  {
    image: "/assets/services11.svg",
    title: "IOT App Development",
  },
  {
    image: "/assets/services12.svg",
    title: "Cloud Managed Services",
  },
  {
    image: "/assets/services13.svg",
    title: "AR VR App Development",
  },
  {
    image: "/assets/services14.svg",
    title: "Business Intelligence",
  },
  {
    image: "/assets/services15.svg",
    title: "Digital  Marketing",
  },
];

export const achievementData = [
  {
    id: 1,
    title: "AI & Gen AI Solutions",
    images: [
      { src: "/assets/tech-langchain.png", name: "Langchain" },
      { src: "/assets/tech-supabase.png", name: "Supabase" },
      { src: "/assets/tech-chatgpt.png", name: "ChatGPT" },
      { src: "/assets/tech-polly.png", name: "Amazon Polly" },
      { src: "/assets/tech-claude.png", name: "Claude" },
    ],
  },
  {
    id: 2,
    title: "Machine Learning",
    images: [
      { src: "/assets/tech-python.png", name: "Python" },
      { src: "/assets/tech-mlnet.png", name: "ML.NET" },
      { src: "/assets/tech-pytorch.png", name: "PyTorch" },
    ],
  },
  {
    id: 3,
    title: "Data Engineering",
    images: [
      { src: "/assets/tech-powerBI.png", name: "PowerBI" },
      { src: "/assets/tech-snowflake.png", name: "snowflake" },
      { src: "/assets/tech-tableau.png", name: "Tableau" },
      { src: "/assets/tech-python.png", name: "Python" },
    ],
  },
  {
    id: 4,
    title: "Software & Application Development",
    images: [
      { src: "/assets/tech-dotnet.png", name: ".NET" },
      { src: "/assets/tech-nodejs.png", name: "Node.js" },
      { src: "/assets/tech-php.png", name: "PHP" },
      { src: "/assets/tech-react.png", name: "React.js" },
      { src: "/assets/tech-angular.png", name: "Angular.js" },
      { src: "/assets/tech-viewjs.png", name: "Vue.js" },
      { src: "/assets/tech-flutter.png", name: "Flutter" },
      { src: "/assets/tech-kotlin.png", name: "Kotlin" },
      { src: "/assets/tech-nextjs.png", name: "Next.js" },
    ],
  },
  {
    id: 5,
    title: "Digital Marketing & Branding",
    images: [
      { src: "/assets/tech-seo.png", name: "SEO" },
      { src: "/assets/tech-googleanalytics.png", name: "Google analytics" },
      { src: "/assets/tech-googleads.png", name: "Google ads" },
      { src: "/assets/tech-googleMyBusiness.png", name: "Google My Business" },
      { src: "/assets/tech-adobephotoshop.png", name: "Product Photoshoot" },
      { src: "/assets/tech-hubspot.png", name: "Hubspot" },
      { src: "/assets/tech-mailchimp.png", name: "Mailchimp" },
      {
        src: "/assets/tech-socialmediamarketing.png",
        name: "Social media marketing",
      },
    ],
  },
  {
    id: 6,
    title: "Strategic UI/UX Services",
    images: [
      { src: "/assets/tech-adobe.png", name: "Adobe" },
      { src: "/assets/tech-figma.png", name: "Figma" },
      { src: "/assets/tech-adobeillustrator.png", name: "Adobe illustrator" },
      { src: "/assets/tech-adobephotoshop.png", name: "Adobe photoshop" },
      // { src: "/assets/tech-canva.png", name: "Canva" },
    ],
  },
];

export const contactDetails: ContactsType[] = [
  {
    image: "/assets/contact-mail.png",
    title: "You can Email",
    redirect: "contact@promena.in",
    alt: "Mail Logo",
  },
  {
    image: "/assets/contact-call.png",
    title: "Or give us a call",
    redirect: "+91 9900043908",
    alt: "Phone Logo",
  },
  {
    image: "/assets/contact-location.png",
    title: "Headquarters",
    redirect:
      "Ground Floor at ETA Mall, Tank Bund Rd, Below Cinepolis Binnypet, Bengaluru - 560023",
    alt: "Location Logo",
  },
];

export const locationDetails: LocationsType[] = [
  {
    image: "/assets/loc-bengaluruImg.png",
    city: "Bengaluru",
    address:
      "Ground Floor at ETA Mall, Tank Bund Rd, Below Cinepolis Binnypet, Bengaluru - 560023  ",
    alt: "Bengaluru office image",
    mapLink:
      "https://www.google.com/maps/place/Promena/@12.9661375,77.5618106,17z/data=!3m2!4b1!5s0x3bae3dfffe2eb851:0xb8c7c39986dbde7b!4m6!3m5!1s0x3bae1563509f7627:0xc22138dba08ad58d!8m2!3d12.9661375!4d77.5618106!16s%2Fg%2F11c37zmhfw?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D",
  },
  {
    image: "/assets/loc-mumbaiImg.png",
    city: "Mumbai",
    address:
      "5th Floor, 4RRM+H83 Morya landmark ll, Bhudargarh Colony, Andheri West, Mumbai, Maharashtra 400102",
    alt: "Mumbai office image",
    mapLink:
      "https://www.google.com/maps/place/TechEntry+Mumbai/@19.1413869,72.8331474,19.94z/data=!4m6!3m5!1s0x3be7b7e6f0276111:0xfa80787b1030a009!8m2!3d19.1414375!4d72.8333125!16s%2Fg%2F11wbyhz8m8?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    image: "/assets/loc-goaImg.png",
    city: "Goa",
    address: "Bldg. No. 246/1, Mushirwada, Colvale, Bardez - Goa. 403513",
    alt: "Goa office image",
    mapLink: "",
  },
];

export const teamImages = [
  {
    id: 1,
    src: "/assets/team-amit.webp",
    alt: "Amith",
    name: "Amith",
    role: "AI Engineer",
    cardClass: "team-card",
  },
  {
    id: 2,
    src: "/assets/team-santosh.webp",
    alt: "Santhosh",
    name: "Santhosh",
    role: "Javascript Developer",
    cardClass: "team-card2",
  },
  {
    id: 3,
    src: "/assets/team-darshan.webp",
    alt: "Darshan",
    name: "Darshan",
    role: "Angular Developer",
    cardClass: "team-card",
  },
  {
    id: 4,
    src: "/assets/team-raju.webp",
    alt: "Raju",
    name: "Raju",
    role: "Python Developer",
    cardClass: "team-card2",
  },
  {
    id: 5,
    src: "/assets/team-amit.webp",
    alt: "Amith",
    name: "Amith",
    role: "AI Engineer",
    cardClass: "team-card",
  },
  {
    id: 6,
    src: "/assets/team-santosh.webp",
    alt: "Santhosh",
    name: "Santhosh",
    role: "Javascript Developer",
    cardClass: "team-card2",
  },
  {
    id: 7,
    src: "/assets/team-darshan.webp",
    alt: "Darshan",
    name: "Darshan",
    role: "Angular Developer",
    cardClass: "team-card",
  },
  {
    id: 8,
    src: "/assets/team-raju.webp",
    alt: "Raju",
    name: "Raju",
    role: "Python Developer",
    cardClass: "team-card2",
  },
  // {
  //   id: "Raju",
  //   src: raju,
  //   alt: "Raju",
  //   name: "Raju",
  //   role: "Python Developer",
  //   cardClass: "team-card"
  // },
  // {
  //   id: "Karan",
  //   src: karan,
  //   alt: "Karan",
  //   name: "Karan",
  //   role: "NodeJS Developer",
  //   cardClass: "team-card2"
  // },
  // {
  //   id: "Karthik",
  //   src: Karthik,
  //   alt: "Karthik",
  //   name: "Karthik",
  //   role: "Project Manager",
  //   cardClass: "team-card"
  // },
  // {
  //   id: "Shashi",
  //   src: Shashi,
  //   alt: "Shashi",
  //   name: "Shashi",
  //   role: "Digital Marketing",
  //   cardClass: "team-card2"
  // }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Promena has been a trusted partner in helping KIFA streamline its operations and enhance our digital presence. ",
    name: "Sridevi Shetty Wagh",
    designation: "Director - Kifa",
    stars: "/assets/ratingStars.png",
    image: "/assets/client-shridevi.png",
  },
  // {
  //   id: 2,
  //   quote: "The developers at Promena demonstrated a deep understanding of our industry needs. The software they built has streamlined our operations significantly.",
  //   name: "John Doe",
  //   designation: "Founder and Director at Kuberans Tech Ventures Pvt. Ltd",
  //   stars: "/assets/ratingStars.png",
  //   image: "/assets/client-sagoon.png",
  // },
  {
    id: 3,
    quote:
      "Promena has been a great partner for Catapult Weddings. Their software solutions and digital marketing strategies have significantly improved our operations . The team is truly understands our needs.",
    name: "Manish Fitkariwala",
    designation: "Founder - Catapultt Weddings",
    stars: "/assets/ratingStars.png",
    image: "/assets/client-manish-fitkariwala.png",
  },
  {
    id: 4,
    quote:
      "Promena has been my best partner in software development, AI integration, and digital marketing. Their innovative solutions have consistently exceeded our expectations success multiple projects.",
    name: "Praveen Kumar",
    designation: "CTO - LookupIt Solutions",
    stars: "/assets/ratingStars.png",
    image: "/assets/client-praveenkumar.jpg",
  },
  {
    id: 5,
    quote:
      "Working with Promena has been an absolute pleasure. They’ve helped us grow not only through innovative software solutions and AI but also through their exceptional digital marketing strategies.",
    name: "Anilraj jha",
    designation: "Business Head - Foremost Meditech",
    stars: "/assets/ratingStars.png",
    image: "/assets/client-anilraj.png",
  },
  {
    id: 6,
    quote:
      "Promena has been a fantastic partner for us. From software development to AI solutions, their team consistently delivers top-notch results. Their digital  strategies have truly helped us stand out.",
    name: "John Tarpley",
    designation: "Founder - Amusement",
    stars: "/assets/ratingStars.png",
    image: "/assets/client-john-tarpley.png",
  },
  {
    id: 7,
    quote:
      "Promena has been a key partner in our journey. Their expertise in software development and AI has elevated our operations, while their digital marketing strategies have boosted our  and engagement.",
    name: "Jeet Wagh",
    designation: "MD & CEO - IdeaBaaz",
    stars: "/assets/ratingStars.png",
    image: "/assets/client-jeet-wagh.png",
  },
  {
    id: 8,
    quote:
      "Partnering with Promena has been a game-changer for our business. Their innovative AI solutions have transformed our operations, enabling us to achieve remarkable efficiencies. ",
    name: "Rakesh Pandey",
    designation: "CEO - CREED Education ",
    stars: "/assets/ratingStars.png",
    image: "/assets/client-rakesh-pandey.png",
  },
  {
    id: 9,
    quote:
      "Working with Promena has been incredibly rewarding. Their mobile app development expertise has helped us create a seamless and user-friendly experience for our customers.",
    name: "Manoj sinha",
    designation: "Founding Member at Infyni",
    stars: "/assets/ratingStars.png",
    image: "/assets/client-manoj-sinha.png",
  },
  {
    id: 10,
    quote:
      "Promena has been an invaluable partner to Futuresoft Technologies. Their expertise in software development, AI, and mobile app solutions has significantly enhanced our capabilities.",
    name: "Benson Waweru",
    designation: "CEO - Futuresoft Technologies",
    stars: "/assets/ratingStars.png",
    image: "/assets/client-benson-waweru.png",
  },
  {
    id: 11,
    quote:
      "Promena delivered a robust solution that truly met our needs. While there were a few challenges during implementation, the team was quick to address them and ensured everything ran smoothly. ",
    name: "Ashish Fitkariwala",
    designation: "Director - EduQuest Hub",
    stars: "/assets/ratingStars.png",
    image: "/assets/client-ashish.png",
  },
];

export const aboutUs = [
  "Our Company",
  "Services",
  "Industries",
  "Career",
  "Contact Us",
];

export const technologies = [
  "Artificial Intelligence",
  "Machine Learning",
  "Internet of Things",
  "Cloud Computing",
  "Voice Assistant",
  "Blockchain",
  "NFT",
  "SEO",
];

export const industries = [
  "Education",
  "Real-estate",
  "Finance",
  "Healthcare",
  "Logistics",
  "Entertainment",
  "Agriculture",
  "Petroleum & Gas",
  "eCommerce",
];

export const portfolio = [
  "AIRI Lab",
  "My Ai Squad",
  "Hydra",
  "Chainrate",
  "Ctos",
  "Healthelite",
  "Procezy",
  "ATD",
  "Pettera",
  "Ifocus",
  "Infyni",
  "Amusement Connect",
  "Emergent Solutions",
];

// ...............................Header dropdowns data..................................................

export const servicesContent = [
  {
    title: "AI & Gen AI Solutions",
    icon: "/assets/dd-ai1.svg", 
    subContent: [
      {
        subTitle: "Custom AI Models",
        description: "Tailored AI solutions for unique needs",
        subIcon: "/assets/dd-ai2.svg",
        link: "/services/ai-model",
      },
      {
        subTitle: "Model Design and Development",
        description: "End-to-end model design and build",
        subIcon: "/assets/dd-ai3.svg",
        link: "/services/modeldesign",
      },
      {
        subTitle: "Domain-Specific Model Training",
        description: "Expert AI training for your industry",
        subIcon: "/assets/dd-ai4.svg",
        link: "/services/ai-domain-specific",
      },
      {
        subTitle: "AI Model Lifecycle Management",
        description: "AI Model Lifecycle Management",
        subIcon: "/assets/dd-ai5.svg",
        link: "/services/ai-model",
      },
      {
        subTitle: "Integration with Existing Systems",
        description: "Seamless AI integration into workflows",
        subIcon: "/assets/dd-ai6.svg",
        link: "/services/integration",
      },
      {
        subTitle: "AI Strategy Consultation",
        description: "Strategic AI insights for business growth",
        subIcon: "/assets/dd-ai7.svg",
        link: "/services/ai-strategy"
      },
      {
        subTitle: "Implementation and Optimization",
        description: "Efficient deployment and performance tuning",
        subIcon: "/assets/dd-ai8.svg",
        link: "/services/optimization",
      },
    ],
  },
  {
    title: "Machine Learning",
    icon: "/assets/dd-meche1.svg", 
    subContent: [
      {
        subTitle: "Feature Engineering",
        description: "Transforming data for enhanced insights",
        subIcon: "/assets/dd-meche2.svg", 
        link: "/ml/feature-engineering",
      },
      {
        subTitle: "Model Development and Training",
        description: "Building and refining predictive models",
        subIcon: "/assets/dd-meche3.svg",
        link: "/ml/model-development",
      },
      {
        subTitle: "Image and Speech Recognition",
        description: "Accurate image and audio analysis",
        subIcon: "/assets/dd-meche4.svg",
        link: "/ml/img-speech-recognition",
      },
      {
        subTitle: "Object Detection",
        description: "Precise identification within images",
        subIcon: "/assets/dd-meche5.svg",
        link: "/ml/object-detection",
      },
      {
        subTitle: "Facial Recognition",
        description: "Secure, reliable face identification",
        subIcon: "/assets/dd-meche6.svg",
        link: "/ml/facial-recognition",
      },
      {
        subTitle: "Chatbot and Virtual Assistant Development",
        description: "Intelligent assistants for customer support",
        subIcon: "/assets/dd-meche7.svg",
        link: "/ml/chatbot-development",
      },
      {
        subTitle: "Text Summarization",
        description: "Condense large texts into key insights",
        subIcon: "/assets/dd-meche8.svg",
        link: "/ml/text-summarization",
      },
    ],
  },
  {
    title: "Data Engineering",
    icon: "/assets/dd-mech1.svg", 
    subContent: [
      {
        subTitle: "Big Data Solutions",
        description: "Scalable solutions for vast datasets",
        subIcon: "/assets/dd-mech2.svg", 
        link: "/dataEngineering/big-data-solutions",
      },
      {
        subTitle: "Data Pipeline Management",
        description: "Streamlined data flow and processing",
        subIcon: "/assets/dd-mech3.svg",
        link: "/dataEngineering/data-pipeline-management",
      },
      {
        subTitle: "Data Visualization and Reporting",
        description: "Clear insights through visual analytics",
        subIcon: "/assets/dd-mech4.svg",
        link: "/dataEngineering/data-visualization",
      },
      {
        subTitle: "Cloud-Based Big Data Solutions",
        description: "Efficient, scalable cloud data storage",
        subIcon: "/assets/dd-mech5.svg",
        link: "/dataEngineering/cloud-bigdata-solutions",
      },
      {
        subTitle: "Data Ingestion Frameworks",
        description: "Robust frameworks for data intake",
        subIcon: "/assets/dd-mech6.svg",
        link: "/dataEngineering/data-ingestion",
      },
      {
        subTitle: "Data Transformation and Cleaning",
        description: "Accurate, organized data for analysis",
        subIcon: "/assets/dd-mech7.svg", 
        link: "/dataEngineering/data-transformation",
      },
      {
        subTitle: "Automated Report Generation",
        description: "Instant, data-driven report creation",
        subIcon: "/assets/dd-mech8.svg",
        link: "/dataEngineering/automated-report",
      },
      {
        subTitle: "Real-Time Data Visualization",
        description: "Immediate insights with live data",
        subIcon: "/assets/dd-mech9.svg",
        link: "/dataEngineering/realtime-data-visualization",
      },
      {
        subTitle: "Data Storytelling",
        description: "Transforming data into actionable stories",
        subIcon: "/assets/dd-mech10.svg",
        link: "/dataEngineering/data-storytelling",
      },
    ],
  },
  {
    title: "Software & Application Development",
    icon: "/assets/dd-soft1.svg", 
    subContent: [
      {
        subTitle: "Web and Mobile App Development",
        description: "Custom apps for web and mobile",
        subIcon: "/assets/dd-soft2.svg", 
        link: "/softwareAppDevelopment/web-app-development" ,
      },
      {
        subTitle: "API Development & Integration",
        description: "Seamless API creation and integration",
        subIcon: "/assets/dd-soft3.svg", 
        link: "/softwareAppDevelopment/api-dev-integration",
      },
      {
        subTitle: "Backend & Frontend Solutions",
        description: "Full-stack solutions for robust apps",
        subIcon: "/assets/dd-soft4.svg", 
        link: "/softwareAppDevelopment/backend-frontend-sol",
      },
      {
        subTitle: "Cross-Platform App Development",
        description: "Apps that work across all platforms",
        subIcon: "/assets/dd-soft5.svg", 
        link: "/softwareAppDevelopment/crossform-dev",
      },
      {
        subTitle: "RESTful API Development",
        description: "Efficient and scalable API design",
        subIcon: "/assets/dd-soft6.svg", 
        link: "/softwareAppDevelopment/restful-api-dev",
      },
      {
        subTitle: "Third-Party API Integration",
        description: "Integrating external APIs with ease",
        subIcon: "/assets/dd-soft7.svg", 
        link: "/softwareAppDevelopment/third-party-api-integration",
      },
      {
        subTitle: "Microservices Architecture",
        description: "Scalable, modular service architecture",
        subIcon: "/assets/dd-soft1.svg", 
        link: "/softwareAppDevelopment/micro-services-architecture",
      },
    ],
  },
  {
    title: "Strategic UI/UX Services",
    icon: "/assets/dd-strategy1.svg", 
    subContent: [
      {
        subTitle: "User Research and Analysis",
        description: "In-depth insights for user-focused design",
        subIcon: "/assets/dd-strategy2.svg", 
        link: "/uiUxServices/user-research-analysis",
      },
      {
        subTitle: "Wireframing and Prototyping",
        description: "Blueprints for seamless user journeys",
        subIcon: "/assets/dd-strategy3.svg", 
        link: "/uiUxServices/wireframing-prototyping",
      },
      {
        subTitle: "Visual Design and Branding",
        description: "Brand-aligned, visually engaging designs",
        subIcon: "/assets/dd-strategy4.svg", 
        link: "/uiUxServices/visual-design-branding",
      },
      {
        subTitle: "Interaction Design",
        description: "Intuitive and responsive user interactions",
        subIcon: "/assets/dd-strategy5.svg", 
        link: "/uiUxServices/interaction-design",
      },
      {
        subTitle: "Interactive UI Elements",
        description: "Dynamic elements for engaging experiences",
        subIcon: "/assets/dd-strategy6.svg", 
        link: "/uiUxServices/interactive-ui-elements",
      },
    ],
  },
  {
    title: "Dedicated Software Teams & Staff Augmentation",
    icon: "/assets/dd-data1.svg", 
    subContent: [
      {
        subTitle: "Remote and On-site Development Teams",
        description: "Flexible teams for on-site or remote work",
        subIcon: "/assets/dd-data2.svg", 
        link: "/dedicatedSoftwareTeams/remote-onsite-teams",
      },
      {
        subTitle: "Remote Agile Teams",
        description: "Agile teams for efficient remote development",
        subIcon: "/assets/dd-data3.svg", 
        link: "/dedicatedSoftwareTeams/remote-agile-teams",
      },
      {
        subTitle: "Full-Stack Development Teams",
        description: "Skilled teams for end-to-end solutions",
        subIcon: "/assets/dd-data4.svg", 
        link: "/dedicatedSoftwareTeams/fullstack-teams",
      },
      {
        subTitle: "Project-Based and Full-Time Contracts",
        description: "Adaptable contracts to fit project needs",
        subIcon: "/assets/dd-data5.svg", 
        link: "/dedicatedSoftwareTeams/project-based",
      },
    ],
  },

  // {
  //   title: "Digital Marketing & Branding",
  //   icon: <AiDropdownIcon />,
  //   subContent: [
  //     {
  //       subTitle: "SEO, Content, and Brand Management",
  //       description: "Boost visibility with targeted SEO and branding",
  //       subIcon: <AiDropdownIcon />,
  //     },
  //     {
  //       subTitle: "Keyword Research and Analysis",
  //       description: "Optimize content with effective keywords",
  //       subIcon: <AiDropdownIcon />,
  //     },
  //     {
  //       subTitle: "Content Marketing Strategy",
  //       description: "Strategic content to engage and convert",
  //       subIcon: <AiDropdownIcon />,
  //     },
  //     {
  //       subTitle: "Social Media Brand Voice Development",
  //       description: "Craft a unique voice for social platforms",
  //       subIcon: <AiDropdownIcon />,
  //     },
  //     {
  //       subTitle: "Content Creation and Blogging",
  //       description: "Engaging content to build brand authority",
  //       subIcon: <AiDropdownIcon />,
  //     },
  //     {
  //       subTitle: "End-to-End Campaign Strategy",
  //       description: "Comprehensive planning for impactful campaigns",
  //       subIcon: <AiDropdownIcon />,
  //     },
  //     {
  //       subTitle: "Paid Advertising Management",
  //       description: "Maximize reach with targeted ads",
  //       subIcon: <AiDropdownIcon />,
  //     },
  //   ],
  // },
];

export const augmentContent = [
  {
    title: " Backend",
    icon: "/assets/dd-alt.svg", 
    subContent: [
      {
        subTitle: "AI Engineer",
        description: "Transforming Innovation with Intelligent AI Solutions.",
        subIcon: "/assets/dd-alt.svg",
        link: "/technologies/ai-engineers",
      },
      {
        subTitle: "Python",
        description: "Powering Scalable, Versatile, and High-Performance Applications.",
        subIcon: "/assets/dd-alt.svg",
        link: "/technologies/python",
      },
      {
        subTitle: ".NET",
        description: "Empowering Scalable, Secure, and High-Performance .NET Solutions.",
        subIcon: "/assets/dd-alt.svg",
        link: "/technologies/dotnet",
      },
      {
        subTitle: "Node.js",
        description: "Building Fast, Scalable, and Real-Time Applications.",
        subIcon: "/assets/dd-alt.svg",
        link: "/technologies/nodejs",
      },
    ],
  },
  {
    title: "Frontend",
    icon: "/assets/dd-alt.svg", 
    subContent: [
      {
        subTitle: "Angular",
        description: "Comprehensive framework for dynamic web apps",
        subIcon: "/assets/dd-alt.svg",
        link: "/technologies/angular",
      },
      // {
      //   subTitle: "HTML/CSS",
      //   description: "Foundation for creating structured, styled websites",
      //   subIcon: "/assets/dd-alt.svg",
      //   link: "/working",
      // },
      // {
      //   subTitle: "JavaScript",
      //   description: "Powerful scripting for interactive web content",
      //   subIcon: "/assets/dd-alt.svg",
      //   link: "/working",
      // },
      {
        subTitle: "React.js",
        description: "Efficient UI development with reusable components",
        subIcon: "/assets/dd-alt.svg",
        link: "/technologies/react",
      },
      {
        subTitle: "Next.js",
        description: "Optimized React framework for server-side rendering",
        subIcon: "/assets/dd-alt.svg",
        link: "/technologies/next-js",
      },
    ],
  },
  {
    title: " Mobile",
    icon: "/assets/dd-alt.svg", 
    subContent: [
      // {
      //   subTitle: "Android",
      //   description: "Robust app development for Android devices",
      //   subIcon: "/assets/dd-alt.svg",
      //   link: "/working",
      // },
      {
        subTitle: "Flutter",
        description: "Cross-platform apps with a single codebase",
        subIcon: "/assets/dd-alt.svg",
        link: "/technologies/flutter",
      },
      {
        subTitle: "Kotlin",
        description: "Modern, efficient language for Android apps",
        subIcon: "/assets/dd-alt.svg",
        link: "/technologies/kotlin",
      },
      {
        subTitle: "React Native",
        description: "Seamless Cross-Platform Apps with Native Performance.",
        subIcon: "/assets/dd-alt.svg",
        link: "/technologies/react-native",
      },
      // {
      //   subTitle: "iOS",
      //   description: "Seamless, high-quality iOS app development",
      //   subIcon: "/assets/dd-alt.svg",
      //   link: "/working",
      // },
    ],
  },
  // {
  //   title: " Digital Marketing",
  //   icon: "/assets/dd-alt.svg", 
  //   subContent: [
  //     {
  //       subTitle: "SEO",
  //       description: "Optimize visibility and drive organic traffic",
  //       subIcon: "/assets/dd-alt.svg",
  //       link: "/working",
  //     },
  //     {
  //       subTitle: "Social Media Marketing",
  //       description: "Engage audiences and grow your brand online",
  //       subIcon: "/assets/dd-alt.svg",
  //       link: "/working",
  //     },
  //     {
  //       subTitle: "Content Writing",
  //       description: "High-quality content to attract and convert",
  //       subIcon: "/assets/dd-alt.svg",
  //       link: "/working",
  //     },
  //   ],
  // },
];

export const companyContent = [
      {
        subTitle: "Clients and Testimonials (should redirect to the home page testimonials section)",
        description: "Hear from our satisfied clients and partners",
        subIcon: "/assets/dd-alt.svg",
      },
      {
        subTitle: "Blog",
        description: "Insights, tips, and industry trends",
        subIcon: "/assets/dd-alt.svg",
      },
      {
        subTitle: "Careers",
        description: "Join our team and grow your career with us",
        subIcon: "/assets/dd-alt.svg",
      },
];

export const industriesContent = [
  {
    modalType: "Natural Language Processing (NLP) Solutions",
    modals: [
      "Text Classification",
      "Sentiment Analysis",
      "Topic Modeling",
      "Named Entity Recognition (NER)",
      "Text Summarization",
      "AI-Powered Chatbots & Conversational AI",
      "Speech-to-Text (STT) & Text-to-Speech (TTS)",
      "Document Understanding & Automated Data Extraction"
    ],
  },
  {
    modalType: "Computer Vision & Image Processing",
    modals: [
      "Image Classification",
      "Object Detection",
      "Facial Recognition",
      "Optical Character Recognition (OCR) for Automated Document Processing",
      "AI-Based Video Analytics and Surveillance Solutions"
    ],
  },
  {
    modalType: "Generative AI & Large Language Models (LLMs)",
    modals: [
      "Generative AI for Text, Image, and Audio Generation",
      "Custom GPT-Based Chatbot Development",
      "AI-Powered Content Creation Tools"
    ],
  },
  {
    modalType: "Machine Learning & Predictive Analytics",
    modals: [
      "Building and Deploying Machine Learning Models",
      "Data-Driven Decision-Making Using Predictive Analytics",
      "Recommendation Systems and Personalization Engines"
    ],
  },
  {
    modalType: "AI-Powered Automation & RPA",
    modals: [
      "Intelligent Document Processing (IDP)",
      "AI-Powered Automation for Business Workflows",
      "AI-Driven Robotic Process Automation (RPA) Solutions"
    ],
  },
  {
    modalType: "AI for IoT & Edge Computing",
    modals: [
      "AI-Driven Predictive Maintenance for IoT Devices",
      "Edge AI Solutions for Real-Time Data Processing",
      "AI-Powered Smart Home & Industrial Automation"
    ],
  },
  {
    modalType: "AI for Digital Marketing & Personalization",
    modals: [
      "AI-Driven Ad Targeting and Campaign Optimization",
      "AI-Based Customer Behavior Analysis",
      "Sentiment Analysis for Brand Reputation Management"
    ],
  },
];

export const aiSolutions = [
  {
    title: "Natural Language Processing (NLP) Solutions",
    icon: "/assets/dd-ai1.svg", 
    subContent: [
      {
        subTitle: "Personalized AI Chatbots",
        description: "Adapt to user behavior for personalized responses",
        subIcon: "/assets/dd-ai2.svg",
        link: "/working",
      },
      {
        subTitle: "Self-Improving AI",
        description: "RLHF-based NLP",
        subIcon: "/assets/dd-ai3.svg",
        link: "/working",
      },
      {
        subTitle: "Virtual Assistant Development",
        description: "Intelligent assistants for customer support",
        subIcon: "/assets/dd-ai5.svg",
        link: "/working",
      },
      {
        subTitle: "AI for Education & Automated Tutoring",
        description: " Models that provide real-time tutoring",
        subIcon: "/assets/dd-ai7.svg",
        link: "/working"
      },
      {
        subTitle: "Topic Modeling",
        description: "Identifying themes in large text datasets",
        subIcon: "/assets/dd-ai8.svg",
        link: "/working",
      },
    ],
  },
  {
    title: "Computer Vision",
    icon: "/assets/dd-meche1.svg", 
    subContent: [
      {
        subTitle: "AI for Autonomous Vehicles",
        description: "Vision AI for Self-Driving Cars",
        subIcon: "/assets/dd-meche3.svg",
        link: "/working",
      },
      {
        subTitle: "Pose Estimation & Human Activity Recognition",
        description: "Fitness tracking, Gesture control, and Sports analytics",
        subIcon: "/assets/dd-meche4.svg",
        link: "/working",
      },
      {
        subTitle: "3D Computer Vision & AI for Metaverse",
        description: "Reconstructs 3D scenes, and Powers AR/VR applications",
        subIcon: "/assets/dd-meche5.svg",
        link: "/working",
      },
      {
        subTitle: "Retail AI & Smart Checkout",
        description: "Cashierless stores that track products and customers in real-time",
        subIcon: "/assets/dd-meche6.svg",
        link: "/working",
      },
      {
        subTitle: "AI-Powered Deepfake Detection",
        description: "Detect manipulated media and deepfakes",
        subIcon: "/assets/dd-meche7.svg",
        link: "/working",
      },
    ],
  },
  {
    title: "Generative AI & Large Language Models (LLMs)",
    icon: "/assets/dd-mech1.svg", 
    subContent: [
      {
        subTitle: "Generative AI for Text, Image, and Audio Generation",
        description: "Creates human-like text, realistic images, and high-fidelity audio",
        subIcon: "/assets/dd-mech2.svg", 
        link: "/working",
      },
      {
        subTitle: "AI-Powered Video Generation",
        description: "Text-to-Video AI",
        subIcon: "/assets/dd-mech5.svg",
        link: "/working",
      },
      {
        subTitle: "Custom GPT-Based Chatbot Development",
        description: "Chatbots for industry-specific queries, personalized insights, and automated support",
        subIcon: "/assets/dd-mech3.svg",
        link: "/working",
      },
      {
        subTitle: "AI-Powered Content Creation Tools",
        description: "",
        subIcon: "/assets/dd-mech4.svg",
        link: "/working",
      },
    ],
  },
  {
    title: "AI-Powered Automation & RPA",
    icon: "/assets/dd-soft1.svg", 
    subContent: [
      {
        subTitle: "Intelligent Document Processing (IDP)",
        description: "Automates data extraction and processing from documents to streamline workflows",
        subIcon: "/assets/dd-soft2.svg", 
        link: "/working",
      },
      {
        subTitle: "AI-Powered Automation for Business Workflows",
        description: "Automates workflows, streamlining tasks, approvals, and decisions",
        subIcon: "/assets/dd-soft3.svg", 
        link: "/working",
      },
      {
        subTitle: "AI-Driven Robotic Process Automation (RPA) Solutions",
        description: "Automates rule-based tasks, reducing manual effort in operations",
        subIcon: "/assets/dd-soft4.svg", 
        link: "/working",
      },
    ],
  },
  {
    title: "AI for IoT & Edge Computing",
    icon: "/assets/dd-strategy1.svg", 
    subContent: [
      {
        subTitle: "AI-Driven Predictive Maintenance for IoT Devices",
        description: "Predicts IoT device failures and schedules maintenance to prevent downtime",
        subIcon: "/assets/dd-strategy2.svg", 
        link: "/working",
      },
      {
        subTitle: "Edge AI Solutions for Real-Time Data Processing",
        description: "Processes data on devices for real-time, low-latency decisions",
        subIcon: "/assets/dd-strategy3.svg", 
        link: "/working",
      },
      {
        subTitle: "AI-Powered Smart Home & Industrial Automation",
        description: "Optimizes smart homes and industries with automation for efficiency and security",
        subIcon: "/assets/dd-strategy4.svg", 
        link: "/working",
      },
      {
        subTitle: "AI-Enhanced Autonomous Drones & Vehicles",
        description: "processes real-time sensor data on drones and autonomous vehicles for navigation, obstacle detection, and operational efficiency",
        subIcon: "/assets/dd-strategy5.svg", 
        link: "/working",
      },
    ],
  },
  {
    title: "AI for Digital Marketing & Personalization",
    icon: "/assets/dd-data1.svg", 
    subContent: [
      {
        subTitle: "AI-Driven Ad Targeting and Campaign Optimization",
        description: "Optimizes ad targeting, personalizes content, and enhances campaign performance",
        subIcon: "/assets/dd-data2.svg", 
        link: "/working",
      },
      {
        subTitle: "AI-Based Customer Behavior Analysis",
        description: "Analyzes customer behavior to predict preferences and optimize marketing",
        subIcon: "/assets/dd-data3.svg", 
        link: "/working",
      },
      {
        subTitle: "Sentiment Analysis for Brand Reputation Management",
        description: "Analyzes sentiment from social media and reviews to manage brand reputation",
        subIcon: "/assets/dd-data4.svg", 
        link: "/working",
      },
      {
        subTitle: "Conversational AI & Chatbots for Sales Funnels ",
        description: "Chatbots optimize sales funnels by guiding customers and boosting conversions",
        subIcon: "/assets/dd-data5.svg", 
        link: "/working",
      },
    ],
  },
];

export const itemsMap: ItemsMapType = {
    "services": {
        ai: [{ name:"Custom AI Models", link:""}, { name:"Model Design and Development", link:""}, { name:"Domain-Specific Model Training", link:"/services/ai-domain-specific"}, { name:"AI Model Lifecycle Management", link:"/services/ai-model"}, { name:"Integration with Existing Systems", link:""}, { name:"AI Strategy Consultation", link:"/services/ai-strategy"}, { name:"Implementation and Optimization", link:""}],
        ml: [{ name:"Feature Engineering", link:""}, { name:"Model Development and Training", link:""}, { name:"Image and Speech Recognition", link:""}, { name:"Object Detection", link:""}, { name:"Facial Recognition", link:""}, { name:"Chatbot and Virtual Assistant Development", link:""}, { name:"Text Summarization", link:""}],
        de: [{ name:"Big Data Solutions", link:""}, { name:"Data Pipeline Management", link:""}, { name:"Data Visualization and Reporting", link:""}, { name:"Cloud-Based Big Data Solutions", link:""}, { name:"Data Ingestion Frameworks", link:""}, { name:"Data Transformation and Cleaning", link:""}, { name:"Automated Report Generation", link:""}, { name:"Real-Time Data Visualization", link:""}, { name:"Data Storytelling", link:""}],
        app: [{ name:"Web and Mobile App Development", link:""}, { name:"API Development & Integration", link:""}, { name:"Backend & Frontend Solutions", link:""}, { name:"Cross-Platform App Development", link:""}, { name:"RESTful API Development", link:""}, { name:"Third-Party API Integration", link:""}, { name:"Microservices Architecture", link:""}],
        ui: [{ name:"User Research and Analysis", link:""}, { name:"Wireframing and Prototyping", link:""}, { name:"Visual Design and Branding", link:""}, { name:"Interaction Design", link:""}, { name:"Interactive UI Elements", link:""}],
        aug: [{ name:"Remote and On-site Development Teams", link:""}, { name:"Remote Agile Teams", link:""}, { name:"Full-Stack Development Teams", link:""}, { name:"Project-Based and Full-Time Contracts", link:""}],
    },
    "ai-solutions": {
        nlp: [{ name:"Personalized AI Chatbots", link:""}, { name:"Self-Improving AI", link:""}, { name:"Virtual Assistant Development", link:""}, { name:"AI for Education & Automated Tutoring", link:""}, { name:"Topic Modeling", link:""}],
        cv: [{ name:"AI for Autonomous Vehicles", link:""}, { name:"Pose Estimation & Human Activity Recognition", link:""}, { name:"3D Computer Vision & AI for Metaverse", link:""}, { name:"Retail AI & Smart Checkout", link:""}, { name:"AI-Powered Deepfake Detection", link:""}],
    },
    "augment-your-team": {
        be: [{ name:"AI Engineer", link:""}, { name:"Python", link:""}, { name:".NET", link:""}, { name:"Node.js", link:""}],
        fe: [{ name:"Angular", link:""}, { name:"React.js", link:""}, { name:"Next.js", link:""}],
    },
};

// .....................................Top Projects.....................................................

export const products = [
  {
    title: "Promena",
    description:"",
    link: "https://cursor.so",
    thumbnail:
    "/assets/project-1.jpg",

  },
  {
    title: "Streamlining Traffic Enforcement with Emergent Enforcement",
    description:"Emergent Enforcement automates traffic violation detection and citation processing using LiDAR, cameras, OCR, and AI, ensuring road safety through real-time monitoring, detailed evidence, and compliance with privacy regulations.",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/assets/project-emergentSub.png",
  },
  {
    title: "AIRI: Revolutionizing Design with AI-Driven Visuals",
    description:"Empowering architects and designers to transform simple prompts into stunning architectural and interior visuals, AIRI redefines creativity and precision in the design process.",
    link: "https://userogue.com",
    thumbnail:
    "/assets/project-airi_workspace.png",

  },

  {
    title: "Hydra",
    description:"",
    link: "https://editorially.org",
    thumbnail:
    "/assets/project-4.jpg",

  },
  {
    title: "Editrix AI",
    description:"",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "ChainRate",
    description:"",
    link: "https://app.pixelperfect.quest",
    thumbnail:
    "/assets/project-34.jpg",

  },

  {
    title: "Pettera",
    description:"",
    link: "https://algochurn.com",
    thumbnail:
    "/assets/project-pettera.png",

  },
  {
    title: "ShameoAI - MyAiSquad: Personalized AI Solutions for Businesses",
    description:"ShameoAI - MyAiSquad is a multi-tenant AI assistant powered by RAG, offering personalized, context-aware responses and voice assistant integration for seamless user experiences. Designed for businesses, it enables intelligent solutions tailored to local knowledge.",
    link: "https://ui.aceternity.com",
    thumbnail:
    "/assets/project-6.jpg",

  },
  {
    title: "HealthELite",
    description:"",
    link: "https://tailwindmasterkit.com",
    thumbnail:
    "/assets/project-18.jpg",

  },
  {
    title: "SmartBridge",
    description:"",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    description:"",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Ethax",
    description:"",
    link: "https://cremedigital.com",
    thumbnail:
    "/assets/project-30.jpg",

  },
  {
    title: "SmartGenie",
    description:"",
    link: "https://goldenbellsacademy.com",
    thumbnail:
    "/assets/project-25.jpg",

  },
  {
    title: "ProcEzy",
    description:"",
    link: "https://invoker.lol",
    thumbnail:
    "/assets/project-22.jpg",

  },
  {
    title: "E Free Invoice",
    description:"",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];


// ......................................SERVICES PAGE.....................................................
export const allservices = [
  "All Services",
  "AI & Generative AI Solutions",
  "Machine Learning Services",
  "Custom Software & Application Development",
  "Cloud Computing Services",
  "Blockchain Solutions",
  "DevOps Consulting & Services",
  "Mobile Application Development",
  "IoT Solutions",
  "UI/UX Design",
];

export const serviceCardData = [
  {
    title: "AI & Generative AI Solutions",
    subtitle: "Revolutionize your business with Artificial Intelligence.",
    description:
      "Our AI and Generative AI services include custom AI model development, domain-specific training, and seamless integration. Experience intelligent automation, personalized solutions, and enhanced operational efficiency. Stay ahead in the age of AI innovation.",
    image: "/assets/service-ai.png",
  },
  {
    title: "Machine Learning Services",
    subtitle: "Unleash the power of data with Machine Learning.",
    description:
      "We deliver cutting-edge solutions, including predictive analytics, deep learning models, and real-time insights. Empower your business with smarter decision-making and actionable intelligence.",
    image: "/assets/service-ml.png",
  },
  {
    title: "Custom Software & Application Development",
    subtitle: "Innovate with custom software and apps.",
    description:
      "From robust web applications to intuitive mobile solutions, we specialize in creating scalable, future-ready software. Empower your business with seamless API integrations and tailored solutions that drive growth.",
    image: "/assets/service-app.png",
  },
  {
    title: "Cloud Computing Services",
    subtitle: "Transform your business with the cloud.",
    description:
      "Our end-to-end cloud solutions provide secure, scalable, and high-performance infrastructures. Leverage the power of cloud computing to innovate faster and optimize operational efficiency.",
    image: "/assets/service-cloud.png",
  },
  {
    title: "Blockchain Solutions",
    subtitle: "Secure, transparent, and efficient.",
    description:
      "Leverage blockchain technology for smart contracts, decentralized applications, and secure transactions. Enhance trust, streamline processes, and redefine your business for the digital economy.",
    image: "/assets/service-blockchain.png",
  },
  {
    title: "DevOps Consulting & Services",
    subtitle: "Accelerate innovation with DevOps.",
    description:
      "We streamline your development and operations workflows, ensuring faster delivery, improved collaboration, and automated deployments. Stay competitive with continuous integration and delivery.",
    image: "/assets/service-devops.png",
  },
  {
    title: "Mobile Application Development",
    subtitle: "Create engaging mobile experiences.",
    description:
      "Our team specializes in building secure, high-performance mobile apps for iOS and Android. Elevate user engagement with apps designed to captivate and perform flawlessly.",
    image: "/assets/service-mobileapp.png",
  },
  {
    title: "IoT Solutions",
    subtitle: "Connecting devices for smarter solutions.",
    description:
      "Our IoT services enable businesses to harness real-time data from smart devices. Optimize operations, gain actionable insights, and embrace intelligent automation.",
    image: "/assets/service-iot.png",
  },
  {
    title: "UI/UX Design",
    subtitle: "Crafting designs that captivate.",
    description:
      "Our UI/UX experts create user-friendly interfaces and visually stunning designs. Ensure your digital products leave a lasting impression and enhance customer satisfaction.",
    image: "/assets/service-uiux.png",
  },
];


// ......................................INDUSTRIES PAGE...................................................
export const industryCardOneData = [
  {
    number: "01",
    image: "/assets/industryOne-1.png",
    title: "Healthcare and Medical Technology",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    icon: "/assets/industryOne-icon1.svg",
  },
  {
    number: "02",
    image: "/assets/industryOne-2.png",
    title: "E-commerce and Retail",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    icon: "/assets/industryOne-icon2.svg",
  },
  {
    number: "03",
    image: "/assets/industryOne-3.png",
    title: "Education and e-Learning",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    icon: "/assets/industryOne-icon1.svg",
  },
  {
    number: "04",
    image: "/assets/industryOne-4.png",
    title: "Real Estate and Property Management",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    icon: "/assets/industryOne-icon2.svg",
  },
  {
    number: "05",
    image: "/assets/industryOne-5.png",
    title: "Real Estate and Property Management",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    icon: "/assets/industryOne-icon1.svg",
  },
  {
    number: "06",
    image: "/assets/industryOne-6.png",
    title: "Real Estate and Property Management",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    icon: "/assets/industryOne-icon2.svg",
  },
];

export const industryCardTwoData = [
  {
    id: 7,
    title: "Internet of Things",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    image: "/assets/industryOne-7.png",
    icon: "/assets/industryOne-iot.png",
  },
  {
    id: 8,
    title: "Blockchain and NFT",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    image: "/assets/industryOne-8.png",
    icon: "/assets/industryOne-blockchain.png",
  },
  {
    id: 9,
    title: "Pet Care and Services",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    image: "/assets/industryOne-9.png",
    icon: "/assets/industryOne-pet.png",
  },
  {
    id: 10,
    title: "Business and Finance",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    image: "/assets/industryOne-10.png",
    icon: "/assets/industryOne-business.png",
  },
  {
    id: 11,
    title: "Gaming and Sports",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    image: "/assets/industryOne-11.png",
    icon: "/assets/industryOne-gaming.png",
  },
  {
    id: 12,
    title: "Travel and Booking",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    image: "/assets/industryOne-12.png",
    icon: "/assets/industryOne-travel.png",
  },
  {
    id: 13,
    title: "Food and Restaurant",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    image: "/assets/industryOne-13.png",
    icon: "/assets/industryOne-food.png",
  },
  {
    id: 14,
    title: "Aviation and Management",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    image: "/assets/industryOne-14.png",
    icon: "/assets/industryOne-aviation.png",
  },
  {
    id: 15,
    title: "Government and Services",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    image: "/assets/industryOne-15.png",
    icon: "/assets/industryOne-government.png",
  },
];

export const augmentTeamsData = [
  {
      id: 1,
      bgColor: "#09090F",
      labelName: "Backend",
      mainHeading: "It is a long established fact that a reader will be distracted by the readable content",
      mainImage: "/assets/aug-backend.webp",
      content: [
          {
              subHeading: "User Research and Analysis",
              description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          },
          {
              subHeading: "User Research and Analysis",
              description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          },
          {
              subHeading: "User Research and Analysis",
              description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          },
          {
              subHeading: "User Research and Analysis",
              description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          },
          {
              subHeading: "User Research and Analysis",
              description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          },
      ]
  },
  {
      id: 2,
      bgColor: "#F7F7FA",
      labelName: "Frontend",
      mainHeading: "It is a long established fact that a reader will be distracted by the readable content",
      mainImage: "/assets/aug-backend.webp",
      content: [
          {
              subHeading: "Angular",
              description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          },
          {
              subHeading: "React.js",
              description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          },
          {
              subHeading: "Next.js",
              description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          },
          {
              subHeading: "JavaScript",
              description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          },
          {
              subHeading: "HTML/CSS",
              description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          },
      ]
  },
  {
      id: 3,
      bgColor: "#09090F",
      labelName: "Mobile",
      mainHeading: "It is a long established fact that a reader will be distracted by the readable content",
      mainImage: "/assets/aug-backend.webp",
      content: [
          {
              subHeading: "Android",
              description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          },
          {
              subHeading: "Flutter",
              description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          },
          {
              subHeading: "Kotlin",
              description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          },
          {
              subHeading: "iOS",
              description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          },
      ]
  },
  {
      id: 4,
      bgColor: "#F7F7FA",
      labelName: "Digital Marketing",
      mainHeading: "It is a long established fact that a reader will be distracted by the readable content",
      mainImage: "/assets/aug-backend.webp",
      content: [
          {
              subHeading: "SEO",
              description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          },
          {
              subHeading: "Social Media Marketing",
              description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          },
          {
              subHeading: "Content Writing",
              description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          },
      ]
  },
]

// ........................................ABOUT PAGE.....................................................
export const metrics = [
  { digit: "100+", label: "Projects completed" },
  { digit: "12", label: "Industry awards" },
  { digit: "98%", label: "Client Satisfaction" },
  { digit: "125K", label: "ROI achieved for clients" },
];

export const employeeThoughts = [
  {
      quote:
          "Promena gave me the chance to develop my skills from the ground up. It’s been a rewarding experience, and I’ve grown so much since I joined.",
      author: "Amith",
      designation: "Senior Developer at Promena",
      emoji: "😊",
      avatar: '/assets/team-amit.webp',
  },
  {
      quote:
          "Joining Promena was one of the best decisions I’ve made. I’ve learned so much here, and the work environment really encourages personal and professional growth.",
      author: "Darshan",
      designation: "Angular Developer at Promena",
      emoji: "👍",
      avatar: '/assets/team-darshan.webp',
  },
  {
      quote:
          "Starting my career at Promena was a game-changer. The team is incredibly supportive, and I’ve had the chance to work on exciting projects that really helped me grow.",
      author: "Raju",
      designation: "Python Developer at Promena",
      emoji: "🎉",
      avatar: '/assets/team-raju.webp',
  },
];

export const timelineData: YearData[] = [
  { year: 2017, image: "/assets/industryOne-7.png", content: "Some content...2017" },
  { year: 2018, image: "/assets/industryOne-8.png", content: "Some content...2018" },
  { year: 2019, image: "/assets/industryOne-8.png", content: "Some content...2019" },
  { year: 2020, image: "/assets/industryOne-8.png", content: "Some content...2020" },
  { year: 2021, image: "/assets/industryOne-8.png", content: "Some content...2021" },
  { year: 2022, image: "/assets/industryOne-8.png", content: "Some content...2022" },
  { year: 2023, image: "/assets/industryOne-8.png", content: "Some content...2023" },
  { year: 2024, image: "/assets/industryOne-8.png", content: "Some content...2024" },
  { year: 2025, image: "/assets/industryOne-8.png", content: "Some content...2025" },
];

// .......................................Services - Domain Specific model training................................

export const fourpointerData = [
  { header: "Custom Dataset Training", 
    para: "We use your unique data to train AI models that truly understand your business needs.",
     imgSrc: '/assets/domainspecific-1.png', 
     position: "left" 
    },
  { header: "Industry-Focused Algorithms", 
    para: "Our models are built to tackle challenges specific to your domain, ensuring maximum impact.",
     imgSrc: '/assets/domainspecific-2.png',
      position: "left"
     },
  { header: "Real-World Application", 
    para: "From healthcare to finance, our solutions deliver actionable insights and measurable outcomes.",
     imgSrc: '/assets/domainspecific-3.png',
      position: "right"
     },
  { header: "Continuous Learning",
     para: "With our models, the learning never stops. They adapt to new data, keeping your business ahead.",
      imgSrc: '/assets/domainspecific-4.png', 
      position: "right"
     },
];
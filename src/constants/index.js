import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import university1 from "../assets/projects/university1.png";
import university2 from "../assets/projects/university2.png";
import university3 from "../assets/projects/university3.png";
import university4 from "../assets/projects/university4.png";


export const HERO_CONTENT = `Currently pursuing a Master’s in Data-Driven IT Management, 
                I’m building expertise in translating data insights 
                into actionable strategies to drive IT innovation and efficiency.
                 With a foundation in software development, complemented by a 
                 Bachelor’s degree and hands-on experience at IKEA IT, 
                 I bring a blend of technical skills and practical industry 
                 know-how. My journey has equipped me with a strong problem-solving 
                 mindset and a deep interest in aligning IT solutions with business 
                 needs. Ready to make an impact, I’m eager to contribute to a forward- thinking 
                 trainee program where I can apply my data-driven approach and collaborative spirit.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with 
a passion for creating efficient and user-friendly web applications. With 5 years 
of professional experience, I have worked with a variety of technologies, 
including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. 
My journey in web development began with a deep curiosity for how things work, 
and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.
 Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Devops engineer",
    company: "IKEA IT AB",
    description: `Collaborated closely with developers to integrate CI/CD pipelines into the development process, resulting in faster and more reliable software releases.
Deployed, maintained, and monitored Docker containers across different environments, improving application reliability and resource efficiency.
Implemented Infrastructure as Code (IaC) practices using Terraform to standardize infrastructure deployments and configurations.
Monitored application and infrastructure performance using Prometheus and Grafana, enabling early detection of issues and reducing incident response time.
Optimized cloud resources through automated scaling, significantly improving cost-efficiency while maintaining system reliability.`,
    technologies: ["Terraform", "GitHub Action", "Grafana", "Google Cloud Platform"],
  },
  {
    year: "June 2021- August 2021",
    role: "Frontend Developer",
    company: "GREEN FROG AB",
    description: `Contributed to the development of user-friendly interfaces focusing on delivering a smooth and intuitive user experience.
Utilized JavaScript and React to build, test, and refine front-end components, enhancing site performance and user engagement.
Worked closely with designers and back-end developers to ensure seamless integration and alignment with project requirements with 
Agile practices to deliver improvements efficiently. Strengthened skills in front-end debugging, code optimization, and version control (Git), gaining practical knowledge applicable to real-world applications.`,
    technologies: ["Python", "JavaScript", "React.js","Next.js", "mySQL"],
  },
  {
    year: "January 2019 - August 2019",
    role: "Assistant teacher (Primary and Middle School)",
    company: "FUTURASKOLAN INTERNATIONAL",
    description: `Assisted the main teacher in delivering foundational mathematics lessons to primary and middle school students, covering key concepts like basic arithmetic, fractions, geometry, and introductory algebra.
Provided individual support to students struggling with math concepts, using engaging and age-appropriate techniques to foster a positive learning environment.
Developed and organized hands-on activities, games, and problem-solving exercises that made math accessible and fun, encouraging student participation and engagement. 
Helped create review sheets, practice quizzes, and visual aids to support student learning and reinforce key math skills.`,
    technologies: [],
  },
  
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["JavaScript", "Strapi", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Movie App",
    image: project2,
    description:
      "A dynamic and user-friendly movie application built with React, showcasing an intuitive design for exploring movies. This app allows users to search for movies, view details, and discover trending or popular titles ",
    technologies: ["React.js", "JavaScript", "Angular", "Firebase"],
  },
  {
    title: "Fitness Website",
    image: project3,
    description:
      "Its a react app withstyle components and animation. It's a react app for gym, where different class is showed.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Library app",
    image: project4,
    description:
      "This is a bookstore app , google books api is used  in the app. It's a resposive app",
    technologies: ["Google api", "React.js",  "Express", "mySQL"],
  },
];
export const EDUCATION = [
  {
    period: "Setember 2024 ",
    image: university1,
    degree: "Master’s in Data-Driven IT Management",
    institution: "University of Borås ",
    description: `Focused on leveraging data insights to enhance IT innovation and operational efficiency. 
    Coursework includes advanced data analytics, IT strategy, and management practices.`,
    skills: ["Data Analysis", "IT Strategy", "Cloud Computing", "Leadership", "Project Management"],
  },
  {
    period: "2022 - 2024",
    image: university4,
    degree: "DevOps Engineer",
    institution: "JENSEN yrkeshögskola ",
    description: `DevOps Engineering involves the integration of development and operations practices 
    to streamline the software delivery process, ensuring faster and more reliable deployments. 
    As a DevOps Engineer, the role focuses on automating workflows, managing infrastructure, and 
    fostering collaboration between development, QA, and IT operations teams. 
    This enables organizations to achieve continuous integration and continuous delivery (CI/CD) of 
    software products.`,
    skills: ["SQL", "Java", "Python", "Agile", "Dockar", "GitHub Action", "Grafana"],
  },
  {
    period: "2019 - 2022",
    image: university3,
    degree: "Bachelor programme in Software Development-180 credits, Computer Science",
    institution: "Kristianstad University",
    description: `Built a strong foundation in computer science principles, including software development, 
    algorithms, and database systems. Worked on various projects involving real-world problem-solving and application development.`,
    skills: ["Software Development", "Algorithms", "Database Design", "Java", "Python", "System Architecture"],
  },
  {
    period: "June2022- July 2022",
    image: university2,
    degree: "Web management, Web Page, Digital/Multimedia and Information Resource Design",
    institution: "Linnaeus University",
    description: `Built a strong foundation in computer science principles, including software development, 
    algorithms, and database systems. Worked on various projects involving real-world problem-solving and application development.`,
    skills: ["Microservices", ".NET Framework", "Web Design", "Microsoft Azure", " Markup Languages"," Express.js", "User Experience (UX)"],
  },
];
export const CONTACT = {
  address: "Lilla Varvsgatan 39E 211 75 Malmö",
  phoneNo: "+12 4555 666 00 ",
  email: "nishat.njl2019@gmail.com",
};

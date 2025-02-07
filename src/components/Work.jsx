import { ButtonPrimary } from "./Button";
import ProjectCard from "./ProjectCard";

const works = [
  {
    id: 1,
    imgSrc: "/project-1.png", // Replace with actual image
    title: "SwapIt - College Marketplace",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    projectLink: "https://swapit-vhlk.onrender.com/login",
    githubLink: "https://github.com/vivek7156/swapIt",
    category: "Fullstack",
    about:
      "SwapIt is a comprehensive college marketplace application designed to facilitate the buying, selling, and exchanging of items among students. The platform features a real-time chat system powered by Socket.io, enabling users to communicate instantly. The search functionality allows users to quickly find items they are interested in, while the notification system keeps them updated on new messages and item listings. Built with a robust backend using Node.js and Express, and a dynamic frontend with React, SwapIt ensures a seamless and interactive user experience. The application also leverages MongoDB for efficient data storage and retrieval, making it a reliable tool for college students to manage their marketplace activities.",
  },
  {
    id: 2,
    imgSrc: "/project-2.png", // Replace with actual image
    title: "Moneymap - Expense Tracker",
    tags: ["React", "Next.js", "PostgreSQL", "Prisma", "Auth.js"],
    projectLink: "https://moneymap-ju9k.vercel.app/",
    githubLink: "https://github.com/vivek7156/Moneymap",
    category: "Fullstack",
    about:
    "Moneymap is a sophisticated financial management application designed to help users track their income and expenses with ease. The app features a user-friendly interface built with React and Next.js, providing a smooth and responsive experience. Users can securely log in and manage their financial data thanks to the integration of Auth.js for authentication. Moneymap utilizes PostgreSQL and Prisma for robust and efficient data management, ensuring that all financial records are stored securely. The application also includes data visualization tools that allow users to gain insights into their spending habits and financial trends. With Moneymap, users can take control of their finances, set budgets, and make informed financial decisions.",
  },
  {
    id: 3,
    imgSrc: "/project-3.png", // Replace with actual image
    title: "Twitter Clone",
    tags: ["MERN", "TailwindCSS", "DaisyUI", "Cloudinary"],
    projectLink: "https://twitter-clone-wj5r.onrender.com/",
    githubLink: "https://github.com/vivek7156/twitter-clone",
    category: "Fullstack",
    about:
    "The Twitter Clone is a social media platform inspired by Twitter, allowing users to post tweets, like, comment, and follow other users. Built with the MERN stack (MongoDB, Express, React, Node.js), the application provides a seamless and interactive user experience. TailwindCSS and DaisyUI are used for styling, ensuring a modern and responsive design. The application also integrates Cloudinary for efficient image storage and management. Users can create profiles, follow other users, and engage with content through likes and comments, making it a fully functional social media platform.",
  },
  {
    id: 4,
    imgSrc: "/project-4.png", // Replace with actual image
    title: "Harmoniq - Music Platform",
    tags: ["Tailwind CSS", "React", "Node.js", "Express", "MongoDB", "Socket.io", "Cloudinary"],
    projectLink: "https://harmoniq-music-platform-demo.com/",
    githubLink: "https://github.com/vivek7156/Harmoniq-Music-Platform",
    category: "Full Stack",
    about: "A modern web-based music management and streaming platform that allows users to manage their music library, create albums, and organize playlists. It offers real-time user status tracking, chat messaging, multi-user support with an admin dashboard, and personalized 'Made For You' recommendations. The platform features a custom audio player with playback controls for an immersive music experience.",
  },
  {
    id: 5,
    imgSrc: "/project-5.png",
    title: "EcoSweep - Waste Management Platform",
    tags: ["React", "Next.js", "NeonDB", "Gemini API"],
    projectLink: "https://eco-sweep-4qvk.vercel.app/",
    githubLink: "https://github.com/vivek7156/EcoSweep",
    category: "Fullstack",
    about:
      "An environmental platform promoting sustainable waste disposal and recycling solutions through user engagement and awareness.",
  },
  {
    id: 6,
    imgSrc: "/project-6.png",
    title: "Yumrush - Food Management & Ordering App",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    projectLink: "https://silly-empanada-e80bc6.netlify.app/", 
    githubLink: "https://github.com/vivek7156/full-stack-task-management-app",
    category: "Fullstack",
    about: "A food management and ordering application that allows restaurant owners to add, update, and delete menu items while enabling customers to browse and place orders. Built with React for the frontend, Node.js and Express for the backend, and MongoDB for data management."
  },
];

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map((work, index) => (
            <ProjectCard
              classes={"reveal-up"}
              key={index}
              imgSrc={work.imgSrc}
              id={work.id}
              title={work.title}
              tags={work.tags}
              projectLink={work.projectLink}
              githubLink={work.githubLink}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonPrimary
            href={"/projects"}
            label={"View all projects"}
            icon="arrow_right_alt"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;

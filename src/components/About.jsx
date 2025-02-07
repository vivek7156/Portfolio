const aboutItems = [
  {
    label: "Projects made",
    number: 15,
  },
  {
    label: "Technologies used",
    number: 20,
  },
];
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-lg md:max-w-[60ch]">
            Hi! I'm <strong>Vivek</strong>, a sophomore studying{" "}
            <strong>Computer Engineering</strong> at{" "}
            <strong>Army Institute of Technology, Pune</strong>
            .With a strong base in fundamentals of computer science, I'm a{" "}
            <strong>MERN </strong>
            stack developer passionate about building responsive web
            applications that combine functionality with modern design. I'm also
            exploring my interest in
            <strong> Game Development</strong> and enjoy creating scalable solutions that
            leave an impact !
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, index) => (
              <div key={index}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/logo.svg"
              alt="logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

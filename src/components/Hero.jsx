import { ButtonPrimary, ButtonOutline } from "./Button";
import SocialLinks from "./SocialLinks";
import { CardContainer, CardItem } from "./ui/3d-card";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-28 ">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="inline-flex  items-center gap-3 p-2.5 rounded-full bg-sky-800/20 ">
            <figure className="img-box w-9 h-9 rounded-full">
              <img
                src="/me.jpg"
                alt="Portrait"
                width={40}
                height={40}
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide ">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-4 lg:mb-6">
            Hi, I'm Vivek!
          </h2>
          <p className="text-zinc-400 mb-4 lg:mb-6 text-lg">
            A Full-stack developer specializing in React, Next.js, Node.js, and PostgreSQL. Passionate about scalable apps, automation, UI/UX, and problem-solving. Always learning and innovating!
          </p>
          <div className="lg:mb-6 mb-4">
            <SocialLinks />
          </div>
          <div className="flex items-center gap-3">
            <ButtonPrimary label={"Download CV"} icon="download" href="/Resume.pdf" download/>
            <ButtonOutline
              href="#about"
              label={"Scroll Down"}
              icon="arrow_downward"
            />
          </div>
        </div>

        <CardContainer className="hidden lg:block">
          <CardItem translateZ={60}>
            <figure className="w-full ml-auto  rounded-[60px]">
              <img
                src="/hero-bg.jpeg"
                width={700}
                height={800}
                className="w-full shadow-2xl "
                alt="Vivek Singh"
              />
            </figure>
          </CardItem>
        </CardContainer>
      </div>
    </section>
  );
};

export default Hero;

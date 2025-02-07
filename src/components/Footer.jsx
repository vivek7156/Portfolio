import { ButtonPrimary } from "./Button";
import FooterText from "./FooterText";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/vivek7156",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vivek-singh7156",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/viveksingh.3663",
  },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/viveksingh7156",
  },
];
const Footer = () => {
  return (
    <footer className="section pb-8">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 ">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[20ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href={"mailto:viveksingh7156@gmail.com "}
              label={"Get in touch"}
              icon="chevron_right"
              classes={"reveal-up"}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-400 hover:underline reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="pb-2 reveal-up">Social</p>
              <ul>
                {socials.map(({ label, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-400 hover:underline reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <FooterText/>
        </div>
    </footer>
  );
};

export default Footer;

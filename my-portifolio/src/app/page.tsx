import { ExperienceIcons } from "./components/experience-icons/experienceIcons";
import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Info } from "./components/information/information";
import { SocialBtn } from "./components/social-btn/social-btn";

import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Info />
      <div className="butons">
        <SocialBtn />
        <a className="btn-primary" href="mailto:lukas.mota@icloud.com">
          Contate-me
        </a>
      </div>
      <div>
        <ExperienceIcons/>
      </div>
    </main>
  );
}

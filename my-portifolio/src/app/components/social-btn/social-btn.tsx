import { InstagramIcon } from "../icons/instagram-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { GithubIcon } from "../icons/github-icon";
import "./social-btn.scss";

export function SocialBtn() {
  return (
    <div className="social">
      <a href="https://www.instagram.com/lukacomk_/">
        <InstagramIcon />
      </a>
      <a href="https://www.linkedin.com/in/lukas-mota/">
        <LinkedinIcon />
      </a>
      <a href="https://github.com/Lukascumk">
        <GithubIcon />
      </a>
    </div>
  );
}

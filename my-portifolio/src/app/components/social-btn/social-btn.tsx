import { InstagramIcon } from "../icons/instagram-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { GithubIcon } from "../icons/github-icon";
import "./social-btn.scss";

export function SocialBtn() {
  return (
    <div className="social">
      <a href="">
        <InstagramIcon />
      </a>
      <a href="">
        <LinkedinIcon />
      </a>
      <a href="">
        <GithubIcon />
      </a>
    </div>
  );
}

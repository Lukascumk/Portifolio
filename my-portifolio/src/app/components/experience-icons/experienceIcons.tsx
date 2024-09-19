import { Angularicon } from "../icons/angular";
import { Csharpicon } from "../icons/csharpicon";
import { Dotneticon } from "../icons/dotneticon";
import { Reacticon } from "../icons/reacticon";
import { Typescripticon } from "../icons/typescripticon";
import "./experienceIcons.scss";
export function ExperienceIcons() {
    return (
      <div className="icons-experience">
        <div className="path">
          <Angularicon />
        </div>
        <div className="path">
          <Dotneticon />
        </div>
        <div className="path">
          <Csharpicon />
        </div>
        <div className="path">
          <Reacticon />
        </div>
        <div className="path">
          <Typescripticon />
        </div>
      </div>
    );
}
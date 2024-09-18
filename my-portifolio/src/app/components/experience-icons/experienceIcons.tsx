import { Angularicon } from "../icons/angular";
import { Csharpicon } from "../icons/csharpicon";
import { Dotneticon } from "../icons/dotneticon";
import { Reacticon } from "../icons/reacticon";
import { Typescripticon } from "../icons/typescripticon";
import  "../experience/experienceIcons.scss";
export function experienceIcons() {
    return (
     
        <div className="icons-experience">
          <Dotneticon />
          <Angularicon />
          <Csharpicon />
          <Reacticon />
          <Typescripticon />
        </div>

    );
}
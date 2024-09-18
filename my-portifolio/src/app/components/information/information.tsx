import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"
export function Info() {
    return (
      <div className="infos">
        <SectionTitle text="Linguagens" />
        <div className="languages-info">
          <span>PT - BR Nativo</span>
          <span>EN - Básico</span>
        </div>
        <SectionTitle text="Educação" />
        <div className="education-info">
          <span>
            Analise e Desenvolvimento de Sistemas - Universidade Paulista
          </span>
        </div>
      </div>
    );
}
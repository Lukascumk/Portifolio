import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss"

export function Experience() {
  return (
    <div className="experiencia">
      <SectionTitle text="Experiência"/>
      <p>
        Experiência em Angular, React, Next.js, TypeScript, C#, e ASP.NET Core.
        Participei de projetos como Projeto-Financeiro-Frontend e
        Projeto-Financeiro-Backend, utilizando JWT, Lazy Loading, Angular
        Material, e DDD (Domain-Driven Design). Habilidades Técnicas: Frontend:
        React, Next.js, TypeScript, HTML5, CSS3, Interceptors, Lazy Loading.
        Backend: ASP.NET Core, C#, Entity Framework (Code First), Linq, JWT,
        Identity, Dependency Injection. Banco de Dados: MySQL, CRUD completo.
        Ferramentas: Visual Studio, Git, GitHub, Figma. Experiência em
        integração de APIs RESTful, autenticação com JWT e foco em boas práticas
        como Clean Code e SOLID. Possuo 12 anos de experiência em comunicação e
        resolução de problemas. Busco desafios para aplicar minhas habilidades e
        colaborar em projetos inovadores.
      </p>
      <div className="experience-time"></div>
    </div>
  );
}

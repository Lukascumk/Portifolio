import Image from "next/image";
import { Header } from "./components/header";

export default function Home() {
  return (
    <main>
      <Header/>
        <div className="experiencia">
          <h3>Experiência</h3>
          <p>
            
            Desenvolvedor Júnior Full Stack com experiência em Angular,
            TypeScript, C#, e ASP.NET Core. Atuei em projetos como
            Projeto-Financeiro-Frontend e Projeto-Financeiro-Backend, utilizando
            JWT, Lazy Loading, Angular Material, e DDD (Domain-Driven Design).
            Habilidades Técnicas: Frontend: Angular, TypeScript, HTML5, CSS3,
            Angular CLI, Interceptors, Lazy Loading. Backend: ASP.NET Core, C#,
            Entity Framework (Code First), Linq, JWT, Identity, Dependency
            Injection. Banco de Dados: MySQL, CRUD completo. Ferramentas: Visual
            Studio, Git, GitHub. Experiência em integração de APIs RESTful,
            autenticação com JWT e foco em boas práticas como Clean Code e
            SOLID. Possuo 12 anos em comunicação e resolução de problemas. Busco
            desafios para aplicar minhas habilidades e colaborar em projetos
            inovadores.
          </p>
          <div className="experience-time"></div>
          <div className="infos">
            <h3> Linguagens</h3>
            <div className="linguagens-info">
              <span> PT - BR Nativo</span>
              <span>EN - Básico</span>
            </div>
            <h3>Formação</h3>
            <div className="education-info">
              <span>
                Analise e Desenvolvimento de Sistemas - Universidade Paulista
              </span>
            </div>
            <div className="butons">
              <div className="social"></div>
              <button> Contate-me</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

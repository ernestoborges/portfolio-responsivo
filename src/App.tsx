import { useState } from 'react'
import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from "react-icons/io"
import { IoLinkOutline } from "react-icons/io5"

import './App.css'

function App() {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const projects = [
    {
      title: "Pokedex",
      img: "pokedex",
      repo: "https://github.com/ernestoborges/Pokedex",
      live: "https://csb-yjyxj5.netlify.app",
      text: "Projeto com meus primeiros passos em React, onde eu não entendia direito qual era a ideia do framework. Usa basicamente states e prop drilling. Foi um processo bem legal e foi o motivo de me fezer querer aprender mais React."
    },
    {
      title: "Countries Rest API",
      repo: "https://github.com/ernestoborges/frontendMentor-12",
      live: "https://csb-hz0799.netlify.app",
      img: "rest-countries",
      text: "Um desafio do Frontend Mentor. Utiliza uma API para informar detalhes sobre os Países. Aprendi sobre React Router e Navegação."
    },
    {
      title: "  Monster Encouters",
      img: "dnd5e",
      repo: "https://github.com/ernestoborges/dnd5e-encounter-calculator",
      live: "https://csb-un44vw.netlify.app",
      text: "Uma calculadora de dificuldade de encontros contra mosntros do jogo Dungeons and Dragons 5ª edição. Consome uma API e realiza cálculos retirados do manual do mestre do jogo."
    },
    {
      title: "Formulário",
      img: "ms-form",
      repo: "https://github.com/ernestoborges/sossego",
      live: "https://chic-pika-3b70d8.netlify.app",
      text: "Um teste técnico que realizei. É um formulário de multiplas etapas que realiza validação dos campos e armazena os dados em um contexto."
    },
    {
      title: "Front-end Mentor",
      img: "fm-form",
      repo: "https://github.com/ernestoborges/FM-multi-step-form",
      live: "https://stirring-kringle-b10f65.netlify.app",
      text: "Outro desafio do Frontend mentor. Também é um formulário de multiplas etapas, porém nesse eu utilizei a biblioteca Formik para gerenciar o formulário. Além disso, foi meu primeiro projeto utilizando TypeScript"
    },
    {
      title: "Meu PC",
      img: "my-pc",
      repo: "https://github.com/ernestoborges/portfolio-react",
      live: "https://ernesto-pc.netlify.app",
      text: "Esse projeto é uma brincadeira que disponibiliza informações do meu portfolio imitando um sistema operacional animado. É uma experiência bem divertida, porém é melhor quando acessado por dispositivos com telas em proporções de monitores."
    }
  ]

  return (
    <div className="App">
      <header className='page-header'>
        <div className="header-wrapper">
          <div className='logo-container'>&#60;webdev&#47;&#62;</div>
          <nav>
            <ul>
              <li><a href="#home">inicio</a></li>
              <li><a href="#main">sobre</a></li>
              <li><a href="#projects">projetos</a></li>
              <li><a href="#contact">contato</a></li>
            </ul>
          </nav>
          <div className="burger-button-container">
            <input type="checkbox" onChange={(event) => setIsBurgerMenuOpen(event.target.checked)} />
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="burger-menu-content-container" style={isBurgerMenuOpen ? { height: "6rem" } : { height: 0 }} >
            <nav>
              <ul>
                <li><a href="#home">inicio</a></li>
                <li><a href="#main">sobre</a></li>
                <li><a href="#projects">projetos</a></li>
                <li><a href="#contact">contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        {/* home */}
        <section id="home" className='home-section'>
          <article className='home-article'>
            <header>
              <h1>Olá,<br />meu nome é <span>Ernesto</span> <span>Borges</span></h1>
            </header>
            <section>
              <p>
                seja bem-vindo ao meu <span>portfolio</span>!
              </p>
            </section>
          </article>
        </section>
        {/* about */}
        <section id="main" className='main-section'>
          <article className='main-section-article'>
            <header>
              <h2>Sobre mim</h2>
            </header>
            <section>
              <p>
                <span>&#62;</span>
                <span>Olá, meu nome é Ernesto Borges e sou desenvolvedor front-end. Comecei a estudar desenvolvimento web no início de 2022 e estou em busca de minha primeira oportunidade profissional.</span>
              </p>
              <br />
              <p>
                <span>&#62;</span>
                <span>Hoje, tenho bastante autonomia em HTML, CSS e JavaScript e isso consequentemente me garante uma facilidade em aprender novas tecnologias. Atualmente estou me especializando em ReactJS e ficando cada vez mais apaixonado em seu ecossistema.</span>
              </p>
              <br />
              <p>
                <span>&#62;</span>
                <span>Recentemente, comecei a incorporar TypeScript em meus projetos, pois reconheco sua importância e utilidade. Embora minha especialização seja em front-end, também tenho conhecimento básico em backend principalmente criando APIs RESTful utilizando NodeJS com Express conectando a bancos como Mongodb e PostgreSQL.</span>
              </p>
            </section>
            <section>
              <h3>Habilidades</h3>
              <p>
                <span>&#62;</span>
                <span>HTML, CSS, Bootstrap, JavaScript, ReactJS, Typescript, NodeJS, MongoDB, PostgreeSQL.</span>
              </p>
            </section>
          </article>
        </section>
        {/* projects */}
        <section id="projects" className='main-section projects-section'>
          <article className='main-section-article'>
            <header>
              <h2>Projetos</h2>
            </header>
            <section className='projects-gallery'>
              {
                projects.map((project, index) => (
                  <div key={index} className='project-wrapper'>
                    <div className='border-gap border-top'></div>
                    <div className='border-gap border-right'></div>
                    <div className='border-gap border-bottom'></div>
                    <div className='border-gap border-left'></div>
                    <article key={index}>
                      <header>
                        <h3>
                          {project.title}
                        </h3>
                        <section>
                          <a href={project.live} title={`link do projeto: ${project.title}`} target="_blank"><IoLinkOutline />Live</a>
                          <a href={project.repo} title={`link do repositorio: ${project.title}`} target="_blank"><IoLogoGithub />Github</a>
                        </section>
                      </header>
                      <section>
                        <img src={project.img ? `images/${project.img}.png` : ""} />
                      </section>
                      <section>
                        <p>
                          <span>&#62; </span>
                          {project.text}
                        </p>
                      </section>
                    </article>
                  </div>
                ))
              }
            </section>
          </article>
        </section>
        {/* contact */}
        <section id="contact" className='main-section contact-section'>
          <article className='main-section-article'>
            <header>
              <h2>Contato</h2>
            </header>
            <section>
              <a href='https://www.linkedin.com/in/ernesto-borges-b9a440194/' title="Linkedin" target="_blank">
                <IoLogoLinkedin />
                <p>Linkedin</p>
              </a>
              <a href='https://github.com/ernestoborges' title="Github" target="_blank">
                <IoLogoGithub />
                <p>Github</p>
              </a>
              <a href='mailto:ernestoborges1995@gmail.com' title="E-mail" target="_blank">
                <IoIosMail />
                <p>Email</p>
              </a>
            </section>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App

import { useState } from 'react'
import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from "react-icons/io"
import { IoLinkOutline } from "react-icons/io5"

import './App.css'

function App() {

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
        <div className='logo-container'>&#60;webdev&#47;&#62;</div>
        <nav>
          <ul>
            <li>home</li>
            <li>about</li>
            <li>projects</li>
            <li>contact</li>
          </ul>
        </nav>
      </header>
      <main>
        {/* home */}
        <section className='home-section'>
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
        <section className='main-section'>
          <article className='main-section-article'>
            <header>
              <h2>Sobre mim</h2>
            </header>
            <section>
              <p>
                <span>&#62;</span>
                <span>Meu nome é Ernesto Tavares, sou um desenvolvedor front-end que ... . Estou em processo de mudança de carreira buscando minha primeira experiência profissional.</span>
              </p>
            </section>
            <section>
              <h3>Habilidades</h3>
              <p>
                <span>&#62;</span>
                <span>HTML, CSS, Bootstrap, JavaScript, React, Typescript, Node, MongoDB.</span>
              </p>
            </section>
          </article>
        </section>
        {/* projects */}
        <section className='main-section projects-section'>
          <article className='main-section-article'>
            <header>
              <h2>Projetos</h2>
            </header>
            <section className='projects-gallery'>
              {
                projects.map((project, index) => (
                  <div className='project-wrapper'>
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
        <section className='main-section contact-section'>
          <article className='main-section-article'>
            <header>
              <h2>Contato</h2>
            </header>
            <section>
              <a href='https://www.linkedin.com/in/ernesto-borges-b9a440194/' title="Linkedin" target="_blank">
                <IoLogoLinkedin />
              </a>
              <a href='https://github.com/ernestoborges' title="Github" target="_blank">
                <IoLogoGithub /></a>
              <a href='mailto:ernestoborges1995@gmail.com' title="E-mail" target="_blank">
                <IoIosMail />
              </a>
            </section>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import controleatuarial from '../../assets/dashboard.png'
import sitedevendas from '../../assets/sitedevendas.png'
import clonenetflix from '../../assets/netflix.webp'
import siteacademia from '../../assets/siteacademia.png'

import './slide.css'

import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiGithub, SiReact } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { SiPython, SiRstudio, SiFastapi, SiMongodb, SiFirebase } from 'react-icons/si';

const Slide = (props) => {

  const data = [
    {
      title: 'Projeto dashboard',
      imagem: controleatuarial,
      description: "A dashboard de análise atuarial é uma ferramenta essencial para atuários, permitindo a visualização de dados relevantes, identificação de tendências e suporte na tomada de decisões estratégicas..",
      mais: [<>
        <p style={{ fontSize: "14px", margin: '0.2rem 0.5rem' }}>
          A dashboard de análise atuarial é uma ferramenta vital para atuários que precisam avaliar informações relevantes para suas análises e previsões. É uma plataforma visual que permite aos atuários explorarem dados demográficos, financeiros e de saúde de uma maneira clara e concisa.
        </p>
        <p style={{ fontSize: "14px", margin: '0.2rem 0.5rem' }}>
          Além disso, a dashboard permite identificar tendências e padrões ocultos nos dados. Ao analisar visualmente as informações, os atuários podem descobrir relações e insights que podem influenciar suas decisões. Essa capacidade de descobrir padrões importantes ajuda a melhorar a precisão das avaliações e a antecipar possíveis riscos e desafios futuros.
        </p>

      </>],

      link: "https://controleatuarial.netlify.app",
      tecnologias: [<SiHtml5 className='html skills__icone' />,
      <SiCss3 className='css skills__icone' />,
      <SiJavascript className='js skills__icone' />,
      <SiReact className='react skills__icone' />,
      <SiPython className="python skills__icone" />,
      <SiFastapi className="fastapi skills__icone" />,
      <SiGithub className="skills__icone" />
      ]
    },
    {
      title: 'Projeto E-Commerce',
      imagem: sitedevendas,
      description: "O site de vendas utiliza tecnologias de frontend para criar uma plataforma interativa e atraente. Com recursos avançados, proporciona uma experiência de compra fácil, rápida e personalizada aos usuários, incentivando as vendas de produtos e serviços.",
      mais: [<>
        <p style={{ fontSize: "14px", margin: '0.2rem 0.5rem' }}>

          O E-commerce é construído com tecnologias de frontend de ponta, resultando em uma plataforma dinâmica e envolvente. Com uma interface interativa e visualmente atraente, oferece uma experiência de compra excepcional aos usuários. Utilizando recursos avançados, como carregamento rápido de página, navegação intuitiva e filtros de busca eficientes, o site facilita a localização e compra de produtos. Com uma combinação perfeita de design atraente e funcionalidade avançada, o site de vendas se destaca como uma plataforma eficaz para impulsionar o comércio eletrônico.,
        </p>
      </>],

      link: "https://sitedevendas.netlify.app/",
      tecnologias: [<SiHtml5 className='html skills__icone' />,
      <SiCss3 className='css skills__icone' />,
      <SiJavascript className='js skills__icone' />,
      <SiReact className='react skills__icone' />,
      <SiGithub className="skills__icone" />
      ]
    },
    {
      title: 'Projeto Clone Netflix',
      imagem: clonenetflix,
      description: "O projeto de clone do Netflix é um exemplo impressionante das minhas habilidades em frontend e consulta de APIs, recriando a interface e o design elegante do site original.",
      mais: [<>
        <p style={{ fontSize: "14px", margin: '0.2rem 0.5rem' }}>
          O projeto de clone do site Netflix é um exemplo impressionante das minhas habilidades em frontend e consulta de APIs. Desenvolvido com maestria, esse projeto replica a interface e o design elegante do Netflix original. Utilizando tecnologias modernas de frontend, como HTML, CSS e JavaScript, crio uma experiência de usuário imersiva e responsiva. Além disso, integro APIs para consultar e exibir dinamicamente os dados dos filmes e séries, oferecendo uma seleção diversificada de conteúdo. Com esse projeto, demonstro minha expertise em frontend e minha capacidade de trabalhar com APIs, destacando minhas habilidades e conhecimentos nesses campos.,
        </p>
      </>],
      link: "https://clonefrontnetflix.netlify.app/",
      tecnologias: [<SiHtml5 className='html skills__icone' />,
      <SiCss3 className='css skills__icone' />,
      <SiJavascript className='js skills__icone' />,
      <SiReact className='react skills__icone' />,
      <SiFastapi className="fastapi skills__icone" />,
      <SiGithub className="skills__icone" />
      ]
    },
    {
      title: 'Projeto Academia',
      imagem: siteacademia,
      description: "Desenvolvi um site de academia para praticar minhas habilidades em frontend, criando um design moderno e responsivo, com recursos interativos e informações relevantes para os usuários.",
      mais: [<>
        <p style={{ fontSize: "14px", margin: '0.2rem 0.5rem' }}>
          O site da academia que desenvolvi é um projeto onde coloquei em prática minhas habilidades de frontend. Com um design moderno e responsivo, criei uma experiência visual atraente e intuitiva para os usuários. Utilizei tecnologias como HTML, CSS e JavaScript para desenvolver recursos interativos, como calendário de aulas, informações sobre os instrutores e planos de treinamento. Com esse projeto, demonstrei minha proficiência em frontend, criando um site funcional e profissional para a academia.,
        </p >
      </>],
      link: "https://siteacademia.netlify.app/",
      tecnologias: [<SiHtml5 className='html skills__icone' />,
      <SiCss3 className='css skills__icone' />,
      <SiJavascript className='js skills__icone' />,
      <SiReact className='react skills__icone' />,
      <SiGithub className="skills__icone" />
      ]
    }
  ]


  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <>
      <div className="alter slide__container">
        <h2 className='slide__title'>{data[props.index].title}</h2>
        <div className="slide__content">
          <div className="slide__description">
            <h3 style={{ fontSize: '18px', display: 'flex', alignItems: 'flex-start' }}>Detalhes</h3>
            <p className='slide_description-text'>{data[props.index].description}  <span className="slide__button" onClick={() => toggleTab(1)}>Ler Mais<i className="uil uil-arrow-right services__button-icon"></i></span></p>
            <a href={data[props.index].link} target='about'>

              <h4 className="slide__button" style={{ display: 'flex', marginTop: '1rem' }}>Link da aplicação <i className="uil uil-arrow-right services__button-icon"></i></h4>

            </a>

          </div>

          <div className="slide__imagem">
            <img style={{ marginBottom: '2rem', borderRadius: "0.25rem" }} src={data[props.index].imagem} />
            <div style={{ display: 'flex', alignItems: "flex-start", columnGap: '1rem' }} className="slide__tec">
              <h3 style={{ fontSize: '15px', display: 'flex', alignItems: 'flex-start', marginRight: '0.25rem' }}>Tecnologias usadas:</h3>
              <div className="lista__tec">
                {data[props.index].tecnologias}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={toggleState === 1 ? "slide__modal slide__active-modal" : "slide__modal"}>
        <div className="slide__modal-content alter">
          <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
          <div className="slide__container-more">
            <h3 className="slide__title-more">Mais detalhes</h3>

            <p className="slide__more">
              {data[props.index].mais}
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Slide
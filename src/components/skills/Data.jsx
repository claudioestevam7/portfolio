import React from 'react'
import './data.css'
import { GrMysql } from 'react-icons/gr';
import { SiRstudio, SiFastapi, SiMongodb, SiFirebase } from 'react-icons/si';
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiGithub, SiReact } from 'react-icons/si';
import { Python } from './Python.jsx'
const Data = (props) => {

  const dados = [
    {
      id: 0,
      icon: <SiHtml5 className='html skills__icone' />,
      title: "HTML",
      description:
        "",
      aplication: "Tenho experiência em criar layouts complexos e otimizar o desempenho de páginas HTML, além de validar e garantir a acessibilidade para todos os usuários.",
      exemplos: ["Desenvolvimento responsivo: Criei interfaces de usuário adaptáveis a diferentes dispositivos, garantindo que os sites fossem visualmente agradáveis e funcionais em todas as telas.",
      "Integração de APIs: Integrei APIs de terceiros para buscar e exibir dados dinâmicos nos sites, aprimorando minha habilidade de consumir serviços web.",
      "Otimização de desempenho: Otimizei o desempenho dos sites, reduzindo o tempo de carregamento e melhorando a experiência do usuário através de técnicas como compressão e minificação de recursos.",
      "Acessibilidade: Adotei práticas de desenvolvimento acessível, seguindo diretrizes de acessibilidade, como WCAG, para garantir que os sites fossem acessíveis para pessoas com deficiências.",
      "Testes e depuração: Conduzi testes e depuração em diferentes navegadores e dispositivos, identificando e corrigindo problemas para garantir uma experiência consistente."]
                 
    }, 
    {
      id: 1,
      icon: <SiCss3 className='css skills__icone' />,
      title: "CSS",
      description:
        "",
      aplication: "Tenho ampla experiência em trabalhar com CSS para estilizar páginas da web. Já desenvolvi vários projetos que incluem layouts complexos, animações, transições e otimização de performance para dispositivos móveis. Além disso, sempre trabalho com boas práticas de codificação, como separar o estilo do conteúdo, usar variaveis, entre outros, para garantir a manutenção e escalabilidade de projetos a longo prazo.",
      exemplos: ["Estilização avançada: Como desenvolvedor CSS, domino técnicas avançadas de estilização para criar interfaces de usuário visualmente atraentes e modernas. Utilizei seletores, pseudo-classes e pseudo-elementos para estilizar elementos específicos e adicionar interações e animações.",
      "Layout responsivo: Desenvolvi layouts responsivos usando CSS Grid e Flexbox, garantindo que os elementos se ajustassem adequadamente em diferentes tamanhos de tela. Isso resultou em interfaces que se adaptam perfeitamente em diversos dispositivos.",
      "Preprocessadores CSS: Trabalhei com preprocessadores CSS, como Sass ou Less, para aumentar minha produtividade e modularidade. Utilizei variáveis, mixins e funções para criar estilos reutilizáveis e manter um código CSS mais organizado.",
      ]
    },
    {
      id: 2,
      icon: <SiJavascript className='js skills__icone' />,
      title: "JavaScript",
      description:
        "Trabalhar com JavaScript é dinâmico e desafiador, pois é uma linguagem versátil que permite criar aplicações interativas e animadas para web. É uma habilidade importante para desenvolvedores web e sempre exige aprendizado e evolução para se manterem atualizados com as últimas tendências e tecnologias.",
      aplication: "",
      exemplos: ["Desenvolvimento de aplicações front-end interativas e dinâmicas",
                 "Trabalho com bibliotecas e frameworks populares como React",
                 "Implementação de animações, transições e efeitos visuais para melhorar a usabilidade e aparência do site",
                 "Trabalho com arquivos JSON para armazenar e exibir dados dinamicamente",
                 "Conhecimento de boas práticas de programação, incluindo a organização, legibilidade e otimização do código"]
    },
    {
      id: 3,
      icon: < SiTailwindcss className="tailwind skills__icone" />,
      title: "Tailwind",
      description:
        "Linguagem de programação de alto nível e interpretada. É fácil de aprender, possui uma sintaxe clara e legível, e é utilizada para uma ampla gama de aplicações, incluindo ciência de dados, desenvolvimento de aplicativos, automação de tarefas e muito mais. Com uma comunidade ativa e vasta biblioteca, é uma das linguagens mais populares e versáteis do mundo. ",
      aplication: "Como desenvolvedor Python, tive a oportunidade de trabalhar em diversos projetos envolvendo aplicações web, análise de dados, automação de tarefas e outras soluções customizadas.",
      exemplos: ["Aplicação web de gerenciamento de estoque utilizando Django e SQLite.",
                 "Análise de sentimentos em grande quantidade de dados utilizando Python e bibliotecas como Pandas e Numpy.",
                 "Automatização de processos de negócios com o uso de scripts Python e biblioteca Selenium."]
    },
    {
      id: 4,
      icon: <SiGithub className='github skills__icone' />,
      title: "Github",
      description:
        "",
      aplication: "Essas experiências destacam meu conhecimento e prática com o Git como uma ferramenta essencial para o desenvolvimento de software colaborativo",
      exemplos: ["Controle de versão: Utilizei o Git como sistema de controle de versão para rastrear e gerenciar alterações em projetos de desenvolvimento. Versionei o código-fonte, permitindo o histórico completo de alterações e a colaboração eficiente com outros desenvolvedores.",

      "Gerenciamento de branch: Trabalhei com branches para desenvolver recursos e realizar experimentos sem comprometer a estabilidade do projeto principal. Criei, mesclei e excluí branches, seguindo práticas recomendadas para manter um fluxo de trabalho organizado.",
  
      "Colaboração e resolução de conflitos: Trabalhei em equipes, colaborando com outros desenvolvedores usando o Git. Sincronizei e compartilhei código, resolvendo conflitos de mesclagem quando as alterações de diferentes ramificações entravam em conflito.",
  
      "Integração com plataformas de hospedagem: Integrei o Git com plataformas populares de hospedagem de código, como GitHub ou GitLab. Utilizei recursos como pull requests, issues e merge requests para facilitar a revisão de código e o fluxo de trabalho colaborativo.",
  
      "Gerenciamento de releases: Utilizei tags do Git para marcar versões estáveis dos projetos. Isso permitiu um controle preciso das versões lançadas e facilitou a implantação e o gerenciamento de versões em ambientes de produção."]
    },
    {
      id: 5,
      icon: <SiReact className='react skills__icone' />,
      title: "React",
      description:
        "",
      aplication: "Essas experiências destacam minhas habilidades como desenvolvedor React, permitindo a construção de interfaces modernas e interativas.",
      exemplos: ["Desenvolvimento de componentes: Como desenvolvedor React, construí componentes reutilizáveis e modulares para criar interfaces de usuário interativas e dinâmicas. Utilizei a abordagem baseada em componentes do React para dividir o código em partes independentes, facilitando a manutenção e reutilização em diferentes partes do aplicativo.",

      "Estado e gerenciamento de dados: Trabalhei com o gerenciamento de estado no React, utilizando ferramentas como o Redux ou o Context API. Gerenciei o estado global do aplicativo e compartilhei dados entre os componentes, garantindo uma sincronização eficiente e consistente das informações.",
      
      "Roteamento e navegação: Utilizei bibliotecas de roteamento, como o React Router, para criar navegação fluida e gerenciar as diferentes rotas e páginas do aplicativo. Isso permitiu a criação de aplicativos de página única (SPAs) com transições suaves entre as diferentes seções.",
      
      "Integração de APIs e dados externos: Integrei APIs e serviços externos ao aplicativo React para buscar e exibir dados dinamicamente. Utilizei bibliotecas como o axios para realizar chamadas assíncronas e atualizar a interface do usuário com os dados retornados."]
    },
    {
      id: 6,
      icon: <Python className="python skills__icone" />,
      title: "Python",
      description:
        "Linguagem de programação de alto nível e interpretada. É fácil de aprender, possui uma sintaxe clara e legível, e é utilizada para uma ampla gama de aplicações, incluindo ciência de dados, desenvolvimento de aplicativos, automação de tarefas e muito mais. Com uma comunidade ativa e vasta biblioteca, é uma das linguagens mais populares e versáteis do mundo. ",
      aplication: "Como desenvolvedor Python, tive a oportunidade de trabalhar em diversos projetos envolvendo aplicações web, análise de dados, automação de tarefas e outras soluções customizadas.",
      exemplos: ["Aplicação web de gerenciamento de estoque utilizando Django e SQLite.",
                 "Análise de sentimentos em grande quantidade de dados utilizando Python e bibliotecas como Pandas e Numpy.",
                 "Automatização de processos de negócios com o uso de scripts Python e biblioteca Selenium."]
    },
    {
      id: 7,
      icon: <SiRstudio className="r skills__icone" />,
      title: "R",
      description:
        "Linguagem de programação de alto nível e interpretada. É fácil de aprender, possui uma sintaxe clara e legível, e é utilizada para uma ampla gama de aplicações, incluindo ciência de dados, desenvolvimento de aplicativos, automação de tarefas e muito mais. Com uma comunidade ativa e vasta biblioteca, é uma das linguagens mais populares e versáteis do mundo. ",
      aplication: "Como desenvolvedor Python, tive a oportunidade de trabalhar em diversos projetos envolvendo aplicações web, análise de dados, automação de tarefas e outras soluções customizadas.",
      exemplos: ["Aplicação web de gerenciamento de estoque utilizando Django e SQLite.",
                 "Análise de sentimentos em grande quantidade de dados utilizando Python e bibliotecas como Pandas e Numpy.",
                 "Automatização de processos de negócios com o uso de scripts Python e biblioteca Selenium."]
    },
    {
      id: 8,
      icon: <SiFastapi className="fastapi skills__icone" />,
      title: "FastAPI",
      description:
        "Linguagem de programação de alto nível e interpretada. É fácil de aprender, possui uma sintaxe clara e legível, e é utilizada para uma ampla gama de aplicações, incluindo ciência de dados, desenvolvimento de aplicativos, automação de tarefas e muito mais. Com uma comunidade ativa e vasta biblioteca, é uma das linguagens mais populares e versáteis do mundo. ",
      aplication: "Como desenvolvedor Python, tive a oportunidade de trabalhar em diversos projetos envolvendo aplicações web, análise de dados, automação de tarefas e outras soluções customizadas.",
      exemplos: ["Aplicação web de gerenciamento de estoque utilizando Django e SQLite.",
                 "Análise de sentimentos em grande quantidade de dados utilizando Python e bibliotecas como Pandas e Numpy.",
                 "Automatização de processos de negócios com o uso de scripts Python e biblioteca Selenium."]
    },
    {
      id: 9,
      icon: <GrMysql className="mysql skills__icone" />,
      title: "MySQL",
      description:
        "Linguagem de programação de alto nível e interpretada. É fácil de aprender, possui uma sintaxe clara e legível, e é utilizada para uma ampla gama de aplicações, incluindo ciência de dados, desenvolvimento de aplicativos, automação de tarefas e muito mais. Com uma comunidade ativa e vasta biblioteca, é uma das linguagens mais populares e versáteis do mundo. ",
      aplication: "Como desenvolvedor Python, tive a oportunidade de trabalhar em diversos projetos envolvendo aplicações web, análise de dados, automação de tarefas e outras soluções customizadas.",
      exemplos: ["Aplicação web de gerenciamento de estoque utilizando Django e SQLite.",
                 "Análise de sentimentos em grande quantidade de dados utilizando Python e bibliotecas como Pandas e Numpy.",
                 "Automatização de processos de negócios com o uso de scripts Python e biblioteca Selenium."]
    },
    {
      id: 10,
      icon: <SiMongodb className="mongodb skills__icone" />,
      title: "MongoDB",
      description:
        "Linguagem de programação de alto nível e interpretada. É fácil de aprender, possui uma sintaxe clara e legível, e é utilizada para uma ampla gama de aplicações, incluindo ciência de dados, desenvolvimento de aplicativos, automação de tarefas e muito mais. Com uma comunidade ativa e vasta biblioteca, é uma das linguagens mais populares e versáteis do mundo. ",
      aplication: "Como desenvolvedor Python, tive a oportunidade de trabalhar em diversos projetos envolvendo aplicações web, análise de dados, automação de tarefas e outras soluções customizadas.",
      exemplos: ["Aplicação web de gerenciamento de estoque utilizando Django e SQLite.",
                 "Análise de sentimentos em grande quantidade de dados utilizando Python e bibliotecas como Pandas e Numpy.",
                 "Automatização de processos de negócios com o uso de scripts Python e biblioteca Selenium."]
    },
    {
      id: 11,
      icon: <SiFirebase className="firebase skills__icone" />,
      title: "Firebase",
      description:
        "Linguagem de programação de alto nível e interpretada. É fácil de aprender, possui uma sintaxe clara e legível, e é utilizada para uma ampla gama de aplicações, incluindo ciência de dados, desenvolvimento de aplicativos, automação de tarefas e muito mais. Com uma comunidade ativa e vasta biblioteca, é uma das linguagens mais populares e versáteis do mundo. ",
      aplication: "Como desenvolvedor Python, tive a oportunidade de trabalhar em diversos projetos envolvendo aplicações web, análise de dados, automação de tarefas e outras soluções customizadas.",
      exemplos: ["Aplicação web de gerenciamento de estoque utilizando Django e SQLite.",
                 "Análise de sentimentos em grande quantidade de dados utilizando Python e bibliotecas como Pandas e Numpy.",
                 "Automatização de processos de negócios com o uso de scripts Python e biblioteca Selenium."]
    },
  ];


  console.log(props.index)
  const descricao = dados[props.index - 1]
  console.log(descricao.exemplos.map(function (d) { console.log(d) }))

  return (
    <>
      <div className="data__container alter">
        <div className="data__header">
          {descricao.icon}
          <h3 className='data__title'>{descricao.title}</h3>

        </div>

        <p style={{marginBottom:'1rem', fontSize:"20px"}}>{descricao.description}</p>
        <p style={{marginBottom:'1rem', fontSize:"20px"}}>{descricao.aplication}</p>
        <h4 style={{fontSize:'16px', fontWeight:"600", marginBottom:"1rem"}}>Trabalhos realizados</h4>
        <ul>


          {descricao.exemplos.map(function (exemplo) {
            return (
                < li className = "data__modal" style={{display:'flex',marginBottom:'0.25rem', marginLeft:'0.5rem'}}>
                  <i className="uil uil-check-circle"></i>
                  <p style={{marginLeft:'0.25rem', fontSize:"20px"}}>{exemplo}</p>
                </li>
              
            )
                })}
                

      </ul>

    </div>
    </>
  )
}

export default Data
import React, { useState } from 'react'
import './qualification.css'
import unifal from '../../assets/unifal.png'
import unis from '../../assets/unis.png'

import freelancer from '../../assets/free.png'
import saomarco from '../../assets/saomarco.png'


const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
 
    return ( 
        <section className="qualification section" id='qualificacoes'>
            <h2 className="section__title">Qualificações</h2>
            <span className="section__subtitle">Minha jornada pessoal</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className={toggleState === 1
                            ? "uil uil-graduation-cap qualification__icon qualification__active"
                            : "uil uil-graduation-cap qualification__icon"}></i>Formação
                    </div>

                    <div className={toggleState === 2
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className={toggleState === 2
                            ? "uil uil-briefcase-alt qualification__icon qualification__active"
                            : "uil uil-briefcase-alt qualification__icon"}></i>Experiência
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"}>

                        {/* MESTRADO */}
                        <div className="qualification__data">
                            <div className='qualification__conteudo' style={{ display: 'flex', gap: '20px' }}>
                                <div className="imagem__faculdade" style={{ width: '70px' }}>
                                    <img src={unifal} />
                                </div>
                                <div className="qualification__item" style={{ alignItems: 'end', display: 'flex', flexDirection: 'column'}}>

                                    <h3 className="qualification__title">Mestrado Estatística</h3>
                                    <span className="qualification__subtitle">Estatistica Aplicada<br></br>Inteligência Artificial</span>
                                    <span className="qualification__subtitle">
                                        Unifal-MG</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2022 - Presente
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* ATUARIA */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div className="qualification__item" style={{ alignItems: 'start', display: 'flex', flexDirection: 'column' }}>

                                    <h3 className="qualification__title">Ciências Atuariais</h3>
                                    <span className="qualification__subtitle">
                                        Unifal-MG</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2018 - 2022
                                    </div>
                                </div>
                                <div className="imagem__faculdade" style={{ width: '70PX' }}>
                                    <img src={unifal} />
                                </div>
                            </div>

                        </div>

                        {/* ENGENHARIA */}
                        <div className="qualification__data">
                            <div className='qualification__conteudo' style={{ display: 'flex', gap: '20px' }}>
                                <div className="imagem__faculdade" style={{ width: '70PX' }}>
                                    <img src={unis} />
                                </div>
                                <div className="qualification__item" style={{ alignItems: 'end', display: 'flex', flexDirection: 'column' }}>

                                    <h3 className="qualification__title">Engenharia Mecânica</h3>
                                    <span className="qualification__subtitle">
                                        UNIS-MG</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2017 - 2021
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* ECONOMIA */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div className="qualification__item" style={{ alignItems: 'start', display: 'flex', flexDirection: 'column' }}>

                                    <h3 className="qualification__title">Ciência e Economia</h3>
                                    <span className="qualification__subtitle">
                                        Unifal-MG</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2018 - 2021
                                    </div>
                                </div>
                                <div className="imagem__faculdade" style={{ width: '70PX' }}>
                                    <img src={unifal} />
                                </div>
                            </div>

                        </div>


                    </div>
                    {/* ----------------------------------------------------------------------------------------------- */}
                    {/* ----------------------------------------------------------------------------------------------- */}
                    {/* ----------------------------------------------------------------------------------------------- */}
                    {/* ----------------------------------------------------------------------------------------------- */}
                    {/* ----------------------------------------------------------------------------------------------- */}

                    {/* FREELANCER */}
                    <div className={toggleState === 2
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"}>

                        {/* MESTRADO */}
                        <div className="qualification__data">
                            <div className='qualification__conteudo' style={{ display: 'flex', gap: '20px' }}>
                                <div className="imagem__faculdade" style={{ width: '70px' }}>
                                    <img src={freelancer} />
                                </div>
                                <div className="qualification__item" style={{ alignItems: 'end', display: 'flex', flexDirection: 'column' }}>

                                    <h3 className="qualification__title">Freelancer</h3>
                                    <span className="qualification__subtitle">Desenvolvimento e automação</span>
                                    
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2019 - Presente
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* PROFESSOR SUBSTITUTO */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div className="qualification__item" style={{ alignItems: 'start', display: 'flex', flexDirection: 'column' }}>

                                <h3 className="qualification__title">Professor substituto</h3>
                                    <span className="qualification__subtitle">Ciência da computação <br></br> Matemática licenciatura</span>
                                    <span className="qualification__subtitle">
                                        Unifal-MG</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2023
                                    </div>
                                </div>
                                <div className="imagem__faculdade" style={{ width: '70PX' }}>
                                    <img src={unifal} />
                                </div>
                            </div>

                        </div>

                        {/* ESTAGIO DOCENCIA */}
                        <div className="qualification__data">
                            <div className='qualification__conteudo' style={{ display: 'flex', gap: '20px' }}>
                                <div className="imagem__faculdade" style={{ width: '70PX' }}>
                                    <img src={unifal} />
                                </div>
                                <div className="qualification__item" style={{ alignItems: 'end', display: 'flex', flexDirection: 'column' }}>

                                    <h3 className="qualification__title">Estágio docência</h3>
                                    <span className="qualification__subtitle">Inteligência Artificial</span>
                                    <span className="qualification__subtitle">
                                        Unifal-MG</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2023
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* SAO MARCO */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div className="qualification__item" style={{ alignItems: 'start', display: 'flex', flexDirection: 'column' }}>

                                    <h3 className="qualification__title">Estágio Engenharia</h3>
                                    <span className="qualification__subtitle">Planejamento e Controle de <br></br>Produção</span>
                                    <span className="qualification__subtitle">
                                        São Marco Ltda</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2017 - 2018
                                    </div>
                                </div>
                                <div className="imagem__faculdade" style={{ width: '50px' }}>
                                    <img src={saomarco} style={{backgroundColor:"#579bdf", borderRadius:'10px'}}/>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
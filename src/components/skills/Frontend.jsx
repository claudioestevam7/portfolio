import React, { useState } from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiGithub, SiReact } from 'react-icons/si';
import Data from './Data';
import './frontend.css'

const Frontend = () => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className="alter skills__content">
            <h3 className="skills__title">Desenvolvimento Frontend</h3>

            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">
                        <SiHtml5 className='html skills__icone' onClick={()=>toggleTab(1)} />
                        <div>
                            <h3 className="skils_name">HTML</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                        <div className={toggleState === 1 ? "frontend__modal frontend__active-modal" : "frontend__modal"}>
                            <div className="frontend__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                                <Data index={1} />
                            </div>

                        </div>
                    </div>

                    <div className="skills__data">
                        <SiCss3 className='css skills__icone' onClick={()=>toggleTab(2)} />
                        <div>
                            <h3 className="skils_name">CSS</h3>
                            <span className="skills_level">Advanced</span>
                        </div>
                        <div className={toggleState === 2 ? "frontend__modal frontend__active-modal" : "frontend__modal"}>
                            <div className="frontend__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                                <Data index={2} />
                            </div>

                        </div>
                    </div>

                    <div className="skills__data">
                        <SiJavascript className='js skills__icone' onClick={()=>toggleTab(3)} />
                        <div>
                            <h3 className="skils_name">JavaScript</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <div className={toggleState === 3 ? "frontend__modal frontend__active-modal" : "frontend__modal"}>
                            <div className="frontend__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                                <Data index={3} />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        < SiTailwindcss className="tailwind skills__icone" onClick={()=>toggleTab(4)} />
                        <div>
                            <h3 className="skils_name">Tailwind</h3>
                            <span className="skills_level">Básico</span>
                        </div>
                        <div className={toggleState === 4 ? "frontend__modal frontend__active-modal" : "frontend__modal"}>
                            <div className="frontend__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                                <Data index={4} />
                            </div>

                        </div>
                    </div>

                    <div className="skills__data">
                        <SiGithub className='github skills__icone' onClick={()=>toggleTab(5)} />
                        <div>
                            <h3 className="skils_name">Git</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <div className={toggleState === 5 ? "frontend__modal frontend__active-modal" : "frontend__modal"}>
                            <div className="frontend__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                                <Data index={5} />
                            </div>

                        </div>
                    </div>

                    <div className="skills__data">
                        <SiReact className='react skills__icone' onClick={()=>toggleTab(6)} />
                        <div>
                            <h3 className="skils_name">React</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <div className={toggleState === 6 ? "frontend__modal frontend__active-modal" : "frontend__modal"}>
                            <div className="frontend__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                                <Data index={6} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="skills__mais-infomations">
                [Clique nos ícones para mais informações]
            </div>

        </div>
    )
}

export default Frontend
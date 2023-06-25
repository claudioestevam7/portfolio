import React from 'react'
import { useState } from 'react';
import './backend.css'
import { GrMysql } from 'react-icons/gr';
import { SiPython, SiRstudio, SiFastapi, SiMongodb, SiFirebase } from 'react-icons/si';
import Data from './Data';
import { Python } from './Python.jsx'



const Backend = () => {

    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className="alter skills__content">
            <h3 className="skills__title">Desenvolvimento Backend </h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data" >
                        <Python className="python skills__icone" onClick={()=>toggleTab(7)} />
                        <div>
                            <h3 className="skils_name">Python</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <div className={toggleState === 7 ? "backend__modal backend__active-modal" : "backend__modal"}>
                            <div className="backend__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                                <Data index={7} />
                            </div>

                        </div>
                    </div>

                    <div className="skills__data">
                        <SiRstudio className="r skills__icone" onClick={()=>toggleTab(8)} />
                        <div>
                            <h3 className="skils_name">R</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                        <div className={toggleState === 8 ? "backend__modal backend__active-modal" : "backend__modal"}>
                            <div className="backend__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                                <Data index={8} />
                            </div>

                        </div>
                    </div>

                    <div className="skills__data">
                        <SiFastapi className="fastapi skills__icone"  onClick={()=>toggleTab(9)} />
                        <div>
                            <h3 className="skils_name">Fast API</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <div className={toggleState === 9 ? "backend__modal backend__active-modal" : "backend__modal"}>
                            <div className="backend__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                                <Data index={9} />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <GrMysql className="mysql skills__icone"  onClick={()=>toggleTab(10)} />
                        <div>
                            <h3 className="skils_name">MySQL</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <div className={toggleState === 10 ? "backend__modal backend__active-modal" : "backend__modal"}>
                            <div className="backend__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                                <Data index={10} />
                            </div>

                        </div>
                    </div>

                    <div className="skills__data">
                        <SiMongodb className="mongodb skills__icone"  onClick={()=>toggleTab(11)} />
                        <div>
                            <h3 className="skils_name">MongoDB</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <div className={toggleState === 11 ? "backend__modal backend__active-modal" : "backend__modal"}>
                            <div className="backend__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                                <Data index={11} />
                            </div>

                        </div>
                    </div>

                    <div className="skills__data">
                        <SiFirebase className="firebase skills__icone"  onClick={()=>toggleTab(12)} />
                        <div>
                            <h3 className="skils_name">Firebase</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <div className={toggleState === 12 ? "backend__modal backend__active-modal" : "backend__modal"}>
                            <div className="backend__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                                <Data index={12} />
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

export default Backend
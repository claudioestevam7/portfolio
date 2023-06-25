import React from 'react'
import { useState } from 'react'
import './datascience.css'
import { Pandas, Keras, Numpy, Tensorflow, Matplotlib, Sklearn, Plotly, Selenium, Json } from './Icones'

import Conteudo from './Conteudo'

const DataScience = () => {
  const [toggleState, setToggleState] = useState(1)

  function toggleTab(index) {
    setToggleState(index)
  }


  return ( 
    <section className="ds__section section">
      <h2 className="section__title">Data Science</h2>
      <span className="section__subtitle">Conhecimentos dentro de ciência de dados</span>

      <div className="ds__container container grid">
        <div className="ds__content">
          <div className="ds__tecnologias">
            <h3 className='ds__tecnologias-title'>Tecnologias</h3>
            <div className={toggleState===1 ? "ds_tecnologias-container ds__activate" : "ds_tecnologias-container"} onClick={() => toggleTab(1)}>
              <Pandas className='ds__icone-tecnologia' />
              <p>Pandas</p>
            </div>
            <div className={toggleState===2 ? "ds_tecnologias-container ds__activate" : "ds_tecnologias-container"} onClick={() => toggleTab(2)}>
              <Keras className='ds__icone-tecnologia' />
              <p>Keras</p>
            </div>
            <div className={toggleState===3 ? "ds_tecnologias-container ds__activate" : "ds_tecnologias-container"} onClick={() => toggleTab(3)}>
              <Numpy className='ds__icone-tecnologia' />
              <p>Numpy</p>
            </div>
            <div className={toggleState===4 ? "ds_tecnologias-container ds__activate" : "ds_tecnologias-container"} onClick={() => toggleTab(4)}>
              <Tensorflow className='ds__icone-tecnologia' />
              <p>Tensorflow</p>
            </div>
            <div className={toggleState===5 ? "ds_tecnologias-container ds__activate" : "ds_tecnologias-container"} onClick={() => toggleTab(5)}>
              <Matplotlib className='ds__icone-tecnologia' />
              <p>Matplotlib</p>
            </div>
            <div className={toggleState===6 ? "ds_tecnologias-container ds__activate" : "ds_tecnologias-container"} onClick={() => toggleTab(6)}>
              <Sklearn className='ds__icone-tecnologia' />
              <p>Sklearn</p>
            </div>
            <div className={toggleState===7 ? "ds_tecnologias-container ds__activate" : "ds_tecnologias-container"} onClick={() => toggleTab(7)}>
              <Plotly className='ds__icone-tecnologia' />
              <p>Plotly</p>
            </div>
            <div className={toggleState===8 ? "ds_tecnologias-container ds__activate" : "ds_tecnologias-container"} onClick={() => toggleTab(8)}>
              <Selenium className='ds__icone-tecnologia' />
              <p>Selenium</p>
            </div>
            <div className={toggleState===9 ? "ds_tecnologias-container ds__activate" : "ds_tecnologias-container"} onClick={() => toggleTab(9)}>
              <Json className='ds__icone-tecnologia' />
              <p>Json</p>
            </div>
          </div>






          <div className="ds__description-container">
            <div className="ds__description">
              <div className="ds__description-text">
                <Conteudo />
              </div>
            
            </div>
          </div>

        </div>


      </div>




    </section>
  )
}

export default DataScience
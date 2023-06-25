import React from 'react'
import './conteudo.css'

const Conteudo = () => {

  const data = [
    {
      title: 'Pandas',
      p_1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nesciunt reprehenderit alias deserunt suscipit quod repellendus corrupti saepe ad, rerum in voluptates quisquam. Adipisci, repellat ab. Sit corporis cum saepe?",
      p_2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id numquam repellendus architecto, magnam necessitatibus ducimus alias nobis natus illum, quidem, cum tenetur quibusdam ipsa accusantium laborum laboriosam sapiente! Quia, vel.",
      exemplos: ["Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."]
    }
  ]








  return (
    <div className='conteudo__container'>
      <h4 className='conteudo__title'>{data[0].title}</h4>

      <p className='conteudo__p1'>{data[0].p_1}</p>
      <p className='conteudo__p2'>{data[0].p_1}</p>
      <h5 className='conteudo__aplications'>Aplicações</h5>

      {data[0].exemplos.map(function (exemplo) {
        return (
          < li className="conteudo__exemplo" style={{ display: 'flex', marginBottom: '0.25rem', marginLeft: '0.5rem' }}>
            <i className="uil uil-check-square"></i>
            <p style={{ marginLeft: '0.25rem' }}>{exemplo}</p>
          </li>

        )
      })}

    </div>
  )
}

export default Conteudo
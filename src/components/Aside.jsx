import React from 'react'
import "../styles/Aside.css"

const Aside = () => {
  return (
    <aside id='aside'>

      <a href='https://devchallenges.io/' target="_blanck" className='aside__anchor'>
        <span>Dev</span>challenges.io
      </a>

      <ul className='aside__list'>
        <li className='aside__item'>Colors</li>
        <li className='aside__item'>Typography</li>
        <li className='aside__item'>Spaces</li>
        <li className='aside__item'>Buttons</li>
        <li className='aside__item'>Inputs</li>
        <li className='aside__item'>Grid</li>
      </ul>
    </aside>
  )
}

export default Aside
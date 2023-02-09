import React from 'react'
import "../styles/Button.css"



const Button = ({ 
  variant, 
  disableShadow, 
  disabled, 
  startIcon, 
  endIcon, 
  size, 
  color,
  content 
}) => {

  return (
    <button className={`
      button
      ${variant ? variant : "default"}
      ${disableShadow ? "" : "shadow"}
      ${disabled ? "disabled" : ""}
      ${size ? size : "md"}
      ${color ? `color-${color}` : "color-default"}
    `}>
      {
        startIcon ? <span className='material-icons icon-start'>{startIcon}</span> : ""
      }
      <span className='text-content'>{ content }</span>
      {
        endIcon ? <span className='material-icons icon-end'>{endIcon}</span> : ""
      }
    </button>
  )
}

export default Button
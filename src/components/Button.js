import React from 'react'

const Button = ({onClick, text, onDoubleClick}) => {
  return (
   <button onClick={onClick} onDoubleClick={onDoubleClick}>{text}</button>
  )
}

export default Button
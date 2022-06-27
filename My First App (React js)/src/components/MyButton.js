import React from 'react'

const MyButton = ({ tittle, color }) => {   // props
  return (
    <button style={{backgroundColor: color }}>{tittle}</button>
  )
}


export default MyButton;
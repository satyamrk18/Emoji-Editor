import React from 'react'
import "./EditContainer.css"
import toast from 'react-hot-toast'

const Size = ({ label, value, onChange }) => {
  return (
    <div className='edit-container'>
      <span><h3>{label}</h3></span>
      <input 
        type='range'
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        //  number convrt string value into the number
      />
      <h3>{value}</h3>
    </div>
  )
}

export default Size

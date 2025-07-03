import React from 'react'
import "./AddMoreEdit.css"
const AddMoreEdit = ({label,value,onChange}) => {
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

export default AddMoreEdit

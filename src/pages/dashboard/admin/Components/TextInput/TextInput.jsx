import React from 'react';
import './TextInput.css';
const TextInput = ({
    height,
    width,
    placeholder,
}) => {
  return (
    <div
    style={{
        height: height || '40px',
        width: width || '80%',
        margin: '10px',
    }}
    >
        <input 
       className='TextInput'
        type='text'
        placeholder={placeholder}
           />
    </div>
  )
}

export default TextInput
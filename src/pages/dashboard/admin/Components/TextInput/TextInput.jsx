import React from 'react';
import './TextInput.css';
const TextInput = ({
    height,
    width,
    placeholder,
    value,
    onChange,
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
        value={value}
        onChange={onChange}
           />
    </div>
  )
}

export default TextInput
import React from 'react';
import './TextInput.css';
const TextInput = ({
    height,
    width,
    placeholder,
    value,
    onChange,
    type
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
        type={type?type:'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        
           />
    </div>
  )
}

export default TextInput
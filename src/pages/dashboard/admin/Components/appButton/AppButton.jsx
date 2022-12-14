import React from 'react'
import './AppButton.css'
function AppButton(
    {
        buttonText,
        height,
        width,
        backgroundColor, 
        color,
        fontSize,
        onClick,
        borderRadius,
        boxShadow,
        borderColor,
        type,
    }
    ) {
       
  return (
    // <div style={{height:height,width:width,backgroundColor:'#fff'}}>
        <button 
        style={{
          border:borderColor?'1px solid #52575D':'none',
          borderRadius:borderRadius || '50px',
          height:height,
          width:width,
          backgroundColor:backgroundColor|| '#14A384',
          color:color || '#FFFFFF',
          fontFamily:'poppins',
          fontWeight:'lighter',
          cursor:'pointer',
          fontSize:fontSize || '12px',
         
          // boxShadow: 'box-shadow: rgba(20, 163, 132, 1) 0px 50px 100px -20px, rgba(20, 163, 132, 1) 0px 30px 60px -30px;',
          boxShadow: !boxShadow?'rgba(20, 163, 132, 1) 0px 0px 0px 0px ' :'rgba(20, 163, 132, 1) 0px 15px 25px -15px ',
          // boxShadow: '27px 54px 81px -50px rgba(20,163,132,0.75)',
          // webkitBoxShadow: '27px 54px 81px -50px rgba(20,163,132,0.75)',
          // mozBoxShadow: '27px 54px 81px -50px rgba(20,163,132,0.75)',
          
          }}
          onClick={onClick}
          type={type}
          >
        {buttonText}
        </button>
    // </div>
  )
}

export default AppButton
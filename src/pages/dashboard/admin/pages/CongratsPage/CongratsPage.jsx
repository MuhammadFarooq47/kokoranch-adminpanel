import React from 'react';
import './CongratsPage.css';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/lotties/success.json'

const CongratsPage=()=>{

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
  <>
             <Lottie options={defaultOptions}
              height={400}
              width={400}
              />
  
  </>
  )
}

export default CongratsPage
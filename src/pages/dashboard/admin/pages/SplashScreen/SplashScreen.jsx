import React, { useEffect, useState } from 'react'
import { motion,useTransform } from "framer-motion";
import AppButton from '../../Components/appButton/AppButton';
import splashLogo from '../../assets/splashLogo.png';
import logo from '../../assets/logo.png';
import './SplashScreen.css'
import PopUp from '../../Components/popUp/CustomPopUp';
import {useNavigate} from 'react-router-dom';
import TextInput from '../../Components/TextInput/TextInput';
function SplashScreen() {
    const [state,setState]=useState(false);
    const [scale,setScale]=useState(false);
    const [openModal,setOpenModal]=useState(false);
    const navigate= useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
           setState(!state);
           
        },1000);
        setTimeout(()=>{
          setScale(!scale);
        },[2200])
    },[])
  return (
    <div style={{'backgroundColor':'#1E1E1E',display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',width:'100vw',margin:0,padding:0}}>
    <div style={{position:'relative'}}>
    <motion.div
    animate={{
      // scale: [1, 2, 2, 1, 1],
      rotate: 360
      // borderRadius: ["0%", "0%", "50%", "50%", "0%"]
    }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      bounce:2,
      // repeat: Infinity,
      // repeatDelay: 1
    }}
  >
    <img src={splashLogo} style={{'height':'700px',"width":"700px"}} />
    </motion.div>
    </div>
    <div style={{position:'absolute',zIndex:10}}>

    <motion.div
    // style={{x}}
    animate={
      !state?{
        x:  0 ,
        y: 0 ,
        // top:[-50,0],
        // left:[-50,0],
        scale:[0,0.7,0.4,0.6,0.4],
        rotate: 0,
      }
      :
      {
      x:  [0,-550],
      y:  [0,-280],
      // top:[-50,0],
      // left:[-50,0],
      scale:  [0,0.7,0.4,0.6,0.4] ,
      // scale:  [0,0.7,0.7,0.6,0.7,0.4] ,
      rotate: 0,
    }
  }
    transition={
      {
      duration: 1,
      delay:2,
      ease: "easeInOut",
      times: [0, 0.3, 0.5, 0.8, 1]
      // repeat: Infinity,
      // repeatDelay: 1
    }
  }>
    <img src={logo}/>
    </motion.div>
      </div>
      {/* loginform */}
      <div style={{position: 'absolute',zIndex: 50}}>
      <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 4,
        ease: [0, 0.71, 0.2, 1.01]
          }}
        >
        <div className='loginForm'>
          <h3 style={{fontFamily:'poppins',color:'#FFFFFF',fontSize:'30px',opacity: 1,textAlign:'center',fontWeight:'lighter'}}>
          Admin/Manager Login
          </h3>
          {/* inputs */}
          <div className='formBody'>
          <TextInput placeholder='Email or Phone'  />
          <TextInput placeholder='Enter Password' />
          {/* forgotpassowrd */}
          <div className='forgotPassowrd'>
            <div style={{display:'flex'}}>
              <input type="checkbox" />
              <span style={{color:'#FFFFFF',fontFamily: 'poppins',fontWeight:'lighter',fontSize:'12px',marginLeft:"5px"}}>Remember me</span>
            </div>
            <span style={{color:'#14A384',fontFamily: 'poppins',fontSize:'12px',cursor:'pointer'}} onClick={()=>setOpenModal(true)}> Forgot Password?</span>
          </div>
          </div>
          <AppButton height={'43px'} width={'18vw'} buttonText={'Login'} onClick={()=>navigate('/admin-profile')}  />
      </div>
      </motion.div>
    </div>
    {/* <div style={{position: 'absolute',zIndex: 60}}> */}
      <PopUp open={openModal} setOpen={setOpenModal} forgot={true} onClick={()=>{navigate('/otp-screen')}}/>
    {/* </div> */}
    </div>
  )
}

export default SplashScreen
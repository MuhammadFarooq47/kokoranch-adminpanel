import React, { useEffect, useState } from 'react'
import { motion,useTransform } from "framer-motion";
import AppButton from '../../Components/appButton/AppButton';
import splashLogo from '../../assets/splashLogo.png';
import logo from '../../assets/logo.png';
import './SplashScreen.css'
import PopUp from '../../Components/popUp/CustomPopUp';
import {useNavigate} from 'react-router-dom';
import TextInput from '../../Components/TextInput/TextInput';
import {Login} from "../../../../../apiCalls/auth";
import { Formik, Form, Field } from 'formik';
import { toast } from "react-toastify";
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
function SplashScreen() {
  const dispatch=useDispatch();
    const [state,setState]=useState(false);
    const [scale,setScale]=useState(false);
    const [openModal,setOpenModal]=useState(false);
    const [cred,setCred]=useState({
      email:'',
      password:''
    });
    const navigate= useNavigate();
    const [windowSize, setWindowSize] = useState(getWindowSize());
    function getWindowSize() {
      const {innerWidth, innerHeight} = window;
      return {innerWidth, innerHeight};
    }
    useEffect(() => {
      function handleWindowResize() {
        console.log(windowSize.innerWidth)
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
    useEffect(()=>{
        setTimeout(()=>{
           setState(!state);
           
        },1000);
        setTimeout(()=>{
          setScale(!scale);
        },[2200])
    },[])
  return (
    <div  style={{'backgroundColor':'#1E1E1E',display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',width:'100vw',margin:0,padding:0}}>
    <div className='chat-sidebar' style={{position:'relative'}}>
    <motion.div
    style={{overflow:'none'}}
    animate={{
      // scale: [1, 2, 2, 1, 1],
      rotate: 360
      // borderRadius: ["0%", "0%", "50%", "50%", "0%"]
    }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      // bounce:2,
      // repeat: Infinity,
      // repeatDelay: 1
    }}
  >
    <img className='chat-sidebar' src={splashLogo} style={{'height':'100%',"width":"35vw"}} />
    </motion.div>
    </div>
    <div className='chat-sidebar' style={{position:'absolute',zIndex:10}}>
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
        // x:  [0,-550],
        // y:  [0,-280],
        x:  [0,windowSize.innerWidth >1200 ?-550:windowSize.innerWidth >992 ? -400: windowSize.innerWidth >=768 ? -0:windowSize.innerWidth >600 ? -200:-0],
        y:  [0,windowSize.innerWidth >1200 ?-260:windowSize.innerWidth >=1024 ?-220:windowSize.innerHeight >=1200 ?-480:windowSize.innerHeight >=1000 ?-400:windowSize.innerHeight >=915 ?-340:windowSize.innerHeight >=840 ?-300:windowSize.innerHeight >=800 ?-300:windowSize.innerHeight >=740 ?-300:windowSize.innerHeight >=600 ? -260:-220],
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
      <div className='chat-sidebar' style={{position: 'absolute',zIndex: 50}}>
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
        <div className='loginForm' >
          <h3 style={{fontFamily:'poppins',color:'#FFFFFF',fontSize:'30px',opacity: 1,textAlign:'center',fontWeight:'lighter'}}>
          Admin/Manager Login
          </h3>
          {/* inputs */}
          <Formik
       initialValues={{
         password: '',
         email: '',
       }}
       validationSchema={LoginSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
         Login(values.email,values.password,navigate,toast,dispatch)
       }}
       
     >
      {({ errors, touched }) => (
       <Form className='form'>
          <div className='formBody'>
          <Field 
          className='TextInput'
          placeholder='Email or Phone' 
          type={'email'}
          name='email'
          />
           {errors.email && touched.email ? (
             <div style={{color:'red',fontSize:'12px'}}>{errors.email}</div>
           ) : null}
          <Field name='password' className='TextInput' placeholder='Enter Password' type={'password'} 
          />
           {errors.password && touched.password ? (
             <div style={{color:'red',fontSize:'12px'}}>{errors.password}</div>
           ) : null}
          {/* forgotpassowrd */}
          <div className='forgotPassowrd'>
            <div style={{display:'flex'}}>
              <input type="checkbox" />
              <span style={{color:'#FFFFFF',fontFamily: 'poppins',fontWeight:'lighter',fontSize:'12px',marginLeft:"5px"}}>Remember me</span>
            </div>
            <span style={{color:'#14A384',fontFamily: 'poppins',fontSize:'12px',cursor:'pointer'}} onClick={()=>setOpenModal(true)}> Forgot Password?</span>
          </div>
          </div>
          <AppButton type={'submit'} height={'43px'} width={'18vw'} buttonText={'Login'} 
          
          />
       </Form>
        )}
          </Formik>
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
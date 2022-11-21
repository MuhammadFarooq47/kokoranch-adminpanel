import React, { useState } from 'react'
import './OtpScreen.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OTPInput, { ResendOTP } from "otp-input-react";
import AppButton from '../../Components/appButton/AppButton';
import NearMeIcon from '@mui/icons-material/NearMe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as SendIcon } from '../../assets/SendIcon.svg';
import { Link ,useNavigate} from 'react-router-dom';

const OtpScreen = () => {
  const [OTP, setOTP] = useState("");
  const navigate=useNavigate()
  return (
    <div className='OtpContainer'>
        <Link to='/'>
        <div className='backButton'>
            <ArrowBackIcon style={{color:'#14A384',cursor:'pointer'}} />
            <span style={{color:'#F5F5F5',fontSize:'18px',fontFamily:'var(--font-style)'}}>Back</span>
        </div>
        </Link>
        <div className='OtpScreenBody'>
          <div className='OtpBody'>
            <h3 style={{fontFamily:'var(--font-style)',color:'#FFFFFF',fontWeight:'bold',fontSize:'24px'}} >Reset password</h3>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <span style={{fontFamily:'var(--font-style)',color:'#AAAAAA',fontWeight:'lighter',fontSize:'16px'}}>Please enter the 6 digits code sent to you registered email </span>
              <span style={{fontFamily:'var(--font-style)',color:'#AAAAAA',fontWeight:'lighter',fontSize:'16px'}}>address ab***@gmail.com</span>
            </div>
           <OTPInput 
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
            secure
            inputStyles={{height:'40px',width:'40px',backgroundColor:'#52575D',border:'none',borderRadius:'15%',outline:'none',fontSize:'20px',color:'#A3A3A3'}}
            />
             <div className='sendSmsText'>
             <SendIcon height={30} />
              <span style={{color:'#AAAAAA', fontFamily:'var(--font-style)',fontSize:'12px'}}>Send Code By SMS</span>
             </div>
            <AppButton buttonText={'NEXT'} height={'43px'} width={'18vw'} onClick={()=>navigate("/create-new-password")}  />
          </div>
       
        </div>

    </div>
  )
}

export default OtpScreen
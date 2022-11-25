import React, { useState } from 'react'
import './CreateNewPassword.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextInput from '../../Components/TextInput/TextInput';
import AppButton from '../../Components/appButton/AppButton';
import PopUp from '../../Components/popUp/CustomPopUp';
import { Link, useNavigate } from 'react-router-dom';
const CreateNewPassword = () => {
    const [open,setOpen]=useState(false);
    const navigate=useNavigate();
  return (
    <>
    <div className='CreateNewPasswordContainer'>
            <Link to='/'>
            <div style={{  display: 'flex',justifyContent: 'flex-end', alignItems: 'center',}}>
                    <ArrowBackIcon style={{color:'#14A384',cursor:'pointer'}} />
                    <span style={{color:'#F5F5F5',fontSize:'18px',fontFamily:'var(--font-style)'}}>Back</span>
                </div>
            </Link>

            <div className='newPasswordScreenBody'>
                <div className='newPasswordBody'>
                    <h3 style={{fontFamily:'var(--font-style)',color:'#FFFFFF',fontWeight:'bold'}} >Create New Password</h3>
                    <div style={{width:'100%',display:'flex',alignItems:'center',flexDirection:'column',gap:'5px'}}>
                    <TextInput placeholder={'New Password'} width={'55%'} height={'45px'}/>
                    <TextInput placeholder={'Confirm Password'} width={'55%'} height={'45px'} />
                    </div>
                    <AppButton buttonText={'Update Password'} height={'43px'} width={'18vw'} onClick={()=>{setOpen(true)}} />
                </div>
            </div>
    </div>
            <PopUp open={open} setOpen={setOpen} passwordChanged navigate={navigate}/>
    </>
  )
}

export default CreateNewPassword
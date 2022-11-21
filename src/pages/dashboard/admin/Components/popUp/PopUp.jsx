import React from 'react'
import './PopUp.css';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import forgotIcon from '../../assets/forgotIcon.png'
import AppButton from '../appButton/AppButton';
import { CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/lotties/success.json'
import { Navigate } from 'react-router-dom';

const PopUp = ({forgot,open,setOpen,onClick,passwordChanged,navigate}) => {
    const handleClose = () =>{ 
      setOpen(false);
      passwordChanged && navigate('/');
    
    };
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
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    > 
                    <Grid container justifyContent={'center'} alignItems='center' style={{height:'100vh'}}   >
                      <Grid item p={2} lg={3} sm={4} md={4} xs={8} xl={3} direction='column' alignItems='center'   sx={{ display:'flex' ,minHeight:'300px',height:"300px", backgroundColor:'#1E1E1E',border:passwordChanged ?'0.5px solid #14A384':'none',borderRadius:5}} >
                      <div style={{dispaly:'inline-flex',flexDirection:'column',justifyContent:'space-between',height:'100%',width:'100%'}}>
                      <div style={{display:'flex',flexDirection:'row-reverse',width:'100%'}}>
                        <CancelIcon style={{ color: '#A3A3A3',fontSize:'30px',cursor:'pointer' }} onClick={handleClose} />
                      </div>
                      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between',height:'90%',padding:0}}>
                      {
                      passwordChanged && (
                      <>
                      <Lottie options={defaultOptions}
                      height={150}
                      width={150}
                      />
                      <div style={{marginBottom:'15px'}}>
                      <Typography style={{fontFamily:'poppins',textAlign:'center',fontSize:'14px'}} color='#EAF2FF'>Password Changed</Typography>
                      <Typography style={{fontFamily:'poppins',textAlign:'center',fontSize:'14px'}} color='#EAF2FF'>Successfully</Typography>                  
                      </div>
                     
                     
                      <AppButton 
                      buttonText={'continue'}
                      height={'38px'}
                      width={'30%'} 
                      borderRadius={'12px'} 
                      onClick={()=>{
                        setOpen(false);
                        navigate('/');
                      }} />
                      </>
                      )}
                      {
                        forgot && ( 
                          <>
                          <img src={forgotIcon}  />
                          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                          <h3 style={{color:'#FFFFFF',fontFamily:'poppins',fontSize:'20px',fontWeight:'bold'}}>Forgot Password</h3>
                          <span style={{color:'#52575D',fontFamily:'poppins',fontSize:'12px',fontWeight:'lighter'}}>Are you sure you want to Forgot Password?</span>
                          </div>
                          <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',width:'100%'}}>
                          <AppButton height={'40px'} width={'30%'} buttonText={'No'} onClick={handleClose}  />
                          <AppButton height={'40px'} width={'30%'} buttonText={'Yes'} backgroundColor={'#E4201E'} onClick={onClick} />    
                          </div>
                          
                          </>
                          )}
                      
                      </div>
                      </div>
                      </Grid>  
                    </Grid>
                  </Modal> 
            
             
        </>
  )
}

export default PopUp
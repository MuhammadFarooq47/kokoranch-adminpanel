import React, { useState,useCallback } from "react";
import NavBar from "./NavBar";
import Popup from "../../../components/popUp/popUp";
import { TiTick } from "react-icons/ti";
import { useNavigate, useLocation } from "react-router-dom";
import { Avatar, Grid } from "@mui/material";
import {useDropzone} from 'react-dropzone'
import { useEffect } from "react";
import {BsImage} from 'react-icons/bs'
import AppButton from './Components/appButton/AppButton'

const AddNewManager = ({ setSidebar, sidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: index, src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    open,
    isDragAccept,
    isFocused,
    isDragReject,
  } = useDropzone({
    accept: 'image/*',
    onDrop,
    noClick: true,
    noKeyboard: true,
  });
  const lists = acceptedFiles.map((list) => (
    <li key={list.path}>
      {list.path} - {list.size} bytes
    </li>
  ));

  return (
    <div>
       
      <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title="Add New Manager"
      />

      <div className="bg-black-pad my-5 " style={{height:'80vh'}} >
        {/* //drag and drop section */}
        <div className="soi-top">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-1 d-flex justify-content-end align-items-center">
            <h3
              className="mx-3"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(-1);
              }}
            >
              <span className="vtext-primary mx-2">&#10229;</span>Back
            </h3>
          </div>
          <h3 style={{color:'#14A384',fontWeight:'bold'}}>
            Manager Information
          </h3>
        </div>
        </div>
      <div style={{height:'80vh',border:'none'}}>
        <div className='chat-sidebar' style={{height:'60vh',widht:'100%',display:'flex',overflowY:'scroll'}}>
            <Grid container justifyContent={'space-between'} spacing={2}>
                <Grid item xl={3} lg={12} sm={12} md={12} xs={12} flexDirection='column' style={{height:'fit-content'}}>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',height:'100%',gap:'10px'}}>
                    <label>First Name</label>
                    <div style={{height:'40px',border:'none',color:'#EAF2FF',backgroundColor:'#1d2423',paddingLeft:'10px'}}>
                    <input type='text'  style={{border:'none',height:'100%',width:'100%',backgroundColor:'#1d2423',color:'#EAF2FF'}}/>
                    </div>
                    </div>
                </Grid>
                <Grid item xl={3} lg={12} sm={12} md={12} xs={12} flexDirection='column' style={{height:'fit-content'}}>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',height:'100%',gap:'10px'}}>
                    <label>Last Name</label>
                    <div style={{height:'40px',border:'none',color:'#EAF2FF',backgroundColor:'#1d2423',paddingLeft:'10px'}}>
                    <input type='text'  style={{border:'none',height:'100%',width:'100%',backgroundColor:'#1d2423',color:'#EAF2FF'}}/>
                    </div>
                    </div>
                </Grid>
                <Grid item xl={3} lg={12} sm={12} md={12} xs={12} flexDirection='column' style={{height:'fit-content'}}>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',height:'100%',gap:'10px'}}>
                    <label>Email Address</label>
                    <div style={{height:'40px',border:'none',color:'#EAF2FF',backgroundColor:'#1d2423',paddingLeft:'10px'}}>
                    <input type='text'  style={{border:'none',height:'100%',width:'100%',backgroundColor:'#1d2423',color:'#EAF2FF'}}/>
                    </div>
                    </div>
                </Grid>
                <Grid item xl={3} lg={12} sm={12} md={12} xs={12} flexDirection='column' style={{height:'fit-content'}}>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',height:'100%',gap:'10px'}}>
                    <label>Phone Number</label>
                    <div style={{height:'40px',border:'none',color:'#EAF2FF',backgroundColor:'#1d2423',paddingLeft:'10px'}}>
                    <input type='text'  style={{border:'none',height:'100%',width:'100%',backgroundColor:'#1d2423',color:'#EAF2FF'}}/>
                    </div>
                    </div>
                </Grid>
                <Grid item xl={3} lg={12} sm={12} md={12} xs={12} style={{height:'fit-content'}}>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',height:'100%',gap:'10px'}}>
                    <label>Password</label>
                    <div style={{height:'40px',border:'none',color:'#EAF2FF',backgroundColor:'#1d2423',paddingLeft:'10px'}}>
                    <input type='text'  style={{border:'none',height:'100%',width:'100%',backgroundColor:'#1d2423',color:'#EAF2FF'}}/>
                    </div>
                    </div>
                    <label style={{color:'#1492E6',cursor:'pointer'}}><u>Generate new Password</u></label>
                </Grid>
                <Grid item xl={3} lg={12} sm={12} md={12} xs={12}  style={{height:'70px'}} alignItems={'center'} justifyContent='space-between'>
                <div style={{height:'100%',width:'100%',display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
                <AppButton buttonText={'Cancel'} height={'80%'} onClick={()=>navigate(-1)} width={'30%'} backgroundColor={'transparent'} color={'#14A384'} boxShadow={false} borderColor={'#52575D'}/>
                <AppButton buttonText={'Next'} height={'80%'} width={'30%'} backgroundColor={'#14A384'} boxShadow={false} onClick={()=>navigate('/manager-roles')} />
                </div>
                </Grid>
                
            </Grid>
            <Grid container  justifyContent={'flex-end'} p={2}>
                <Grid item lg={8} display='flex' flexDirection={'column'} alignItems='center' gap={2} p={2} >
                    <div 
                    {...getRootProps({ isDragAccept, isFocused, isDragReject })}
                    style={{width:'70%',display:'flex',flexDirection:'column',alignItems:'center',gap:'10px',justifyContent:'center',height:'200px',border:'0.1px solid #14A384',borderRadius:'10%',borderStyle:'dashed'}}>
                    <BsImage fill={'#14A384'} size={50}/>
                    <input {...getInputProps()} />
                    <label style={{color:'#14A384',fontSize:'12px'}}>Upload Or drag Image Here</label>
                    </div>
                    <label style={{color:'#14A384',fontSize:'12px',cursor:'pointer'}} onClick={open}>Upload Picture</label>
                    {/* <section className="dropbox">
                      <Container
                        className="dropbox"
                        {...getRootProps({ isDragAccept, isFocused, isDragReject })}
                      >
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here</p>
                        <button type="button" className="btn" onClick={open}>
                          Click to select file
                        </button>
                      </Container>
                    </section> */}
                    <aside>
                      <p>{lists}</p>
                    </aside>
                </Grid>
               
            </Grid>
        </div>
      </div>
      {/* <>
      {' '}
      <section className="dropbox">
        <Container
          className="dropbox"
          {...getRootProps({ isDragAccept, isFocused, isDragReject })}
        >
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here</p>
          <button type="button" className="btn" onClick={open}>
            Click to select file
          </button>
        </Container>
      </section>
      <aside>
        <h4>List</h4>
        <p>{lists}</p>
      </aside>
      </> */}
    </div>
    </div>
  );
};

export default AddNewManager;

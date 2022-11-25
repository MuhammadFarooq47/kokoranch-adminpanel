import React, { useState,useCallback } from "react";
import NavBar from "./NavBar";
import Popup from "../../../components/popUp/popUp";
import { TiTick } from "react-icons/ti";
import { useNavigate, useLocation } from "react-router-dom";
import { Avatar, Grid } from "@mui/material";
import {useDropzone} from 'react-dropzone'
import { useEffect } from "react";
import styled from 'styled-components';
const getColor = (props) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isFocused) {
    return '#2196f3';
  }
  return '#eeeeee';
};
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: black;
  font-weight: bold;
  font-size: 1.4rem;
  outline: none;
  transition: border 0.24s ease-in-out;
`;
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
        title="Managers"
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
        <div style={{height:'100%',widht:'100%',backgroundColor:'red',display:'flex'}}>
            <Grid container>
                <Grid item xl={3} lg={12} sm={12} md={12} xs={12} style={{backgroundColor:'green'}}>
                    abcd
                </Grid>
                <Grid item xl={3} lg={12} sm={12} md={12} xs={12} style={{backgroundColor:'yellow'}}>
                    abcd
                </Grid>
                <Grid item xl={3} lg={12} sm={12} md={12} xs={12} style={{backgroundColor:'blue'}}>
                    abcd 
                </Grid>
                <Grid item xl={3} lg={12} sm={12} md={12} xs={12} style={{backgroundColor:'blueviolet'}}>
                    abcd
                </Grid>
            </Grid>
            <Grid container >
                <Grid item lg={12}>
                    213212
                </Grid>
                <Grid item lg={12}>
                    213212
                </Grid>
                <Grid item lg={12}>
                    213212
                </Grid>
                <Grid item lg={12}>
                    213212
                </Grid>
                <Grid item lg={12}>
                    213212
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

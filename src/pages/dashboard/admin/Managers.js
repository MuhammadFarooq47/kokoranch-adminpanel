import React, { useState } from "react";
import NavBar from "./NavBar";
import Popup from "../../../components/popUp/popUp";
import { TiTick } from "react-icons/ti";
import { useNavigate, useLocation } from "react-router-dom";
import { Avatar, Grid } from "@mui/material";
import Manager2 from '../../../assets/images/manager2.png';
import Manager3 from '../../../assets/images/manager3.png';
import Manager4 from '../../../assets/images/manager4.png';
import Manager5 from '../../../assets/images/manager5.png';
import Manager6 from '../../../assets/images/manager6.png';
import Manager7 from '../../../assets/images/manager7.png';
const Managers = ({ setSidebar, sidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active,setActive]=useState(true);
  const [managers,setManagers]=useState([
    {
        name:'Janet Fuller',
        img:Manager2,
        designation:'Manager',
        active:true,
    },
    {
        name:'Tyler Coleman',
        img:Manager3,
        designation:'Manager',
        active:false,
    },
    {
        name:'Roger Holmes',
        img:Manager4,
        designation:'Manager',
        active:true,
    },
    {
        name:'Chris Andrews',
        img:Manager5,
        designation:'Manager',
        active:false,
    },
    {
        name:'Martha Sullivan',
        img:Manager6,
        designation:'Manager',
        active:false,
    },
    {
        name:'Martha Sullivan',
        img:Manager7,
        designation:'Manager',
        active:false,
    },
  ]);
  return (
    <div>
      <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title="Managers"
      />
    <div style={{display:'flex',alignItems:'center',width:'100%',justifyContent:'space-between',marginTop:'10px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
        <button
            className="btn btn-solid btn-solid-primary soi-success-btn"
            style={{borderRadius:'6px'}}
            onClick={() => setActive(true) }
          >
            Active Managers
          </button>
          <button
            className="btn btn-solid soi-success-btn"
            style={{backgroundColor:'#52575D',borderRadius:'6px'}}
            onClick={() => setActive(false)}
          >
            Disabled Managers
          </button>
        </div>
        <button
            className="btn btn-solid btn-solid-primary soi-success-btn"
            style={{borderRadius:'6px'}}
            onClick={() => navigate('/add-new-manager')}
          >
            Add New Manager
          </button>
    </div>
      <div className="bg-black-pad my-5 " style={{height:'70vh'}} >
        <Grid container className="managersContainer" style={{width:'100%',height:'100%',overflowY:'scroll'}} p={8} alignItems='center' justifyContent={'center'}>
           {managers.map(manager=>(
            <Grid item lg={3} md={4} sm={6} xs={12} style={{height:'200px',marginTop:'15px',marginBottom:'10px'}}>
                <div 
                style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    gap:'5px',
                    justifyContent:'center',
                    // border:`2px solid ${active?active.manager?'#14A384':'gray':!manager.active?'#E4201E':'gray'}`,
                    border: active? manager.active? '2px solid #14A384':'2px solid #686868':!manager.active?'2px solid #E4201E':'2px solid #686868' ,
                    width:'150px',
                    height:'100px',
                    borderRadius:'10px',
                    boxShadow:active?manager.active?'rgba(20, 163, 132, 1) 0px 20px 30px -10px':'rgba(20, 163, 132, 1) 0px 0px 0px 0px':!manager.active?'rgba(228, 32, 30, 1) 0px 20px 30px -10px':'rgba(228, 32, 30, 1) 0px 0px 0px 0px',
                    position:'relative',
                    // backgroundColor:'aqua'
                    }}>
                        <div style={{position:'absolute',top:-80,width: '100px', height: '100px'}}>
                        <Avatar src={manager.img}  sx={{ width: '100%', height: '100%' }} />
                        {/* <img src={manager.img} style={{height:'100%',width:'100%'}} /> */}
                        </div>
                <h3>{manager.name}</h3>
                <h5 style={{color:'#686868'}}>{manager.designation}</h5>
                </div>
            </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default Managers;

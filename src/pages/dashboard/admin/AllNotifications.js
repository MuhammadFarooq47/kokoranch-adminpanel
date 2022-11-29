import { Grid } from '@mui/material';
import React from 'react'
import { useState } from 'react'
import {FaRegCalendarAlt} from 'react-icons/fa';
import { ReactComponent as FilterIcon } from "../../../assets/images/icons/filter-icon.svg";
import Popup from '../../../components/popUp/popUp';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import NavBar from './NavBar'
const AllNotifications = ({sidebar,setSidebar}) => {
    const [showFilterProp,setShowFilterProp]=useState(false);
    const [open,setOpen]=useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [notifications,setNotifications]=useState([
        {
            notification:'Admin blocked user Sara Miller (User ID: 1234)',date:'12-28-2022'
        },
        {
            notification:'Manager Henry updated product status as inactive (Product ID: 1234)',date:'12-28-2022'
        },
        {
            notification:'Manager Chris deleted product Cactus (Product ID: 1234)',date:'12-28-2022'
        },
        {
            notification:'User Sara Miller marked product Cactus as delivered (Product Id: 1234)',date:'11-28-2022'
        },
        {
            notification:'User Henry Miller uploaded new product (Product Id: 1234)',date:'10-2-2022'
        },
        {
            notification:'New User Dan Moore signed up as Vendor (User ID: 1234)',date:'12-2-2022'
        },
        {
            notification:'User Henry Miller uploaded new product (Product Id: 1234)',date:'12-28-2022'
        },
        {
            notification:'User Mike Henry changed his password (User ID)',date:'12-28-2022'
        },
        {
            notification:'User Mike Henry changed his password (User ID)',date:'12-28-2022'
        },
    ])
  return (
    <div>
        <Popup open={open} setOpen={setOpen}>
            <div style={{height:'100px'}}>

            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
        </Popup>
     <NavBar setSidebar={setSidebar} sidebar={sidebar} title="Settings" />
        <div className="bg-black-pad my-5 " style={{height:'80vh'}} >
        <div style={{marginBottom:'2rem'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <span style={{color:'#14A384',fontWeight:600}}>NOTE: Last 6 months activity notifications of Admin, All Managers and All Users are listed below.</span>
                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <FaRegCalendarAlt fill='#14A384' size={20} style={{cursor:'pointer'}} onClick={()=>setOpen(!open)}/>
                <FilterIcon   
                width={20}
                onClick={() => setShowFilterProp(!showFilterProp)}
                />
                </div>
            </div>
        </div>
        <div style={{marginBottom:'2rem'}}>
            <h3> <u> ALl Activity Notifications</u></h3>
        </div>
        <Grid className='chat-sidebar' container style={{height:'60vh',border:'0.5px solid #707070',borderRadius:'15px',overflowY:'scroll'}}>
            <Grid item lg={8} md={8} sm={8} xs={8} style={{height:'100%'}}>
                <div style={{height:'5vh',width:'100%',padding:'10px 0px 10px 0px',textAlign:'center',borderBottom:'0.5px solid #707070',borderRight:'0.5px solid #707070'}}>
                    <h3>
                        Activity
                    </h3>
                </div>
                <div style={{height:'55vh',display:'flex',flexDirection:'column',padding:'10px',gap:'30px'}}>
                    
                    {
                        notifications.map(notification=>(
                        <div style={{height:'40px',display:'flex',alignItems:'center',gap:'50px'}}>
                        <span>-</span>
                      <label style={{fontSize:'12px'}}>{notification.notification}</label>
                    </div>
                    ))}
                </div>

            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4} style={{height:'100%'}}>
                <div style={{height:'5vh',width:'100%',padding:'10px 0px 10px 0px',textAlign:'center',borderBottom:'0.5px solid #707070'}}>
                    <h3>
                        Date
                    </h3>
                </div>
                <div style={{height:'55vh',display:'flex',flexDirection:'column',alignItems:'center',borderLeft:'0.5px solid #707070',padding:'10px',gap:'30px'}}>
                {notifications.map(item=>(
                    <div style={{height:'40px'}}>
                    <label style={{fontSize:'12px'}}>{item.date}</label>
                    </div>
                ))}

                </div>
            </Grid>
           
        </Grid>
        </div>
       
    </div>
  )
}

export default AllNotifications
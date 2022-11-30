import { Grid } from '@mui/material';
import React from 'react'
import { useState } from 'react'
import {FaRegCalendarAlt} from 'react-icons/fa';
import { ReactComponent as FilterIcon } from "../../../assets/images/icons/filter-icon.svg";
import Popup from '../../../components/popUp/popUp';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'
import NavBar from './NavBar'
import AppButton from './Components/appButton/AppButton';
import moment from 'moment';
import { useEffect } from 'react';
const AllNotifications = ({sidebar,setSidebar}) => {
    const [showFilterProp,setShowFilterProp]=useState(false);
    const [open,setOpen]=useState(false);
    const [value, onChange] = useState(new Date());
    const[calendar,setCalendar]=useState({
        startDate:{
            show:false,
            date:''
        },
        endDate:{
            show:false,
            date:''
        },
    })
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
    const [showItems,setShowItems]=useState([]);
    const handleSelect=(date)=>{
        console.log(date); // native Date object
        setCalendar({
            ...calendar,
            startDate:{
                date:date,
                show:!calendar.startDate.show
            }
        })
    }
    const handleEndDateSelect=(date)=>{
  
        setCalendar({
            ...calendar,
            endDate:{
                date:date,
                show:!calendar.endDate.show
            }
        })
    }
    const handleSort=()=>{
        console.log('pressss>>>>>>>>>>>>>>')
            const arr = notifications.filter((item) => {
            let filterPass = true;
            const date = new Date(item.date);
            if (calendar.startDate) {
              filterPass =
                filterPass && new Date(calendar.startDate.date) <= date;
            }
            if (calendar.endDate) {
              filterPass = filterPass && new Date(calendar.endDate.date) >= date;
            }
            return filterPass;
         })
            setShowItems(arr);
            setOpen(!open)
    }
    useEffect(()=>{
    if(calendar.startDate.date == '' && calendar.endDate.date == '' ){
        setShowItems(notifications);
    }
    },[])
  return (
    <div>
        <Popup open={open} setOpen={setOpen}>
            <div style={{display:'flex',flexDirection:'column',marginBottom:'10px',gap:'15px',marginTop:'10px',alignItems:'center',textAlign:'center',justifyContent:'center',width:'100%'}}>
            <div style={{marginBottom:'10px',textAlign:'center'}}>
            <h3>Select Custom Date</h3>
            </div>
            <label style={{fontSize:'14px',color:'#FFFFFF',fontWeight:300}}>From</label>
            <div style={{width:'40%',display:'flex',alignItems:'center',justifyContent:'space-evenly',position:'relative',backgroundColor:'transparent',border:'1px solid #FFFFFF',padding:'8px 5px 8px 5px'}}>
            <div style={{width:'70%'}}>
            <span style={{fontSize:'12px'}}>{calendar.startDate.date == '' ? '':moment(calendar.startDate.date).format('MM/DD/YYYY')}</span>
            </div>
            <FaRegCalendarAlt style={{cursor:'pointer'}} size={15} onClick={()=>
            setCalendar({
                ...calendar,
                startDate:{
                    ...calendar.startDate,
                    show:!calendar.startDate.show
                }
            })
            }/>
            <div style={{position:'absolute',top:30,left:50}}>
            {calendar.startDate.show && (<Calendar
                date={new Date()}
                onChange={handleSelect}
                />)}
                </div>
            </div>
            <label style={{fontSize:'14px',color:'#FFFFFF',fontWeight:300}}>To</label>
            <div style={{width:'40%',display:'flex',alignItems:'center',justifyContent:'space-evenly',position:'relative',backgroundColor:'transparent',border:'1px solid #FFFFFF',padding:'8px 5px 8px 5px'}}>
            <div style={{width:'70%'}}>
            <span style={{fontSize:'12px'}}>{calendar.endDate.date == '' ? '':moment(calendar.endDate.date).format('MM/DD/YYYY')}</span>
            </div>
            <FaRegCalendarAlt style={{cursor:'pointer'}} size={15} onClick={()=>
            setCalendar({
                ...calendar,
                endDate:{
                    ...calendar.endDate,
                    show:!calendar.endDate.show
                }
            })
            }/>
            <div style={{position:'absolute',top:30,left:50}}>
            {calendar.endDate.show && (<Calendar
                date={new Date()}
                onChange={handleEndDateSelect}
                />)}
                </div>
            </div>
            <AppButton buttonText={'Apply'} height={'40px'} width={'20%'} onClick={handleSort} />
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
            <Grid item lg={12} md={12} sm={12} xs={12} style={{height:'100%'}}>
                    <Grid container alignItems='center'display={'flex'} style={{height:'5vh',width:'100%',textAlign:'center',borderBottom:'0.5px solid #707070'}}>
                        <Grid item lg={8} md={10} sm={9} xs={9}>
                        <div style={{height:'5vh',width:'100%',display:'flex',alignItems:'center',justifyContent:'center',borderRight:'0.5px solid #707070'}}>
                        <h3>
                            Activity
                        </h3>
                        </div>
                        </Grid>
                        <Grid item lg={4} md={2} sm={3} xs={3}>
                        <div>
                        <h3 style={{height:'5vh',width:'100%',display:'flex',alignItems:'center',justifyContent:'center',borderRight:'0.5px solid #707070'}}>
                            Date
                        </h3>
                        </div>
                        </Grid>
                    </Grid>        
                    <div style={{height:'55vh',width:'100%',display:'flex',flexDirection:'column'}} >
                        <Grid container style={{height:'100%'}} >
                        <Grid item lg={8} md={10} sm={9} xs={9} display='flex' flexDirection={'column'} style={{height:'100%',borderRight:'0.5px solid #707070'}}>
                        {showItems.map(notification=>(
                            <div style={{height:'40px',width:'100%',display:'flex',textAlign:'center',justifyContent:'flex-start',gap:'10px',paddingLeft:'10px',paddingTop:'10px',overflow:'hidden'}}>
                        <span>-</span>
                        <label style={{fontSize:'12px'}}>{notification.notification}</label>
                        </div>
                        ))}
                        </Grid>
                        <Grid item lg={4} md={2} sm={3} xs={3} display='flex' flexDirection={'column'} style={{height:'100%'}}>
                        
                        {showItems.map(item=>(
                            <div style={{height:'40px',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <label style={{fontSize:'12px'}}>{item.date}</label>
                        </div>
                        ))}                       
                        </Grid>
                        </Grid>
                    </div>
            </Grid>          
        </Grid>
        </div>
       
    </div>
  )
}

export default AllNotifications
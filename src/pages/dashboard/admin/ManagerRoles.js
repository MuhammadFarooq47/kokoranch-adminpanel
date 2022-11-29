import { Checkbox } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppButton from './Components/appButton/AppButton';
import NavBar from './NavBar';
import { TiTick } from "react-icons/ti";
import Popup from "../../../components/popUp/popUp";
import { FaExclamation } from "react-icons/fa";
const ManagerRoles = ({ setSidebar, sidebar }) => {
    const navigate = useNavigate();
    const [deletePopup, setDeletePopup] = useState(false);
    const [deleteSuccessfulPopup, setDeleteSuccessfulPopup] = useState(false);
    const [data,setData]=useState([
        {
            title:{label:'Admin Products',value:false},
            access:'Don’t give access to this section',
            cond:[
                {label:'Select All',value:false},
                {label:'Add new admin product',value:false},
                {label:'View admin products',value:false},
                {label:'Edit admin products',value:false},
                {label:'Delete admin products',value:false},
                {label:'Update admin product status',value:false},
                {label:'Make admin products featured',value:false},
            ]
        },
        {
            title:{label:'Admin Shipping Details',value:false},
            access:'Don’t Give Access to Manager',
            cond:[
                {label:'Edit admin shipping details',value:false},
            ]
        },
        {
            title:{label:'Admin Product Details',value:false},
            access:'Don’t Give Access to Manager',
            cond:[
                {label:'Select All',value:false},
                {label:'View admin product orders',value:false},
                {label:'Update admin product orders details',value:false},
                {label:'Edit admin products',value:false},
                {label:'Send message to buyers',value:false},
            ]
        },
        {
            title:{label:'Admin inbox messages',value:false},
            access:'Don’t Give Access to Manager',
            cond:[
                {label:'Select All',value:false},
                {label:'Read messages',value:false},
                {label:'Reply to messages',value:false},
                {label:'Delete conversation',value:false},
                {label:'Delete admin products',value:false},
                {label:'Update admin product status',value:false},
                {label:'Make admin products featured',value:false},
            ]
        },
        {
            title:{label:'Rating Reviews',value:false},
            access:'Don’t Give Access to Manager',
            cond:[
                {label:'Select All',value:false},
                {label:'View admin product rating&reviews',value:false},
                {label:'View user product/services rating&reviews',value:false},
                {label:'Delete review',value:false},
                {label:'Delete admin products',value:false},
                {label:'Reply to rating&reviews',value:false},
            ]
        },
        {
            title:{label:'Featured Product and Services',value:false},
            access:'Don’t Give Access to Manager',
            cond:[
                {label:'Select All',value:false},
                {label:'View featured product and services',value:false},
                {label:'View product info',value:false},
                {label:'View featured history',value:false},
                {label:'Removed from featured section',value:false},
            ]
        },
        {
            title:{label:'All Users',value:false},
            access:'Don’t Give Access to Manager',
            cond:[
                {label:'Select All',value:false},
                {label:'View all users',value:false},
                {label:'View all buyers',value:false},
                {label:'View all vendors',value:false},
                {label:'View all traders',value:false},
                {label:'View user Dashboard',value:false},
                {label:'Delete user',value:false},
                {label:'Update user status',value:false},
                {label:'Send email to user',value:false},
                {label:'View user login password',value:false},
                {label:'Generate new user login password',value:false},
            ]
        },
        {
            title:{label:'Vendor Products',value:false},
            access:'Don’t Give Access to Manager',
            cond:[
                {label:'Select All',value:false},
                {label:'View vendor products',value:false},
                {label:'Delete vendor products',value:false},
            ]
        },
        {
            title:{label:'View Agricultural Services',value:false},
            access:'Don’t Give Access to Manager',
            cond:[
                {label:'Select All',value:false},
                {label:'View agricultural Services',value:false},
                {label:'Delete agricultural Services',value:false},
            ]
        },
        {
            title:{label:'User Trades',value:false},
            access:'Don’t Give Access to Manager',
            cond:[
                {label:'Select All',value:false},
                {label:'View user trades',value:false},
                {label:'Delete user trades',value:false},
                {label:'Update user trades status',value:false},
            ]
        },
        {
            title:{label:'Vendor Product Orders',value:false},
            access:'Don’t Give Access to Manager',
            cond:[
                {label:'Select All',value:false},
                {label:'View vendor product orders',value:false},
                {label:'Update vendor product orders',value:false},
                {label:'Send message to buyer',value:false},
            ]
        },
        {
            title:{label:'Agricultural Services Orders',value:false},
            access:'Don’t Give Access to Manager',
            cond:[
                {label:'Select All',value:false},
                {label:'View agricultural Services Orders',value:false},
                {label:'Update agricultural Services Orders',value:false},
                {label:'Send message to buyers',value:false},
            ]
        },
        {
            title:{label:'Trade Requests',value:false},
            access:'Don’t Give Access to Manager',
            cond:[
                {label:'Select All',value:false},
                {label:'View trade requests',value:false},
                {label:'Delete comments',value:false},
            ]
        },
        {
            title:{label:'Categories',value:false},
            access:'Don’t Give Access to Manager',
            cond:[
                {label: 'Select All',value:false},
                {label:'Change category positioning',value:false},
                {label:'Add new category',value:false},
                {label:'View and Edit current categories',value:false},
            ]
        },
        {
            title:{label:'Web Banners',value:false},
            access:'Don’t Give Access to Manager',
            cond:[
                {label:'Select All',value:false},
                {label:'Add new Banners',value:false},
                {label:'View Banners',value:false},
                {label:'Delete Banners',value:false},
                {label:'Edit Banners Details',value:false},
                {label:'Update Banners status',value:false},
            ]
        },
        {
            title:{label:'App Banners',value:false},
            access:'Don’t Give Access to Manager',
            cond:[
                {label:'Select All',value:false},
                {label:'Add new Banners',value:false},
                {label: 'View Banners',value:false},
                {label:'Delete Banners',value:false},
                {label:'Edit Banners Details',value:false},
                {label:'Update Banners status',value:false},
            ]
        },
        {
            title:{label:'Contact Details',value:false},
            access:'Don’t Give Access to Manager',
            cond:[
                {label:'Edit Contact Details',value:false},
            ]
        },
    ])
    const hanldeBodyCondValue=(outerIndex,innerIndex)=>{
        let arr=[...data];
        if(arr[outerIndex].cond[innerIndex].label == 'Select All'){
            if(arr[outerIndex].cond[innerIndex].value == false){
                arr[outerIndex].cond.map(item=>{
                    item.value = true;
                })
            }
            else{
                arr[outerIndex].cond.map(item=>{
                    item.value = false;
                })
            }
        }
        else{
            arr[outerIndex].cond[innerIndex].value=!arr[outerIndex].cond[innerIndex].value;
        }
        setData(arr);
    }
    const handleTitleValueChange=(outerIndex)=>{
        let arr=[...data];
        arr[outerIndex].title.value=!arr[outerIndex].title.value;
        setData(arr);
    }
  return (
    <div>
        <Popup open={deletePopup} setOpen={setDeletePopup}>
        <div className="soi-update-status">
          <div className="successful-popup">
            <div className="sp-icon">
              <FaExclamation size={30} fill="black" />
            </div>
            <h3>
              Are You Sure You Want To
              <br />
              Save?
            </h3>
          </div>
          <div className="soi-popup-btns d-flex">
            <button
              className="btn btn-solid btn-solid-cancel btn-outline-primary soi-popup-btn"
              onClick={() => {
                setDeletePopup(false);
              }}
            >
             No
            </button>
            <button
              className="btn btn-solid btn-solid-primary  soi-popup-btn"
              onClick={() => {
                setDeletePopup(false);
                setDeleteSuccessfulPopup(true);
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </Popup>
      <Popup open={deleteSuccessfulPopup} setOpen={setDeleteSuccessfulPopup}>
        <div className="successful-popup">
          <div className="sp-icon">
            <TiTick size={30} fill="black" />
          </div>

          <h3>
            Saved <br />
            Successfully
          </h3>

          <button
            className="btn btn-solid btn-solid-primary soi-success-btn"
            onClick={() => {
              setDeleteSuccessfulPopup(false);
              navigate(-1);
            }}
          >
           close
          </button>
        </div>
      </Popup>
        <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title=" Assign Manager Roles"
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
        </div>
        </div>
        <div className='chat-sidebar' style={{height:'65vh',border:'none',overflowY:'scroll'}}>
            {data.map((item,outerIndex)=>(

                <div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'60%',marginBottom:'20px'}}>
              <h4 style={{fontWeight:'550',fontSize:'15px'}}>{item.title.label}</h4>
              <div style={{display:'flex',alignItems:'center'}}>
              <Checkbox
                onChange={()=>handleTitleValueChange(outerIndex)}
                checked={item.title.value}
                sx={{
                color: '#14A384',
                '&.Mui-checked': {
                    color: '#14A384',
                },
                '& .MuiSvgIcon-root': { fontSize: 20 }
                }}
            />
              <span style={{fontSize:'12px'}}>{item.access}</span>
              </div>
            </div>
            {/* //body */}
            { item.cond.map((conds,innerIndex)=>(
                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <Checkbox
                onChange={()=>hanldeBodyCondValue(outerIndex,innerIndex)}
               checked={conds.value}
                sx={{
                color: '#14A384',
                '&.Mui-checked': {
                    color: '#14A384',
                },
                '& .MuiSvgIcon-root': { fontSize: 20 }
                }}
                />
              <span style={{fontSize:'12px',fontWeight:'100',color:'#EAF2FF'}}>{conds.label}</span>
                 </div>
            ))}
            <hr style={{padding:'0px 2px 0px 2px',margin:'10px 0px 10px 0px'}}/>
                </div>
            ))
        }

            <div style={{width:'50%',display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
            {/* <button
              className="btn btn-solid btn-solid-primary  soi-popup-btn"
              onClick={() => {
                // setPopupOpen(false);
                // setSuccessfulPopup(true);
              }}
            >
              cancel
            </button> */}
            <AppButton buttonText={'Cancel'} height={'40px'} onClick={()=>navigate(-1)} width={'120px'} backgroundColor={'transparent'} color={'#14A384'} boxShadow={false} borderColor={'#52575D'}/>
             <AppButton buttonText={'Save'} height={'40px'} onClick={()=>setDeletePopup(!deletePopup)}  width={'120px'} backgroundColor={'#14A384'} boxShadow={false} />
            </div>
        </div>
    </div>
    </div>
  )
}

export default ManagerRoles
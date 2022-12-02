import { Grid } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const Categories = ({setSidebar,sidebar}) => {
    const [data,setData]=useState([
        'Plants',
        'Plant Nutrients',
        'Plant Media',
        'Plant Containers',
        'Plant Support',
        'Floral Supplies',
        'Pest Management',
        'CBD Products',
        'Agricultural Services',
        'Medical Merijuana',
        'Art & Clothing'
    ]);
    const navigate = useNavigate();
  return (
    <div>
        <NavBar setSidebar={setSidebar} sidebar={sidebar} title="Categories" />
        <div className="bg-black-pad my-5 " style={{height:'80vh',padding:'15px'}} >
        <Grid container>
            <Grid item lg={12} sm={12} md={12} display='flex' flexDirection={'column'} gap='30px'>
            <span style={{letterSpacing:'1px'}}><b>Important Note:</b>Main screen of the website can only hold 11 Main Categories in one line. If you will add more Main Categories, then the system will automatically show “More” with down menu in place of the right most 11th Main Category (starting from left last) and then the remaining will be shown under this drop down menu. Changes in the mobile application will also be implemented accordingly. You can change the position of Main Categories from “Category Positioning” button.”</span>
            <Grid container display={'flex'}>
            <Grid item lg={6}>
            <span>“Arts & Clothing” will remain visible in separate line.</span>
            </Grid>
            <Grid item lg={6} display='flex' justifyContent='flex-end'>
                <div style={{display:'flex',alignItems:'center',flexDirection:'column',width:'30%',gap:'10px'}}>
                <button
                className="btn btn-solid btn-solid soi-success-btn"
                style={{backgroundColor:'#CE6413',width:'100%'}}
                onClick={() => {
                //   setDeleteSuccessfulPopup(false);
                //   navigate(-1);
                }}
                >
                Category Positioning
                </button>
                <button
                className="btn btn-solid btn-solid soi-success-btn"
                style={{backgroundColor:'#14A384',width:'100%'}}
                onClick={() => {
                //   setDeleteSuccessfulPopup(false);
                  navigate('/add-category');
                }}
                >
                Add New Category
                </button>
                </div>

            </Grid>
            </Grid>
            </Grid>
            <Grid item lg={6} md={6} sm={12} style={{marginBottom:'20px'}}>
            <h3 style={{fontWeight:'bold'}}>Main Categories:</h3>
            </Grid>
            <Grid container className='chat-sidebar' style={{height:'40vh',overflowY:'scroll'}} gap={2}>
                {data.map(item=>(
                <Grid item lg={12} style={{border:'0.1px solid #707070',height:'60px',borderRadius:'10px',padding:'10px'}}>
                    <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <div style={{backgroundColor:'#3c3c3c',width:'30%',borderRadius:'5px',height:'100%',display:'flex',alignItems:'center',padding:'10px'}}>
                            <label>{item}</label>
                        </div>  
                        <button
                        className="btn btn-solid btn-solid soi-success-btn"
                        style={{backgroundColor:'#14A384',width:'80px',borderRadius:'5px',height:'fit-content'}}
                        onClick={() => {
                        //   setDeleteSuccessfulPopup(false);
                          navigate('/category-details');
                        }}
                        >
                        View
                        </button>
                    </div>
                </Grid>
                ))}
            </Grid>
        </Grid >
        </div>
    </div>
  )
}

export default Categories
import { Grid } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import NavBar from './NavBar'

const AddNewCategory = ({setSidebar,sidebar}) => {
    const [data,setData]=useState({
        subCategory:[

        ],
        subSubCategory:[

        ]
    });
    console.log('result>>>>>>',data)
  return (
    <div>
        <NavBar setSidebar={setSidebar} sidebar={sidebar} title="Settings" />
        <div className="bg-black-pad my-5 " style={{height:'80vh',padding:'30px'}} >
            <div className='soi-main' style={{height:'100%'}}>
                <div className="soi-top ">
                    <div className="row">
                            <div className="col-4 soi-orderNo">
                            <h3>Main Category:</h3>
                            </div>
                            <div className="col-8 d-flex justify-content-end align-items-center">      
                            <h3
                                className="mx-3 cursor-pointer"
                                onClick={() => {
                                //   navigate(-1);
                                }}
                            >
                                <span className="vtext-primary mx-2 ">&#10229;</span>Back
                            </h3>
                            </div>
                    </div>
                </div>
                <Grid container direction={'column'}  style={{height:'60vh'}}>
                        <div style={{height:'fit-content',display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>                        
                            <Grid item lg={8}  style={{height:'fit-content'}}>
                            <div style={{backgroundColor:'#3c3c3c',height:'50px',width:'250px',borderRadius:'5px',display:'flex',alignItems:'center',padding:'10px'}}>
                            <input placeholder='Enter Main Category' style={{height:'100%',width:'90%',border:'none',backgroundColor:'#3c3c3c',color:'gray'}} />
                            </div>
                            </Grid>
                            <Grid item lg={4} display={'flex'} alignItems='center' justifyContent={'space-evenly'} >
                                    <button
                                    className="btn btn-solid btn-solid soi-success-btn"
                                    style={{backgroundColor:'#FFFFFF',color:'gray',borderRadius:'5px',width:'60%'}}
                                    onClick={() => {
                                    //   setDeleteSuccessfulPopup(false);
                                    // navigate('/add-category');
                                    console.log('press')
                                    let arr=[...data.subCategory];
                                    arr.push('1');
                                    setData({
                                        ...data,
                                        subCategory:arr
                                    });
                                    }}
                                    >
                                    Add Sub Category
                                    </button>   
                                    <button
                                    className="btn btn-solid btn-solid soi-success-btn"
                                    style={{backgroundColor:'#CE0000',color:'#FFFFFF',borderRadius:'5px',width:'30%'}}
                                    onClick={() => {
                                    //   setDeleteSuccessfulPopup(false);
                                    // navigate('/add-category');
                                   
                                    }}
                                    >
                                    Delete
                                    </button> 
                            </Grid>
                        </div>

                        {data.subCategory.length > 0  && data.subCategory.map(item=>(<div  style={{height:'fit-content',display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                            <Grid item lg={8}  style={{height:'fit-content'}}>
                                <div style={{display:'flex',alignItems:'end'}} >
                                <div className='vr' style={{height:'60px',position:'absolute',marginLeft:60}} ></div>           
                                    {/* <div className='vr' style={{height:'60px',marginLeft:'60px'}} ></div> */}
                                    <div className='vr' style={{height:'30px',marginLeft:'60px',position:'relative' }} ></div>
                                    <div style={{height:'60px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                    <hr style={{width:'70px'}} />
                                    <div style={{border:'1px solid white', backgroundColor:'#FFFFFF',width:'7px',height:'7px',borderRadius:'50%'}}></div>
                                    </div>
                                    <div style={{backgroundColor:'#3c3c3c',height:'50px',width:'100px',borderRadius:'5px',display:'flex',alignItems:'center',padding:'10px'}}>
                                    <input placeholder={item} style={{height:'100%',width:'90%',border:'none',backgroundColor:'#3c3c3c',color:'gray'}} />
                                    </div>
                                </div>
                    
                    
                            {/* <div style={{backgroundColor:'#3c3c3c',height:'50px',width:'250px',borderRadius:'5px',display:'flex',alignItems:'center',padding:'10px'}}>
                            <input placeholder='Enter Main Category' style={{height:'100%',width:'90%',border:'none',backgroundColor:'#3c3c3c',color:'gray'}} />
                            </div> */}
                            </Grid>
                            <Grid item lg={4} display={'flex'} alignItems='center' justifyContent={'space-evenly'} >
                                    <button
                                    className="btn btn-solid btn-solid soi-success-btn"
                                    style={{backgroundColor:'#FFFFFF',color:'gray',borderRadius:'5px',width:'60%'}}
                                    onClick={() => {
                                    }}
                                    >
                                    Add Sub Category
                                    </button>   
                                    <button
                                    className="btn btn-solid btn-solid soi-success-btn"
                                    style={{backgroundColor:'#CE0000',color:'#FFFFFF',borderRadius:'5px',width:'30%'}}
                                    onClick={() => {
                                    }}
                                    >
                                    Delete
                                    </button> 
                            </Grid>
                        </div> ))}           
                </Grid>
            </div>
        </div>
        </div>
  )
}

export default AddNewCategory
import { Grid } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import NavBar from './NavBar'
import DraggableList from 'react-draggable-list'


const CategoryPositioning = ({setSidebar,sidebar}) => {
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
    ])
  return (
    <div>
        <NavBar setSidebar={setSidebar} sidebar={sidebar} title="Category Positioning" />
        <div className="bg-black-pad my-5 " style={{height:'80vh',padding:'30px'}} >
            <div className="soi-top">
                        <div className="row">
                                <div className='col-6 soi-orderNo'>
                                <span style={{color:'#14A384'}}>How: </span>
                                <span> Drag the category to change its position.</span>
                                </div>
                                <div className="col-6 d-flex justify-content-end align-items-center">      
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
            <Grid container  display={'flex'} alignItems='center' justifyContent='space-evenly' style={{height:'65vh'}}>
                <Grid item lg={5.5} display='flex' flexDirection={'column'} alignItems='center' justifyContent={'space-evenly'} style={{height:'95%',borderRadius:'15px',border:'0.25px solid gray',padding:'20px'}}>
                    <div style={{margin:'10px',width:'fit-content'}}>
                            <h3>Main Categories</h3>
                    </div> 
                    {/* {data.map(item=>(<div style={{width:'100%',height:'40px',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',backgroundColor:'#14A384'}}>
                       {item}
                    </div>))} */}
                    <DraggableList list={data} onMoveEnd={(newList)=>console.log('new>>>>>>>>',newList)}/>

                </Grid>
                <Grid item lg={5.5} display='flex' flexDirection={'column'} alignItems='center' style={{height:'95%',padding:'20px',borderRadius:'15px',border:'0.25px solid gray'}}>
                    <div style={{margin:'10px 0px 50px 0px',width:'fit-content'}}>
                        <h3>More Categories</h3>
                    </div>
                    <span style={{color:'#707070',letterSpacing:1,fontSize:'14px'}}>
                    If the number of main categories will increase from 11, then more categories will be shown here. You can drag any category here from left “Main Category” section and can also drag any category from here to left “Main Category” section.
                    </span>


                </Grid>
            </Grid>

        </div>
        
    </div>
  )
}

export default CategoryPositioning
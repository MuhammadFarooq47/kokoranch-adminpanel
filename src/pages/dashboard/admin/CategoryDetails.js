import { margin } from '@mui/system';
import React,{useCallback, useState} from 'react';
import { useNavigate } from 'react-router-dom'  
import 'reactflow/dist/style.css';
import NavBar from './NavBar'


const CategoryDetails = ({setSidebar,sidebar}) => {
    const navigate=useNavigate();
    const data=
    {  label:'plants',
      children:[
        {label:'flowers',
        children:[
          {label:'a'},
          {label:'cc'},
          {label:'dd'}
          ]
        },
          {label:'b',children:[
            {label:'a'},
            {label:'cc'},
            {label:'dd'}
            ]},
          {label:'c',children:[
            {label:'a'},
            {label:'cc'},
            {label:'dd'}
            ]},
          {label:'d',children:[
            {label:'a'},
            {label:'cc'},
            {label:'dd'}
            ]},
           {label:'sunflowers',children:[
            {label:'a'},
            {label:'cc'},
            {label:'dd'}
            ]},
          {label:'abcd',children:[
            {label:'a'},
            {label:'cc'},
            {label:'dd'}
            ]},
          {label:'efgh',children:[
            {label:'a'},
            {label:'cc'},
            {label:'dd'}
            ]},
          {label:'ijklmnop',
          children:[
            {label:'a'},
            {label:'cc'},
            {label:'dd'}
            ]}
          
      
      ]}
       
    
    const ChildComponent=({children,marginLeft,index1,checkWidth,lastItem,lastOuterItem})=>{
      console.log('result>>>>>>>>>>>>>>>>>>>>>',lastItem,children,lastOuterItem)

      return(
        <>
                   {children?.map((child,index)=>( <>
                   <div style={{display:'flex',alignItems:'end',paddingLeft:marginLeft?marginLeft:0,position:'relative'}} >
                   {(children != lastItem )&& (children != lastOuterItem) && ( <div className='vr' style={{height:'60px',position:'absolute',left:60}} ></div>)}        
                    { index!= children.length-1 && <div className='vr' style={{height:'60px',marginLeft:'60px' }} ></div>}
                    { index== children.length-1 && <div className='vr' style={{height:'30px',marginLeft:'60px' }} ></div>}
                    <div style={{height:'60px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <hr style={{width:'70px'}} />
                    <div style={{border:'1px solid white', backgroundColor:'#FFFFFF',width:'7px',height:'7px',borderRadius:'50%'}}></div>
                    </div>
                      <div style={{backgroundColor:'#3c3c3c',width:'150px',paddingTop:'40px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'5px',height:'fit-content',padding:'10px'}}>
                        <label >{child.label}</label>
                      </div>
                    </div>
                     {child?.children &&(          
                      <ChildComponent children={child.children} lastItem={lastItem} lastOuterItem={lastOuterItem} marginLeft={`${150*checkWidth}px`} checkWidth={checkWidth+1} />
             
                    )}
                    </>
                    
                    ))}
        </>
      )
    }

  return (
    <div>
        <NavBar setSidebar={setSidebar} sidebar={sidebar} title="Category Details" />
        <div className="bg-black-pad my-5 " style={{height:'80vh',padding:'30px'}} >
            <div className='soi-main' style={{height:'70vh',borderRadius:'10px'}}>
                <div style={{display:'flex',alignItems:'center',width:'100%',justifyContent:'space-between',marginBottom:'2rem'}}>
                    <div style={{display:'flex',alignItems:'center',letterSpacing:'2px'}}>
                        <h3>Main Category:</h3>
                        <h3 style={{color:'#14A384'}}>Plants</h3>
                    </div>
                    <div style={{display:'flex',alignItems:'center'}}>
                            <button
                        className="btn btn-solid btn-solid soi-success-btn"
                        style={{backgroundColor:'#14A384',width:'80px'}}
                        onClick={() => {
                        //   setDeleteSuccessfulPopup(false);
                          navigate('/edit/category');
                        }}
                        >
                        Edit
                        </button>
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
              
             
              <>
              <div style={{backgroundColor:'#3c3c3c',display:'flex',alignItems:'center',justifyContent:'center',width:'150px',borderRadius:'5px',height:'fit-content',padding:'10px'}}>
                    <label >{data.label}</label>
                    </div> 
             
                  { data.children && (
                    
                    <>
                    <div style={{border:'1px solid white', backgroundColor:'#FFFFFF', width:'7px',height:'7px',borderRadius:'50%',marginLeft:'58px'}}></div>
                    <ChildComponent children={data.children} height={data.children.length } index1={0} checkWidth={1} lastOuterItem={data.children} lastItem={data.children[data.children.length-1]?.children}/>
                    </>
                    
                 
                  )}
                  </>             
            </div>
        </div>
    </div>
  )
}

export default CategoryDetails
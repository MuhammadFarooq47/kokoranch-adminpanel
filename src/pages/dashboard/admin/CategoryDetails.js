import { margin } from '@mui/system';
import React,{useCallback, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
  } from 'reactflow';
  
import 'reactflow/dist/style.css';
import NavBar from './NavBar'


const CategoryDetails = ({setSidebar,sidebar}) => {
    const navigate=useNavigate();
    const data=[
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
          
      
      ]},
       
    ]
    const ChildComponent=({children,marginLeft,index1,checkWidth,lastItem,lastOuterItem})=>{
      console.log('result>>>>>>>>>>>>>>>>>>>>>',lastItem,children,lastOuterItem)

      return(
        <>
                   {children?.map((child,index)=>( <>
                    
                    {/* <div style={{border:'1px solid white', width:'7px',height:'7px',borderRadius:'50%'}}></div> */}
                    
                   <div style={{display:'flex',alignItems:'end',paddingLeft:marginLeft?marginLeft:0,position:'relative'}} >
                   {(children != lastItem )&& (children != lastOuterItem) && ( <div className='vr' style={{height:'60px',position:'absolute',left:60}} ></div>)}
                   {/* {checkWidth>1 &&<div className='vr' style={{height:'60px',position:'absolute',left:90}} ></div>} */}
                   {/* {checkWidth>2  &&<div className='vr' style={{height:'60px',position:'absolute',left:180}} ></div>} */}
                    
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
                      // <div style={{position:'absolute',top:0,Left:0}}>
                      <ChildComponent children={child.children} lastItem={lastItem} lastOuterItem={lastOuterItem} marginLeft={`${150*checkWidth}px`} checkWidth={checkWidth+1} />
                      // </div>
                    )}
                    </>
                    
                    ))}
        </>
      )
    }

  return (
    <div>
        <NavBar setSidebar={setSidebar} sidebar={sidebar} title="Settings" />
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
                        //   navigate(-1);
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
                {/* <div className="d-flex" style={{gap:'10px'}}> */}
            { data.map(item=> (  
              <>
              <div style={{backgroundColor:'#3c3c3c',display:'flex',alignItems:'center',justifyContent:'center',width:'150px',borderRadius:'5px',height:'fit-content',padding:'10px'}}>
                    <label >{item.label}</label>
                    </div> 
              {/* <label style={{marginBottom:'5px'}}>{item.label}</label> */}
                  {/* <div style={{border:'1px solid #3c3c3c ',borderRadius:'50%',width:'8px',height:'8px',backgroundColor:'white'}}></div> */}
                  { item.children && (
                    <>
                    <div style={{border:'1px solid white', backgroundColor:'#FFFFFF', width:'7px',height:'7px',borderRadius:'50%',marginLeft:'58px'}}></div>
                    <ChildComponent children={item.children} height={item.children.length } index1={0} checkWidth={1} lastOuterItem={item.children} lastItem={item.children[item.children.length-1]?.children}/>
                    </>
                    
                  )}
                  </>
                ))
                }
                

                  {/* <div className='d-flex flex-column'>
                    <div style={{backgroundColor:'#3c3c3c',width:'150px',borderRadius:'5px',height:'80%',padding:'10px'}}>
                    <label >Plants</label>
                    </div> */}
                    {/* <ul className='d-flex flex-column'>
                      <li style={{backgroundColor:'#3c3c3c',width:'150px',borderRadius:'5px',margin:"1rem 0 0 5rem ",height:'100%',padding:'10px'}}><hr className="hr-rule"/>hope</li>
                      <li style={{backgroundColor:'#3c3c3c',width:'150px',borderRadius:'5px',margin:"1rem 0 0 5rem ",height:'100%',padding:'10px'}}>hope2</li>
                      <li style={{backgroundColor:'#3c3c3c',width:'150px',borderRadius:'5px',margin:"1rem 0 0 5rem ",height:'100%',padding:'10px'}}>hope3</li>
                      <li style={{width:'150px',borderRadius:'5px',margin:"1rem 0 0 5rem ",height:'100%',padding:'10px'}}>list4
                      <ul className='d-flex flex-column mx-5'>
                        <li style={{backgroundColor:'#3c3c3c',width:'150px',borderRadius:'5px',margin:"1rem 0 0 5rem ",height:'100%',padding:'10px'}}>list2</li>
                        <li style={{backgroundColor:'#3c3c3c',width:'150px',borderRadius:'5px',margin:"1rem 0 0 5rem ",height:'100%',padding:'10px'}}>list2</li>
                        <li style={{backgroundColor:'#3c3c3c',width:'150px',borderRadius:'5px',margin:"1rem 0 0 5rem ",height:'100%',padding:'10px'}}>list2</li>
                      </ul>
                      </li>
                    </ul> */}
                  {/* </div> */}
               
               
                {/* </div> */}
            </div>
        </div>
    </div>
  )
}

export default CategoryDetails
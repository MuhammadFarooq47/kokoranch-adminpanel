import React from 'react'
import Sorry from "../../../assets/images/sorry.gif";
const NotFound = () => {
  return (
    <div className="bg-black-pad my-5 " style={{height:'100vh',width:'100vw',textAlign:'center'}} >
        <img src={Sorry}/>
    <h2 style={{color:'#FFFFFF'}}>Sorry, Page Not Found</h2>
    </div>
  )
}

export default NotFound
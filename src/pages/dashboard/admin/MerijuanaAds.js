import React from 'react'
import NavBar from './NavBar'

const MerijuanaAds = ({setSidebar,sidebar}) => {
  return (
    <div>
        <NavBar setSidebar={setSidebar} sidebar={sidebar} title="Ads" />
        <div className="bg-black-pad my-5 " style={{height:'80vh',display:'flex',alignItems:'center',justifyContent:'center'}} >
            <h1 style={{color:'#848484',fontWeight:'bold'}}>Coming Soon</h1>
        </div>
    </div>
  )
}

export default MerijuanaAds
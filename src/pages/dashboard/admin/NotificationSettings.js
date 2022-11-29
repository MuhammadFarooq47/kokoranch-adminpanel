import React, { useState } from "react";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import { PUT } from "../../../apis/requests";
import NavBar from "./NavBar";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const IOSSwitch = styled((props) => (
  <Switch
    focusVisibleClassName=".Mui-focusVisible"
    checked={props.checked}
    onChange={props.handleChange}
    disableRipple
    {...props}
  />
))(({ theme }) => ({
  width: 50,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(24px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#14A384" : "#14A384",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#14A384",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
export default function NotificationSettings({ setSidebar, sidebar }) {
  const [data,setData]=useState([
    {
        Title:'Personal Notifications',
        settings:[
            {
                label:'Admin Login(Every Time)',
                toggle:[
                    {label:'Push Notifications',checked:false},
                    {label:'In App Notifications',checked:false},
                    {label:'Email Notifications',checked:false},
                ]
            },
            {
                label:'Admin Product Order',
                toggle:[
                    {label:'Push Notifications',checked:false},
                    {label:'In App Notifications',checked:false},
                    {label:'Email Notifications',checked:false},
                ]
            },
            {
                label:'Admin Inbox Message',
                toggle:[
                    {label:'Push Notifications',checked:false},
                    {label:'In App Notifications',checked:false},
                    {label:'Email Notifications',checked:false},
                ]
            },
            {
                label:'Admin Unusual login attempt',
                toggle:[
                    {label:'Push Notifications',checked:false},
                    {label:'In App Notifications',checked:false},
                    {label:'Email Notifications',checked:false},
                ]
            },

        ]
    },
    {
        Title:'Manager Related Notifications',
        settings:[
            {
                label:'Manager Login(Every Time)',
                 toggle:[
                    {label:'Push Notifications',checked:false},
                    {label:'In App Notifications',checked:false},
                    {label:'Email Notifications',checked:false},
                ]
            },
            {
                label:'Manager Inbox Message',
                 toggle:[
                    {label:'Push Notifications',checked:false},
                    {label:'In App Notifications',checked:false},
                    {label:'Email Notifications',checked:false},
                ]
            },
            {
                label:'Manager Change Password',
                 toggle:[
                    {label:'Push Notifications',checked:false},
                    {label:'In App Notifications',checked:false},
                    {label:'Email Notifications',checked:false},
                ]
            },
            {
                label:'User Blocked By Manager',
                 toggle:[
                    {label:'Push Notifications',checked:false},
                    {label:'In App Notifications',checked:false},
                    {label:'Email Notifications',checked:false},
                ]
            },
            {
                label:'User Disabled By Manager',
                 toggle:[
                    {label:'Push Notifications',checked:false},
                    {label:'In App Notifications',checked:false},
                    {label:'Email Notifications',checked:false},
                ]
            },
            {
                label:'User Prodile Deleted By Manager',
                 toggle:[
                    {label:'Push Notifications',checked:false},
                    {label:'In App Notifications',checked:false},
                    {label:'Email Notifications',checked:false},
                ]
            },
            {
                label:'Other Manager Activities',
                 toggle:[
                    {label:'Push Notifications',checked:false},
                    {label:'In App Notifications',checked:false},
                    {label:'Email Notifications',checked:false},
                ]
            },

        ]
    },
    {
        Title:'User Related Notifications',
        settings:[
            {
                label:'New User Signup',
                toggle:[
                    {label:'Push Notifications',checked:false},
                    {label:'In App Notifications',checked:false},
                    {label:'Email Notifications',checked:false},
                ]
            },
            {
                label:'New Product Upload',
                toggle:[
                    {label:'Push Notifications',checked:false},
                    {label:'In App Notifications',checked:false},
                    {label:'Email Notifications',checked:false},
                ]
            },
            {
                label:'New Agricultural Service Product',
                toggle:[
                    {label:'Push Notifications',checked:false},
                    {label:'In App Notifications',checked:false},
                    {label:'Email Notifications',checked:false},
                ]
            },
            {
                label:'New Trade Upload',
                toggle:[
                    {label:'Push Notifications',checked:false},
                    {label:'In App Notifications',checked:false},
                    {label:'Email Notifications',checked:false},
                ]
            },
            {
                label:'New Product Order',
                toggle:[
                    {label:'Push Notifications',checked:false},
                    {label:'In App Notifications',checked:false},
                    {label:'Email Notifications',checked:false},
                ]
            },
            {
                label:'New Agricultural Service Order',
                toggle:[
                    {label:'Push Notifications',checked:false},
                    {label:'In App Notifications',checked:false},
                    {label:'Email Notifications',checked:false},
                ]
            },
            {
                label:'New Trade Request',
                toggle:[
                    {label:'Push Notifications',checked:false},
                    {label:'In App Notifications',checked:false},
                    {label:'Email Notifications',checked:false},
                ]
            },

        ]
    },
  ])

  const handleChange = (outerIndex,innerIndex,lastIndex) => {
    let arr=[...data];
    arr[outerIndex].settings[innerIndex].toggle[lastIndex].checked=!arr[outerIndex].settings[innerIndex].toggle[lastIndex].checked
    setData(arr);
};


  return (
    <>
      <NavBar setSidebar={setSidebar} sidebar={sidebar} title="Settings" />
      <article className="vendor-profile-main">
       {data.map((item,outerIndex)=>(

        <div className="row" style={{marginBottom:'15px'}}>
            <h3 style={{marginBottom:'30px',fontWeight:'bold'}}>{item.Title}</h3>
            <Grid container>
                <Grid item lg={12}>
                    <div style={{height:'fit-content',width:'100%',border:'1px solid #14A384',borderRadius:'15px',padding:'10px'}}>
                        <div style={{display:'flex',alignItems:'center'}}>
                        <div style={{width:'50%'}}>

                        </div>
                        <div style={{width:'50%',display:'flex',alignItems:'center',gap:'50px',justifyContent:'flex-end'}}>
                            <label style={{fontSize:'12px'}}>Push Notifications</label>
                            <label style={{fontSize:'12px'}}>In App Notifications</label>
                            <label style={{fontSize:'12px'}}>Email Notifications</label>
                        </div>
                        </div>
                        <div className=" row  justify-content-between align-items-center">
                      { item.settings.map((setting,innerIndex)=>(<div style={{display:'flex',alignItems:'center'}}>
                        <div style={{width:'50%'}}>
                        <label style={{fontSize:'12px'}}>{setting.label}</label>
                        </div>
                        {setting.toggle.map((cond,lastIndex)=>(
                            <div style={{width:'50%',gap:'50px',display:'flex',alignItems:'center',gap:'50px',justifyContent:'flex-end'}}>
                        <FormGroup>
                            <Stack direction="row" spacing={1} alignItems="center">
                            <Typography>Off</Typography>
                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }} checked={cond.checked} onChange={()=>handleChange(outerIndex,innerIndex,lastIndex)} />}
                            />
                            <Typography>On</Typography>
                            </Stack>
                        </FormGroup>
                        </div>))}
                       </div>))}
                        
                        {/* <div className="col-6 d-flex justify-content-end">
                        <FormGroup>
                            <Stack direction="row" spacing={1} alignItems="center">
                            <Typography>Off</Typography>
                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                            />
                            <Typography>On</Typography>
                            </Stack>
                        </FormGroup>
                        </div> */}
                 </div>
                    </div>
                </Grid>
            </Grid>
            
          {/* <div className="col-12 col-sm-12 col-md-6 col-lg-5 mb-5">
            <h2 className="fs-3">New Order</h2>
            <div className="vendor-setting-wrapper-right">
              <div className=" row  justify-content-between align-items-center">
                <div className="col-6 ">
                  <label>In App Notification</label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Off</Typography>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <div className=" row  justify-content-between align-items-center">
                <div className="col-6 ">
                  <label>Push Notification</label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Off</Typography>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <div className=" row  justify-content-between align-items-center">
                <div className="col-6 ">
                  <label>Email Notification</label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Off</Typography>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-5 mb-5">
            <h2 className="fs-3">New Inbox Message</h2>
            <div className="vendor-setting-wrapper-right">
              <div className=" row  justify-content-between align-items-center">
                <div className="col-6 ">
                  <label>In App Notification</label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Off</Typography>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <div className=" row  justify-content-between align-items-center">
                <div className="col-6 ">
                  <label>Push Notification</label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Off</Typography>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <div className=" row  justify-content-between align-items-center">
                <div className="col-6 ">
                  <label>Email Notification</label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Off</Typography>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-5">
            <h2 className="fs-3">New Review</h2>
            <div className="vendor-setting-wrapper-right">
              <div className=" row  justify-content-between align-items-center">
                <div className="col-6 ">
                  <label>In App Notification</label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Off</Typography>
                      <FormControlLabel
                        control={
                          <IOSSwitch
                            sx={{ m: 1 }}
                            checked={checked}
                            onChange={handleChange}
                          />
                        }
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <div className=" row justify-content-between align-items-center">
                <div className="col-6 ">
                  <label>Push Notification</label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Off</Typography>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <div className=" row  justify-content-between align-items-center">
                <div className="col-6 ">
                  <label>Email Notification</label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Off</Typography>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </FormGroup>
                </div>
              </div>
            </div>
          </div> */}
        </div>
       ))

        }
      </article>
    </>
  );
}
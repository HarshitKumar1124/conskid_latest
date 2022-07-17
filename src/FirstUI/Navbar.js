import React, { useState } from 'react'
import Grid from "@material-ui/core/Grid"
import "./FirstUI.css"
import Logo from "../Asset/logo_white1.png"
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import Profile from "../Asset/Icon awesome-user-circle.svg"
import List from "./List"
import Notification from "../Asset/Icon ionic-ios-notifications.svg"
import Bag from "../Asset/Component 68 – 4.svg"
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

const Navbar = () => {

    const [ServiceDrop, SetServiceDrop] = useState(false);

    const ToggleService = () => {
        SetResourceDrop(false)
       SetProfileDrop(false)
        SetServiceDrop(!ServiceDrop);
    }

    const [ResourceDrop, SetResourceDrop] = useState(false);

    const ToggleResource = () => {
        SetResourceDrop(!ResourceDrop);
        SetServiceDrop(false)
       SetProfileDrop(false)
    }

    const [ProfileDrop, SetProfileDrop] = useState(false);

    const ToggleProfile = () => {
        SetProfileDrop(!ProfileDrop);
        SetServiceDrop(false)
       SetResourceDrop(false)
      
    }

    return (
        <>
            <Grid container id="Navbar" >

                <div id="Logo_Div"><img src={Logo} alt="Logo" id="Conskid_Logo" /></div>

                {/* <Grid container id="Service_Resource_Button">
                    <div >
                        <Button id="Service_Button"  size="medium" endIcon={<ArrowDropDownIcon />} onClick={ToggleService} >Services</Button>
                        {
                            ServiceDrop ? <List Number="1" /> : ""
                        }
                    </div>
                    <div >
                        <Button id="Resource_Button"  size="medium" endIcon={<ArrowDropDownIcon />} onClick={ToggleResource}>Resources</Button>
                        {
                            ResourceDrop ? <List Number="2" /> : ""
                        }
                    </div>

                </Grid> */}

                <div id="Profile_Icon" >
                    {/* style={{border:"2px solid red"}} */}
                <div  >
                    {/* style={{border:"2px solid green"}} */}
                    <Button size="small" title="Account"  style={{ position: "absolute", left: "60rem", top: "2rem", borderRadius: "25rem" }} onClick={ToggleProfile}><BusinessCenterIcon style={{ fontSize: "45rem" }} /></Button>
                    {
                            ProfileDrop ? <List Number="3" /> : ""
                    }
                    <Button size="small"  title="Notification" style={{ position: "absolute", left: "-15rem", top: "2rem", borderRadius: "25rem" }} ><NotificationsIcon style={{ fontSize: "45rem" }} /></Button>


                </div>
                    <img src={Profile} alt="ProfileDP" id="ProfileDP" title="Profile Picture" />
                 
                </div>

            </Grid>
        </>
    )
}

export default Navbar

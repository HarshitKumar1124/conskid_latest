import react, { useState,useEffect } from 'react'
import "./ComingSoon.css"
import Grid from "@material-ui/core/Grid"
import Mason from "./Component 43 – 1.svg"
import Button from '@material-ui/core/Button'
import Logo from "./Layer 2.svg"
import { Link } from 'react-router-dom'
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const ComingSoon = () => {

    const [email,setemail]=useState("");

    const UpdateEmail=(ele)=>{
        setemail(ele.target.value)
        
    }

 



    const Notify_Click = (e) => {
        
        e.preventDefault();
      
        if(email!="")
        {toast.success('🦄 bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            fontSize:"100rem"
            });
            setemail("");
        }
        else
        alert("Fill the Email field first")
       
     
    }

   
    return (
        <>
            <Grid xs={12} id="ComingSoon_container" style={{ alignSelf: "flex-start", position: "relative" }}>
                <Grid container xs={12} style={{ height: "111rem", alignSelf: "flex-start" }}>
                    {/* border: "2px solid red", */}
                    <div id="Logo"><Link tag="a" to="/"><img src={Logo} alt="Logo" title="Click to navigate to Home Page" /></Link></div>
                </Grid>
                <Grid item xs={12} id="Content" style={{ alignSelf: "flex-start", height: "90%" }}>
                    {/* border: "2px solid green", */}
                    <Grid container style={{ justifyContent: "center" }}>
                        {/* border: "2px solid magenta",  */}
                        <img src={Mason} id="image" style={{
        width: "390rem",
        height: "372rem",
        marginTop: "70rem",
        marginBottom: "45rem"}} />
                    </Grid>
                    <Grid item xs={12} id="Building" style={{ height: "413rem", position: "absolute", bottom: "0rem", width: "100%" }}>
                        {/* border: "2px solid red", */}
                        <pre>COMING SOON</pre>
                        <p>ARE YOU READY?</p>
                        <Grid container style={{ justifyContent: "center" }}>
                            {/* border: "2px solid magenta",  */}
                            <div style={{ width: "657rem", height: "65rem", display: "flex" }}>
                                {/* border: "2px solid green", */}
                            
                                <input type="email" placeholder="YOUR EMAIL" value={email} onChange={UpdateEmail} style={{ width: "70%", height: "100%", color: "#ACACAC", fontSize: "30rem", padding: "16rem 0 16rem 29rem", border:"none" }} />
                                <input type="submit" value="NOTIFY ME" style={{ backgroundColor: "#00A1A4", color: "white", fontSize: "30rem", fontFamily: "UbantuM", width: "30%", textAlign: "center", padding: "16rem 0rem" , border:"none" }} onClick={Notify_Click}/>
                         
                            </div>

                         
                        </Grid>
                    </Grid>


                </Grid>


            </Grid>
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={true}
rtl={false}
pauseOnFocusLoss
draggable={true}
pauseOnHover={true}
fontSize="100rem"
/>
        </>
    )
}

export default ComingSoon

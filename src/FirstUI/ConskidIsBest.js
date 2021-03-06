import React from 'react'
import Grid from "@material-ui/core/Grid"
import "./FirstUI.css";
import Vector from "../Asset/main_vector.svg"
import { Link } from 'react-router-dom'

const ConskidIsBest = () => {
    return (
        <>
            <Grid container xs={12} id="Conskid_wrapper" >
                <Grid item xs={6}md={4} id="Non_vector" style={{border:"1rem solid orange"}}>
                {/* style={{border:"1rem solid orange"}} */}
                
                    <p>Learn, Train <br/><span> and Excel</span></p>
                    <pre>Consultation on Skill Development</pre>
                   <Link tag="a"  to="/Sign In" title="Join Now" style={{textDecoration:"none"}}> <div id="Join_Button">Join now</div></Link>

                </Grid>
                <Grid item md={6} xs={6} id="Mainvector"  style={{border:"1rem solid orange"}} >
                {/* style={{border:"1rem solid orange"}} */}
                    <img src={Vector} alt="Mainvector" id="vector" />
                </Grid>

            </Grid>
        </>
    )
}

export default ConskidIsBest

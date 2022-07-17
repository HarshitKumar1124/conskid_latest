import React from 'react'
import "./Services.css";
import Grid from "@material-ui/core/Grid"
import Template from "./Template"
import Services_Object from "./Service_Content"
import Logo from "../Asset/Group 2577.svg"
import InternshipPool from "../Asset/Component 56 – 1.svg"
import ResumeBuilder from "../Asset/Component 57 – 1.svg"
import OffCampusPlacement from "../Asset/Component 58 – 1.svg"
import Campaign from "../Asset/Component 59 – 1.svg"
import CareerCounselling from "../Asset/Component 60 – 1.svg"
import MockInterview from "../Asset/Component 61 – 1.svg"
import CertifiedCourses from "../Asset/Component 63 – 1.svg"
import SummerTraining from "../Asset/Interview-rafiki.svg"



const Services = () => {
    return (
        <>
            <Grid container lg={12} id="Service_Container">


                <Grid id="WhatConskid" md={6} style={{paddingBottom:"30rem"}}>
                    <Grid md={12}  item id="Service_Heading" >What is conskid?</Grid>

                    <Grid md={12}  item container id="Conskid_define_container">
                        <Grid item id="Conskid_define_content" >CONSKID is a comprehensive online platform to support young undergrad aspirants in achieving career milestones. We strive to empower the learners through skill-enhancing services & industrial exposure suited to their skills & interest.</Grid>

                        <Grid md={12}  container item id="Service_Logo" style={{ position: "relative", display: "flex", justifyContent: "center" }} ><img src={Logo} style={{ height: "100%", width: "100%", position: "absolute" }} /></Grid>
                        {/* border:"2px dotted red", */}
                    </Grid>
                </Grid>


                <Grid xs={12}  id="Service_Heading" >
                    Benefits for you
                    <p style={{color:"black",fontSize:"30rem"}} id="ourservicestext"> &#40; Our Services &#41;</p>
                </Grid>
                <Grid xs={12} item container id="Service_Template_container" >

                    <Grid item container id="Template_container" >


                        <Template Heading={Services_Object[0].Heading} Logo={InternshipPool} id={Services_Object[0].Heading}  Description = {Services_Object[0].Description} Link = {Services_Object[0].Link}/>
                        <Template Heading={Services_Object[1].Heading} Logo={ResumeBuilder} id={Services_Object[1].Heading}  Description = {Services_Object[1].Description} Link = {Services_Object[1].Link}/>
                        <Template Heading={Services_Object[2].Heading} Logo={OffCampusPlacement} id={Services_Object[2].Heading}  Description = {Services_Object[2].Description} Link = {Services_Object[2].Link}/>
                        <Template Heading={Services_Object[3].Heading} Logo={Campaign} id={Services_Object[3].Heading}  Description = {Services_Object[3].Description} Link = {Services_Object[3].Link}/>
                        <Template Heading={Services_Object[4].Heading} Logo={CareerCounselling} id={Services_Object[4].Heading}  Description = {Services_Object[4].Description} Link = {Services_Object[4].Link}/>
                        <Template Heading={Services_Object[5].Heading} Logo={MockInterview} id={Services_Object[5].Heading}  Description = {Services_Object[5].Description} Link = {Services_Object[5].Link}/>
                        <Template Heading={Services_Object[6].Heading} Logo={CertifiedCourses}id={Services_Object[6].Heading} Description = {Services_Object[6].Description} Link = {Services_Object[6].Link} />
                        <Template Heading={Services_Object[7].Heading} Logo={SummerTraining}  id={Services_Object[7].Heading} Description = {Services_Object[7].Description} Link = {Services_Object[7].Link} />

                    </Grid>


                </Grid>


            </Grid>
        </>
    )
}

export default Services

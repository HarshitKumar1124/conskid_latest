import React from 'react'
import Grid from "@material-ui/core/Grid"
import "./Footer.css";
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const Footer = () => {
    return (
        <>
            <Grid container xs={12} id="Footer">


                <Grid item xs={4} className="box1">
                    <Grid item xs={12} className="content1">
                        <p className='para'>Email your queries <br />or get in touch with us</p>
                        <div id="ContactUs">Contact Us</div>
                    
                        <Grid id="MailCall">
                            <p><MailIcon style={{fontSize:"30rem",color:"white"}}/> <a href="mailto:info@conskid.com">info@conskid.com</a></p>
                            <p><CallIcon style={{fontSize:"30rem",color:"white"}}/> +919024838979</p>
                        </Grid>

                        <Grid id="SocialHandles">
                            <a href="https://www.facebook.com/onskid" target="_blank" title="FaceBook"><FacebookIcon style={{fontSize:"45rem",color:"white",marginRight:"31rem"}}/></a>

                            <a href="https://www.twitter.com/C_ONSKID" target="_blank" title="Twitter"><TwitterIcon style={{fontSize:"45rem",color:"white",marginRight:"31rem"}}/></a>

                            <a href="https://www.linkedin.com/company/c-onskid" target="_blank" title="LinkedIn"><LinkedInIcon style={{fontSize:"45rem",color:"white",marginRight:"31rem"}}/></a>
                           
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} className="box2">
                    <Grid item xs={12} className="content2">
                        <Grid id="Solutions">Solutions</Grid>
                        <Grid id="ServiceList">
                            <Grid id="ServiceHead">Services</Grid>
                            <ul className="List">
                                <li><a href="#CV Making">CV Making</a></li>
                                <li><a href="#Test/Practice Papers">Test/Practice Papers</a></li>
                                <li><a href="#Mock Interview">Mock Interview</a></li>
                                <li><a href="#Career Counselling">Career Counselling</a></li>
                            </ul>
                        </Grid>

                        <Grid id="ResourceList">
                            <Grid id="ResourceHead">Resources</Grid>
                            <ul className="List">
                                <li><a>Blogs</a></li>
                                <li><a>Testimonials</a></li>
                            </ul>
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Grid item xs={4} className="box3">
                    <Grid item xs={12} className="content3">
                    <Grid  xs={12}id="About">About</Grid>
                        <Grid id="AboutList">
                            <ul className="List">
                                <li><a >Our Team</a></li>
                                <li><a >FAQ</a></li>
                                <li><a >Careers</a></li>
                                <li><a >Events</a></li>
                            </ul>
                        </Grid>
                            
                    </Grid>
                </Grid>



            </Grid>
        </>
    )
}

export default Footer

import React, { useEffect } from 'react'
import "./App.css";
import Grid from "@material-ui/core/Grid"
import FirstUI from "./FirstUI/FirstUI"
import Footer from "./Footer/Footer"
import Journey from "./Journey/Journey"
import Why from "./Why/Why"
import Services from "./Services/Services"
import LoginPage from "./Login/Login"
// import ComingSoon from './ComingSoon/ComingSoon';

const App = () => {


    // window.addEventListener('scroll',(event)=>{
    //   const Scroll_To_Top = document.getElementById('Nav_To_Top');
              
    //   if(window.scrollY>100)
    //   Scroll_To_Top.style.display="block"
    //   else
    //   Scroll_To_Top.style.display="none";
    // })
   

  return (
    <>
      <Grid container xs={12} id="App_Container" >


          <FirstUI/> 
          <Services/>
          <Why/>
          <Journey/>
          <Footer/>
          <a href="#App_Container"><div id="Nav_To_Top"style={{fontSize:"50rem"}}>&#11161;</div></a>

          
          
      </Grid>

    
      
    </>
  )
}

export default App

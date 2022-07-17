import React, {useEffect} from 'react'
import "./Why.css";
import Grid from "@material-ui/core/Grid"


const Why = (props) => {

    
    

       return (
        <>
            <Grid container item xs={12} className="Template"  >
               

                
            
                <Grid container xs={12} style={{justifyContent:"space-around"}} >
                {/* border:"2px solid Magenta" */}

                {/* {((props.id)%2===0)?<Grid item container className="vectorBlock"><img src={props.Logo} alt="Images"  title={props.Heading} /></Grid>:""} */}

                    <Grid item container className="HeadBlock">
                        <Grid className="Heading">{props.Heading}</Grid>
                        <Grid className="SomeText">{props.Content} </Grid>
                    </Grid>
                    <Grid item container className="vectorBlock"><img src={props.Logo} alt="Images" title={props.Heading} /></Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default Why
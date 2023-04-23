import React from 'react';
import {Grid} from "@mui/material";


function Upload(){
    return (
      // <Grid container  justifyContent={"center"} alignItems={"center"} backgroundColor={"black"} sx={{width: "50%", height: "50%"}}>
      //   <Grid item container justifyContent={"center"} alignItems={"center"} direction={"column"}>
      //     <Grid item>
      //       <h1 style={{color: 'white', fontSize: "50px"}}>Uploads</h1>
      //     </Grid>
      //     <Grid item>
      //       <button>Select File</button>
      //     </Grid>
      //   </Grid>
      // </Grid>
      <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', backgroundColor: "black"}}>
         <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', width: '50%', height: '50%', backgroundColor: "#181818",
          marginTop: '10%', marginBottom: '5%', paddingBottom: '40%', borderRadius: '5px'}}>
          <h1 style={{color: 'white', fontSize: "50px"}}>Uploads</h1>
          <button>Select File</button>
        </div>
      </div>

        // <Grid container spacing={1}>
        //   <Grid item>
        //     <h1>Hello World</h1>
        //   </Grid>
        //   {/* <Grid item>
        //     <h1>Hello World</h1>
        //   </Grid>
        //   <Grid item>
        //     <h1>Hello World</h1>
        //   </Grid>
        //   <Grid item>
        //     <h1>Hello World</h1>
        //   </Grid> */}
        // </Grid>
    );
}
export default Upload;
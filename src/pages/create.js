import { Grid, Typography } from "@mui/material";

function Upload() {

    return (
        <Grid container justifyContent="center" alignItems="center"> 
        <Grid container justifyContent="center" alignItems="center" >
             <div style={{ width: "50%", height: "50%" }} color="gray" ></div>
            <Grid item>
                <Typography variant="h3">Upload</Typography>
            </Grid>
        </Grid>
        </Grid>
    );
}

export default Upload;
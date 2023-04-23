import { Typography, Grid, Button, TextField, InputAdornment } from "@mui/material"
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { useState } from "react";

function Landing() {

    const [val, setVal] = useState("");

    return (
        <Grid container direction="column" justifyContent={"center"} alignItems={"center"} >
            <Grid item>
                <Typography variant="h3">off the map</Typography>
            </Grid>
            <Grid item>
                <TextField id="outlined-basic" variant="outlined" value={val}
                 InputProps={{
                    startAdornment: <InputAdornment position="start"><MyLocationIcon /></InputAdornment>
                  }} />
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary">Go</Button>
            </Grid>

        </Grid>
        
    )
  }

export default Landing
import { Typography, Grid, Button, TextField, InputAdornment } from "@mui/material"
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { useState } from "react";
import {useRouter} from "next/router";
function Landing() {
    const router = useRouter();
    const [val, setVal] = useState("");
    return (
        <Grid container direction="column" spacing={8} justifyContent="space-between" alignItems="center" backgroundColor="black"
        sx={{paddingTop: "10%", paddingBottom: "400px"}}> 
            <Grid item>
                <Typography variant="h3" color="white">Input current location</Typography>
            </Grid>
            <Grid item >
                <TextField id="outlined-basic" variant="outlined" helperText="Location" value={val} onChange={(e) => setVal(e.target.value)}
                 InputProps={{
                    style: { background: 'white' },
                    startAdornment: <InputAdornment position="start"><MyLocationIcon/></InputAdornment>
                  }} />
            </Grid>
            <Grid item>
                <Button onClick={() => router.push("/home")}variant="contained" color="primary">Go!</Button>
            </Grid>

        </Grid>
        
    )
  }

export default Landing
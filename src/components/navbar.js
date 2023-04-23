// components/Navbar.tsx
import React, { useState } from "react";
import { Button, Grid, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PlaceIcon from '@mui/icons-material/Place';
import { useRouter } from 'next/router'

function Navbar() {
  // const router = useRouter();
  // const [home, setHome] = useState(false);
  // const [saved, setSaved] = useState(false);
  // const [profile, setProfile] = useState(false);

  // switch (router.params) {
  //   case '/Home':
  //     setSaved(false)
  //     setProfile(false);
  //     setHome(true);
  //     break;
  //   case '/Profile':
  //     setSaved(false)
  //     setProfile(true);
  //     setHome(false);
  //     break;
  //   case '/Saved':
  //     setSaved(true)
  //     setProfile(false);
  //     setHome(false);
  //     break;
  //   default:
  //     setSaved(false)
  //     setProfile(false);
  //     setHome(false);
  // }

  return (
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item sx={3} paddingLeft="10px">
          <HomeIcon width="25px" height="25px" sx={{borderRadius: "10px"}}/>
          <PlaceIcon width="25px" height="25px"/>
          </Grid>
          <Grid item sx={6}>
            <Typography variant="h6" fontFamily="garamond">off the map</Typography>
          </Grid>
          <Grid item sx={3} paddingRight="10px">
            <CloudUploadIcon width="25px" height="25px"/>
            <AccountCircleIcon width="25px" height="25px" />
          </Grid>
      </Grid>
  );
}

export default Navbar;
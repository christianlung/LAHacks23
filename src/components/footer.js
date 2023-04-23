// components/Footer.tsx
import React from "react";
import Link from "next/link";
import { Grid, Typography } from "@mui/material";
import github from "../../public/github.png";

function Footer() {
  return (
    <Grid container direction="column" justifyContent={"space-between"} alignItems={"center"} backgroundColor={"black"}>
      <Grid item sx={3} paddingLeft="10px">
        <Typography>Made with ❤️ at LAHacks 2023</Typography>
      </Grid>
      {/* <Grid item sx={6}>
        <img src={github} alt="Logo" width="10" height="10" href="https://github.com/christianlung/LAHacks23"/>
      </Grid> */}
    </Grid>
  );
};

export default Footer;

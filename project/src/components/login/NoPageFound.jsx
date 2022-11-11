import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {
  Button,
  Paper,
  Grid,

} from '@mui/material';

const NoPageFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(global.ftk === undefined ){
    navigate("/");
    }
   }, []);
   const Homes = () => {

    navigate("/dashboard");
  }
  const paperStyle = { height: '100vh', width: "100vw", overflow: "hidden" }
  return (
    <Grid container
      spacing={0}
      align="center"
      justify="center"
      direction="column">
      <Grid item >
        <Paper elevation={12} style={paperStyle} >
          <Grid sx={{ m: 10, }}   >
            <Grid item>
              <span><h2>404.  Page not found </h2></span>
            </Grid>

          </Grid>
          <Grid item container sx={{ ml: 75}}>
            <Button onClick={() => Homes()} sx={{ color: "blue",fontSize:"large",textDecoration:"underline " }}>  Go to Home</Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default NoPageFound;

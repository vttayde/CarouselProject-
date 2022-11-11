import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import imgUrl1 from '../../aaset/puc1.jpeg'
import {
  Button,
  Paper,
  Grid,

} from '@mui/material';

const PageUnderCon = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (global.ftk === undefined) {
      //  window.location.href = ('/');                           
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
      <Grid item container >
        <Paper elevation={12} style={paperStyle} >
          <Grid sx={{ m: 10, }}   >
            <img width="40%" height="40%" src={imgUrl1} />
            <Grid item container sx={{ ml: 60, zIndex: 5 }}>
              <Button onClick={() => Homes()} sx={{ color: "blue", fontSize: "large", textDecoration: "underline " }}>  Please Go to Home</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default PageUnderCon;

import React, { useEffect, useState, Suspense } from "react";
import Carousel from "react-material-ui-carousel";
import SideBar from '../commenPages/SideBar'
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

import '../sidebar/SidebarStyle.css'

const CarouselComp = () => {
  const [imgUrl, SetImgUrl] = useState({});
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=1";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) =>
        SetImgUrl((state) => ({
          img: data[0].url
        }))
      );
  }, [index])
  var items = [
    {
      name: " #1",
      description: "this is image  1 "
    },
    {
      name: "#2",
      description: "this is image  2"
    },
    {
      name: " #3",
      description: "this is image  3"
    }
  ];


  const handleChange = (cur, prev) => {
    setIndex(cur);
  };

  return (

    <Suspense fallback={<h3>Loading....</h3>}>
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          <>
            <Grid container item sx={{ overflow: "hidden", }}>
              <Grid item xs={12}>
                <Carousel
                  index={index}
                  onChange={handleChange}
                  interval={2000}
                  animation="slide"
                  indicators={false}
                  stopAutoPlayOnHover
                  className="my-carousel"
                // style={{with:"100%",
                //     '& .Carousel-next-12':{
                //     // marginRight:"200px",
                //     right:'200px !important '
                //     },
                //     '& .Carousel-prev-13 ':{
                //       // marginRight:"200px",
                //       left:"200px"
                //       }

                //     }}
                >
                  {items.map((item, i) => (

                    <div key={i}>
                      {/* <div style={{"textAlign": "center"}}> */}
                      <img src={imgUrl.img} alt="img" className="imgTag" />
                      <div style={{ width: "100%", height: "100%", zIndex: 3 }}>{item.description}</div>
                      {/* </div> */}


                    </div>
                  ))}
                </Carousel>
              </Grid>
              <Grid item xs={12}>
                <div style={{ "textAlign": "center", "marginTop": "20px" }}>
                  {items.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      style={{ background: i === index ? "#ccc" : "#fff" }}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </Grid>
            </Grid>
          </>
        </Box>
      </Box>
    </Suspense>

  );
}
export default CarouselComp;
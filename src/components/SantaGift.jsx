import { Box, Container, Grid, Typography } from "@mui/material";

import React from "react";
import chrisTree from "../images/chrisTree.png";
const SantaGift = () => {
  return (
    <Box color="black" py={5}>
      <Container>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                fontFamily: "Alex Brush",
                fontSize: "30px",
                fontWeight: "400",
                color: "#FF0000",
              }}
            >
              This winter
            </Box>
            <Typography
              sx={{
                fontFamily: "Charter",
                fontSize: { md: "48px", xs: "30px" },
                fontWeight: "900",
                color: "#1C1C1C",
              }}
            >
              Santa Brought Gifts!
            </Typography>
            <Box
              sx={{
                fontFamily: "Gilroy",
                fontSize: { md: "25px", xs: "20px" },
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                marginLeft: { md: "-3rem", xs: "0rem" },
                marginTop: { md: "5rem", xs: "0rem" },
              }}
            >
              <img src={chrisTree} width="100%" alt="chrisTrees" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SantaGift;

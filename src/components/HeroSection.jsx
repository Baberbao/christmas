import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import bgImage from "../images/background.png";
import tree from "../images/tree.png";
import line from "../images/line.png";
import SantaGift from "./SantaGift";
const HeroSection = () => {
  const matches = useMediaQuery("(max-width:960px)");

  return (
    <Box
      sx={{
        background: `url(${bgImage})`,
        height: "auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <Box
        sx={{
          paddingTop: { md: "6rem", xs: "6rem" },
          paddingBottom: { md: "14rem", xs: "20rem" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={tree}
                width={matches ? "80px" : "100px"}
                height={matches ? "80px" : "100px"}
              ></img>
              <Typography
                sx={{
                  fontSize: { md: "96px", xs: "50px" },
                  fontWeight: "500",
                  fontFamily: "Bungee",
                  padding: "0px 15px",
                }}
              >
                Merry
              </Typography>
              <img
                src={tree}
                width={matches ? "80px" : "100px"}
                height={matches ? "80px" : "100px"}
              ></img>
            </Box>
            <Box
              sx={{
                fontSize: { md: "80px", xs: "50px" },
                fontWeight: "500",
                fontFamily: "Bungee",
                textAlign: "center",
              }}
            >
              CHRISTMAS
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <img src={line} alt="lie" width="100%" />
            </Box>
            <Box
              sx={{
                textAlign: "center",
                fontSize: "36px",
                fontWeight: "400",
                fontFamily: "Billion Dreams",
              }}
            >
              & A Happy New Year
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;

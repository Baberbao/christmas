import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import footericon2 from "../../images/footericon2.png";
import footericon1 from "../../images/footericon1.png";
import discord from "../../images/discord.png";
import twe from "../../images/twe.png";
import tele from "../../images/tele.png";
import footerbg from "../../images/footerbg.png";

import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  const matches = useMediaQuery("(max-width:900px)");

  return (
    <Box
      sx={{
        p: 2,
        backgroundImage: matches ? "" : `url(${footerbg})`,
        backgroundPosition: { sm: "center", xs: "left" },
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        mt: { md: -10, xs: 0 },
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center" mt={5}>
          <Grid item md={4} xs={12}>
            <Box width="100%" textAlign="center">
              <img src={footericon1} alt="" width="80%" />
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "77px",
                  height: "0px",
                  border: "4px solid #FF6565",
                  textAlign: "center",
                  mb: 2,
                }}
              ></Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: "13px",
                    lineHeight: "248.52%",
                    textAlign: "center",
                    letterSpacing: "0.05em",
                    color: "#FF6565",
                  }}
                >
                  HOME
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: "13px",
                    lineHeight: "248.52%",
                    textAlign: "center",
                    letterSpacing: "0.05em",
                    color: "#FF6565",
                  }}
                >
                  TOKENOMICS
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: "13px",
                    lineHeight: "248.52%",
                    textAlign: "center",
                    letterSpacing: "0.05em",
                    color: "#FF6565",
                  }}
                >
                  ROADMAP
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: "13px",
                    lineHeight: "248.52%",
                    textAlign: "center",
                    letterSpacing: "0.05em",
                    color: "#FF6565",
                  }}
                >
                  MARKETING
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "32px",
                  lineHeight: "41px",
                  letterSpacing: "0.05em",
                  color: "#FF6565",
                  fontWeight: 900,
                  textAlign: "center",
                  mt: 3,
                }}
              >
                CONNECT
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 3,
                  my: 3,
                }}
              >
                <img src={tele} alt="" />
                <img src={discord} alt="" />
                <img src={twe} alt="" />
              </Box>
              <Typography
                sx={{
                  color: "#FF6565",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "14px",
                  textAlign: "center",
                  letterSpacing: "0.05em",
                }}
              >
                Copywrite <CopyrightIcon sx={{ color: "#D0D5DD", mb: -1 }} />{" "}
                2022 Rana Muneeb Asad | Ravi Incorporated
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            {" "}
            <Box textAlign="center">
              <img src={footericon2} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import buybg from "../../images/buybg.png";
import buygrid from "../../images/buygrid.png";
import Vector from "../../images/Vector.png";
import metamask from "../../images/metamask.png";

const Howtobuy = () => {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        backgroundImage: `url(${buybg})`,
        backgroundPosition: { sm: "center", xs: "left" },
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item md={7} xs={12}>
            <Box>
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: { md: "48px", xs: "28px" },
                  lineHeight: "78px",
                }}
              >
                HOW TO <span style={{ color: "#85F5FF" }}>BUY</span>
              </Typography>
              <Box>
                <ul
                  style={{
                    listStyle: "none",
                    fontWeight: 900,
                    fontSize: matches ? "14px" : "28px",
                    margin: "20px 0",
                    lineHeight: matches ? "30px" : "50px",
                    padding: "0px",
                  }}
                >
                  <li>
                    <span style={{ color: "#FF6565" }}>Download</span> Metamask
                    or Trust Wallet
                  </li>
                  <li>
                    Setup your <span style={{ color: "#FF6565" }}>wallet</span>
                  </li>
                  <li>
                    Go to <span style={{ color: "#FF6565" }}>PancakeSwap</span>
                  </li>
                  <li>
                    <span style={{ color: "#FF6565" }}>Connect</span> your
                    wallet
                  </li>
                  <li>
                    Add <span style={{ color: "#FF6565" }}>$CZP</span> contract
                  </li>
                  <li>
                    Click settings and set “slippage” to{" "}
                    <span style={{ color: "#FF6565" }}>8%</span>{" "}
                  </li>
                  <li>
                    Enter the desired amount and{" "}
                    <span style={{ color: "#FF6565" }}>swap</span>
                  </li>
                </ul>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <img
                  src={metamask}
                  alt=""
                  style={{
                    width: matches ? "100px" : "150px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <img src={Vector} alt="" width="60px" height="60px" />
                  <Typography
                    sx={{
                      fontWeight: 900,
                      fontSize: "24px",
                      lineHeight: "78px",
                    }}
                  >
                    Trust Wallet
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={5} xs={12}>
            <img
              src={buygrid}
              alt=""
              height="80%"
              width="100%"
              style={{ marginTop: matches ? "0px" : "100px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Howtobuy;

import React from "react";
import { Box, Button, Grid, TextField, useMediaQuery } from "@mui/material";
import buy1 from "../../images/buy1.png";
import buy2 from "../../images/buy2.png";

const Holiday = () => {
  const matches = useMediaQuery("(max-width:900px)");
  return (
    <Box
      sx={{
        backgroundColor: "#FF6565",
        my: 4,
      }}
    >
      <Grid container>
        <Grid item md={4} xs={12}>
          <Box>
            <img src={buy1} alt="" style={{ marginTop: "-80px" }} />
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              my: { md: 0, xs: 3 },
              mx: { md: 0, xs: 1 },
            }}
          >
            <TextField
              placeholder="Sign up to recieve special rewards!"
              sx={{
                // maxWidth: check ? "100%" : "400px",
                width: "100%",
                fontWeight: "500",

                "& label.Mui-focused": {
                  color: "#C8FAFF",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "0px",
                    borderRadius: "53px !important",
                    border: "7px solid #C8FAFF",
                  },
                  "&:hover fieldset": {
                    borderColor: "#C8FAFF",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#C8FAFF",
                  },
                },
                input: {
                  "&::placeholder": {
                    textOverflow: "ellipsis !important",
                    color: "#C8FAFF",
                  },
                },
                input: {
                  color: "white",
                  fontSize: { xs: "12px", md: "14px" },
                },
              }}
            />
            <Button
              sx={{
                backgroundColor: "#C8FAFF",
                borderRadius: "45px",
                color: "#717070",
                fontSize: "16px",
                fontWeight: "700",
                px: 2,
                ml: 2,
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
        {matches ? (
          ""
        ) : (
          <Grid item md={4} xs={12}>
            <Box sx={{}}>
              <img src={buy2} alt="" />
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Holiday;

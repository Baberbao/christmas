import React, { useContext, useState } from "react";
import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import useMediaQuery from "@mui/material/useMediaQuery";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { AppContext } from "../utils";
import { Paper } from "@mui/material";
import { ToastNotify, useTokenContract } from "../ConnectivityAssets/hooks";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#21476E !important",
    justifyContent: "center",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },
});

export default function Header() {
  const { account, connect, disconnect, signer } = useContext(AppContext);
  const tokenContract = useTokenContract(signer);
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const matches = useMediaQuery("(max-width:960px)");
  const matches1 = useMediaQuery("(max-width:1279px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box mt={-20} display="flex" justifyContent="center">
        <img width="100px" src="/logo.png" alt="" />
      </Box>
      <List>
        {["Home", "Tokenomics", "Roadmap", "Marketing Plan"].map(
          (text, index) => (
            <ListItem
              button
              style={{
                justifyContent: "center",
                borderBottom: "1px solid #bbb8b8",
              }}
              key={text}
            >
              <ListItemText
                style={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#ffffff",
                }}
                primary={text}
              />
            </ListItem>
          )
        )}
      </List>
      <Box mb={1} display="flex" justifyContent="center">
        {account ? (
          <Box
            width="90%"
            height="42px"
            bgcolor="#098CDC"
            borderRadius="8px"
            sx={{ cursor: "pointer" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#ffffff"
            fontWeight="500"
            fontSize="16px"
            onClick={() => disconnect()}
            style={{ zIndex: 1 }}
          >
            {account.slice(0, 4) + "..." + account.slice(-4)}
          </Box>
        ) : (
          <Box
            zIndex={1}
            style={{
              cursor: "pointer",
            }}
            bgcolor="transparent"
            width="90%"
            height="42px"
            fontWeight="500"
            borderRadius="8px"
            fontSize="20px"
            color="#ffffff"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={() => connect()}
            border="1px solid #85F5FF"
          >
            Get WhitePaper
          </Box>
        )}
      </Box>
    </div>
  );
  return (
    <>
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
          background: "transparent",
          zIndex: "100px",
        }}
        height="92px"
        width="100%"
      >
        <Container maxWidth="lg">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            // pl={matches ? 0 : 5}
            // pr={matches ? 0 : 5}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexBasis={matches ? "50%" : "20%"}
            >
              <Box
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#000000",
                  fontSize: "35px",
                  fontFamily: "Gilroy",
                  color: "white",
                }}
              >
                Santa Gifts
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent={matches1 ? "end" : "space-between"}
              alignItems="center"
              // flexBasis={matches1 ? "45px" : "78%"}
            >
              <Box
                display="flex"
                justifyContent="center"
                // flexBasis={matches1 ? "0px" : "70%"}
                alignItems="center"
              >
                <Hidden mdDown>
                  <Box
                    mr={6}
                    fontSize="20px"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Home
                  </Box>
                  <Box
                    mr={6}
                    fontSize="20px"
                    zIndex="1"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Tokenomics
                  </Box>

                  <Box
                    mr={6}
                    fontSize="20px"
                    zIndex="1"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Roadmap
                  </Box>
                  <Box
                    mr={6}
                    fontSize="20px"
                    zIndex="1"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Marketing Plan
                  </Box>

                  {account ? (
                    <Box
                      width="130px"
                      height="42px"
                      bgcolor="transparent"
                      borderRadius="8px"
                      sx={{ cursor: "pointer" }}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      color="#ffffff"
                      fontWeight="500"
                      fontSize="16px"
                      onClick={() => disconnect()}
                      style={{ zIndex: 1 }}
                      border="1px solid #85F5FF"
                    >
                      {account.slice(0, 4) + "..." + account.slice(-4)}
                    </Box>
                  ) : (
                    <Box
                      zIndex={1}
                      style={{
                        cursor: "pointer",
                      }}
                      bgcolor="transparent"
                      color="white"
                      height="42px"
                      fontWeight="500"
                      borderRadius="8px"
                      fontSize="20px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      textAlign="center"
                      onClick={() => connect()}
                      padding="0rem 1rem"
                      border="1px solid #85F5FF"
                    >
                      Get Whitepaper
                    </Box>
                  )}
                </Hidden>
              </Box>

              <Hidden mdUp>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button
                      onClick={toggleDrawer(anchor, true)}
                      style={{ zIndex: 1 }}
                    >
                      <MenuIcon
                        style={{
                          fontSize: "38px",
                          cursor: "pointer",
                        }}
                      ></MenuIcon>
                    </Button>
                    <Paper style={{ background: "#1C0D38" }}>
                      <SwipeableDrawer
                        classes={{ paper: classes.paper }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                      >
                        {list(anchor)}
                      </SwipeableDrawer>
                    </Paper>
                  </React.Fragment>
                ))}
              </Hidden>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

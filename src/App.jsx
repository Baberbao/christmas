import React, { useEffect, useState } from "react";
import Web3 from "web3";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Holiday from "./components/Holiday/Holiday";
import Howtobuy from "./components/Howtobuy/Howtobuy";
import HeroSection from "./components/HeroSection";
import NetworkChange from "./networkSwitch";
import SantaGift from "./components/SantaGift";
const web3 = new Web3(
  Web3.givenProvider
    ? Web3.givenProvider
    : "https://data-seed-prebsc-1-s1.binance.org:8545/"
);
function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let chain = async () => {
      const chainid = await web3.eth.getChainId();
      if (chainid !== 97) {
        setOpen(true);
      }
    };
    chain();
  }, []);

  return (
    <>
      <NetworkChange open={open} setOpen={setOpen} />
      <HeroSection />
      <SantaGift />
      <Holiday />
      <Howtobuy />
      <Footer />
    </>
  );
}

export default App;

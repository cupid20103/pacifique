import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Web3 from "web3";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// @import contexts
import { EthereumContext } from "./contexts/EthereumContext";
// @import pages
const Landing = React.lazy(() => import("./pages/landing"));
const Value = React.lazy(() => import("./pages/description/value"));
const Benefit = React.lazy(() => import("./pages/description/benefit"));
const NFTs = React.lazy(() => import("./pages/description/nfts"));
const Buy = React.lazy(() => import("./pages/description/buy"));
const FAQ = React.lazy(() => import("./pages/description/answer"));
const Mint = React.lazy(() => import("./pages/mint"));
const Eco = React.lazy(() => import("./pages/essential/eco"));
const Restaurant = React.lazy(() => import("./pages/essential/restaurant"));
const Farm = React.lazy(() => import("./pages/essential/farm"));
const Healing = React.lazy(() => import("./pages/essential/healing"));
const Boutique = React.lazy(() => import("./pages/essential/boutique"));
const Music = React.lazy(() => import("./pages/essential/music"));
const Adventures = React.lazy(() => import("./pages/essential/adventures"));
const Sabrina = React.lazy(() => import("./pages/friend/sabrina"));
const Daniel = React.lazy(() => import("./pages/friend/daniel"));
const Julien = React.lazy(() => import("./pages/friend/julien"));
const Alexandre = React.lazy(() => import("./pages/friend/alexandre"));

const App = () => {
  const [provider, setProvider] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [currentAcc, setCurrentAcc] = useState("");

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum && ethereum.isMetaMask) {
      setProvider(ethereum);
      setWeb3(new Web3(ethereum));
      ethereum.on("accountsChanged", (accs) => {
        setAccounts(accs);
        setCurrentAcc(accs[0]);
      });
      ethereum.on("chainChanged", (chainId) => {
        if (chainId === "0x1") {
          toast("Ethereum mainnet connected successfully");
        } else {
          toast.error("Please connect to Ethereum Mainnet", {
            theme: "dark",
          });
        }
      });
    } else {
      toast.error("Please install Metamask wallet in this browser", {
        theme: "dark",
      });
    }

    AOS.init();
  }, []);

  useEffect(() => {
    const setCurrentlyConnectedAccount = async () => {
      let accounts = await web3.eth.getAccounts();
      if (accounts && accounts.length > 0) {
        setCurrentAcc(accounts[0]);
      }
    };
    if (web3) {
      setCurrentlyConnectedAccount();
    }
  }, [web3]);

  return (
    <>
      <EthereumContext.Provider
        value={{ provider, accounts, web3, currentAcc }}
      >
        <Suspense>
          <Router>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/eco" element={<Eco />} />
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/farm" element={<Farm />} />
              <Route path="/healing" element={<Healing />} />
              <Route path="/adventures" element={<Adventures />} />
              <Route path="/music" element={<Music />} />
              <Route path="/boutique" element={<Boutique />} />
              <Route path="/values" element={<Value />} />
              <Route path="/benefits" element={<Benefit />} />
              <Route path="/nfts" element={<NFTs />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/mint/:slug" element={<Mint />} />
              <Route path="/sabrina" element={<Sabrina />} />
              <Route path="/daniel" element={<Daniel />} />
              <Route path="/julien" element={<Julien />} />
              <Route path="/alexandre" element={<Alexandre />} />
            </Routes>
          </Router>
        </Suspense>
      </EthereumContext.Provider>
      <ToastContainer />
    </>
  );
};

export default App;

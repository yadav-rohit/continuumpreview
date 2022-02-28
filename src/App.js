import React , { Component }from "react";
import "./App.css";
import "./Form.css";
import "./team.css";
import Main from "./Components/Main";
import Contact from "./Components/ContactUs";
import HelpsSection from "./Components/HelpsSection";
import Dpage from "./Components/Dpage";
import Header from "./Components/Header";
import TransactionState from "./context/TransactionState";
import About from "./Components/About";
import WithDraw from "./Components/Widraw";

import Footer from "./Components/Footer";

import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <TransactionState>
      <div className="flex flex-col md:min-h-screen  overflow-hidden  font-medium  bg-[#000000]">
        <p> Hello</p>
        <HashRouter >
          <Header />
          <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/About">
      <About/>
      </Route>
      <Route exact path="/DonationPage">
      <Dpage/>
      </Route>
      <Route exact path="/Helper">
      <HelpsSection/>
      </Route>
      <Route exact path="/Contact">
      <Contact/>
      </Route>
      <Route exact path="/WithDraw">
      <WithDraw/>
      </Route>

      {/* <Route exact path="/" element={<Main/>} />
      <Route exact path="/About" element={<About/>} />
      <Route exact path="/DonationPage" element={<Dpage/>} />
      <Route exact path="/Helper" element={<HelpsSection/>} />
      <Route exact path="/Contact" element={<Contact/>} />
      <Route exact path="/WithDraw" element={<WithDraw/>} /> */}
        </HashRouter>
        <Footer />
      </div>
    </TransactionState>
  );
}

export default App;

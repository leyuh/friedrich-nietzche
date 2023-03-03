import React, { ReactElement, useState, useEffect, useRef } from 'react';
import './styles/App.css';

import { HNavBar } from "./HNavBar";
import { VNavBar } from "./VNavBar";

import { Biography } from "./pages/Biography";
import { Philosophy } from './pages/Philosophy';

import navImg from "./images/navbar-2.png";

function App() {

  const pages = ["BIOGRAPHY", "PHILOSOPHY", "ANALYSIS", "BIBLIOGRAPHY"];

  const [currPage, setCurrPage] = useState<string>(pages[0]);
  const [verNavVis, setVerNavVis] = useState<boolean>(false);


  return (
    <div className="App">

      <h1 id="nietzche-title">NIETZSCHE</h1>

      <HNavBar
        setCurrPage={setCurrPage}
        pages={pages}
      />

      <VNavBar
        verNavVis={verNavVis}
        setVerNavVis={setVerNavVis}
        setCurrPage={setCurrPage}
        pages={pages}
      />

      <img id="nav-btn" src={navImg} onClick={() => {
        setVerNavVis(true);
      }}/>

      {(currPage == "BIOGRAPHY") ? <Biography/> : currPage == "PHILOSOPHY" ? <Philosophy/> : ""}
    </div>
  );
}

export default App;

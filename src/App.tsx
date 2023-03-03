import React, { ReactElement, useState, useEffect, useRef } from 'react';
import './styles/App.css';

import { HNavBar } from "./HNavBar";
import { VNavBar } from "./VNavBar";

import { Biography } from "./pages/Biography";

import navImg from "./images/navbar-2.png";

function App() {

  const [currPage, setCurrPage] = useState<ReactElement>(<Biography/>);
  const [verNavVis, setVerNavVis] = useState<boolean>(false);


  return (
    <div className="App">

      <h1 id="nietzche-title">NIETZCHE</h1>

      <HNavBar/>

      <VNavBar
        verNavVis={verNavVis}
        setVerNavVis={setVerNavVis}
      />

      <img id="nav-btn" src={navImg} onClick={() => {
        setVerNavVis(true);
      }}/>

      {currPage}
    </div>
  );
}

export default App;

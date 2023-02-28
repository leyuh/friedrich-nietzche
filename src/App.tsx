import React, { ReactElement, useState } from 'react';
import './styles/App.css';

import { HNavBar } from "./HNavBar";


import { Biography } from "./pages/Biography";

function App() {

  const [currPage, setCurrPage] = useState<ReactElement>(<Biography/>);

  return (
    <div className="App">
      <HNavBar/>
      {currPage}
    </div>
  );
}

export default App;

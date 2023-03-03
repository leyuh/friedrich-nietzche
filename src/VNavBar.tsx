import {Dispatch, SetStateAction} from 'react';

import "./styles/VNavBar.css";


interface VNavBarProps {
    verNavVis: boolean;
    setVerNavVis: Dispatch<SetStateAction<boolean>>
}

export const VNavBar: React.FC<VNavBarProps> = ({verNavVis, setVerNavVis}) => {
    return <div id="v-nav-bar" className={verNavVis ? "vNavOpen" : "vNavClose"} style={
        verNavVis ? {right: "0px"} : {right: "-340px"}
    }>
        <button id="v-nav-close-btn" onClick={() => {
            setVerNavVis(false);
        }}>x</button>
        <ul>
            <li><a>BIOGRAPHY</a></li>
            <li><a>PHILOSOPHY</a></li>
            <li><a>ANALYSIS</a></li>
            <li><a>CONCLUSION</a></li>
        </ul>
    </div>

}
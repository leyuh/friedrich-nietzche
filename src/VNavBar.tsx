import {Dispatch, SetStateAction, useEffect, useRef } from 'react';

import "./styles/VNavBar.css";


interface VNavBarProps {
    verNavVis: boolean;
    setVerNavVis: Dispatch<SetStateAction<boolean>>
}

export const VNavBar: React.FC<VNavBarProps> = ({verNavVis, setVerNavVis}) => {

    const vNavRef = useRef<any>(null);

    useEffect(() => {
        vNavRef.current.className = "preload";
    }, [])

    return <div ref={vNavRef} id="v-nav-bar" className={verNavVis ? "vNavOpen" : "vNavClose"} style={
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
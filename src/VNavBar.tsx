import {Dispatch, ReactElement, SetStateAction, useEffect, useRef } from 'react';

import "./styles/VNavBar.css";


interface VNavBarProps {
    verNavVis: boolean;
    setVerNavVis: Dispatch<SetStateAction<boolean>>;
    setCurrPage: Dispatch<SetStateAction<string>>;
    pages: string[];
}

export const VNavBar: React.FC<VNavBarProps> = ({verNavVis, setVerNavVis, setCurrPage, pages}) => {

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
            {pages.map((val: string, i: number) => {
                return <li key={i} onClick={() => {
                    setCurrPage(val);
                    setVerNavVis(false);
                    document.documentElement.scrollTop = 0;
                }}><a>{val}</a></li>
            })}
        </ul>
    </div>

}
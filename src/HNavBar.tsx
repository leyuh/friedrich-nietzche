import React, {Dispatch, SetStateAction, ReactElement} from 'react';

import "./styles/HNavBar.css";

interface HNavBarProps {
    setCurrPage: Dispatch<SetStateAction<string>>;
    pages: string[];
}


export const HNavBar: React.FC<HNavBarProps> = ({setCurrPage, pages}) => {
    return <div id="h-nav-bar">
        <ul>
            {pages.map((val: string, i: number) => {
                return <li key={i} onClick={() => {
                    setCurrPage(val);
                }}><a>{val}</a></li>
            })}
        </ul>
    </div>
}
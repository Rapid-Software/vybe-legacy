import React from "react";

interface NavBarProps {
    curPage: string;
}

export const NavBar: React.FC<NavBarProps> = ({ curPage }) => {
    return (
        <h1>{curPage}</h1>
    )
};
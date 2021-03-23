import React from 'react';
import {NavBar} from '../components/NavBar';
import {HomeFirstHero} from '../components/HomeFirstHero';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
    return (
        <div className={'bg-gray-300'}>
            <NavBar curPage="Home" />
            <HomeFirstHero />


            </div>
    )
}
import React from 'react';

interface FeaturesProps {}

export const Features: React.FC<FeaturesProps> = () => {
    return (
        <div className={'bg-white'}>
            <div className={'lg:text-center sm:text-center text-center'}> <h2 className={'font-bold text-gray-800 pt-8 text-center'}>Vybe Features</h2> 
                <p className={'mt-4 max-w-2xl font-bold text-3xl text-black lg:mx-auto justify-center pb-8'}>A better way to make playlists</p>
                </div>

            <div className={'grid grid-cols-2 gap-8 text-center p-5'}>
            <div>
                <p className={''}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            <div>
                <p className={''}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <p className={''}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <p className={''}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>


                </div>

            </div>
    )
};
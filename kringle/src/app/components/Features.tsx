import React from 'react';

interface FeaturesProps {}

export const Features: React.FC<FeaturesProps> = () => {
    return (
        <div className={'bg-white'}>
            <div className={'lg:text-center'}> <h2 className={'font-bold text-gray-800 pt-8 text-center'}>Vybe Features</h2> 
                <p className={'mt-4 max-w-2xl font-bold text-3xl text-black lg:mx-auto text-center pb-8'}>A better way to make playlists</p>
                </div>

            <div className={'grid grid-cols-2 gap-4 text-center'}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>


                </div>

            </div>
    )
};
import React from 'react';
import Divider from '../Divider/Divider';
import Banner from '../Banner/Banner';
import Software from '../Software/Software';
import KeyBoardbutton from '../KeyboardButton/KeyBoardbutton';

const Home = () => {
    return (
        <div className='w-[1109]'>
            <Banner></Banner>
            <Divider></Divider>
            <Software></Software>
            <KeyBoardbutton></KeyBoardbutton>
        </div>
    );
};

export default Home;
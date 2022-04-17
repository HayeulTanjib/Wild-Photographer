import React from 'react';
import Banner from './Banner/Banner';
import Faq from './Faq/Faq';
import Services from './Services/Services';



const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <Services/>
            <Faq/>
        </div>
    );
};

export default Home;
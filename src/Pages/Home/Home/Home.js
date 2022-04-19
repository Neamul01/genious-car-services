import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Services from '../Services/Services'
import Carousels from './Carousel/Carousel';

const Home = () => {
    return (
        <div>
            <Carousels></Carousels>
            <Services></Services>
            <PageTitle title='Home'></PageTitle>
        </div>
    );
};

export default Home;
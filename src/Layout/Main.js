import React from 'react';
import Footer from '../Components/Share/Footer/Footer';
import Navber from '../Components/Share/Navber/Navber';
import {Outlet} from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
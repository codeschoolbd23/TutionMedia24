import React from 'react';
import TopNav from './../Utility/Navigation/TopNav';
import { Outlet } from 'react-router';
import BottomNav from './../Utility/Navigation/BottomNav';

const Main = () => {
    return (
        <div>
           <TopNav></TopNav>
           <Outlet></Outlet>
           <BottomNav></BottomNav>
        </div>
    );
};

export default Main;
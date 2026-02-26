import React from 'react';
import TopNav from './../Utility/Navigation/TopNav';
import { Outlet } from 'react-router';
import BottomNav from './../Utility/Navigation/BottomNav';

const Main = () => {
    return (
      <div>
        <TopNav></TopNav>
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
        <div>
          <BottomNav></BottomNav>
        </div>
      </div>
    );
};

export default Main;
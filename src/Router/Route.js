import React from 'react';
import Main from '../Main/Main';
import Home from '../Document/Home/Home';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import Student from '../Document/Students/Student';
import Teacher from '../Document/Teacher/Teacher';

const Route = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children: [
            {
              path: "/",
              element: <Home></Home>
            },
            {
              path: "/students",
              element: <Student></Student>
            },
            {
              path: "/teachers",
              element: <Teacher></Teacher>
            },
          ],
        }])    
    return (
        <div>
           <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Route;
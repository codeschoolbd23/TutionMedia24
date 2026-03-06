import React from 'react';
import Main from '../Main/Main';
import Home from '../Document/Home/Home';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import Student from '../Document/Students/Student';
import Teacher from '../Document/Teacher/Teacher';
import Profile from '../Document/Profile/Profile';
import SignIn from '../Document/account/signin/SignIn';
import SignUp from '../Document/account/signup/SignUp';
import Post from '../Document/Post/Post';

const Route = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("https://tutionmedia24-server.vercel.app/"),
          },
          {
            path: "/students",
            element: <Student></Student>,
            loader: () => fetch("https://tutionmedia24-server.vercel.app/"),
          },
          {
            path: "/teachers",
            element: <Teacher></Teacher>,
            loader: () => fetch("https://tutionmedia24-server.vercel.app/"),
          },
          {
            path: "/profile",
            element: <Profile></Profile>,
            loader: () => fetch("https://tutionmedia24-server.vercel.app/"),
          },
          {
            path: "/signin",
            element: <SignIn></SignIn>,
            },
          {
            path: "/signup",
            element: <SignUp></SignUp>,
           },
          {
            path: "/post",
            element: <Post></Post>,
           },
        ],
      },
    ]);    
    return (
        <div>
           <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Route;
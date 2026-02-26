import React from 'react';
import banner from '../../Utility/Other/cover.jpg'
const Profile = () => {
    return (
      <div className="bg-base-200 mx-auto p-5">
          <div className="avatar">
            <div className="w-full rounded-xl">
              <img src={banner} alt="banner" />
            </div>
          </div>
        <div className="flex flex-wrap items-center">
          <div className="flex items-start flex-col">
            <p className="">Md Safiqul Islam</p>
            Current Job:
            <p className="">Lecturer of ICT</p>
            <p className="">Narsingdi Polytechnic Institute</p>
            <p className="">Narsingdi,Dhaka,Bangladesh</p>
            Last Qualification:
            <p className="flex-wrap">B.Sc In Computer</p>
            <button className="btn btn-primary">See Details...</button>
          </div>
        </div>
      </div>
    );
};

export default Profile;
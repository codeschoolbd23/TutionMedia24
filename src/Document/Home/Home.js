import React from 'react';
import banner from '../../Utility/Other/cover.jpg'
const Home = () => {
    return (
      <div className="container mx-auto p-5 h-screen">
        <p className="text-red-600 text-shadow-lg/10 text-justify p-5">
          আপনি কি একজন শিক্ষক ? আপনি সহজেই পেয়ে যাবেন আপনার পছন্দে দক্ষ বিষয়ের
          শিক্ষার্থীদের প্রোফাইল, তাদের অবস্থান, যোগাযোগের তথ্য। আমাদের লক্ষ্য
          হলো শিক্ষকদের ও শিক্ষার্থীদের মধ্যে একটি সেতুবন্ধন তৈরি করা, এবং
          শিক্ষার মান উন্নত করা।
        </p>
        <div className="lg:flex w-full gap-5 mt-5">
          <div className="w-full">
            <img src={banner} alt="banner" />
          </div>
          <p className="shadow-lg/40 text-justify p-5 lg:w-1/2 shadow-2xl bg-black text-yellow-300">
            আপনি কি অভিভাবক ? আমাদের প্ল্যাটফর্মে আপনি পাবেন বিভিন্ন বিষয়ে দক্ষ ও অভিজ্ঞ শিক্ষকদের প্রোফাইল, 
            তাদের অবস্থান, যোগাযোগের তথ্য। আমাদের লক্ষ্য হলো শিক্ষকদের ও শিক্ষার্থীদের মধ্যে একটি সেতুবন্ধন তৈরি করা, এবং শিক্ষার মান উন্নত করা।
           
          </p>
        </div>
      </div>
    );
};

export default Home;
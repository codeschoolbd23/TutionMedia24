import React from 'react';
import banner from '../../Utility/Other/cover.jpg'
const Home = () => {
    return (
      <div className="container mx-auto p-5 h-screen lg:flex lg:h-full">
        <div className="w-full">
          <img src={banner} alt="banner" />
        </div>
        <div>
          <p className="shadow-lg/40 text-justify p-5">
            আপনি কি শিক্ষক ? আমাদের প্ল্যাটফর্মে আপনি পাবেন বিভিন্ন বিষয়ের
            শিক্ষার্থীদের প্রোফাইল, তাদের অবস্থান, যোগাযোগের তথ্য। আমাদের লক্ষ্য
            হলো শিক্ষকদের ও শিক্ষার্থীদের মধ্যে একটি সেতুবন্ধন তৈরি করা, এবং
            শিক্ষার মান উন্নত করা।
          </p>
          <p className="shadow-lg/40 text-justify p-5">
            আপনি কি অভিভাবক ? আমাদের প্ল্যাটফর্মে আপনি পাবেন বিভিন্ন বিষয়ের
            শিক্ষকদের প্রোফাইল, তাদের অবস্থান, যোগাযোগের তথ্য। আমাদের লক্ষ্য হলো
            শিক্ষকদের ও শিক্ষার্থীদের মধ্যে একটি সেতুবন্ধন তৈরি করা, এবং শিক্ষার
            মান উন্নত করা।
          </p>
        </div>
      </div>
    );
};

export default Home;
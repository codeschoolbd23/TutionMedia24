import React from "react";

const Post = () => {
  return (
    <div className="bg-base-200 mx-auto p-5 w-full">
      <div className="flex flex-wrap items-center">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
          />
          
          <input
            type="text"
            placeholder="Your Subject"
            className="input input-bordered w-full max-w-xs"
          />
          
          <input
            type="text"
            placeholder="Profession"
            className="input input-bordered w-full max-w-xs"
          />
          
          <input
            type="text"
            placeholder="Institute"
            className="input input-bordered w-full max-w-xs"
          />
         
          <input
            type="text"
            placeholder="Address"
            className="input input-bordered w-full max-w-xs"
          />
          
          <input
            type="text"
            placeholder="Class/Last Qualification"
            className="input input-bordered w-full max-w-xs"
          />
          
          <input
            type="text"
            placeholder="WhatsApp Number"
            className="input input-bordered w-full max-w-xs"
          />
          
          <input
            type="number"
            placeholder="Contact Number"
            className="input input-bordered w-full max-w-xs"
          />
         
          <input
            type="email"
            placeholder="tutionmedia24@example.com"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
          <button className="btn btn-outline">Submit</button>
      </div>
   
  );
};

export default Post;

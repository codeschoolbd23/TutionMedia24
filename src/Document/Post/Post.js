import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/Context";


const Post = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  

  const handleUploadData = (data) => {
    const {
      holder,
      subject,
      institute,
      email,
      whatsapp,
      contact,
    } = data;

    const postData = {
      user: user.displayName,
      userEmail: user.email,
      name: holder,
      subject: subject,
      institute: institute,
      email: email,
      whatsapp: whatsapp,
      contact: contact
      
    };
    fetch(`https://tutionmedia24-server.vercel.app/post`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged) {
          alert(`${holder} is submitted successfully`);
        }
      });
  };
  const postProfile = [
    {
      id: 1,
      type: "text",
      placeholder: "Enter your name",
      className: "input input-bordered p-4 my-2",
      register: "holder",
    },
    {
      id: 2,
      type: "text",
      placeholder: "Enter subject name",
      className: "input input-bordered p-4 my-2",
      register: "subject",
    },
    {
      id: 3,
      type: "text",
      placeholder: "Enter institute name",
      className: "input input-bordered p-4 my-2",
      register: "institute",
    },
    {
      id: 4,
      type: "text",
      placeholder: "Enter your address",
      className: "input input-bordered p-4 my-2",
      register: "address",
    },
    {
      id: 5,
      type: "number",
      placeholder: "Enter contact number",
      className: "input input-bordered p-4 my-2",
      register: "contact",
    },
    {
      id: 6,
      type: "number",
      placeholder: "Enter whatsapp number",
      className: "input input-bordered p-4 my-2",
      register: "whatsapp",
    },
    {
      id: 7,
      type: "email",
      placeholder: "Enter your email",
      className: "input input-bordered p-4 my-2",
      register: "email",
    },
    
  ];
  return (
    <>
      {
        <form onSubmit={handleSubmit(handleUploadData)} className="w-full">
          <h1 className="py-5">Fill Up with your information</h1>
          <div className="w-full">
            {postProfile?.map((vf) => (
              <div key={vf.id} className="w-full grid grid-cols-1">
                <input
                  type={vf.type}
                  placeholder={vf.placeholder}
                  className={vf.className}
                  {...register(`${vf?.register}`, {
                    required: true,
                  })}
                />
              </div>
            ))}
          </div>
          <button className="btn p-4 w-full">Submit</button>
        </form>
      }
    </>
  );
};

export default Post;

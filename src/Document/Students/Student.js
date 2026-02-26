import React from 'react';
import { Link } from 'react-router';
import location from "../../Utility/Other/location.png";
import contact from "../../Utility/Other/contact.jpg";
import student from "../../Utility/Other/student.jpg";
const Student = () => {
  const students = [
    { id: 1, name: "Md Maruf Hasan", designation: "Science",subject: "Physics",institute: "Dhaka College" ,Class:"Xi",contact:"+880 123456789",location:"Dhaka, Bangladesh"},
    { id: 2, name: "Md Maruf Hasan", designation: "Humanities",subject: "History",institute: "Dhaka College" ,Class:"XII",contact:"+880 123456789",location:"Dhaka, Bangladesh"},
    { id: 3, name: "Md Maruf Hasan", designation: "Commerce",subject: "Accounting",institute: "Dhaka College" ,Class:"XI",contact:"+880 123456789",location:"Dhaka, Bangladesh"},
    { id: 4, name: "Md Maruf Hasan", designation: "Science",subject: "Chemistry",institute: "Dhaka College" ,Class:"XII",contact:"+880 123456789",location:"Dhaka, Bangladesh"},
    { id: 5, name: "Md Maruf Hasan", designation: "Science",subject: "Higher Math",institute: "Dhaka College" ,Class:"XI",contact:"+880 123456789",location:"Dhaka, Bangladesh"},
  ];
  return (
    <div className="flex flex-wrap justify-start">
      {students.map((st) => (
        <div key={st.id} className="bg-base-100 min-w-96 shadow-sm m-1 p-5">
          <div className="items-center">
            <div className="flex justify-around items-center">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                  <img src={student} alt="Student" />
                </div>
              </div>
              <div>
                <h2 className="text-primary text-xl">{st.name}</h2>
                <h1 className="text-secondary text-2xl font-extrabold badge badge-outline">
                  Required Teacher
                </h1>
                <h3 className='font-bold uppercase'>Subject:{st.subject}</h3>
              </div>
            </div>
            <div className='flex justify-around items-center'>
              <h3>Group:{st.designation}</h3>
              <h3>Class:{st.Class}</h3>
            </div>
            <h3>Institute:{st.institute}</h3>
            <div className="flex justify-around items-center  gap-0">
              <div className="flex flex-col items-start">
                <div className="">
                  <div className="flex">
                    <img src={location} width={30} alt="location" />
                    <span className="ml-2">{st.location}</span>
                  </div>
                  <div className="flex ml-1">
                    <img src={contact} width={20} alt="contact" />
                    <span className="ml-2">{st.contact}</span>
                  </div>
                </div>
              </div>
              <div className="justify-center flex flex-col">
                <Link className="badge badge-primary m-1">Book</Link>
                <Link className="badge badge-primary m-1">Cancel</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Student;
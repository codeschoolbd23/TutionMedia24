import React from 'react';
import location from '../../Utility/Other/location.png';
import contact from '../../Utility/Other/contact.jpg';
import teacherImg from '../../Utility/Other/teacher.jpg';
import { Link } from 'react-router';

const Teacher = () => {
    const teachers=[
        {id:1, name: 'Md Maruf Hasan', designation: 'ICT Lecturer'},
        {id:2, name: 'Md Maruf Hasan', designation: 'ICT Lecturer'},
        {id:3, name: 'Md Maruf Hasan', designation: 'ICT Lecturer'},
        {id:4, name: 'Md Maruf Hasan', designation: 'ICT Lecturer'},
        {id:5, name: 'Md Maruf Hasan', designation: 'ICT Lecturer'}
    ]
    return (
      <div className="flex flex-wrap justify-start mx-auto">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="card bg-base-100 w-96 shadow-sm m-1 py-5"
          >
            <div className="flex justify-around items-center  gap-0">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                  <img src={teacherImg} alt="Teacher" />
                </div>
              </div>
              <div>
                <h2 className="text-secondary uppercase text-xl font-bold">
                  {teacher.name}
                </h2>
                <h3 className="text-primary uppercase text-xl font-bold">
                  {teacher.designation}
                </h3>
                <ul>
                  <li className="flex">
                    <img src={location} width={30} alt="location" />
                    <span className="ml-2">Dhaka, Bangladesh</span>
                  </li>
                  <li className="flex ml-1">
                    <img src={contact} width={20} alt="contact" />
                    <span className="ml-2">+880 123456789</span>
                  </li>
                </ul>
                <div className="card-actions justify-center">
                  <Link className="badge badge-primary">Book</Link>
                  <Link className="badge badge-primary">Details...</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Teacher;
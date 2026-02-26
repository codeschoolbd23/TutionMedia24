import React from 'react';
import location from '../../Utility/Other/location.png';
import contact from '../../Utility/Other/contact.jpg';
import teacherImg from '../../Utility/Other/teacher.jpg';
import { Link } from 'react-router';

const Teacher = () => {
    const teachers=[
        {id:1,
        name: 'Md Maruf Hasan',
        designation: 'ICT Lecturer',},
        {
        id:2,
        name: 'Md Maruf Hasan',
        designation: 'ICT Lecturer',},
        {
        id:3,
        name: 'Md Maruf Hasan',
        designation: 'ICT Lecturer',},
        {
        id:4,
        name: 'Md Maruf Hasan',
        designation: 'ICT Lecturer',},
        {
        id:5,
        name: 'Md Maruf Hasan',
        designation: 'ICT Lecturer',}
    ]
    return (
      <div className="flex flex-wrap justify-center">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="card bg-base-100 w-96 shadow-sm m-1">
            <div className="card-body flex items-center">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                  <img src={teacherImg} alt="Teacher" />
                </div>
              </div>
              <h2 className="card-title">{teacher.name}</h2>
              <h3 className="badge badge-secondary">{teacher.designation}</h3>
              <ul>
                <li className="flex">
                  <img src={location} width={30} alt="location" />
                  <span className="ml-2">Dhaka, Bangladesh</span>
                </li>
                <li className="flex">
                  <img src={contact} width={25} alt="contact" />
                  <span className="ml-2">+880 123456789</span>
                </li>
              </ul>
              <div className="card-actions justify-center">
                <Link className="badge badge-outline">Book</Link>
                <Link className="badge badge-outline">Cancel</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Teacher;
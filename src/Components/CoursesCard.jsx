import React from "react";
import { Link } from "react-router";


const CoursesCard = ({ course }) => {
  const { _id, title, imageURL,  duration, category, price,description, createdBy } = course;

  return (
    <div className=" w-11/12 mx-auto bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
      
      <div className="relative">
        <img
          src={imageURL}
          alt={title}
          className="w-full h-44 object-cover"
        />
        
      </div>

      
      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

          <div className="text-xl text-secondary">{createdBy}</div>
        
        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <p className="text-primary" /> {description} 
          </span>
          <span className="flex items-center gap-1">
            <p className="text-primary" /> {duration} months
          </span>
          <span className="flex items-center gap-1">
            <p className="text-primary" /> {category} 
          </span>
          
        </div>

        
        <div className="flex justify-between items-center mt-2">
          <div>
            <p className="text-red-600 font-bold text-lg">${price}</p>
          </div>
          <Link to={`/course-details/${_id}`} className="btn btn-error btn-sm rounded-md text-white px-4">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;

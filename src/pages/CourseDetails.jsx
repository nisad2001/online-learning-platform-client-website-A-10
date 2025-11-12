import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const CourseDetails = () => {
  const data = useLoaderData();
  const course = data.result;
  console.log(course);

  const navigate = useNavigate();

  // ✅ Enroll Success Toast Function
  const handleEnroll = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You have successfully enrolled!",
      showConfirmButton: false,
      timer: 1500,
      toast: true,
    });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/courses/${course._id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/all-courses");
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mt-10 mb-10">
      <img
        src={course.imageURL}
        alt="Complete React Course"
        className="w-full h-56 object-cover rounded-md mb-5"
      />
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        {/* ✅ Enroll Now Button with Toast */}
        <button
          onClick={handleEnroll}
          className="btn bg-green-600 rounded-2xl transition transform hover:scale-105 hover:shadow-lg"
        >
          Enroll now
        </button>
      </div>

      <p className="text-gray-700 mb-5">{course.description}</p>

      <div className="flex justify-between text-gray-600 font-semibold mb-5">
        <div className="text-amber-500">{course.duration} Hours</div>
        <div>{course.Category}</div>
        <div className="text-red-600 font-bold">${course.price} USD</div>
      </div>

      <h2 className="text-2xl font-semibold mb-3">Syllabus</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Introduction to React</li>
        <li>JSX and Components</li>
        <li>State and Props</li>
        <li>Hooks (useState, useEffect)</li>
        <li>Routing with React Router</li>
        <li>Context API and Redux</li>
        <li>Deploying React apps</li>
      </ul>

      <div className="flex justify-between my-4">
        <Link
          to={`/update-courses/${course._id}`}
          className="btn btn-primary rounded-2xl w-4/12 transition transform hover:scale-105 hover:shadow-lg"
        >
          Update
        </Link>
        <button
          onClick={handleDelete}
          className="btn btn-secondary rounded-2xl w-4/12 transition transform hover:scale-105 hover:shadow-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;

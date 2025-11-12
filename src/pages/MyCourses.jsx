import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import CoursesCard from '../Components/CoursesCard';

const MyCourses = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-courses?email=${user.email}`)

        .then(res => res.json())
        .then(data => {
          setCourses(data);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return <div className="text-center mt-10 text-lg font-semibold">Please Wait...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
      {courses.length > 0 ? (
        courses.map(course => <CoursesCard key={course._id} course={course} />)
      ) : (
        <p className="col-span-3 text-center text-gray-500 font-medium">
          No courses found for your account.
        </p>
      )}
    </div>
  );
};

export default MyCourses;

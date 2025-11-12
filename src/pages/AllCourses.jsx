import React from 'react';
import { useLoaderData } from 'react-router';
import CoursesCard from '../Components/CoursesCard';

const AllCourses = () => {
    const data = useLoaderData()
    console.log(data);
    
    return (
        <div className='my-5'>
            <div className='text-2xl text-center font-bold mb-10'>All Courses</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {data.map(course => <CoursesCard key={course._id} course={course}></CoursesCard>)}
            </div>
        </div>
        
        
    );
};

export default AllCourses;
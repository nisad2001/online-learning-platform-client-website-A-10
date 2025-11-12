import React from 'react';
import { useLoaderData } from 'react-router';
import CoursesCard from '../Components/CoursesCard';

const Home = () => {

    const data =  useLoaderData()
    console.log(data);
    


    return (
        <div className='py-12'>
            <div className=' text-center text-2xl font-bold py-5'>Letest Courses</div>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {data.map(course => <CoursesCard key={course._id} course={course}></CoursesCard>)}
            </div>
        </div>
    );
};

export default Home;
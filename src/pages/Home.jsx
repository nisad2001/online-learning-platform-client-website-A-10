import React from 'react';
import { useLoaderData } from 'react-router';
import CoursesCard from '../Components/CoursesCard';
import { motion } from 'framer-motion'; 

const Home = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className='py-12'>
      
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='text-center text-2xl font-bold py-5'
      >
        Latest Courses
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'
      >
        {data.map(course => (
          <motion.div
            key={course._id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CoursesCard course={course} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;

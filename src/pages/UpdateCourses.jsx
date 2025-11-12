import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router';

const UpdateCourses = () => {

   const data =  useLoaderData()
    const course =  data.result

    const navigate = useNavigate()

     const handleSubmit = (e)=>{
        e.preventDefault()

        const formData = {
            title: e.target.title.value,
            imageURL: e.target.imageURL.value,
            price: e.target.price.value,
            duration: e.target.duration.value,
            category: e.target.category.value,
            description : e.target.description .value,
            

        }
        
        fetch(`http://localhost:3000/courses/${course._id}`,{
            method:"PUT",
            headers:{
                "Content-type": "application/json",
            },
            body:JSON.stringify(formData)
        })

        .then(res => res.json())
        .then(data=>{
            console.log(data)
            navigate('/all-courses')
            toast.success("succesfully upadated")
            
        })
        .catch(err =>{
            console.log(err)
            
        })
        
}

    return (
        <div className='flex justify-center min-h-screen items-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 py-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 px-5">
                <h2 className='font-semibold text-3xl text-center'>update Course </h2>
            <div className="card-body">
                 <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset">

                    <label className="label text-xl">Title</label>
                    <input defaultValue={course.title} name='title' type="text" className="input" placeholder="title" required />

                    <label  className="label text-xl">Duration</label>
                    <input defaultValue={course.duration} name='duration' type="text" className="input" placeholder="duration"  required/>


                    <label className="label text-xl">Price</label>
                    <input defaultValue={course.price} name='price' type="text" className="input" placeholder="price" required/>

                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Selct a Category</legend>
                    <select name="category" defaultValue={course.category}className="select select-bordered" required>
                    <option value="" disabled>Select a Category</option>
                    <option>Web Development</option>
                    <option>Design</option>
                    <option>Data Science</option>
                    <option>Marketing</option>
                    <option>Mobile Development</option>
                    <option>Photography</option>
                    <option>IT & Software</option>
                    <option>Finance</option>
                    </select>

                    
                    </fieldset>

                    <label className="label text-xl">
                    <span className="label-text font-semibold">Description</span>
                    </label>
                                            <textarea
                        defaultValue={course.description}
                        name="description"
                        className="textarea textarea-bordered textarea-primary w-full rounded-xl shadow-sm focus:shadow-md focus:outline-none h-40"
                        placeholder="Write your course description..."
                        required
                        ></textarea>


                    <label className="label text-xl">Image Url</label>
                    <input defaultValue={course.imageURL} name='imageURL' type="text" className="input" placeholder="Photo Url" />

                   <button
                        to="/add-courses"
                        type="submit"
                        className="btn btn-secondary rounded-2xl mt-4 transition transform hover:scale-105 hover:shadow-lg"
                        >
                        update Course
                    </button>


                     
                    </fieldset>
                 </form>
            </div>
            </div>
        </div>
    
    );
};

export default UpdateCourses;
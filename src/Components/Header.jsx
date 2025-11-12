import React, { use } from 'react';
import logo from "../assets/logo.webp"
import userIcon from "../assets/user icon.jpg"
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const {user, logOut} = use(AuthContext);
    const handleLogOut = ()=>{
        console.log("user trying ot logout");
        logOut().then(() => {
            alert('you logged out succesfully')
        }).catch((error) => {
            console.log(error);
            
        });
        
    }
    return (
        <div className='flex justify-between items-center px-10 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md'>
            <div>
                <img src={logo} alt="" className="w-30 h-auto" />
            </div>

            <div className='nav flex gap-8 text-lg font-semibold'>
                <NavLink to="/" className="hover:text-yellow-300 duration-300">Home</NavLink>
                <NavLink to="/all-courses" className="hover:text-yellow-300 duration-300"> All Courses</NavLink>
                <NavLink to="/add-courses" className="hover:text-yellow-300 duration-300">Add Courses</NavLink>
                
                <NavLink to="/my-courses" className="hover:text-yellow-300 duration-300">My Courses</NavLink>
               
                <NavLink to="/dashboard" className="hover:text-yellow-300 duration-300">Dashboard</NavLink>
            </div>

            <div className='login-btn flex items-center gap-4'>
                <img src={userIcon} alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                {user? <button onClick={handleLogOut} className='btn btn-primary px-8 shadow-lg hover:scale-105 duration-300'>Logout</button> : <Link to="/auth/login" className='btn btn-primary px-8 shadow-lg hover:scale-105 duration-300'>Login</Link>}
                
            </div>
        </div>
    );
};

export default Header;

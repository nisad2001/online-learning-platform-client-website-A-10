import React, { useContext } from 'react';
import logo from "../assets/logo.webp";
import userIcon from "../assets/user icon.jpg";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        console.log("user trying to logout");
        logOut()
            .then(() => {
                alert('You logged out successfully');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "active hover:text-yellow-300 duration-300"
            : "hover:text-yellow-300 duration-300";

    return (
        <div className='flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md gap-4 md:gap-0'>
            <div>
                <img src={logo} alt="Logo" className="w-28 md:w-30 h-auto" />
            </div>

            <div className='nav flex flex-col md:flex-row gap-4 md:gap-8 text-lg font-semibold text-center'>
                <NavLink to="/" className={navLinkClass}>Home</NavLink>
                <NavLink to="/all-courses" className={navLinkClass}>All Courses</NavLink>
                <NavLink to="/add-courses" className={navLinkClass}>Add Courses</NavLink>
                <NavLink to="/my-courses" className={navLinkClass}>My Courses</NavLink>
                <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
            </div>

            <div className='login-btn flex items-center gap-4'>
                <img src={userIcon} alt="User Icon" className="w-10 h-10 rounded-full border-2 border-white" />
                {user ? (
                    <button
                        onClick={handleLogOut}
                        className='btn btn-primary px-8 shadow-lg hover:scale-105 duration-300'
                    >
                        Logout
                    </button>
                ) : (
                    <Link
                        to="/auth/login"
                        className='btn btn-primary px-8 shadow-lg hover:scale-105 duration-300'
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;

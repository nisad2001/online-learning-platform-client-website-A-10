import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {createUser, setUser} = use(AuthContext)

    const handleRegister = (e)=>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log({name,email, photo, password});
        createUser(email, password)
        .then(result=>{
            const user = result.user;
            // console.log(user);
            setUser(user)
         }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
        
    }


    return (
         <div className='flex justify-center min-h-screen items-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Please Register Your Account</h2>
            <div className="card-body">
                 <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">

                    <label className="label">Name</label>
                    <input name='name' type="text" className="input" placeholder="Name" required />

                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email"  required/>

                    <label className="label">Photo Url</label>
                    <input name='photo' type="text" className="input" placeholder="Photo Url" />

                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" required/>

                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    <p className='font-semibold text-center pt-5'>Already have an account? <Link className='text-blue-600 ' to="/auth/login">Login</Link></p>
                    </fieldset>
                 </form>
            </div>
            </div>
        </div>
    );
};

export default Register;
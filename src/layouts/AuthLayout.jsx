import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className=''>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;
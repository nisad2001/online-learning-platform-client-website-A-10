import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import { Toaster } from "react-hot-toast";



const MainLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <Banner></Banner>
        
      </header>

      <main>
        
        <Outlet />
        
      </main>

        <footer>
            <Footer></Footer>
        </footer>
        <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: { style: { background: "#16a34a", color: "white" } },
          error: { style: { background: "#dc2626", color: "white" } },
        }}
      />
    </div>
  );
};

export default MainLayout;

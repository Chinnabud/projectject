import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col   
 min-h-screen"> {/* Add flex and min-h-screen */}
      <Navbar />
      <div className="container  mx-auto  flex-grow"> {/* Add flex-grow */}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

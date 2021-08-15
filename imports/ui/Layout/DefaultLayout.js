import React from 'react';
import Navbar from './../Components/Navbar.js';
import Bottombar from './../Components/Bottombar.js';
const FxDefaultLayout =({children}) => {
  return (
    <div className="d-flex flex-column vh-100 bg-white">
        <Navbar/>
        <div className="flex-fill overflow-auto">
          {children}
        </div>
        <Bottombar/>
    </div>
  );
};
export default FxDefaultLayout;

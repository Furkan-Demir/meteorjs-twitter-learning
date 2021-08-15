import React, { Component } from 'react'
import { useTracker } from 'meteor/react-meteor-data';

darkmode = () => {
    Session.set("dark", !Session.get("dark"))
    if (Session.get("dark")) {
        whites = document.querySelectorAll(".bg-white")
        for (let index = 0; index < whites.length; index++) {
            whites[index].classList.remove('bg-white', 'text-dark');
            whites[index].classList.add('bg-dark', 'text-white');
            
        }
      } else {
        darks = document.querySelectorAll(".bg-dark")
        for (let index = 0; index < whites.length; index++) {
            darks[index].classList.remove('bg-dark', 'text-white');
            darks[index].classList.add('bg-white', 'text-dark');
        }
      }
}
function Navbar() {
    isDark = useTracker(()=> Session.get("dark"))
    return (
        <div className="d-flex justify-content-between bg-white text-dark p-2 border-bottom">
            <button className="btn p-0 m-0 btn-white">
                <img src={`/images/items/1.png`} height="25" width="25" style={{borderRadius:'50%'}}/>
            </button>
            <button className="btn p-0 m-0 btn-white">
                <img src={`/images/icons/twitterlogo.svg`} />
            </button>
            <button className="btn p-0 m-0 btn-white" onClick={darkmode}>
            {
                isDark
                ?
                <img src={`/images/icons/dark.png`} height="23" width="23"/>
                :
                <img src={`/images/icons/light.png`} height="23" width="23"/>
            }
            </button>
        </div>
    );
}


export default Navbar
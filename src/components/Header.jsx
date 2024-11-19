import React from "react";

function Header () {
    return(
        <React.Fragment>
             <div className="header flex justify-between w-full bg-opacity-40 mt-3"> 
                <div className="logo self-center m-3 font-extrabold">
                    <h2 className="text-4xl font-serif italic hover:not-italic"> OÖ </h2>
                </div>
                <nav className="nav flex justify-self-center items-center mr-10 ">
                    <div className="nav-element">About</div>
                    <div className="nav-element">Portfolio</div>
                    <div className="nav-element">Contact</div>
                </nav>
            </div>
        </React.Fragment>
    );

}

export default Header;
import React from "react";

function Header ({scrollToSection, sectionRefs}) {
    return(
             <header className="header"> 
                <div className="name ">
                    <h2> Onur Öziskender </h2>  
                </div>
                <nav className="nav">
                    <div className="nav-element" onClick={()=> scrollToSection(sectionRefs.hello)}>Home</div>
                    <div className="nav-element" onClick={() => scrollToSection(sectionRefs.works)}>Portfolio</div>
                    <div className="nav-element" onClick={() => scrollToSection(sectionRefs.cv)}>CV</div>
                </nav>
            </header>
    );

}

export default Header;
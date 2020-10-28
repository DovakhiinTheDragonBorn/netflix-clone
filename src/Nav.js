import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
   const [show, handleShow] = useState(false);
   useEffect(() => {
      window.addEventListener("scroll", () => {
         if (window.scrollY > 100) handleShow(true);
         else handleShow(false);
      });
      return () => {
         window.removeEventListener("scroll");
      };
   }, []);

   return (
      <div className={`nav ${show && "nav_black"}`}>
         <img
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/1200px-Logo_Netflix.png"
            alt="Netflix Logo"
         />
         <img
            className="nav_avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt="Avatar Logo"
         />
      </div>
   );
}

export default Nav;

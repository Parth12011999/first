import React from "react";

function Header() {
  return (
    <div className="header">
      <header className="seprate">
        <div>.NetComp</div>
        <div className="nav-list" id="navList">
          <a href="#home">Home</a>
          <a href="#product">Products</a>
          <a href="#blog">Blog</a>
          <a href="#about">About</a>
        </div>
        <div className="bar">
          <i
            className="fa fa-bars"
            onClick={() => {
              const navList = document.getElementById("navList");
              // const viewport = window.visualViewport;
              if (navList.className === "nav-list") {
                navList.remove.className = "nav-list";
                navList.className = "responsive";
              } else {
                navList.remove.className = "responsive";
                navList.className = "nav-list";
              }
            }}
          ></i>
        </div>
      </header>
    </div>
  );
}

export default Header;

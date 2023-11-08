import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="/assets/images.jpg" alt="logo" height="40px" />
          </a>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <Link class="nav-link active" to="/registration">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container text-center">
        <h1>Hii Welcome To My page</h1>
      </div>
    </>
  );
};

export default Header;

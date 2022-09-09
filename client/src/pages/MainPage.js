import React from "react";
import { Link } from "react-router-dom";
import "../resources/mainPage.css";
import Footer from "./Footer";

export const MainPage = () => {
  return (
    <div>
      <div className="homepage_banner">
        <div className="box homepage_banner_content">
          <div className="homepage_banner__header">
            <Link to="/mainpage" className="logo">
              <img
                src="https://c.tenor.com/KMqG7xBEaeUAAAAi/cv.gif"
                alt="logo"
              />
            </Link>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Sign Up</Link>
              </li>
            </ul>
          </div>
          <div className="homepage_banner__contentBox">
            <h2>Welcome to Our Website</h2>
            <p>
              Create your account and modify your profile info. This site built
              using Reactjs And Nodejs.
            </p>

            <Link to="/login" className="btn">
              Create An Account
            </Link>
          </div>
        </div>
        {/* <!-- ============================================================================ --> */}

        {/* <!-- Image starts Here --> */}
        <div className="box images">
          <div className="homepage_banner__header_images">
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register" className="signup_btn">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          <div className="imagecontainerBox">
            <img
              src="https://cdn.dribbble.com/users/1568450/screenshots/5430738/work_2_dribbble-01_4x.png"
              alt="mainpage_img"
            />
          </div>
        </div>
        {/* <!-- Image Ends  Here --> */}
        {/* <!-- ============================================================================ --> */}
      </div>

      <Footer />
    </div>
  );
};

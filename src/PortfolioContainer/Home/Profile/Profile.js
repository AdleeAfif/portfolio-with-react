import React from "react";
import Typical from "react-typical";
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/AdleeAfif" title="GitHub">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://stackoverflow.com/users/13162697/its-lee" title="Stack Overflow">
                <i class="fa fa-stack-overflow"></i>
              </a>
              <a href="mailto:adlee.afiff@gmail.com" title="E-Mail">
                <i className="fa fa-envelope"></i>
              </a>
              <a href="https://www.linkedin.com/in/adlee-afif/" title="LinkedIn">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Adlee Afif</span>
            </span>
          </div>
          <div className="profile-details-roles">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Software Engineer",
                    1000,
                    "Mobile App Dev",
                    1000,
                    "Web Developer",
                    1000,
                    "Keyboard Enthusiast",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Passionate Software Development Student At Your Service
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Contact Me </button>
            <a href="adlee.pdf" download="Adlee Afif.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

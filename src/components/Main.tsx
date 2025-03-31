import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import goalGuruIcon from "../assets/images/goal_guru_icon.png";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="image-wrapper">
            <img src={goalGuruIcon} alt="Avatar" />
          </div>
          <p>Your Ultimate Football Tracking App</p>
          <h1>Goal Guru</h1>
          <div className="social_icons">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

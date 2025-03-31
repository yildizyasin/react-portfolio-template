import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import notifIcon from "../assets/images/notifications.png";
import liveUpdatesIcon from "../assets/images/live_updates.png";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Flask",
  "Python",
  "SQL",
  "PostgreSQL",
  "Postman",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "AWS",
  "Azure",
  "Linux",
  "Snowflake",
  "Pandas",
  "Selenium",
];

const labelsThird = [
  "OpenAI",
  "Groq",
  "LangChain",
  "Qdrant",
  "Hugging Face",
  "LlamaIndex",
  "Streamlit",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <div className="skill">
          <div className="skill-content">
            <div className="image-wrapper-left">
              <img src={notifIcon} alt="Full Stack Web Development" />
            </div>
            <div className="text-content">
              <h3>Live Updates</h3>
              <p>
                I have built a diverse array of web applications from scratch
                using modern technologies such as React and Flask. I have a
                strong proficiency in the SDLC process and frontend + backend
                development.
              </p>
            </div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-content">
            <div className="text-content">
              <h3>Custom Notifications</h3>
              <p>
                Once the application is built, I help clients set up DevOps
                testing, CI/CD pipelines, and deployment automation to support
                the successful Go-Live.
              </p>
            </div>
            <div className="image-wrapper-right">
              <img src={liveUpdatesIcon} alt="DevOps & Automation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;

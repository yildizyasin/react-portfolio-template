import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Privacy.scss";
import Button from "@mui/material/Button";

function Privacy() {
  const navigate = useNavigate();

  return (
    <div id="privacy">
      <div className="items-container">
        <div className="policy-wrapper">
          <div className="policy-column">
            <h2>Privacy Policy</h2>
            <p>
              Learn how we handle your data and protect your privacy. We are
              committed to ensuring your information is secure.
            </p>
            <Button
              variant="contained"
              className="read-more-btn"
              onClick={() => navigate("/privacy-policy")}
            >
              Read More
            </Button>
          </div>
          <div className="policy-column">
            <h2>Terms & Conditions</h2>
            <p>
              Understand the rules and guidelines for using our services. Your
              agreement ensures a smooth experience for everyone.
            </p>
            <Button
              variant="contained"
              className="read-more-btn"
              onClick={() => navigate("/terms-conditions")}
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;

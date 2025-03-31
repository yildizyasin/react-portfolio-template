import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Expertise from "./components/Expertise";
import Privacy from "./components/Privacy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import FadeIn from "./components/FadeIn";
import React, { useState, useEffect } from "react";

import "./index.scss";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Router>
      <div
        className={`main-container ${
          mode === "dark" ? "dark-mode" : "light-mode"
        }`}
      >
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
        <FadeIn transitionDuration={700}>
          <Routes>
            {/* Main route includes Main, Expertise, and Privacy components */}
            <Route
              path="/"
              element={
                <>
                  <Main />
                  <Expertise />
                  <Privacy />
                </>
              }
            />
            {/* Separate routes for Privacy Policy and Terms & Conditions */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </FadeIn>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

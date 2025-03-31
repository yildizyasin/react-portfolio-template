import React, { useEffect } from "react";
import "../assets/styles/TermsConditions.scss";

function TermsConditions() {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="terms-conditions-container">
      <h1>Terms & Conditions</h1>
      <p className="effective-date">Effective Date: March 25, 2025</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h2>1. General Terms</h2>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h2>2. User Responsibilities</h2>
      <p>
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
        varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus
        magna felis sollicitudin mauris.
      </p>
      <h2>3. Limitation of Liability</h2>
      <p>
        Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus
        vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut
        ullamcorper, ligula eu tempor congue, eros est euismod turpis, id
        tincidunt sapien risus a quam.
      </p>
      <h2>4. Governing Law</h2>
      <p>
        Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
        ligula vulputate sem tristique cursus. Nam nulla quam, gravida non,
        commodo a, sodales sit amet, nisi.
      </p>
    </div>
  );
}

export default TermsConditions;

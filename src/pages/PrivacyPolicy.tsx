import React, { useEffect } from "react";
import "../assets/styles/PrivacyPolicy.scss";

function PrivacyPolicy() {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p className="effective-date">Effective Date: March 25, 2025</p>
      <p>
        At Goal Guru, we respect your privacy and are committed to protecting
        your personal information. This Privacy Policy outlines how we collect,
        use, and safeguard your data when you use our app.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Personal Information:</strong> When you create an account, we
          may collect personal details such as your name, email address, and
          notification preferences.
        </li>
        <li>
          <strong>Usage Data:</strong> We gather information on how you interact
          with the app, including match data, filter settings, and preferences.
        </li>
        <li>
          <strong>Device Information:</strong> We collect data about your
          device's operating system, device type, and unique identifiers for
          analytics purposes.
        </li>
        <li>
          <strong>Cookies and Tracking Technologies:</strong> We may use cookies
          and similar technologies to enhance user experience and analyze app
          usage.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>
          To provide personalized football match updates and notifications based
          on your preferences.
        </li>
        <li>To improve the app's functionality and user experience.</li>
        <li>
          To communicate with you regarding app-related updates or support.
        </li>
      </ul>

      <h2>3. Data Sharing and Disclosure</h2>
      <ul>
        <li>
          We do not share your personal information with third parties unless:
        </li>
        <ul>
          <li>You have provided your explicit consent.</li>
          <li>
            It is necessary to comply with legal obligations or to protect the
            rights of Goal Guru or others.
          </li>
          <li>
            We engage third-party service providers to perform functions on our
            behalf, such as hosting services, who are contractually obligated to
            protect your data.
          </li>
        </ul>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We take the security of your data seriously and implement standard
        industry practices to protect it from unauthorized access, alteration,
        or disclosure. However, please note that no method of transmission over
        the Internet is 100% secure.
      </p>

      <h2>5. Third-Party Services</h2>
      <p>
        Goal Guru may use third-party services such as Firebase for push
        notifications, analytics, and other app services. These services may
        collect information about your usage and device. Please review the
        privacy policies of these third parties for more details.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain your personal data only as long as necessary to fulfill the
        purposes outlined in this policy. You can request the deletion of your
        data at any time by contacting us.
      </p>

      <h2>7. Your Rights</h2>
      <ul>
        <li>
          <strong>Access and Correction:</strong> You have the right to access
          and correct your personal data.
        </li>
        <li>
          <strong>Data Portability:</strong> You can request a copy of your data
          in a structured, commonly used format.
        </li>
        <li>
          <strong>Objection and Restriction:</strong> You may object to or
          request the restriction of processing your data under certain
          circumstances.
        </li>
        <li>
          <strong>Withdrawal of Consent:</strong> You can withdraw your consent
          at any time without affecting the lawfulness of processing based on
          consent before its withdrawal.
        </li>
      </ul>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at:
      </p>
      <p>
        <strong>Email:</strong> support@goalguru.live
      </p>
    </div>
  );
}

export default PrivacyPolicy;

import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="main">
      <div className="outer-first">
        <div className="inner-first profile-photo"></div>
        <div className="inner-second user-info">
          <h2>John Doe</h2>
          <p>Email: johndoe@example.com</p>
          <p>University: XYZ University</p>
        </div>
      </div>
      <div className="outer-second">
        <div className="inner-first graph">Graph Placeholder</div>
        <div className="inner-second badges">
          <span className="badge">Contest Winner</span>
          <span className="badge">100 Days Streak</span>
          <span className="badge">Top 100 Global</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;

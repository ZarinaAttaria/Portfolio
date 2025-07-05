import React from "react";
import "./App.css";
const SmartPrepAI = () => {
  return (
    <div className="video-wrapper">
      {/* <button onClick={() => navigate("/home")} className="back-button">
        ← Back to Projects
      </button> */}
      <div className="video-container">
        <video
          controls
          className="responsive-video"
          src="/videos/smartPrepAI.mp4"
        />
      </div>
    </div>
  );
};

export default SmartPrepAI;

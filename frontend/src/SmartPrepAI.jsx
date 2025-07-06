import React from "react";
import "./App.css";
import "./SmartprepAi.css";

import { useNavigate } from "react-router-dom";

const SmartPrepAI = () => {
  const navigate = useNavigate();

  return (
    <div className="smartprep-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back to Projects
      </button>

      <div className="video-wrapper">
        <div className="video-container">
          <video
            controls
            className="responsive-video"
            src="/videos/smartPrepAI.mp4"
            poster="/images/smartprep-poster.jpg"
            aria-label="SmartPrep AI Demo Video"
          >
            <track kind="captions" srcLang="en" label="English" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default SmartPrepAI;

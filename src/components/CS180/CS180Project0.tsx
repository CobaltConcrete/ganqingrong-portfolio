import React, { useState } from "react";
import "./CS180.css";
import warpedface0 from "../../assets/CS180/warpedface0.jpg";
import warpedface1 from "../../assets/CS180/warpedface1.jpg";
// import warpedface2 from "../../assets/CS180/warpedface2.jpg";
// import warpedface3 from "../../assets/CS180/warpedface3.jpg";
import corridor0 from "../../assets/CS180/corridor0.jpg";
import corridor1 from "../../assets/CS180/corridor1.jpg";
import zinogreGIF from "../../assets/CS180/zinogre.gif";
import zinogreReverseGIF from "../../assets/CS180/zinogre-reverse.gif";

const CS180Project0: React.FC = () => {
  const [reversed, setReversed] = useState(false);

  const handleToggle = () => {
    setReversed(!reversed);
  };

  return (
    <div className="cs180-page">
      <section className="cs180-project">
        <div className="cs180-image-container">
          <img
            src={warpedface0}
            alt="Close-up distorted selfie"
            className="cs180-image cs180-image-small"
          />
          <img
            src={warpedface1}
            alt="Zoomed selfie with better perspective"
            className="cs180-image cs180-image-small"
          />
        </div>
        <div className="cs180-info">
          <h2 className="cs180-title">Part 1: Selfie: Wrong vs. Right</h2>
          <h3 className="cs180-subtitle">Close vs. Distant Portrait</h3>
          <p className="cs180-description">
            Comparison between a close-up distorted selfie and a zoomed-in distant
            portrait with more natural proportions. Objects nearer to the lens (e.g. nose) appear disproportionately large, while objects further away (e.g. cheeks) appear smaller and streched.
          </p>
        </div>
      </section>

      <section className="cs180-project cs180-project-right">
        <div className="cs180-image-container">
          <img
            src={corridor0}
            alt="Zoomed corridor view with compression"
            className="cs180-image cs180-image-small"
          />
          <img
            src={corridor1}
            alt="Wide-angle corridor view with depth"
            className="cs180-image cs180-image-small"
          />
        </div>
        <div className="cs180-info">
          <h2 className="cs180-title">Part 2: Architectural Perspective</h2>
          <h3 className="cs180-subtitle">Compressed vs. Expanded</h3>
          <p className="cs180-description">
            When you zoom in from far away (left picture), the background seems squished and closer together, making the scene look flattened. Walking closer with a wide-angle lens restores depth, so things feel more spaced out and natural (right picture).
          </p>
        </div>
      </section>


      <section className="cs180-project">
        <div className="cs180-image-container">
          <img
            src={reversed ? zinogreReverseGIF : zinogreGIF}
            alt="Dolly zoom effect"
            className="cs180-image"
          />
        </div>
        <div className="cs180-info">
          <h2 className="cs180-title">Part 3: The Dolly Zoom</h2>
          <h3 className="cs180-subtitle">The Vertigo Effect</h3>
          <p className="cs180-description">
            Sequence of shots moving backward while zooming in, creating the iconic
            dolly zoom effect. The subject remains the same size while the background appears to warp.
          </p>
          <button className="btn" onClick={handleToggle}>
            {reversed ? "Play Forward" : "Play Reverse"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default CS180Project0;

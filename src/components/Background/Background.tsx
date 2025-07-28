import React, { useEffect, useRef, useState } from 'react';

const Background = () => {
  // (move your hero section constants and logic here)

    const canvas2Ref = useRef<HTMLCanvasElement>(null);

  return (
      <div className="main-bg">
        <div className="canvas">
          <canvas ref={canvas2Ref} className="canvas-2" />
        </div>
      </div>
  );
};

export default Background;
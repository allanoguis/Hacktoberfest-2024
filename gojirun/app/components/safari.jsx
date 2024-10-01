import React from "react";

const Safari = () => {
  return (
    <>
      <svg
        className="inline-block animate-scroll"
        width="1000"
        height="auto"
        viewBox="0 0 550 200"
        xmlns="http://www.w3.org/2000/svg"
        // animate={{ x: isRunning ? -550 : 0 }} // Animate the x position
        // transition={{ duration: 5, repeat: Infinity, ease: "linear" }} // Animation properties
      >
        {/* Sky */}
        <g fill="#FFFFFF" id="sky">
          <rect width="100%" height="400" fill="#4A90E2" />
        </g>
        {/* Clouds */}
        <g fill="#FFFFFF" id="cloud1">
          {/* cloud1 */}
          <rect x="20" y="40" width="20" height="10" />
          <rect x="40" y="30" width="40" height="20" />
          <rect x="80" y="40" width="20" height="10" />
        </g>
        <g fill="#FFFFFF" id="cloud2">
          {/* cloud2 */}
          <rect x="150" y="50" width="20" height="10" />
          <rect x="170" y="45" width="40" height="20" />
          <rect x="210" y="50" width="20" height="10" />
        </g>
        <g fill="#FFFFFF" id="cloud3">
          {/* cloud4 */}
          <rect x="400" y="60" width="20" height="10" />
          <rect x="420" y="50" width="40" height="20" />
          <rect x="460" y="60" width="20" height="10" />
        </g>

        {/*  ground */}
        <g fill="#FFFFFF" id="safari">
          <rect x="0" y="140" width="550" height="60" fill="#F4A460" />
        </g>

        {/* Rocks */}
        <g fill="#8B4513" id="rock1">
          {/* rock1 */}
          <rect x="30" y="130" width="20" height="10" />
          <rect x="40" y="120" width="20" height="20" />
          <rect x="60" y="130" width="20" height="10" />
        </g>
        <g fill="#8B4513" id="rock2">
          {/* rock2 */}
          <rect x="150" y="135" width="30" height="5" />
          <rect x="160" y="120" width="20" height="15" />
          <rect x="180" y="130" width="20" height="10" />
        </g>
        <g fill="#8B4513" id="rock3">
          {/* rock3 */}
          <rect x="280" y="125" width="40" height="15" />
          <rect x="290" y="115" width="20" height="10" />
        </g>
        <g fill="#8B4513" id="rock4">
          {/* rock4 */}
          <rect x="400" y="130" width="20" height="10" />
          <rect x="420" y="120" width="20" height="20" />
          <rect x="440" y="130" width="20" height="10" />
        </g>
        <g fill="#8B4513" id="rock5">
          {/* rock5 */}
          <rect x="500" y="125" width="40" height="15" />
          <rect x="510" y="115" width="20" height="10" />
        </g>

        {/* Cacti */}
        <g fill="#006400" id="cactus1">
          {/* cact1 */}
          <rect x="100" y="110" width="10" height="30" />
          <rect x="90" y="120" width="10" height="10" />
          <rect x="110" y="130" width="10" height="10" />
        </g>
        <g fill="#006400" id="cactus2">
          {/* cact2 */}
          <rect x="350" y="100" width="10" height="40" />
          <rect x="340" y="110" width="10" height="10" />
          <rect x="360" y="120" width="10" height="10" />
        </g>
      </svg>
    </>
  );
};

export default Safari;

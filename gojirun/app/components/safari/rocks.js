import React from "react";

const Rocks = () => {
    return (
        <>
            <g fill="#8B4513" id="rock1">
                {/* Rock 1 */}
                <rect x="30" y="130" width="20" height="10" />
                <rect x="40" y="120" width="20" height="20" />
                <rect x="60" y="130" width="20" height="10" />
            </g>
            <g fill="#8B4513" id="rock2">
                {/* Rock 2 */}
                <rect x="150" y="135" width="30" height="5" />
                <rect x="160" y="120" width="20" height="15" />
                <rect x="180" y="130" width="20" height="10" />
            </g>
            <g fill="#8B4513" id="rock3">
                {/* Rock 3 */}
                <rect x="280" y="125" width="40" height="15" />
                <rect x="290" y="115" width="20" height="10" />
            </g>
            <g fill="#8B4513" id="rock4">
                {/* Rock 4 */}
                <rect x="400" y="130" width="20" height="10" />
                <rect x="420" y="120" width="20" height="20" />
                <rect x="440" y="130" width="20" height="10" />
            </g>
            <g fill="#8B4513" id="rock5">
                {/* Rock 5 */}
                <rect x="500" y="125" width="40" height="15" />
                <rect x="510" y="115" width="20" height="10" />
            </g>
        </>
    );
};

export default Rocks;

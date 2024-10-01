import React from "react";

const Clouds = () => {
    return (
        <>
            <g fill="#FFFFFF" id="cloud1">
                {/* Cloud 1 */}
                <rect x="20" y="40" width="20" height="10" />
                <rect x="40" y="30" width="40" height="20" />
                <rect x="80" y="40" width="20" height="10" />
            </g>
            <g fill="#FFFFFF" id="cloud2">
                {/* Cloud 2 */}
                <rect x="150" y="50" width="20" height="10" />
                <rect x="170" y="45" width="40" height="20" />
                <rect x="210" y="50" width="20" height="10" />
            </g>
            <g fill="#FFFFFF" id="cloud3">
                {/* Cloud 3 */}
                <rect x="400" y="60" width="20" height="10" />
                <rect x="420" y="50" width="40" height="20" />
                <rect x="460" y="60" width="20" height="10" />
            </g>
        </>
    );
};

export default Clouds;

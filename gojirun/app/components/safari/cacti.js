import React from "react";

const Cacti = () => {
    return (
        <>
            <g fill="#006400" id="cactus1">
                {/* Cactus 1 */}
                <rect x="100" y="110" width="10" height="30" />
                <rect x="90" y="120" width="10" height="10" />
                <rect x="110" y="130" width="10" height="10" />
            </g>
            <g fill="#8B4513" id="cactus2">
                {/* Cactus 2 */}
                <rect x="350" y="100" width="10" height="40" />
                <rect x="340" y="110" width="10" height="10" />
                <rect x="360" y="120" width="10" height="10" />
            </g>
        </>
    );
};

export default Cacti;

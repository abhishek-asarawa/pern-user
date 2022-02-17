import React from "react";

import Menu from "./Menu";

const Toolbar = () => {
    return (
        <div style={{ position: "relative" }}>
            <div
                style={{
                    position: "fixed",
                    right: "10px",
                    bottom: "10px",
                    zIndex: 1,
                }}
            >
                <Menu />
            </div>
        </div>
    );
};

export default Toolbar;

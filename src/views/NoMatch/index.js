import { Typography } from "@mui/material";
import React from "react";

const NoMatch = () => {
    return (
        <div
            style={{
                padding: "1rem",
                textAlign: "center",
            }}
        >
            <Typography variant="h1">There's nothing here!</Typography>
            <img
                alt="Under development"
                style={{
                    marginTop: 50,
                    display: "inline-block",
                    maxWidth: "100%",
                    width: 560,
                }}
                src="/images/cookie-the-pom-gySMaocSdqs-unsplash.jpg"
            />
        </div>
    );
};

export default NoMatch;

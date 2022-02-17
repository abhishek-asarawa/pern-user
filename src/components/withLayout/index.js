import React from "react";
import MainLayout from "../MainLayout";
import MinLayout from "../MinLayout";

const withLayout = (Component, withMain = false) => {
    return withMain ? (
        <MainLayout>
            <Component />
        </MainLayout>
    ) : (
        <MinLayout>
            <Component />
        </MinLayout>
    );
};

export default withLayout;

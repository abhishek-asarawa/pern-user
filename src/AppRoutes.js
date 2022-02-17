import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import withLayout from "./components/withLayout";

import Home from "./views/Home";
import Login from "./views/Login";
import NoMatch from "./views/NoMatch";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PrivateRoute />}>
                <Route path="/" element={withLayout(Home, true)} />
            </Route>
            <Route path="/login" element={withLayout(Login)} />
            <Route path="*" element={withLayout(NoMatch)} />
        </Routes>
    );
}

export default AppRoutes;

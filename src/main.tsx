import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/index.tsx";
import Register from "./pages/register/index.tsx";
import Dashboard from "./pages/dashboard/index.tsx";
import { Layout } from "./components/layout/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Register />} />
                    <Route path="/" element={<Layout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

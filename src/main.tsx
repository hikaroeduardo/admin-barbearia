import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/index.tsx";
import Register from "./pages/register/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

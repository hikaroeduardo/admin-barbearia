import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="bg-[#e0e0e0] h-screen">
            <Outlet />
        </div>
    );
}

export default App;

import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="bg-[rgb(235,237,239)] h-screen">
            <Outlet />
        </div>
    );
}

export default App;

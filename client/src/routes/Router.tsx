import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Trips from "../components/Trips";
import UserLogin from "../components/UserLogin";
import UserRegistration from "../components/UserRegistration";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<UserRegistration />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
};

export default Router;
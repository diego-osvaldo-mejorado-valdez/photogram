import { useState } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home.jsx";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import SidebarOpen from "./layout/SidebarOpen.jsx";
import SidebarClose from "./layout/SidebarClose.jsx";
import Notifications from "./pages/Notifications.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import PasswordRecovery from "./pages/PasswordRecovery.jsx";
import OtpVerification from "./pages/OtpVerification.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

export default function App() {
  const location = useLocation();
  const loginSection =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/password-recovery" ||
    location.pathname === "/otp-verification" ||
    location.pathname === "/reset-password";
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      {loginSection ? (
        <>
          <div className="flex flex-col my-4 items-center" >
            <Link to="/" title="Home" >
              <p className="text-2xl">Photogram</p>
            </Link>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/password-recovery" element={<PasswordRecovery />} />
              <Route path="/otp-verification" element={<OtpVerification />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
            
          </div>
        </>
      ) : (
        <>
          <Header />
          <div className="flex ">
            {isSidebarOpen ? (
              <SidebarOpen toggleSidebar={toggleSidebar} isOpen={isSidebarOpen}/>
            ) : (
              <SidebarClose toggleSidebar={toggleSidebar} isOpen={isSidebarOpen}/>
            )}
            <main className="flex-1 px-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
          </div>
        </>
      )}
      <Toaster />
    </>
  );
}

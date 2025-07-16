import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingList from "./pages/BookingList";
import BookingForm from "./pages/BookingForm";
import MyBookings from "./pages/MyBookings";
import TimNguoiGiupViec from "./pages/TimNguoiGiupViec";
import AdminDashboard from "./pages/AdminDashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import Navbar from "./components/Navbar"; // 

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Thêm navbar chung ở đầu */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lichdat" element={<BookingList />} />
        <Route path="/datlich" element={<BookingForm />} />
        <Route path="/lichcuatoi" element={<MyBookings />} />
        <Route path="/tim-nguoi-giup-viec" element={<TimNguoiGiupViec />} />
        <Route path="/login" element={<LoginPage />} /> {/* ✅ */}
        <Route path="/register" element={<RegisterPage />} /> {/* ✅ */}
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
    </Router>
  );
}

export default App;

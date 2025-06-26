import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingList from "./pages/BookingList";
import BookingForm from "./pages/BookingForm";
import MyBookings from "./pages/MyBookings";
import TimNguoiGiupViec from "./pages/TimNguoiGiupViec";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Trang chủ */}
        <Route path="/lichdat" element={<BookingList />} /> {/* Danh sách lịch đặt */}
        <Route path="/datlich" element={<BookingForm />} /> {/* Trang đặt lịch */}
        <Route path="/lichcuatoi" element={<MyBookings />} /> {/* Lịch cá nhân */}
        <Route path="/tim-nguoi-giup-viec" element={<TimNguoiGiupViec />} /> {/* Tìm người giúp việc */}
      </Routes>

      {/* Hiển thị popup thông báo khi đặt lịch hoặc hành động khác */}
      <ToastContainer />
    </Router>
  );
}

export default App;

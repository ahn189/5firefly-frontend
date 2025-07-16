import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    setIsLoggedIn(!!token);
    setRole(role);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">5Firefly</Link>
        <div className="flex gap-4 items-center">
          <Link to="/tim-nguoi-giup-viec" className="hover:underline">Tìm người giúp việc</Link>
          {isLoggedIn && <Link to="/lichcuatoi" className="hover:underline">Lịch của tôi</Link>}
          {role === "admin" && <Link to="/admin" className="hover:underline">Admin</Link>}

          {!isLoggedIn ? (
            <>
              <Link to="/login" className="hover:underline">Đăng nhập</Link>
              <Link to="/register" className="hover:underline">Đăng ký</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="hover:underline">Đăng xuất</button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

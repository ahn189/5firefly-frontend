import { API_BASE_URL } from "../config";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const illustration = "https://cdni.iconscout.com/illustration/premium/thumb/male-working-on-laptop-4232986-3525865.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      toast.success("Đăng nhập thành công");
      navigate("/lichcuatoi");
    } catch {
      toast.error("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div className="min-h-screen flex items-stretch bg-orange-100">
      {/* Hình minh họa bên trái */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-orange-100">
        <img src={illustration} alt="Login illustration" className="w-2/3 max-w-md" />
      </div>
      {/* Form bên phải */}
      <div className="flex-1 flex items-center justify-center bg-white rounded-l-3xl shadow-lg">
        <div className="max-w-md w-full p-10">
          <h1 className="text-3xl font-bold mb-2 text-orange-600">Mừng bạn trở lại! 👋</h1>
          <p className="text-gray-600 mb-6">Hãy đăng nhập và sử dụng dịch vụ nhé!</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập Email của bạn"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Mật khẩu</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập Mật khẩu"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded font-semibold text-lg transition"
            >
              Đăng nhập
            </button>
          </form>
          <div className="text-center mt-6 text-gray-600 text-sm">
            Chưa có tài khoản?
            <span
              onClick={() => navigate("/register")}
              className="text-orange-500 font-semibold ml-1 cursor-pointer hover:underline"
            >
              Tạo Tài Khoản
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

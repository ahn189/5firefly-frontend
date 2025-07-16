import { API_BASE_URL } from "../config";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const illustration = "https://cdni.iconscout.com/illustration/premium/thumb/female-working-on-laptop-4232985-3525864.png";

function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/auth/register`, form);
      toast.success("Đăng ký thành công!");
      navigate("/login");
    } catch {
      toast.error("Đăng ký thất bại. Email có thể đã tồn tại.");
    }
  };

  return (
    <div className="min-h-screen flex items-stretch bg-orange-100">
      {/* Hình minh họa bên trái */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-orange-100">
        <img src={illustration} alt="Register illustration" className="w-2/3 max-w-md" />
      </div>
      {/* Form bên phải */}
      <div className="flex-1 flex items-center justify-center bg-white rounded-l-3xl shadow-lg">
        <div className="max-w-md w-full p-10">
          <h1 className="text-3xl font-bold mb-2 text-orange-600">Đăng kí tài khoản!</h1>
          <p className="text-gray-600 mb-6">Điền thông tin cơ bản bên dưới và cùng sử dụng dịch vụ!</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Họ tên</label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="Nhập họ tên của bạn"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="Nhập Email"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Mật khẩu</label>
              <input
                type="password"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                placeholder="Nhập Mật khẩu"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded font-semibold text-lg transition"
            >
              Đăng kí
            </button>
          </form>
          <div className="text-center mt-6 text-gray-600 text-sm">
            Đã có tài khoản?
            <span
              onClick={() => navigate("/login")}
              className="text-orange-500 font-semibold ml-1 cursor-pointer hover:underline"
            >
              Đăng nhập ngay!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

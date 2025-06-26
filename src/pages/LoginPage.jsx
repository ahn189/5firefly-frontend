import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      // ✅ Lưu token vào localStorage
      localStorage.setItem("token", res.data.token);
      alert('Đăng nhập thành công');

      // ✅ (Tùy chọn) chuyển sang trang lịch của tôi
      navigate('/lichcuatoi');
    } catch (err) {
      alert('❌ Đăng nhập thất bại');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded w-full">
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default LoginPage;

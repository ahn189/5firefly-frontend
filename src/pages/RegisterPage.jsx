import { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      alert('Đăng ký thành công');
    } catch (err) {
      alert('Đăng ký thất bại');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Tên" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
          className="w-full mb-3 px-3 py-2 border rounded" required />
        <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}
          className="w-full mb-3 px-3 py-2 border rounded" required />
        <input type="password" placeholder="Mật khẩu" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})}
          className="w-full mb-3 px-3 py-2 border rounded" required />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded w-full">Đăng ký</button>
      </form>
    </div>
  );
}
export default RegisterPage;
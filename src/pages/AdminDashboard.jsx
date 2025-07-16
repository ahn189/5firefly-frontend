import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${API_BASE_URL}/api/admin/stats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setStats(res.data))
      .catch((err) => {
        console.error(err);
        toast.error("Bạn không có quyền truy cập hoặc token sai");
      });
  }, []);

  if (!stats) return <div className="text-center mt-10 text-gray-500">Đang tải dữ liệu...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">Bảng điều khiển Admin</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow text-center border">
          <h2 className="text-xl font-semibold text-gray-700">👤 Người dùng</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">{stats.totalUsers}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center border">
          <h2 className="text-xl font-semibold text-gray-700">🧹 Giúp việc</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">{stats.totalHelpers}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center border">
          <h2 className="text-xl font-semibold text-gray-700">📅 Lịch đặt</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">{stats.totalBookings}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

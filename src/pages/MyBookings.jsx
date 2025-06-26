import React, { useState, useEffect } from "react";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/bookings/my", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookings(res.data);
      } catch (error) {
        alert("❌ Không thể lấy lịch. Bạn đã đăng nhập chưa?");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 mt-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Lịch đã đặt của tôi</h2>

      {loading ? (
        <p>🔄 Đang tải dữ liệu...</p>
      ) : bookings.length === 0 ? (
        <p className="text-gray-600">❗Chưa có lịch nào được đặt.</p>
      ) : (
        <table className="w-full text-sm border border-gray-300">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2 border">Ngày</th>
              <th className="p-2 border">Giờ</th>
              <th className="p-2 border">Người giúp việc</th>
              <th className="p-2 border">Điện thoại</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id}>
                <td className="p-2 border">{b.date}</td>
                <td className="p-2 border">{b.time}</td>
                <td className="p-2 border">{b.helperId?.name || "?"}</td>
                <td className="p-2 border">{b.helperId?.phone || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyBookings;

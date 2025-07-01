import { API_BASE_URL } from "../config";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MyBookings = () => {
  const [myBookings, setMyBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get(`${API_BASE_URL}/api/bookings/my`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setMyBookings(res.data))
      .catch(() => toast.error("Không thể lấy lịch cá nhân"));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
        Lịch đặt của tôi
      </h2>
      {myBookings.length === 0 ? (
        <p className="text-center text-gray-600">Bạn chưa có lịch đặt nào.</p>
      ) : (
        <ul className="space-y-3">
          {myBookings.map((b) => (
            <li key={b._id} className="p-4 bg-white rounded shadow border">
              <p><strong>Ngày:</strong> {b.date} lúc {b.time}</p>
              <p><strong>Người giúp việc:</strong> {b.helperId?.name || "(không rõ)"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
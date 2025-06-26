// src/pages/BookingList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/bookings")
      .then((res) => setBookings(res.data))
      .catch((err) => console.error("Lỗi lấy booking:", err));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Danh sách lịch đặt</h2>

      {bookings.length === 0 ? (
        <p>Chưa có lịch đặt nào.</p>
      ) : (
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2 border">Tên khách</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Điện thoại</th>
              <th className="p-2 border">Thời gian</th>
              <th className="p-2 border">Người giúp việc</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id} className="border-b">
                <td className="p-2 border">{booking.userName}</td>
                <td className="p-2 border">{booking.userEmail}</td>
                <td className="p-2 border">{booking.userPhone}</td>
                <td className="p-2 border">
                  {booking.date} - {booking.time}
                </td>
                <td className="p-2 border">
                  {booking.helperId?.name || "(không rõ)"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingList;

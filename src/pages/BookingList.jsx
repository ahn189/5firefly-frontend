import { API_BASE_URL } from "../config";
import React, { useEffect, useState } from "react";
import axios from "axios";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/bookings`)
      .then((res) => setBookings(res.data))
      .catch(() => console.error("Không thể tải lịch đặt"));
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
        Danh sách lịch đặt
      </h2>
      {bookings.length === 0 ? (
        <p className="text-center text-gray-600">Chưa có lịch đặt nào.</p>
      ) : (
        <div className="overflow-auto rounded shadow">
          <table className="w-full text-sm border border-gray-300">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="p-2 border">Tên khách</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Điện thoại</th>
                <th className="p-2 border">Thời gian</th>
                <th className="p-2 border">Người giúp việc</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b._id} className="even:bg-gray-50">
                  <td className="p-2 border">{b.userName}</td>
                  <td className="p-2 border">{b.userEmail}</td>
                  <td className="p-2 border">{b.userPhone}</td>
                  <td className="p-2 border">{b.date} - {b.time}</td>
                  <td className="p-2 border">{b.helperId?.name || "(không rõ)"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookingList;

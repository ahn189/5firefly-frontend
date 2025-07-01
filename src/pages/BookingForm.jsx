import { API_BASE_URL } from "../config";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const BookingForm = () => {
  const location = useLocation();
  const preselectedHelper = location.state?.helper || null;

  const [helpers, setHelpers] = useState([]);
  const [formData, setFormData] = useState({
    userName: "",
    userPhone: "",
    userEmail: "",
    date: "",
    time: "",
    helperId: preselectedHelper?._id || "",
  });

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/helpers`)
      .then((res) => setHelpers(res.data))
      .catch(() => toast.error("Không thể tải danh sách người giúp việc"));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/bookings`, formData);
      toast.success("✅ Đặt lịch thành công!");
      setFormData({
        userName: "",
        userPhone: "",
        userEmail: "",
        date: "",
        time: "",
        helperId: "",
      });
    } catch (err) {
      toast.error("❌ Lỗi khi gửi lịch. Vui lòng thử lại.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white rounded-2xl shadow-lg p-8 transition-all">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Đặt lịch giúp việc
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
        <input
          type="text"
          name="userName"
          placeholder="Họ tên của bạn"
          value={formData.userName}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="tel"
          name="userPhone"
          placeholder="Số điện thoại"
          value={formData.userPhone}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="userEmail"
          placeholder="Email"
          value={formData.userEmail}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="flex-1 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="flex-1 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <select
          name="helperId"
          value={formData.helperId}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">-- Chọn người giúp việc --</option>
          {helpers.map((helper) => (
            <option key={helper._id} value={helper._id}>
              {helper.name} ({helper.experience})
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-all"
        >
          Gửi yêu cầu
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

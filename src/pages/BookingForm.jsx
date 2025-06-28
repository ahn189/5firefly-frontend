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
    helperId: "",
  });

  useEffect(() => {
    axios
      .get("${API_BASE_URL}/api/helpers")
      .then((res) => setHelpers(res.data))
      .catch((err) => console.error("Lỗi lấy danh sách helpers", err));
  }, []);

  useEffect(() => {
    if (preselectedHelper) {
      setFormData((prev) => ({ ...prev, helperId: preselectedHelper._id }));
    }
  }, [preselectedHelper]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("${API_BASE_URL}/api/bookings", formData);
      toast.success("✅ Đặt lịch thành công! Kiểm tra email để xác nhận.");
      setFormData({
        userName: "",
        userPhone: "",
        userEmail: "",
        date: "",
        time: "",
        helperId: preselectedHelper?._id || "",
      });
    } catch (err) {
      toast.error("❌ Đặt lịch thất bại!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4 text-blue-800">
        Đặt lịch với {preselectedHelper?.name || "người giúp việc"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="userName"
          placeholder="Tên của bạn"
          className="w-full border p-2"
          required
          value={formData.userName}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="userPhone"
          placeholder="Số điện thoại"
          className="w-full border p-2"
          required
          value={formData.userPhone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="userEmail"
          placeholder="Email"
          className="w-full border p-2"
          required
          value={formData.userEmail}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          className="w-full border p-2"
          required
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          className="w-full border p-2"
          required
          value={formData.time}
          onChange={handleChange}
        />

        <select
          name="helperId"
          className="w-full border p-2"
          required
          value={formData.helperId}
          onChange={handleChange}
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
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Gửi yêu cầu
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

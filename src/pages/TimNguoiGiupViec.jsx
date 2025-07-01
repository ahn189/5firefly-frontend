import { API_BASE_URL } from "../config";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TimNguoiGiupViec = () => {
  const [helpers, setHelpers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/helpers`)
      .then((res) => setHelpers(res.data))
      .catch((err) => console.error("Không tải được danh sách giúp việc", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Danh sách người giúp việc
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {helpers.map((helper) => (
          <div
            key={helper._id}
            className="border rounded-lg p-4 shadow hover:shadow-md transition cursor-pointer bg-white"
            onClick={() => navigate("/datlich", { state: { helper } })}
          >
            <h3 className="text-lg font-semibold text-blue-800 mb-1">{helper.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{helper.experience}</p>
            <p className="text-sm text-gray-700">Địa chỉ: {helper.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimNguoiGiupViec;

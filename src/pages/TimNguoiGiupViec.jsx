import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TimNguoiGiupViec() {
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `/api/helpers/match?address=${address}&gender=${gender}`
      );
      setResults(res.data);
    } catch (err) {
      alert("Lỗi khi tìm người giúp việc!");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">
        Tìm người giúp việc phù hợp
      </h2>

      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <input
          type="text"
          placeholder="Nhập địa chỉ"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="p-2 border rounded w-[200px]"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="p-2 border rounded w-[200px]"
        >
          <option value="">Chọn giới tính</option>
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
        </select>
        <button
          onClick={handleSearch}
          className="bg-blue-700 text-white px-4 rounded hover:bg-blue-900"
        >
          Tìm kiếm
        </button>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((helper) => (
            <div
              key={helper._id}
              className="p-4 border rounded shadow hover:shadow-lg transition"
            >
              <img
                src={`/uploads/${helper.image || "default.png"}`}
                alt={helper.name}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h3 className="font-bold text-lg text-blue-700">{helper.name}</h3>
              <p><strong>📍 Địa chỉ:</strong> {helper.address}</p>
              <p><strong>⚧️ Giới tính:</strong> {helper.gender}</p>
              <p><strong>📞 SĐT:</strong> {helper.phone}</p>
              <button
                className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
                onClick={() => navigate("/lichdat", { state: { helper } })}
              >
                Đặt lịch
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">Không có kết quả nào.</p>
      )}
    </div>
  );
}

export default TimNguoiGiupViec;

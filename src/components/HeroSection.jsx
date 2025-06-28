import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="text-center py-20 bg-blue-50">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        Tìm người giúp việc theo giờ dễ dàng
      </h1>
      <p className="text-gray-600 mb-6">
        Nhanh chóng, tin cậy, chỉ với vài thao tác
      </p>
      <button
        onClick={() => navigate("/datlich")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
      >
        Đặt lịch ngay
      </button>
    </section>
  );
}

export default HeroSection;

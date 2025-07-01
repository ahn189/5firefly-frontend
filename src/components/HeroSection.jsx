import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-blue-50 py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 leading-tight mb-4">
          Tìm người giúp việc theo giờ <br /> dễ dàng và tin cậy
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl mb-8">
          Chỉ cần vài thao tác – chúng tôi sẽ kết nối bạn với người phù hợp
        </p>
        <button
          onClick={() => navigate("/datlich")}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full shadow-md transition"
        >
          Đặt lịch ngay
        </button>
      </div>

      {/* Ảnh minh họa decor */}
      <div className="absolute bottom-0 right-0 hidden md:block">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png"
          alt="Giúp việc minh họa"
          className="w-64 opacity-20 mr-8"
        />
      </div>
    </section>
  );
}

export default HeroSection;

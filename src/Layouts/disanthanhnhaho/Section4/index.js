import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/image/disanthanhnhaho/3.1new.jpg",
        "/image/disanthanhnhaho/3.2new.jpg",
        "/image/disanthanhnhaho/3.3new.webp",
        "/image/disanthanhnhaho/3.4new.jpg",
    ];

    const handleNextClick = () => {
            setCurrentSlide((prev) => {
            const nextSlide = (prev + 1) % slides.length; // Xử lý chỉ số vòng lặp
            console.log("Next Slide Index:", nextSlide, "Next Slide Image:", slides[nextSlide]);
            return nextSlide;
        });
    };
    const handlePrevClick = () => {
        setCurrentSlide((prev) => {
        const prevSlide = (prev - 1) % slides.length;
        if(prevSlide < 0) {
            return slides.length - 1;
        }
        return prevSlide;
    });
    };

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="Section4">
            <div className="Section4__title">
                CÂU CHUYỆN DI SẢN 
            </div>
            <div className="Section4__slider">
                {slides.map((slide, index) => (
                    <div
                    key={index}
                    className="Section4__slider__image"
                    style={{
                        backgroundImage: `url('${slide}')`,
                        transform: `translateX(-${currentSlide * 100}%)`, // Chỉ dịch chuyển toàn bộ slider
                    }}
                >

                </div>
                ))}
            </div>
            <div className="Section4__pagi">
                {slides.map((_, index) => (
                    <div
                    key={index}
                    className={`Section4__pagi__dot ${index === currentSlide ? "active" : ""}`}
                    onClick={() => handleDotClick(index)} // Khi nhấn vào dot, cập nhật slide hiện tại
                    ></div>
                ))}
            </div>
            <div className="Section4__text">
                {slides.map((_, index) =>
                    index === currentSlide ? (
                    <div key={index} className="Section4__text__inner">
                        {index === 0 &&
                        `Bốn cổng chính được xây dựng bằng những phiến đá vôi màu xanh, được đục đẽo tinh xảo, vuông vức, xếp chồng khít lên nhau mà không cần chất kết dính. Các phiến đá dài trung bình 1,5m, có tấm dài tới 6m, trọng lượng ước nặng 24 tấn. Tổng khối lượng đá được sử dụng xây thành khoảng 20.000m3 và gần 100.000m3 đất được đào đắp công phu.`}
                        {index === 1 &&
                        `Nét hoa văn mang dấu ấn kiến trúc thời nhà Hồ trên con rồng bằng đá được chạm khắc rất tỉ mỉ, trau chuốt. Thân rồng thon nhỏ dần về phía đuôi, uốn bảy khúc, vây lưng nhỏ, đều. Rồng có bốn chân, mỗi chân 3 móng với các túm lông lượn mềm mại. Đầu rồng hiện đã bị mất nhưng vẫn còn lại phần bờm dài lượn chín nếp. `}
                        {index === 2 &&
                        `Bãi đạn đá ở cổng Nam mới mở khai quật trên diện tích rộng khoảng hơn 100 m2, ghi nhận có 40 viên đạn đá (hình tròn). Các nhà khảo cổ nhận định bãi đạn đá này có thể có hàng trăm viên đạn. Ngoài ra, ở khu vực 4 cổng thành phát hiện nhiều di vật, như gạch hình chữ nhật có trang trí lá đề thời Trần - Hồ; ngói phẳng, ngói cong lòng máng màu xám thời Lê; gốm men thời Trần - Hồ và thời Lê sơ.`}
                        {index === 3 &&
                        `Các nhà khảo cổ học còn phát hiện dọc theo đường Hoàng gia có nhiều dấu tích, kiến trúc quan trọng, như hai kiến trúc cổng và một cụm kiến trúc trung tâm tại khu vực có hai thành bậc đá chạm rồng thời Trần - Hồ. Đặc biệt dấu tích cụm kiến trúc Con Rồng được đánh giá là kiến trúc quan trọng, dự đoán có thể nơi đây sẽ tìm thấy dấu tích Chính điện của Thành nhà Hồ.`}
                        {index === 4 &&
                        `Tản Viên Sơn khắc trên Thuần đỉnh - núi Tản Viên, ngọn núi thuộc tỉnh Hà Tây cũ, nay thuộc Ba Vì - Hà Nội. Tản Viên là ngọn núi gắn liền với truyền thuyết Sơn Tinh trị thuỷ.`}
                        {index === 5 &&
                        `Hoành Sơn khắc trên Huyền đỉnh - núi Hoành Sơn hay Đèo Ngang, dãy núi ranh giới giữa Hà Tĩnh và Quảng Bình ở Bắc Trung Bộ; xưa kia là ranh giới Đại Việt - Chăm Pa. Trên núi có một trấn ải là Hoành Sơn Quan đến nay vẫn tồn tại.`}
                        {index === 6 &&
                        `Đà Nẵng Hải Khẩu khắc trên Dụ đỉnh - cửa biển Đà Nẵng (còn gọi là cửa Hàn, vịnh Hàn), nơi sông Cẩm Lệ chảy về vũng Hàn rồi đổ ra biển.`}
                        {index === 7 &&
                        `Đại Lĩnh khắc trên Tuyên đỉnh - núi Đại Lĩnh (Đại Lãnh), dãy núi lớn là ranh giới giữa tỉnh Phú Yên và Khánh Hoà.`}
                    </div>
                    ) : null
                )}
            </div>
            <div className="Section4__next" onClick={handleNextClick}>
                <MdNavigateNext />
            </div>
            <div className="Section4__prev" onClick={handlePrevClick}>
                <MdNavigateBefore />
            </div>
        </div>
    );
}

export default Section4;

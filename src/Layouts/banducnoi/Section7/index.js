import { useState } from "react";
import emailjs from "@emailjs/browser";

function Section7() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [file, setFile] = useState(null);

    const buttonHandle = async (event) => {
        event.preventDefault(); // Ngăn reload trang

        if (!file) {
            alert("Vui lòng chọn file!");
            return;
        }

        try {
            // Upload file lên Cloudinary
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "ml_default"); // thay bằng upload preset
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/dmanl2e81/auto/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            const data = await response.json();
            const fileUrl = data.secure_url;
            console.log("File đã upload: ", fileUrl);

            // Gửi email qua EmailJS
            const templateParams = {
                from_name: name,
                from_email: email,
                message: `Đã upload file: ${fileUrl}`,
            };

            await emailjs.send(
                "service_nqzmiuk", // service ID từ EmailJS
                "template_i9ox99o", // template ID từ EmailJS
                templateParams,
                "B2mXKIg4ywhSs4hMf" // public key từ EmailJS
            );

            alert("Gửi thành công!");
            setName("");
            setEmail("");
            setFile(null);
        } catch (error) {
            console.error("Lỗi:", error);
            alert("Đã xảy ra lỗi khi gửi phản hồi.");
        }
    };

    return (
        <div className="Section7" style={{ backgroundColor: "#FEF2F2" }}>
            <div className="container">
                <div className="Section7__inner">
                    <div className="Section7__inner__title">
                        Không gian trách nhiệm
                    </div>
                    <div className="Section7__inner__disc">
                        Bạn hãy thiết kế một video/poster hoặc lá thư để thể hiện chủ đề: “Cảm nghĩ sau khi tìm hiểu thông tin về di sản trên website/Đề xuất những biện pháp bảo tồn và quảng bá hình ảnh di sản Bản đúc nổi trên cửu đỉnh tại Huế”
                    </div>
                    <div className="Section7__inner__disc">
                        Những thông tin mà bạn đóng góp là động lực quý giá để nhóm tác giả phát triển dự án đồng thời góp phần lan tỏa, bảo tồn và phát huy giá trị di sản văn hóa Việt Nam.
                    </div>
                    <form onSubmit={buttonHandle}>
                        <label htmlFor="form__name">Họ và tên</label>
                        <input
                            type="text"
                            id="form__name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <label htmlFor="form__email">Email</label>
                        <input
                            type="email"
                            id="form__email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label>Đính kèm file</label>
                        <input
                            type="file"
                            className="Section7__inner__form"
                            onChange={(e) => setFile(e.target.files[0])}
                            required
                        />

                        <button type="submit">Gửi phản hồi của bạn</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Section7;

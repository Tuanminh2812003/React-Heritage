import Section4 from "./Section4";

function Section1(){
    return(
        <>
        <div style={{padding: "40px 0px"}}>
            <div className="Section1__title">
                <div className="container">
                    <div className="Section1__title__inner">
                        CÂU CHUYỆN KẾT NỐI
                    </div>
                </div>
            </div>
            <input type="radio" id="inner1p3" name="section1p3" defaultChecked/>
            <input type="radio" id="inner2p3" name="section1p3"/>
            <input type="radio" id="inner3p3" name="section1p3"/>
            <input type="radio" id="inner4p3" name="section1p3"/>
            <div className="Section1__menu">
                <div className="container">
                    <div className="Section1__menu__inner">

                        <label className="Section1__menu__inner__tab lable1p3" for="inner1p3">Truyền thuyết Lạc Long Quân – Âu Cơ:</label>
                        <label className="Section1__menu__inner__tab lable2p3" for="inner2p3">Truyền thuyết về các Vua Hùng:</label>
                        {/* <label className="Section1__menu__inner__tab lable3p3" for="inner3p3">Truyền thuyết nàng Man Nương ở chùa Tổ Bắc Ninh</label>
                        <label className="Section1__menu__inner__tab lable4p3" for="inner4p3">Văn hóa tín ngưỡng thờ mẩu tam phủ và mối liên hệ với Phật giáo</label> */}
                    </div>
                </div>
            </div>
            <div className="Section1__content">
                <div className="container">

                    <div className="Section1__content__inner inner1p3">
                        <div className="Section1__content__inner__row">
                            <div className="Section1__content__inner__row__text">
                                <div className="Section1__content__inner__title">
                                    Truyền thuyết Lạc Long Quân – Âu Cơ: 
                                </div>
                                <div className="Section1__content__inner__text">
                                    Truyền thuyết Lạc Long Quân – Âu Cơ kể về cuộc hôn nhân giữa Lạc Long Quân (dòng dõi Rồng) và Âu Cơ (dòng dõi Tiên), sinh ra bọc trăm trứng, nở thành một trăm người con. Do khác biệt về môi trường sống, họ chia con: 50 người theo cha xuống biển, 50 người theo mẹ lên núi. Người con trưởng theo mẹ được tôn làm Vua Hùng, lập nước Văn Lang. Huyền sử này giải thích nguồn gốc "con Rồng cháu Tiên" của người Việt, biểu tượng cho sự hòa hợp, thống nhất, đoàn kết và khát vọng chinh phục thiên nhiên, đồng thời là nền tảng cho tín ngưỡng thờ cúng Hùng Vương.
                                </div>
                            </div>
                            <div className="Section1__content__inner__row__image">
                                <div className="Section1__content__inner__image" >
                                    <img src="/image/tinnguongthocunghungvuong/1.png" />
                                </div>
                                <div className="Section1__content__inner__video__disc">
                                    Nguồn: <b>Báo Dân trí</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Section1__content__inner inner2p3">
                        <div className="Section1__content__inner__row">
                            <div className="Section1__content__inner__row__text">
                                <div className="Section1__content__inner__title">
                                    Truyền thuyết về các Vua Hùng:
                                </div>
                                <div className="Section1__content__inner__text">
                                    Truyền thuyết kể về 18 đời vua trị vì đất nước Văn Lang, với vị vua đầu tiên là con trưởng của Lạc Long Quân và Âu Cơ. Các Vua Hùng đã có công dạy dân trồng trọt, chăn nuôi, đánh đuổi giặc ngoại xâm, xây dựng và bảo vệ đất nước. Dù con số 18 mang tính ước lệ, các truyền thuyết về thời đại Hùng Vương như "Bánh chưng, bánh dày", "Sơn Tinh, Thủy Tinh", "Thánh Gióng"... thể hiện những giá trị văn hóa, tinh thần và triết lý sống của người Việt. Thời đại Hùng Vương được xem là giai đoạn dựng nước và giữ nước đầu tiên, đặt nền móng cho sự phát triển của dân tộc Việt Nam, và là cơ sở cho tín ngưỡng thờ cúng Hùng Vương, tôn vinh công ơn của các vị vua tổ.
                                </div>
                            </div>
                            <div className="Section1__content__inner__row__image">
                                <div className="Section1__content__inner__image" >
                                    <img src="/image/tinnguongthocunghungvuong/8.jpg" />
                                </div>
                                <div className="Section1__content__inner__video__disc">
                                    Ảnh: <b>"Hùng Vương là cách gọi các vị vua nước Văn Lang của người Lạc Việt"</b>
                                </div>
                                <div className="Section1__content__inner__video__disc">
                                    Nguồn: <b>Kênh14</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Section1__content__inner inner3p3">
                        <div className="Section1__content__inner__row">
                            <div className="Section1__content__inner__row__text">
                                <div className="Section1__content__inner__title">
                                    Truyền thuyết nàng Man Nương ở chùa Tổ Bắc Ninh
                                </div>
                                <div className="Section1__content__inner__text">
                                    Chùa Tổ, hay Phúc Nghiêm Tự, tọa lạc tại phường Hà Mãn, thị xã Thuận Thành, Bắc Ninh, là di tích gắn với huyền thoại về Man Nương – Phật Mẫu của Phật giáo Việt Nam. Theo truyền thuyết, Man Nương gặp thiền sư Khâu Đà La từ Ấn Độ, cảm phục đạo hạnh của ông, nàng học đạo và sau đó hạ sinh con gái mang tên là Diệu Thiện. Diệu Thiện sau này truyền bá Phật pháp, được xem là tổ sư đầu tiên của Phật giáo Việt Nam. Khi Man Nương qua đời, dân làng lập miếu thờ bà, nơi này trở thành Chùa Tổ, biểu tượng của lòng từ bi và sự giác ngộ, thu hút Phật tử và du khách.
                                </div>
                            </div>
                            <div className="Section1__content__inner__row__image">
                                <div className="Section1__content__inner__image" >
                                    <img src="/TNTM/Section1-4.jpg" />
                                </div>
                                <div className="Section1__content__inner__video__disc">
                                    Ảnh: <b>Tượng phật Mẫu Man Nương</b>
                                </div>
                                <div className="Section1__content__inner__video__disc">
                                    Nguồn:  <b>Đài Phát thanh và Truyền Hình Bắc Ninh</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Section1__content__inner inner4p3">
                    <div className="Section1__content__inner__row">
                            <div className="Section1__content__inner__row__text">
                                <div className="Section1__content__inner__title">
                                    Văn hóa tín ngưỡng thờ mẩu tam phủ và mối liên hệ với Phật giáo
                                </div>
                                <div className="Section1__content__inner__text">
                                    Theo sử sách được ghi lại, Đạo Phật và Đạo Mẫu luôn đồng hành và gắn bó mật thiết với nhau trog suốt triều dài lịch sử. Đạo Mẫu ra đời gắn với Thánh Mẫu Liễu Hạnh, một số nguồn thông tin ghi Mẫu Liễu Hạnh quy y nhà Phật, điều này dẫn đến việc Mẫu không để lại bất kỳ pháp môn nào riêng cho Đạo Mẫu, mà thay vào đó, người đời sau cho rằng Mẫu muốn mọi người học hỏi và thấm nhuần những giáo lý tốt đẹp của nhà Phật. Nơi đâu có bàn thờ Phật, nơi đó thường có ban thờ Mẫu, và trong các đền điện thờ Mẫu, luôn có bàn thờ Phật bên cạnh.
                                </div>
                            </div>
                            <div className="Section1__content__inner__row__image">
                                <div className="Section1__content__inner__image" >
                                    <img src="/TNTM/Section5.1new.png" />
                                </div>
                                <div className="Section1__content__inner__video__disc">
                                    Ảnh: <b>"Bức tượng Thánh Mẫu Liễu Hạnh tại Phủ Quảng Cung (Phủ Nấp)"</b>
                                </div>
                                <div className="Section1__content__inner__video__disc">
                                    Nguồn:  <b>Vietnam+</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Section1;
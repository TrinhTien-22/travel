import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Địa điểm Đáng chú ý!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Hà Giang nơi có những trải nghiệm thú vị , điểm đến không thể bỏ lỡ với dân phượt "
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="images/langchutich.webp"
              text="Lăng chủ tịch Hồ Chí Minh nơi mang đậm tính lịch sử và trang nghiêm"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/halong2.jpg"
              text="Hạ Long vinh dự được UNESCO công nhận là di sản văn hóa thế giới"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="images/Nui-lang-biang.jpg"
              text="Đà Lạt được ví như hòn ngọc của Việt Nam"
              label="Luxury"
              path="/products"
            />
            <CardItem
              src="images/sapa.jpg"
              text="Sapa trải nghiệm núi rừng văn hóa-ẩm thực đặc biệt"
              label="Luxury"
              path="/sign-up"
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;

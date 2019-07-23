// Need to add Pagination, Navigation modules

import "./style.css";

// const params = {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "3",

//   pagination: {
//     el: ".swiper-pagination"
//   },
//   renderPrevButton: () => (
//     <div
//       className="swiper-button-prev"
//       style={{
//         backgroundImage: `url("https://img.icons8.com/plasticine/100/000000/chevron-left.png")`
//       }}
//     />
//   ),
//   renderNextButton: () => (
//     <div
//       className="swiper-button-next"
//       style={{
//         backgroundImage: `url("https://img.icons8.com/plasticine/100/000000/chevron-right.png")`
//       }}
//     />
//   )
// };

import React, { Component } from "react";
import Swiper from "react-id-swiper";
import { Row } from "../Grid/index";

const params = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "1",

  pagination: {
    el: ".swiper-pagination"
  },
  renderPrevButton: () => (
    <div
      className="swiper-button-prev"
      style={{
        backgroundImage: `url("https://img.icons8.com/plasticine/100/000000/chevron-left.png")`
      }}
    />
  ),
  renderNextButton: () => (
    <div
      className="swiper-button-next"
      style={{
        backgroundImage: `url("https://img.icons8.com/plasticine/100/000000/chevron-right.png")`
      }}
    />
  )
};

export default class SwiperCarousel extends Component {
  render() {
    return (
      <Row>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.css"
        />
        <div className="swiperCarousel">
          <Swiper {...params}>
            <div className="productContainer">
              {this.props.productlist.map(product => (
                <div className="productinfo">
                 <div className="img-container">
                 <img src={product.productImage} alt="hello" />
                 </div>
                </div>
              ))}
            </div>
          </Swiper>
        </div>
      </Row>
    );
  }
}

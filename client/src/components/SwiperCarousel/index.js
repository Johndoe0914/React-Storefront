import React from "react";

import { Row, Container } from "../Grid/index";
import Swiper from "react-id-swiper";
// Need to add Pagination, Navigation modules

import "./style.css";

const params = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "3",

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

export default class SwiperCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <Row>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.css"
        />
        <div className="profileImageShowCase">
          <Swiper {...params}>
            {this.props.products.map(project => (
              <div className="card">
                <div className="img-container">
                  <div className="img-div">
                    <img src={project.projectImage} />
                  </div>
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <strong>Project name : </strong> {project.projectName}
                    </li>
                    <li>
                      <strong>Description: </strong>{" "}
                      {project.projectDescription}
                    </li>
                    <li>
                      <strong>Github repo</strong>{" "}
                      <a href={project.projectGitUrl}>{project.projectName}</a>
                    </li>
                    <li>
                      <a className="btn btn-danger" href={project.projectUrl}>
                        View Project
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </Swiper>
        </div>
      </Row>
    );
  }
}

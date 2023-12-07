//Carousel Bootstrap
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import i1 from "../../Assets/360 VIEW OF LNMIIT.jpg";
import i2 from "../../Assets/BASKETBALL COURT.jpg";
import i3 from "../../Assets/BOYS HOSTEL 2.jpg";
import i4 from "../../Assets/BOYS HOSTEL 3.jpg";
import i5 from "../../Assets/CENTRAL PLAZA.jpg";
import i6 from "../../Assets/COMPUTER LAB.jpg";
import i7 from "../../Assets/ENTRANCE.jpg";
import i8 from "../../Assets/LNMIIT VIEW.jpg";
import i9 from "../../Assets/NIGHT VIEW OF LNMIIT.jpg";
import i10 from "../../Assets/SPORTS EVENT.jpg";
import i11 from "../../Assets/SPORTS FACILITIES.jpg";
import i12 from "../../Assets/TEDX EVENT AT LNMIIT.jpg";
import i13 from "../../Assets/VAVACITY.jpg";
import "./Photo.css";
const PhotoGallery = () => {
  return (
    <section className="photo-gallery" style={{backgroundColor : "#e5fcf5"}}> 
      <div className="photo-gallery-container">
        <div className="photo-gallery-title">
          <h2 className="tagh2">
            Photo Gallery
          </h2>
        </div>
        <Carousel className="carousel-container" variant="dark" style={{backgroundColor : "#e5fcf5"}}>
          <Carousel.Item className="carousel-item">
            <div className="pict-container">
              <img
                src={i1}
                className="pict"
                alt="1"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div className="hidden">
                <div className="text">
                  <h1>BIRD-EYE VIEW OF LNMIIT</h1>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <div className="pict-container">
              <img
                src={i2}
                className="pict"
                alt="1"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div className="hidden">
                <div className="text">
                  <h1>BASKETBALL COURT</h1>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <div className="pict-container">
              <img
                src={i3}
                className="pict"
                alt="1"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div className="hidden">
                <div className="text">
                  <h1>BOYS HOSTEL 2</h1>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <div className="pict-container">
              <img
                src={i4}
                className="pict"
                alt="1"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div className="hidden">
                <div className="text">
                  <h1>BOYS HOSTEL 3</h1>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <div className="pict-container">
              <img
                src={i5}
                className="pict"
                alt="1"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div className="hidden">
                <div className="text">
                  <h1>CENTRAL PLAZA</h1>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <div className="pict-container">
              <img
                src={i6}
                className="pict"
                alt="1"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div className="hidden">
                <div className="text">
                  <h1>COMPUTER LAB</h1>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <div className="pict-container">
              <img
                src={i7}
                className="pict"
                alt="1"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div className="hidden">
                <div className="text">
                  <h1>ENTRANCE</h1>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <div className="pict-container">
              <img
                src={i8}
                className="pict"
                alt="1"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div className="hidden">
                <div className="text">
                  <h1>LNMIIT VIEW</h1>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <div className="pict-container">
              <img
                src={i9}
                className="pict"
                alt="1"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div className="hidden">
                <div className="text">
                  <h1>NIGHT VIEW OF LNMIIT</h1>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <div className="pict-container">
              <img
                src={i10}
                className="pict"
                alt="1"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div className="hidden">
                <div className="text">
                  <h1>SPORTS EVENT</h1>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <div className="pict-container">
              <img
                src={i11}
                className="pict"
                alt="1"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div className="hidden">
                <div className="text">
                  <h1>SPORTS FACILITIES</h1>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <div className="pict-container">
              <img
                src={i12}
                className="pict"
                alt="1"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div className="hidden">
                <div className="text">
                  <h1>TEDX EVENT AT LNMIIT</h1>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <div className="pict-container">
              <img
                src={i13}
                className="pict"
                alt="1"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div className="hidden">
                <div className="text">
                  <h1>VIVACITY</h1>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default PhotoGallery;

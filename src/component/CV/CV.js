import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "../../jquery.js";
import profileImg from "./profileImg.JPG";
import { Link } from "react-router-dom";
import "./style.css";

class CV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrow: false,
      timeline: false,
    };
  }

  arrowToggle = () => {
    this.setState({
      arrow: !this.state.arrow,
      timeline: !this.state.timeline,
    });
  };

  renderArrow = () => {
    const { arrow } = this.state;
    let xhtml = null;
    if (arrow === true) {
      xhtml = (
        <div className="container">
          <a id="toggleElementUp" className="arrow up">
            Up
          </a>
        </div>
      );
    } else {
      xhtml = (
        <div className="container">
          <a id="toggleElementDown" className="arrow down">
            Down
          </a>
        </div>
      );
    }

    return xhtml;
  };

  renderTimeline = () => {
    let xhtml;

    xhtml = (
      <CSSTransition
        in={this.state.timeline}
        classNames="alert"
        timeout={800}
        unmountOnExit
        appear
      >
        <div id="timeline_show" className="timeline_experience">
          <div className="timeline_container timeline_left">
            <div className="timeline_content">
              <h2>2019-2020</h2>
              <p>Learned ReactJS</p>
            </div>
          </div>
          <div className="timeline_container timeline_right">
            <div className="timeline_content">
              <h2>2018-2019</h2>
              <p>Learned Javascript at T3H University</p>
            </div>
          </div>
          <div className="timeline_container timeline_left">
            <div className="timeline_content">
              <h2>2018</h2>
              <p>Learned HTML-CSS-SASS-BOOTSTRAP at T3H University</p>
            </div>
          </div>
          <div className="timeline_container timeline_right">
            <div className="timeline_content">
              <h2>2015</h2>
              <p>Graduated Hoa Sen University</p>
            </div>
          </div>
        </div>
      </CSSTransition>
    );

    return xhtml;
  };
  render() {
    return (
      <section className="cv_container">
        <div className="cv_left">
          <div className="cv_left_profile">
            <div className="cv_image">
              <img src={profileImg} className="img-responsive" alt="Image" />
            </div>
          </div>
          <div className="cv_left_content">
            <div className="cv_line cv_info">
              <div className="title">
                <p className="title_name">
                  <span />
                  <span />
                  <span />
                  <span />
                  Đinh Tấn Lộc
                </p>
                <p className="title_job">Front End Developer</p>
                <ul>
                  <li>
                    <div className="icon">
                      <i className="iconbtn fas fa-map-marked-alt" />
                    </div>
                    <div className="data">
                      71/3A Nguyễn Bặc, Phường 3,
                      <br />
                      Quận Tân Bình, TPHCM
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="iconbtn far fa-envelope-open" />
                    </div>
                    <div className="data">loc.dinhtan@gmail.com</div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="iconbtn fas fa-mobile-alt" />
                    </div>
                    <div className="data">0906.688.127</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cv_line cv_skill">
              <div className="title">
                <p className="title_skill">Skill's</p>
                <ul>
                  <li>
                    <div className="icon">
                      <i className="iconbtn fas fa-code" />
                    </div>
                    <div className="data">HTML 5</div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="iconbtn fab fa-css3" />
                    </div>
                    <div className="data">CSS 3</div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="iconbtn fas fa-paste" />
                    </div>
                    <div className="data">Javascript</div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="iconbtn fab fa-react" />
                    </div>
                    <div className="data">
                      REACTJS
                      <br />
                      REDUX <br />
                      REDUX-SAGA
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cv_line cv_social">
              <div className="title">
                <p className="title_skill">Social</p>
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fab fa-linkedin-in iconbtn"></i>
                    </div>
                    <div className="data">
                      <p className="data_social">Linkedin</p>
                      <a
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/loc-dinh-1b5b181a7/"
                        className="facebook"
                        target="_blank"
                      >
                        www.linkedin.com/in/loc-dinh-1b5b181a7/
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cv_contact">
              <div className="title">
                <p className="title_skill">Contact</p>
                <p className="data">
                  Please click Page Contact to contact me !
                </p>
                <Link to="/contact" className="btnContact">
                  Page Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="cv_right">
          <div className="cv_line cv_right_about">
            <div className="title_aboutme">
              <p className="title_about">
                <span />
                <span />
                <span />
                <span />
                About me
              </p>
              <p className="title_content">
                My name is Loc, 28 years old.It's an honor when you visit my CV.
                I've learned HTML,CSS,JS and ReactJS,Redux,Redux-Saga and about
                English that my TOEIC score is 570. I can speak and reading
                English fluently, and now I'm looking for a fresher position
                (Frond End Developer) in HCM city.
              </p>
            </div>
          </div>
          {/* /////////////////////////////////////// */}

          <div className="cv_line cv_right_experience">
            <div className="title_about education" onClick={this.arrowToggle}>
              <p>
                <span />
                <span />
                <span />
                <span />
                Educational
                <br />
                Background
              </p>
              {this.renderArrow()}
            </div>

            {this.renderTimeline()}
          </div>
          {/* /////////////////////////////////////// */}
          <div className="cv_line cv_right_hobby">
            <div className="title_about">
              <p>
                <span />
                <span />
                <span />
                <span />
                My Projects
              </p>
            </div>
            <div className="hobby_section">
              <div className="inner_width">
                <div className="border" />
                <div className="hobby_container">
                  <div className="hobby_box">
                    <div className="hobby_icon">
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://shoppingcart-2020.firebaseapp.com"
                      >
                        <i className="fas fa-shopping-cart" />{" "}
                      </a>
                    </div>

                    <div className="hobby_title">
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://shoppingcart-2020.firebaseapp.com"
                      />
                      Shopping Cart
                    </div>
                    <div className="hobby_desc">
                      <strong>Use</strong> <br />
                      ReactJS-REDUX-BOOTSTRAP3
                    </div>

                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://shoppingcart-2020.firebaseapp.com"
                    >
                      <i className="iconLink fas fa-arrow-circle-down" />
                    </a>
                  </div>
                  <div className="link_website">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://shoppingcart-2020.firebaseapp.com"
                    >
                      https://shoppingcart-2020.firebaseapp.com/
                    </a>
                  </div>
                  <div className="hobby_box">
                    <div className="hobby_icon">
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://nutritionchart-2020.firebaseapp.com"
                      >
                        <i className="far fa-chart-bar" />
                      </a>
                    </div>
                    <div className="hobby_title">Nutrition Chart</div>
                    <div className="hobby_desc">
                      <strong>Use</strong> <br />
                      ReactJS
                    </div>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://nutritionchart-2020.firebaseapp.com"
                    >
                      <i className="iconLink fas fa-arrow-circle-down" />
                    </a>
                  </div>
                  <div className="link_website">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://nutritionchart-2020.firebaseapp.com"
                    >
                      https://nutritionchart-2020.firebaseapp.com/
                    </a>
                  </div>
                  <div className="hobby_box">
                    <div className="hobby_icon">
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://bookingroom-2020.firebaseapp.com"
                      >
                        <i className="fas fa-hotel" />
                      </a>
                    </div>
                    <div className="hobby_title">BOOKING ROOM</div>
                    <div className="hobby_desc">
                      <strong>Use</strong> <br />
                      ReactJS-REDUX-REDUX-SAGA-MATERIAL UI-REDUX-FORM
                    </div>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://bookingroom-2020.firebaseapp.com"
                    >
                      <i className="iconLink fas fa-arrow-circle-down" />
                    </a>
                  </div>
                  <div className="link_website">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://bookingroom-2020.firebaseapp.com"
                    >
                      https://bookingroom-2020.firebaseapp.com/
                    </a>
                  </div>
                  <div className="hobby_box">
                    <div className="hobby_icon">
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://blancapage-171ab.firebaseapp.com/"
                      >
                        <i className="fas fa-shopping-bag" />
                      </a>
                    </div>

                    <div className="hobby_title">BLANCA SITE</div>

                    <div className="hobby_desc">
                      <strong>Use</strong> <br />
                      HTML-CSS-SASS
                    </div>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://blancapage-171ab.firebaseapp.com/"
                    >
                      <i className="iconLink fas fa-arrow-circle-down" />
                    </a>
                  </div>
                  <div className="link_website">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://blancapage-171ab.firebaseapp.com/"
                    >
                      https://blancapage-171ab.firebaseapp.com/
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CV;

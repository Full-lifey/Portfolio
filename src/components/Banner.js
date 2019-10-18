import React from "react";
import { Parallax } from "react-scroll-parallax";

import BannerImg from "../assets/img/Mountains_Widescreen_Background.jpg";
import MyImg from "../assets/img/Me.jpg";

import "./Banner.scss";

const imageStyle = {
  width: "100%"
};

const Banner = props => {
  return (
    <div className="banner-container">
      <Parallax
        className="banner-img-wrapper desktop"
        x={[-80, 80]}
        styleInner={imageStyle}
      >
        <img className="banner-header-img" src={BannerImg} alt="Banner Img" />
      </Parallax>
      <Parallax className="banner-story desktop" x={[80, -80]}>
        <div className="banner-header">
          <img className="my-img" src={MyImg} alt="Me" />
          <h1>Joel Perez</h1>
        </div>
        <div className="banner-subheader">
          <p>
            Full-stack software engineer with extensive experience in server and
            networking infrastructure.
          </p>
        </div>
        <p className="banner-detail">
          I've been in technology for 15 years. From 2013 to 2017 I ran the IT
          department at PCS Ferguson. This involved ~25 servers, ~30 networks,
          and ~400 employees. In 2017 I was promoted to run the server
          infrastructure for Apergy Corporation after they spun off from Dover.
          During these last fifteen years, I have seen first hand how software
          has been shaping the lives and processes of businesses and individuals
          around me. While on a sabbatical over 2018 and early 2019, I noticed
          that I was writing code on my own time in the middle of Thailand. It
          was then that I decided it was time to build this software to
          contribute to society as best I could. Writing software fills me with
          joy as I'm able to achieve technical results while being creative at
          the same time. When not writing code I am a competitive golfer, avid
          outdoor enthusiast, and skier/snowboarder.
        </p>
        <div className="banner-btn">
          <a href="mailto:joel@joelperez.dev">Contact Me</a>
        </div>
      </Parallax>
      <div className="mobile">
        <div className="banner-img-wrapper">
          <img className="banner-header-img" src={BannerImg} alt="Banner Img" />
        </div>
        <div className="banner-story">
          <div className="banner-header">
            <h1>Joel Perez</h1>
            <img className="my-img" src={MyImg} alt="Me" />
          </div>
          <div className="banner-subheader">
            <p>
              Full-stack software engineer with extensive experience in server
              and networking infrastructure.
            </p>
          </div>
          <p className="banner-detail">
            I've been in technology for 15 years. From 2013 to 2017, I ran the
            IT department at PCS Ferguson. This position involved ~25 servers,
            ~30 networks, and ~400 employees. In 2017 I was promoted to run the
            server infrastructure for Apergy Corporation after they spun off
            from Dover. During these last fifteen years, I have seen first hand
            how software has been shaping the lives and processes of businesses
            and individuals around me. While on a sabbatical over 2018, I
            decided it was time to build software to contribute to society as
            best I could. Writing software fills me with joy as I'm able to
            achieve technical results while being creative at the same time.
            When not writing code, I am a competitive golfer, avid outdoorsman,
            and skier/snowboarder.
          </p>
          <div className="banner-btn">
            <a href="mailto:joel@joelperez.dev">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { Parallax } from "react-scroll-parallax";

import EmailIcon from "@mui/icons-material/Email";
import { Grid, Button } from "@mui/material";

import BannerImg from "../../assets/img/Mountains_Widescreen_Background.jpg";
import MyImg from "../../assets/img/Me.jpg";

import "./Banner.css";
import { Theme } from "@mui/material";
// import { borderRadius } from "@material-ui/system";

// const imageStyle = {
//   width: "100%"
// };

const styles = {
  button: {
    borderRadius: "50px",
    userSelect: "none",
    width: "150px",
    margin: "auto",
  },
  extendedIcon: (theme: Theme) => ({ marginRight: theme.spacing(1) }),
};

const Banner = () => {
  const bannerSubheader =
    "A Full-Stack Web Developer and Experienced IT Leader";

  const bannerDetal = (
    <Grid className="banner-detail">
      <p>
        I've been in technology for 17 years. I currently lead a team of five
        engineers on a greenfield project I started called Space-ACME.
        Space-ACME is a 3D rendered tool for training space domain awareness to
        our warfighters.
      </p>

      <p>
        In my previous career in IT I grew from support staff to the IT manager
        of a mid-sized company called PCS Ferguson. This involved ~25 servers,
        ~30 networks, and ~400 employees. My last IT job in 2017-2018 was the
        system administrator for Apergy Corporation overseeing hundreds of
        servers and networks across multiple countries.
      </p>
      {/* <p>
        I've always been curious about how things work. I've learned that this
        is my superpower. I'm able to understand complex systems extremely
        quickly, which allows me to solve bugs, learn techniques, and come up
        with solutions at lighting speed.
      </p> */}
      <p>
        When not writing code I am a competitive golfer, avid outdoorsman, and
        skier/snowboarder.
      </p>
    </Grid>
  );

  return (
    <Grid className="banner-container">
      <Parallax
        className="banner-img-wrapper desktop"
        translateX={[-80, 80]}
        // style={imageStyle}
      >
        <img className="banner-header-img" src={BannerImg} alt="Banner Img" />
      </Parallax>
      <Parallax className="banner-story desktop" translateX={[80, -80]}>
        <Grid className="banner-header">
          <img className="my-img" src={MyImg} alt="Me" />
          <h1>Joel Perez</h1>
        </Grid>
        <Grid className="banner-subheader">
          <p>{bannerSubheader}</p>
        </Grid>
        {bannerDetal}
        {/* <Button
          variant="outlined"
          color="primary"
          aria-label="contact"
          sx={styles.button}
          href="mailto:joel@joelperez.dev"
          startIcon={<EmailIcon />}
          size="large"
        >
          Contact Me
        </Button> */}
      </Parallax>
      <Grid className="mobile">
        <Grid className="banner-img-wrapper">
          <img className="banner-header-img" src={BannerImg} alt="Banner Img" />
        </Grid>
        <Grid className="banner-story">
          <Grid className="banner-header">
            <h1>Joel Perez</h1>
            <img className="my-img" src={MyImg} alt="Me" />
          </Grid>
          <Grid className="banner-subheader">
            <p>{bannerSubheader}</p>
          </Grid>
          {bannerDetal}
          {/* <Button
            variant="outlined"
            color="primary"
            aria-label="contact"
            sx={styles.button}
            href="#contact"
            startIcon={<EmailIcon />}
            size="large"
          >
            Contact Me
          </Button> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Banner;

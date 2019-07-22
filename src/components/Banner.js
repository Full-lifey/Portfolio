import React from 'react';

import BannerImg from '../assets/img/20180606_091700.jpg';

const Banner = () => {
  return (
    <div className='banner-container'>
      <img className='banner-header-img' src={BannerImg} alt='Slovakia Lake' />
      <div className='banner-story'>
        <div className='banner-header'>
          <h1>Joel Perez</h1>
        </div>
        <div className='banner-subheader'>
          <p>
            You think water moves fast? You should see ice. It moves like it has
            a mind. Like it knows it killed the world once and got a taste for
            murder.
          </p>
        </div>
        <p className='banner-detail'>
          Now that there is the Tec-9, a crappy spray gun from South Miami. This
          gun is advertised as the most popular gun in American crime. Do you
          believe that shit? It actually says that in the little book that comes
          with it: the most popular gun in American crime. Like they're actually
          proud of that shit.
        </p>
        <div className='banner-btn'>
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

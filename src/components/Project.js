import React from 'react';

function Project(props) {
  if (!props.project) {
    <h2>Loading Project</h2>;
  } else {
    <div className='project-container'>
      <img
        className='project-header-img'
        src={props.project.bannerImg}
        alt={props.project.title}
      />
      <div className='banner-story'>
        <div className='banner-header'>
          <h2>{props.project.title}</h2>
        </div>
        <p className='project-detail'>
          Now that there is the Tec-9, a crappy spray gun from South Miami. This
          gun is advertised as the most popular gun in American crime. Do you
          believe that shit? It actually says that in the little book that comes
          with it: the most popular gun in American crime. Like they're actually
          proud of that shit.
        </p>
        <div className='project-btn'>
          <button>Contact Me</button>
        </div>
      </div>
    </div>;
  }
}

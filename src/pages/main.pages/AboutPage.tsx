import React, { Fragment } from 'react';

const AboutPage = () => {
  return (
    <Fragment>
      <div className="about-page">
        <div className="about-page__wrapper">
          <div className="about-page__heading">
            I'm a UX & Interaction designer
            <br /> based in Jos, Nigeria.
          </div>
          <div className="about-page__content">
            As a User Experience/Interaction designer, I have a passion for creating
            intuitive and user-friendly digital experiences. I have a strong foundation in
            design principles and a keen eye for aesthetics, which allows me to create
            visually appealing designs that effectively communicate my clients' messages.
            I am proficient in industry-standard design tools such as Figma and Adobe
            Creative Suite, and I am always looking to learn and improve my skills. I am a
            fast learner and thrive in collaborative environments, and I am excited to
            bring my skills and creativity to new challenges and projects.
          </div>

          <div className="about-page__content mt-6">
            Ready to elevate your digital presence? Let's work together to create a
            visually stunning and user-friendly website or application. Contact me via{' '}
            <b>mail</b> or <b>LinkedIn</b> and see how my UI/UX design skills can take
            your project to the next level.
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { AboutPage as default };

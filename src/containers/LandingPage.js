import React from 'react';
import { Link }  from 'react-router-dom';
import styles from './LandingPage.css';
import logo from './nar_splash_clean.png';

const LandingPage = () => {

  return (
    <div name="landingPage" className={styles.Parallax}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>
      <section>
        <img src={logo} />
        <Link to={'/stories'}>Click To Get Started</Link>
        <div>
          <p>
          Narrative is a creative tool designed to help storytellers, story writers, screenwriters, novelists, and others keep track of their ideas! Whether you’re building new stories, developing characters, chapters, worlds, or locations, Narrative is a safe place to store your ideas and organize your thoughts.
          </p>
        </div>
      </section>
    </div>

  ); 
};

export default LandingPage;

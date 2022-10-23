import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

export default class Home extends React.Component {
  render = () => {
    return (
      <div id="home-container">
        <Link to="/ocean" id="start-button" />
        {/* <img
                    id="background"
                    src={`../assets/home.png`}
                    draggable={false}
                /> */}

        <div class="video-container">
          <video src="../assets/vid1.mp4" autoPlay muted loop class="vid1"></video>
        </div>

        <div id="center-container">
          <p id="center-title">
            Ocean Dive
          </p>

          <p id="center-subtitle">Deep, Dive and Discover</p>
        </div>

        <div id="start-text">
          <button id="button">
            <h2>Let's dive in</h2>
          </button>
        </div>
      </div>
    );
  };
}
// Click to Start
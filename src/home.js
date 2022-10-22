import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

export default class Home extends React.Component {
    render = () => {
        return (
            <div id="home-container">
                <Link to="/ocean" id="start-button" />
                <img
                    id="background"
                    src={`../assets/home.png`}
                    draggable={false}
                />
                <div id="center-container">
                    <p id="center-title">
                        Ocean <br />
                        Adventure
                    </p>
                    <p id="center-subtitle">95% remains unexplored ...</p>
                </div>
                <div id="start-text">Click to Start</div>
            </div>
        );
    };
}

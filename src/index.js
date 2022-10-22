import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./home.js";
import Ocean from "./ocean.js";
import "./main.scss";

class App extends React.Component {
    render = () => (
        <HashRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/ocean" element={<Ocean />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </HashRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

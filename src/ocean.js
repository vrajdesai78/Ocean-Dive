import React from "react";
import Particles from "react-tsparticles";
import Wave from "react-wavify";
import Creature from "./creature";
import "./ocean.scss";

const startColor = [25, 171, 222];

export default class Ocean extends React.Component {
  scrollRef = React.createRef();

  state = {
    scroll: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  getGradient = (percent) =>
    "rgb(" +
    [startColor.map((color) => color * Math.pow(1 - percent, 3))] +
    ")";

  onScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = Math.max((winScroll / height - 0.025) / 0.975, 0);

    if (Math.abs(this.state.scroll - scroll) > 0.01) {
      this.setState({ scroll });
    }
  };

  render = () => {
    let backgroundColor = this.getGradient(this.state.scroll);
    let lightOpacity = (1 - Math.pow(1 - this.state.scroll, 2)) * 0.7 + 0.3;
    return (
      <div className="ocean">
        <audio
          ref="audio_tag"
          src="../assets/sea waves sound effects.wav"
          loop
          volume="0.5"
          autoPlay
        />
        <p id="introduction" className="ocean-text">
          Deep Dive to explore the ocean! <br /> Touch the species to know more about it.
        </p>
        <div id="sunlight" className="ocean-text">
          <p className="ocean-header">The Sunlight Layer<br></br>(Upto 200m)</p>
          In the only layer that receives sunlight, photosynthesis by
          phytoplankton and algae provide an abundance of energy. Most of the
          life in the ocean lives here!
        </div>
        <div id="twilight" className="ocean-text">
          <p className="ocean-header">The Twilight Layer<br></br>(Upto 1000m)</p>
          <p>
            Organisms here must survive either by hunting in shallower waters or
            consuming particles which drift down from above. Due to the lack of
            light, many creatures develop bioluminescence!
          </p>
        </div>
        <div id="midnight" className="ocean-text">
          <p className="ocean-header">The Midnight Layer<br></br>(Upto 4000m) </p>
          <p>
            To adapt to the lack of light and nutrients, many organisms do not
            have eyes, have weak muscles, and/or metabolize slowly. Deep sea
            vents are one of the few sources of nutrients here.
          </p>
        </div>
        <div id="abyss" className="ocean-text">
          <p className="ocean-header">The Abyss Layer<br></br>(Upto 6000m) </p>
          <p>
            The sunlight cannot reach this layer at all so it is pitch-black and near freezing.
            Very few creatures live here but those that do are mainly transparent, blind
            invertebrates.
          </p>
        </div>
        <div id="trenches" className="ocean-text">
          <p className="ocean-header">The Trenches Layer<br></br>(Upto 11000m) </p>
          <p>
            The Trenches are narrow, underwater valleys of the ocean floor which have high
            pressure and near-freezing temperatures. There is no natural light in this zone
            but different creatures can be found, such as sea stars.
          </p>
        </div>

        <Creature
          name="coral_reef"
          x={50}
          y={1450}
          size={150}
          captionX={-160}
          captionY={-180}
        />
        <Creature
          name="dolphin"
          x={76}
          y={1600}
          size={300}
          captionX={-180}
          captionY={-200}
        />
        <Creature
          name="seaturtle"
          x={10}
          y={1550}
          size={180}
          captionX={-36}
          captionY={-225}
        />
        <Creature
          name="tuna"
          x={40}
          y={1750}
          size={160}
          captionX={-60}
          captionY={-150}
        />
        <Creature
          name="koi"
          x={65}
          y={1950}
          size={150}
          captionX={-85}
          captionY={-165}
        />
        <Creature
          name="tigershark"
          x={5}
          y={2050}
          size={180}
          captionX={0}
          captionY={-270}
        />
        <Creature
          name="octopus"
          x={40}
          y={2950}
          size={450}
          captionX={-450}
          captionY={16}
        />
        <Creature
          name="swordfish"
          x={20}
          y={3500}
          size={300}
          captionX={380}
          captionY={-90}
        />
        <Creature
          name="spermwhale"
          x={16}
          y={4050}
          size={450}
          captionX={175}
          captionY={-200}
        />
        <Creature
          name="jellyfish"
          x={20}
          y={5700}
          size={700}
          captionX={450}
          captionY={240}
        />
        <Creature
          name="anglerfish"
          x={50}
          y={6500}
          size={300}
          captionX={-300}
          captionY={-90}
        />
        <Creature
          name="squid"
          x={20}
          y={7650}
          size={350}
          captionX={-150}
          captionY={-135}
        />
        <Creature
          name="sea_star"
          x={25}
          y={9200}
          size={300}
          captionX={-300}
          captionY={-90}
        />
        <div id="wave-container">
          <div></div>
          <Wave
            id="wave"
            fill="url(#gradient)"
            options={{
              height: 40,
              amplitude: 30,
              speed: 0.15,
              points: 5,
            }}
          >
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#B8DDF0" />
                <stop offset="20%" stopColor="#7FCBEC" />
                <stop offset="40%" stopColor="#52BDE4" />
                <stop offset="60%" stopColor="#32B3E1" />
                <stop offset="80%" stopColor="#1FADDF" />
                <stop offset="100%" stopColor={backgroundColor} />
              </linearGradient>
            </defs>
          </Wave>
        </div>

        <Particles
          id="tsparticles"
          options={{
            background: {
              color: { value: "#333333" },
              opacity: 0,
            },
            particles: {
              number: {
                density: { enable: true, area: 3200 },
                value: 800,
              },
              color: { value: "#ffffff", opacity: 0 },
              shape: { type: "circle" },
              size: {
                anim: { random: true },
                value: 5,
                random: true,
              },
              opacity: {
                anim: { random: true },
                value: 0.3,
                random: true,
              },
              move: {
                enable: true,
                direction: "top",
                random: true,
                speed: 2,
              },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "bubble" },
              },
              detect_on: "window",
              modes: {
                bubble: {
                  distance: 200,
                  duration: 0,
                  opacity: lightOpacity,
                  size: 10,
                },
              },
            },
            fullScreen: {
              zIndex: 1,
            },
          }}
        />
        <div id="background" style={{ backgroundColor }}></div>
      </div>
    );
  };
}
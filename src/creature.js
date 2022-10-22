import React from "react";
import { data } from "./data";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "./creature.scss";

const styles = {
  bounce: {
    animation: "x 5s",
    animationName: Radium.keyframes(bounce, "bounce"),
  },
};

export default class Creature extends React.Component {
  state = {
    caption: false,
  };
  //   delay = setTimeout(), 5000);

  render = () => {
    const name = this.props.name;
    const left = this.props.x + "%";
    const top = this.props.y + "px";
    const height = this.props.size + "px";

    let caption = <></>;

    if (this.state.caption && !this.props.nocaption) {
      const creature = data[name];

      if (creature != undefined) {
        const text = creature.info
          .split("\n")
          .map((str) => <p key={str}>{str}</p>);
        const captionLeft = this.props.captionX + "px";
        const captionTop = this.props.captionY + "px";
        caption = (
          <div
            className="caption"
            style={{ top: captionTop, left: captionLeft }}
          >
            <span className="caption-name">{creature.name}</span>
            {text}
            <button className="button">Mint NFT</button>;
          </div>
        );
      }
    }

    console.log(this.state.caption);

    return (
      <div className="creature" style={{ top, left }}>
        {caption}
        <StyleRoot>
          <img
            src={`../assets/${name}.png `}
            height={height}
            style={styles.bounce}
            draggable={false}
            onMouseEnter={() => this.setState({ caption: true })}
            onMouseLeave={() =>
              setTimeout(() => {
                this.setState({ caption: false });
              }, 2000)
            }
          />
        </StyleRoot>
      </div>
    );
  };
}

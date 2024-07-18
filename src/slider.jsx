import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

class Slider extends React.Component {

  state = {
    textValue: 20,
  };
  

  onSlide = (render, handle, value, un,) => {
    this.setState({
      textValue: value[0].toFixed(2),
    });
  };

  render() {
    const {textValue} = this.state;

    return (
      <div>
        <Nouislider
          connect
          start={[20]}
          behaviour="tap"
          range={{
            min: [1],
            "50%": [25],
            max: [50]
          }}
          onSlide={this.onSlide}
        />
          <div>
            Value: {textValue}
          </div>
      </div>
    );
  }
}

export default Slider;
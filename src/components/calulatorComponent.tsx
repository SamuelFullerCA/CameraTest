import React from "react";
import "./calculatorComponent.css";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { useState } from "react";


// TypeScript interface for camera properties
interface CameraProps {
    familyName: string;
    model: string;
    fullWide_Width_Difference: number;
    fullWide_Height_Difference: number;
    fullZoom_Width_Difference: number;
    fullZoom_Height_Difference: number;
  }
  
// TypeScript interface for CameraCalculator props
interface CameraCalculatorProps {
    cameras: CameraProps[];
  }


  const CameraCalculator: React.FC<CameraCalculatorProps> = ({ cameras }) => {

      // Slider value useState defaulted to 20
      const [sliderValue, setSliderValue] = useState<number>(20);

  // Function to change useState from user inputted slider value
  const onSlide = (render: any, handle: number, value: number[], un: any) => {
    setSliderValue(parseFloat(value[0].toFixed(0)));
  };

  return (
    <section className="cameraCalculator">
      <div className="cameraCalculatorHeader">
      <h2 className="familyHeader text-center">
            {cameras[0]?.familyName} Distance Calculator
            </h2>
            <p className="text-center">
          Use this calculator to estimate the maximum subject image size that you will be able to achieve, based on the distance from the CAMERA to the SUBJECT.
        </p>
      </div>
      <div className="nouSlider">
        <Nouislider
         connect={[true, false]}
          start={[sliderValue]}
          behaviour="tap"
          range={{
            min: [0],
            '50%': [25],
            max: [50],
          }}
          pips={{
            mode: 'count',
            values: 2,
            density: 12
          }}
          onSlide={onSlide}
        />
      </div>
      <div className="sliderValueContainer text-center">
        <p>What is the distance from the camera to subject?</p>
        <div className="sliderValue">{sliderValue}</div>
      </div>
      <div className="cameraTables w-full text-center">
        <p>All distances in feet or meters</p>
        {/* Generates tables for each camera passed into the calculator */}
        {cameras.map((cam, i) => (
            <div key={i} className="cameraCard">
            <div>
              <h3>{cam.model}</h3>
            </div>
            <div className="tableStyle">
              <div>Width</div>
              <div>Height</div>
            </div>
            <div className="tableStyle">
              <div>
                {Math.round((cam.fullWide_Width_Difference * sliderValue) * 10) / 10}
                <span className="shortform">(w)</span>
              </div>
              <div>
                {Math.round((cam.fullWide_Height_Difference * sliderValue) * 10) / 10}
                <span className="shortform">(t)</span>
              </div>
            </div>
            <div className="tableStyle">
              <div>
                {Math.round((cam.fullZoom_Width_Difference * sliderValue) * 10) / 10}
                <span className="shortform">(w)</span>
              </div>
              <div>
                {Math.round((cam.fullZoom_Height_Difference * sliderValue) * 10) / 10}
                <span className="shortform">(t)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CameraCalculator;
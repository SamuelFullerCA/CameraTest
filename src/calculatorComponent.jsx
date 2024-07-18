import React from "react";
import "./CaluclatorComponent.css"
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { useState } from "react";



export default function CammeraCaluclator(props) {
    // Slider value useState defaulted to 20
    const [sliderValue, setSliderValue] = useState(20)
    // Function to change use state from user inputed slider value
    const onSlide = (render, handle, value, un,) => {
        setSliderValue(value[0].toFixed(0));
    };


    return (
        <section className="cameraCalculator">
            <div className="cameraCalculatorHeader">
                <h2 className="familyHeader">{props.cameras[0].family} Distance Calculator</h2>
                <p>Use this calculator to estimate the maximum subject image size that you will be able to achieve, based on the distance from the CAMERA to the SUBJECT.</p>
            </div>
            <div className="nouSlider">
                {/* I dont have the exact styling, but maybe can be coppied from the current nouslider? */}
                <Nouislider
                    connect
                    start={[20]}
                    behaviour="tap"
                    range={{
                        min: [1],
                        "50%": [25],
                        max: [50]
                    }}
                    onSlide={onSlide}
                />
            </div>
            <div className="sliderValueContainer">
                <p>What is the distance from the camera to subject?</p>
                <div className="sliderValue">
                    {sliderValue}
                </div>
            </div>


                    
            <div className="cameraTables">
            <p>all distances in feet or meters</p>
                {/* Generates tables for each camera passed into the calculator
                so 1 camera would make 1 table, and 2 cameras 2 tables..ect*/}
                {props.cameras?.map((cam, i) => (
                    <div className="cameraCard">
                        <div><h3>{cam.modelName}</h3></div>
                        <div className="tableStyle">
                            <div>Width</div>
                            <div>height</div>
                        </div>
                        <div className="tableStyle">
                            <div className="outsideText">-Wide- </div>
                            <div>{(cam.fullWide_Width_Difference * sliderValue).toFixed(1)}<span className="shortform">(w)</span></div>
                            <div>{(cam.fullWide_Height_Difference * sliderValue).toFixed(1)}<span className="shortform">(t)</span></div>
                        </div>
                        <div className="tableStyle">
                            <div className="outsideText">-Telephoto- </div>
                            <div>{(cam.fullZoom_Width_Difference * sliderValue).toFixed(1)}<span className="shortform">(w)</span></div>
                            <div>{(cam.fullZoom_Height_Difference * sliderValue).toFixed(1)}<span className="shortform">(t)</span></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
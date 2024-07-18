
import './App.css';
import CammeraCaluclator from './calculatorComponent';

function App() {


/* This would be the array passed into the CameraCamculator for the PTZ-IP product page.
Each camera inclues the family, wich should be identitcle for a multiple cameras on 1
Additionaly includes model and the multiplies which I did my best guess work as im not sure the 
actual numbers.
*/
const cameras = [
  {
    family: "PTZ-IP",
    modelName: "PTZ-IP 12x72",
    fullWide_Width_Difference: 1.4,
    fullWide_Height_Difference: .7875,
    fullZoom_Width_Difference: .1485,
    fullZoom_Height_Difference: .0838
  },
  {
    family: "PTZ-IP",
    modelName: "PTZ-IP 20x60",
    fullWide_Width_Difference: 1.178,
    fullWide_Height_Difference: .642,
    fullZoom_Width_Difference: .0698,
    fullZoom_Height_Difference: .0395
  }
];


  return (
    <div className="App">
      {/* Pass the array into the camculator as props */}
        <CammeraCaluclator cameras={cameras} ></CammeraCaluclator>
    </div>
  );
}

export default App;

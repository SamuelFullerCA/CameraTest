import './App.css';
import CammeraCaluclator from "./components/index"

const cameras = [
  {
    familyName: "PTZ-IP",
    model: "PTZ-IP 12x72",
    fullWide_Width_Difference: 1.4,
    fullWide_Height_Difference: .7875,
    fullZoom_Width_Difference: .1485,
    fullZoom_Height_Difference: .0838
  },
  {
    familyName: "PTZ-IP",
    model: "PTZ-IP 20x60",
    fullWide_Width_Difference: 1.178,
    fullWide_Height_Difference: .642,
    fullZoom_Width_Difference: .0698,
    fullZoom_Height_Difference: .0395
  },
];

function App() {
  return (
    <CammeraCaluclator cameras={cameras}></CammeraCaluclator>
  );
}

export default App;

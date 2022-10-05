import "./App.css";
import AssinmentMarks from "./components/AssinmentMarks/AssinmentMarks";
import Navbar from "./components/Navbar/Navbar";
import PhoneBar from "./components/PhoneBar/PhoneBar";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Pricing></Pricing>
      <AssinmentMarks></AssinmentMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;

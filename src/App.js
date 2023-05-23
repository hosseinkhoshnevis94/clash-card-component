import "./App.css";
import Slider from "./components/Slider/Slider";
import { data } from "./db.js";
function App() {
  return (
    <div className="App">
      <Slider data={data}></Slider>
    </div>
  );
}

export default App;

import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Header />
      <div className="page">
        <Slider />
        <Benefits />
      </div>
    </>
  );
}

export default App;

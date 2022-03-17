import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Header from './components/Header';
import Slider from './components/Slider';

function App() {
  return (
    <>
      <Header />
      <div className='page'>
        <Slider />
        <Benefits />
      </div>
      <Footer />
    </>
  );
}

export default App;

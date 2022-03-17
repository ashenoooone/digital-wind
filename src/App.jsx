import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Header from './components/Header';
import Reviews from './components/Reviews';

function App() {
  return (
    <>
      <Header />
      <div className='page'>
        <Benefits />
        <Reviews />
      </div>
      <Footer />
    </>
  );
}

export default App;

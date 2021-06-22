import './App.css';
import iconLux from './icons/icon-luxury.svg';
import iconSedans from './icons/icon-sedans.svg';
import iconSuvs from './icons/icon-suvs.svg';

function App() {
  return (
    <div className="App">
      <div className="card-component">
        <div className="c1">
          
            <img className="icon" src={iconSedans} alt="Sedans Symbol" />
            <h1 className="header">SEDANS</h1>  
            <p className="card-text">
              Choose a sedan for its affordability and excellent 
              fuel economy. Ideal for cruising in the city or on 
              your next road trip.
            </p>
            <a href="#" className="lm-button">Learn More</a>
        </div>
        <div className="c2">
          <img className="icon" src={iconSuvs} alt="SUV Symbol"/>
          <h1 className="header">SUVS</h1>
          <p className="card-text">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <a href="#" className="lm-button">Learn More</a>
        </div>
        <div className="c3">
          <img className="icon" src={iconLux} alt="Luxury car Symbol" />
          <h1 className="header">LUXURY</h1>
          <p className="card-text">
            Cruise in the best car brands without the bloated prices.
            Enjoy the enhanced comfort of a luxury rental and arrive in style.
          </p>
          <a href="#" className="lm-button lm-button-3">Learn More</a>
        </div>
      </div>
    </div>
  );

}

export default App;

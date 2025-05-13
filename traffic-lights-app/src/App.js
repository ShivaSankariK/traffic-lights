import TrafficLights from './TrafficLights';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Traffic signal</h1>
      <div className="wrapper">
        <TrafficLights />
        <div className='traffic-stand'/>
      </div>
    </div>
  );
}

export default App;

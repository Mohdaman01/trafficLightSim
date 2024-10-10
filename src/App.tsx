import React, { useEffect, useState } from 'react';
import TrafficLight from './TrafficLight';
import './App.css';

const App: React.FC = () => {
  const [activeLightIndex, setActiveLightIndex] = useState(0); // Track the active light by index
  const [lightStates, setLightStates] = useState(['red', 'red', 'red', 'red']); // Initial state is all red
  const [greenDurations, setGreenDurations] = useState([5, 5, 5, 5]); // Green durations for north, south, east, west
  const yellowDuration = 1; // Fixed yellow duration for all lights
  const roads = ['North', 'South', 'East', 'West']; // Road names

  // Cycle through the active light
  const cycleTrafficLights = () => {
    setActiveLightIndex((prevIndex) => (prevIndex + 1) % roads.length); // Move to the next light
  };

  useEffect(() => {
    let timer: number;

    const startTrafficCycle = () => {
      // Set the active light to green
      setLightStates((prev) => {
        const newStates = [...prev];
        newStates[activeLightIndex] = 'green'; // Active light is green
        return newStates;
      });

      // Set a timer to switch the active light to yellow after the green duration
      timer = setTimeout(() => {
        setLightStates((prev) => {
          const newStates = [...prev];
          newStates[activeLightIndex] = 'yellow'; // Set the active light to yellow
          return newStates;
        });

        // Set another timer to switch to red and move to the next light
        timer = setTimeout(() => {
          setLightStates((prev) => {
            const newStates = [...prev];
            newStates[activeLightIndex] = 'red'; // Set the active light to red
            return newStates;
          });

          // Move to the next light
          cycleTrafficLights();
        }, yellowDuration * 1000); // Wait for yellow duration before switching to red
      }, greenDurations[activeLightIndex] * 1000); // Wait for green duration before switching to yellow
    };

    startTrafficCycle();

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [activeLightIndex, greenDurations]);

  // Handle changes to the green light duration
  const handleGreenChange = (index: number, duration: number) => {
    setGreenDurations((prev) => {
      const newDurations = [...prev];
      newDurations[index] = duration; // Update the specific road's duration
      return newDurations;
    });
  };

  return (
    <>
      <h1>Traffic Light System Simulation</h1>
    <div className='junction'>
      <div className="north">
        <TrafficLight road="North" currentLight={lightStates[0] as 'green' | 'yellow' | 'red'} />
      </div>
      <div className="south">
        <TrafficLight road="South" currentLight={lightStates[1] as 'green' | 'yellow' | 'red'} />
      </div>
      <div className="east">
        <TrafficLight road="East" currentLight={lightStates[2] as 'green' | 'yellow' | 'red'} />
      </div>
      <div className="west">
        <TrafficLight road="West" currentLight={lightStates[3] as 'green' | 'yellow' | 'red'} />
      </div>
      <div className='controls'>
        {roads.map((road, index) => (
          <div key={road}>
            <label>
              {road} Green Light Duration (seconds):
              <input
                type="number"
                value={greenDurations[index]}
                onChange={(e) => handleGreenChange(index, Number(e.target.value))}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default App;



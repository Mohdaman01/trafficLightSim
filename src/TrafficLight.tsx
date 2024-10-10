import React from 'react';

interface TrafficLightProps {
  road: string;
  currentLight: 'green' | 'yellow' | 'red'; // Current light state
}

const TrafficLight: React.FC<TrafficLightProps> = ({ road, currentLight }) => {
  return (
    <div>
      <h3>{road}</h3>
      <div
        style={{
          backgroundColor: currentLight, // Dynamically set based on the current light state
          transition: 'background-color 0.5s ease',
        }}
        className='traffic-light'
      />
    </div>
  );
};

export default TrafficLight;



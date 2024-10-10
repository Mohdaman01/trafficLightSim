# Traffic Light Simulation

This project simulates a traffic light system at a four-way junction, where each traffic light (North, South, East, and West) follows a specific light sequence (green, yellow, and red). The simulation allows users to configure the duration of the green light for each direction, with the yellow light having a fixed duration of 1 second. The red light's duration is automatically adjusted based on the other light states.

## Features

- Traffic Light Control: The simulation manages traffic light - states (green, yellow, red) for each direction (North, South, East, West).
- User Configuration: Users can customize the green light duration for each road.
- Automatic Red Light Calculation: The red light duration is dynamically calculated to ensure only one light is green or yellow at a time.
- Visual Representation: The traffic light system is visually represented using colored divs for each light state (green, yellow, red).
- Responsive Design: The UI is responsive and works on both desktop and mobile devices.
- Accessibility: The application ensures keyboard navigability and proper ARIA roles for accessibility.

## Technologies Used

- React.js: A JavaScript library for building user interfaces and managing the application state.
- TypeScript: Used for type safety, ensuring code reliability and maintainability.
- CSS Grid & Flexbox: Used for layout and positioning the traffic lights based on the cardinal directions.
- HTML/CSS: For the structure and styling of the application.

## Key Components

- TrafficLight.tsx: A reusable component that visually represents the state of a traffic light (green, yellow, or red).
- App.tsx: The main component responsible for managing the traffic light state, controlling the timing sequence, and handling user input for configuring green light durations.

## Setup Instructions

### Prerequisites
Ensure you have the following installed:

- [Node.js](https://nodejs.org/en) (Version 12 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager) or [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) for dependency management

### Installation

1. Clone the repository: 

```bash
git clone https://github.com/your-username/traffic-light-simulation.git
```

2. Navigate to the project directory:

```bash 
cd traffic-light-simulation
```

3. Install the dependencies:

    If you're using npm:

```bash 
npm install
```

    Or if you're using yarn:

```bash
yarn install
```

4. Run the application:

    Start the development server:

```bash
npm start
```

  This will open the application in your default browser at [http://localhost:5173](http://localhost:5173/).

### Build the application for production:

To create a production-ready build of the application, run:

```bash 
npm run build
```

## Traffic Light Timing Logic

Each traffic light follows a sequence: Green -> Yellow -> Red. This sequence ensures that only one light can be green or yellow at a time, managing traffic flow efficiently.

### Timing Breakdown

- Green Light: The duration of the green light is user-configurable for each direction (North, South, East, West).
- Yellow Light: The yellow light has a fixed duration of 1 second for all directions.
- Red Light: The red light's duration is dynamically calculated based on the green and yellow durations of the other lights. For instance, if the green light duration for the North direction is set to 5 seconds, then the red light for the same direction will last as long as the combined duration of the green and yellow phases of the other three directions.

### Timing Flow

1. Green Light: When a light turns green, it remains green for the duration specified by the user. By default, this is 5 seconds.

2. Yellow Light: Once the green light expires, the yellow light comes on for 1 second.

3. Red Light: After the yellow light phase, the light turns red. The red light will remain active while the other three directions cycle through their green and yellow phases.

### Light State Example

If the North light is green for 5 seconds:

- North light sequence: Green(5s) -> Yellow(1s) -> Red(until the others complete their green and yellow cycles)
- During this time, all other lights will be red, and only one light at a time will change from green to yellow to red.

### State Management

- The traffic lights are managed using a ```useState``` hook to store the current light state(green, yellow, red).
- A ```setTimeout``` function is used to handle the transition between light phases. Once a light turns green, it schedules a timeout for the yellow light light, followed by a timeout for the red light, ensuring smooth transitons.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

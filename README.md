# Power Balance

A small browser game about keeping electricity generation and demand balanced. Adjust generation, maintain grid stability, and survive for as long as possible.

This is my first web development project under Chani Builds. I am building it step by step while learning HTML, JavaScript, CSS, and Git.

## Current Status

The core gameplay and responsive interface are implemented. Public deployment and testing on a physical mobile device are the next steps.

## Features

- Adjust generation by ±1 MW or ±10 MW.
- Random demand changes approximately every 3 seconds.
- Display generation, demand, and their balance.
- Track grid stability, survival time, and score.
- Stop gameplay when stability reaches zero.
- Restart with reset values and fresh timers.
- Prevent generation and demand from falling below zero.

## How to Play

Use the generation controls to keep generation close to demand.

```text
Balance = Generation − Demand
```

- A positive balance means generation exceeds demand.
- A negative balance means generation is below demand.
- Every game tick, an imbalance of 5 MW or less earns 10 points.
- An imbalance greater than 5 MW reduces stability by 1 percentage point.
- Stability starts at 100%. Reaching 0% ends the game.
- Select Restart to begin a new game.

A game tick runs approximately once per second. The displayed time counts these ticks; it is not a precise measurement of real elapsed time.

This game uses simplified rules and is not a physical power-grid simulator.

## How to Run

No package installation or build step is required for the current version.

1. Clone this repository or download and extract its ZIP archive.
2. Keep `index.html` and `script.js` in the same folder.
3. Open `index.html` in a modern browser such as Chrome or Edge.

The game starts automatically. Refreshing the page also resets it.

## Project Structure

```text
power-balance/
├── index.html   # Page structure and controls
├── style.css    # Styling and responsive layouts
├── script.js    # Game state, rules, events, and timers
└── README.md    # Project overview and instructions
```

## Technology

- HTML for page structure
- Vanilla JavaScript for gameplay and interaction
- Git and GitHub for version control
- CSS for styling and responsive layouts

## Next Steps

- Add CSS styling and responsive layouts.
- Make controls and game rules easy to understand.
- Playtest and adjust difficulty.
- Verify gameplay on desktop and mobile browsers.
- Deploy a publicly playable version.
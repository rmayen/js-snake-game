# Snake Game

A classic Snake game built with vanilla JavaScript and HTML5 Canvas. The snake moves around the board, eats food to grow longer, and the player controls direction using arrow keys.

## Overview

This is a browser-based implementation of the classic Snake arcade game. The game renders on an HTML5 Canvas element and uses JavaScript for game logic including snake movement, collision detection with food, and dynamic food placement. The game runs on a simple interval-based game loop.

## Purpose

Built as a personal project to practice JavaScript fundamentals, HTML5 Canvas rendering, and game development concepts like game loops, user input handling, and real-time state management.

## Technologies Used

- **JavaScript** - Game logic, input handling, and rendering
- **HTML5 Canvas** - 2D game rendering
- **CSS** - Basic page styling

## Features

- **Arrow key controls** - Move the snake in four directions using the keyboard
- **Food collection** - Snake grows longer each time it eats the randomly placed food
- **Dynamic food spawning** - New food appears at a random position after each collection
- **Smooth animation** - Game updates at a consistent 200ms interval for fluid movement
- **Grid-based movement** - Snake moves on a clean 20px grid system

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/rmayen/BasicSnakeGame.git
   cd BasicSnakeGame/snakeGame
   ```
2. Open `index.html.html` in any modern web browser.

That's it! No build tools, dependencies, or server required.

## Controls

| Key | Action |
|-----|--------|
| Arrow Up | Move up |
| Arrow Down | Move down |
| Arrow Left | Move left |
| Arrow Right | Move right |

## Project Structure

```
BasicSnakeGame/
└── snakeGame/
    ├── index.html.html   # Game page with canvas element
    └── script.js         # Game logic (snake, food, movement, rendering)
```

## My Role

I built this game from scratch as a personal project. I implemented the canvas rendering, snake movement and growth mechanics, food spawning logic, and keyboard input handling.

## Lessons Learned

- Gained hands-on experience with HTML5 Canvas for 2D rendering
- Learned to implement a game loop using `setInterval` for consistent frame updates
- Practiced event-driven programming with keyboard event listeners
- Understood grid-based movement systems commonly used in classic arcade games

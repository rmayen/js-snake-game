# Snake Game

A classic Snake game built with vanilla JavaScript and HTML5 Canvas featuring score tracking, high score persistence, wall and self-collision detection, game over screen, and restart functionality.

## Overview

This is a browser-based implementation of the classic Snake arcade game. The game renders on an HTML5 Canvas element with a grid overlay and uses JavaScript for game logic including snake movement, collision detection, scoring, and dynamic food placement. The game features a polished dark-themed UI with score tracking that persists across sessions using localStorage.

## Purpose

Built as a personal project to practice JavaScript fundamentals, HTML5 Canvas rendering, browser storage APIs, and game development concepts like game loops, collision detection, state management, and user input handling.

## Technologies Used

- **JavaScript** - Game logic, input handling, and rendering
- **HTML5 Canvas** - 2D game rendering
- **CSS** - Basic page styling

## Features

- **Arrow key controls** - Move the snake in four directions (with reverse-direction prevention)
- **Score tracking** - Earn 10 points per food collected, displayed in real time
- **High score persistence** - Best score saved to localStorage across browser sessions
- **Wall collision** - Game ends when the snake hits the canvas boundary
- **Self collision** - Game ends when the snake runs into its own body
- **Game over screen** - Overlay displaying final score with restart prompt
- **Restart with Space** - Quick restart without refreshing the page
- **Visual polish** - Dark theme, grid overlay, distinct head/body colors, circular food
- **Smart food placement** - Food never spawns on the snake's body
- **Smooth animation** - Game updates at 150ms intervals for responsive gameplay

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/rmayen/snake-game.git
   cd snake-game/snakeGame
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
| Space | Restart game after game over |

## Project Structure

```
snake-game/
└── snakeGame/
    ├── index.html.html   # Game page with canvas, scoreboard, and dark-themed UI
    └── script.js         # Game logic (snake, food, collision, scoring, high score)
```

## My Role

I built this game from scratch as a personal project. I implemented the canvas rendering, snake movement and growth mechanics, wall and self-collision detection, scoring system with localStorage persistence, game over/restart flow, and a polished dark-themed UI.

## Lessons Learned

- Gained hands-on experience with HTML5 Canvas for 2D rendering and grid-based drawing
- Learned to implement a game loop with proper state management (running, game over, restart)
- Practiced using localStorage for persistent data across browser sessions
- Understood collision detection algorithms for both boundary and self-intersection checks
- Practiced event-driven programming with keyboard event listeners

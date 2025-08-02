# Simple Pong Game

A classic Pong game implementation using HTML5 Canvas and JavaScript. This is a browser-based recreation of the iconic 1972 arcade game featuring smooth gameplay and responsive controls.

## Features

- **Classic Pong Gameplay**: Player vs AI with traditional paddle mechanics
- **Mouse Controls**: Move your paddle by moving the mouse cursor
- **Smart AI**: Computer opponent with responsive movement
- **Real-time Scoring**: Keep track of wins for both player and AI
- **Smooth Animation**: 60 FPS gameplay using requestAnimationFrame
- **Responsive Ball Physics**: Ball speed and direction change based on paddle hit position

## How to Play

1. Open `index.html` in your web browser
2. Move your mouse up and down to control the left paddle (green)
3. Try to hit the ball past the AI paddle (red) to score points
4. The AI will try to block your shots and score against you
5. Game continues indefinitely - see how high you can score!

## Controls

- **Mouse Movement**: Control the left paddle (player)
- The AI automatically controls the right paddle

## Game Mechanics

- **Ball Physics**: The ball bounces off the top and bottom walls
- **Paddle Collision**: Ball direction changes when hitting paddles
- **Scoring**: Points are awarded when the ball passes a paddle
- **AI Behavior**: Computer paddle follows the ball with slight delay for fair gameplay

## Technical Details

- **Canvas Size**: 800x500 pixels
- **Ball Speed**: 6 pixels per frame
- **Paddle Size**: 16x100 pixels
- **Built with**: Vanilla JavaScript, HTML5 Canvas, CSS3

## Files Structure

```
pong_game/
├── index.html      # Main HTML file
├── game.js         # Game logic and rendering
├── style.css       # Styling and layout
├── README.md       # This file
└── LICENSE         # MIT License
```

## Installation & Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/bhaskar-kuruvangattil-rejis/pong_game.git
   ```

2. Navigate to the project directory:
   ```bash
   cd pong_game
   ```

3. Open `index.html` in your preferred web browser:
   ```bash
   open index.html
   ```
   Or simply double-click the `index.html` file.

## Browser Compatibility

This game works in all modern browsers that support:
- HTML5 Canvas
- JavaScript ES6+
- CSS3

Tested on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

Feel free to fork this project and submit pull requests for any improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)  
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by the original Pong game created by Allan Alcorn at Atari (1972)
- Built as a learning project to demonstrate HTML5 Canvas and JavaScript game development

---

**Enjoy the game!** 🏓

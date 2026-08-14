# Guessing Game

A simple browser-based number guessing game built with HTML, CSS, and JavaScript.

## How it works

- Set a maximum number and start the game.
- The game chooses a random number between 1 and the chosen maximum.
- Enter guesses and get feedback:
  - "Too small — try a higher number."
  - "Too large — try a lower number."
  - "Correct!" when the guess matches.
- Track the number of attempts.
- Use "Give Up" to reveal the number or "Reset" to start over.

## Files

- `index.html` — main user-facing game page.
- `app_ui.js` — game logic and UI behavior.
- `style.css` — visual design and responsive layout.
- `app.js` — original prompt-based JavaScript version (not used by the UI).

## Run locally

1. Open `index.html` in any modern web browser.
2. Enter a maximum number.
3. Start guessing!

## Notes

- No build step is required.
- Works entirely in the browser.

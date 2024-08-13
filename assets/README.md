# About
### Enjoy this Cute Tamagachi and try to keep your companion alive as long as possible.

# Variables
### Reset Button
### Sleep Button
### Feed Button
### Play Button
### Score
### Level meter
# Functionality
### IF the user clickes the indiviual buttons to maintain zero on the level, THEN the tamagotchi stays alive, ELSE IF any one of the tamagatchi stats reaches above or equal to ten, THEN the tamagatchi dies and they lose the game.

# Functions Used
### - getRandomInt
### - checkGameOver
### - updateStates
### - runGame
### - render
### - init
# Pseudo Code
### As the user I want to be able to play the game
#### -create interface and attach it function init and call it with window.onload
### As a User I want to click the buttons required to keep my Tomagatchi alive.
#### -Use function btnclick to select a button and add that numerical response to the getRandomInt function then show it on the updatedStates function
### As a user I want to be able to play again when I lose.
#### - Use function resetBtn and render funtion to reset the game and start with a fresh temeplate of the game.
 
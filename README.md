# Project1
1st GA project

For my first GA project I want to make a pac-man style game where the player has to run around a maze style board and collect tokens. I want to style it to look almost like Link from Legend of Zelda running around in the forest, and to add some difficulty I want to make the lines of the board less defined so you are running around in the forest without knowing where you can and cant walk.
To make this work I imagine that I would need to make a very large grid with each tile numbered and tell the character that it can only move if the letter matches or if the number matches. and remove the barries from this list of movement options. All the available areas of movement will have a token on them, and when the character moves over them +1 will be added to a list, and the space will be updated and removed from the token list.

  1  2  3  4  5  6  7  8  9  10
a a1 a2 ..
b b1 b2 ..
c c1 c2 ..
d d1 d2 ..
e e1 e2 ..
g g1 g2 ..


The player would be playing against the clock (and stretch goal, ai's)

I plan on using HTML, CSS with Grid, and JavaScript, and Tailwind for styling (maybe)

MVP:
A maze game where the player needs to collect all tokens before the timer runs out to win the level with basic styling.

Stretch Goals:
AI enemies (that can move through obstacles?)
Powerups
multiple levels, that get harder.
Randomized levels
styling for blurred lines of movement
High scores
waves of fog moving across board to blur vision


Roadblocks:

Figuring out how to get character to move.
How to get AI's to behave, follow, or move randomly, to keep them from getting stuck or making the game unwinable
CSS
Keeping tokens from being collected twice/logging the spaces moved 
How to keep high scores up locally





![gametitlescreen](https://user-images.githubusercontent.com/63885329/118312782-bc339500-b4a6-11eb-8e12-1c7eff67f7a6.jpg)

The enemies will move slowly and most will probably move in random directions, with one actively following.
Will probably have less enemies per level.
![gameMapWithEnemies](https://user-images.githubusercontent.com/63885329/118312788-be95ef00-b4a6-11eb-893c-395aea915bbb.jpg)


Here is what the board will look like, with better looking tokens and filling all movement board spots
![BasicGameMap](https://user-images.githubusercontent.com/63885329/118312793-bfc71c00-b4a6-11eb-868d-39a8cfe94c33.jpg)




















"use strict";
function move(direction, distance) {
    // Move the specified distance in the given direction
}
move('up', 10);
move('left', 5);
move(
// @ts-expect-error - "up-right" is not a valid direction
// Unused '@ts-expect-error' directive.
'up-right', 10);
move(
// @ts-expect-error - "down-left" is not a valid direction
// Unused '@ts-expect-error' directive.
'down-left', 20);

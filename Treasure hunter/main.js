/*
Scenario: You're on a small island and there's a treasure hidden somewhere on the island. Your job is to move around the island to find the treasure.
Island setup: 1D array of 5 elements
one of the elements is a hidden treasure(T) and (-) for the emply slots.
*/


/* Total moves on the island */
const island= ['-','T','-','T','-'];
const totalMoves = island.length;

console.log(`The total moves on the island is ${totalMoves}`)



console.log('____________________');
/* Log out if a treasure is found or not */
for (let move= 0; move < island.length; move++){
    if (island[move]=== 'T'){
        console.log(`Treasure found on move ${move + 1} :)`)
    } else {
        console.log(`No treasure found :(`)}}




console.log('____________________');
/* Log out total numbers of treasures on the island */
let treasureCount = 0;

for (let move = 0; move < island.length; move++) {
    if (island[move] === 'T') {
        treasureCount++;
    }
}

console.log(`There were ${treasureCount} treasures on the island.`);


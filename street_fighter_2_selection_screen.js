// You'll have to simulate SF2's video game's character selection screen behaviour, more specifically the selection grid. The list of game characters is in a 2x6 grid, the initial position of the selection cursor is in the top-left (0,0), given a list of moves of the selection cursor (which are up, down, left, right) return the list of characters who have been hovered by the selection cursor after all the moves.

// So we'll be taking in an array of strings, which are up, down, left, right. The fighter grid is always the same?
// We'll be returning an array of strings, the names of fighters that the selection hovered over. Can I print to the console?
// For example, ['up', 'left', 'right', 'left', 'left'] would return ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
//    ['right', 'down', 'left', 'left', 'left', 'left', 'right'] would return ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']
// So first I'm going to flatten the fighters array, I think that will make things a bit easier. Then I'll set up a for loop and switch / case statements. I'll need quite a few statements for this I think, so might not be pretty

const streetFighterSelection = function(fighters, position, moves) {
    const flatFighters = fighters.flat();
    let selection = [];
    let selector = position[1];
        if (position[0])
            selector += 6;

    for (let move of moves) {

        if (move == 'down') {
            if (selector > 5)
                selection.push(flatFighters[selector]);
            else if (selector < 6) 
                selector += 6
                selection.push(flatFighters[selector]);
        };

        if (move == 'up') {
            if (selector < 6) 
                selection.push(flatFighters[selector]);
            else if (selector > 5) 
                selector -= 6
                selection.push(flatFighters[selector]);
        };

        if (move == 'right') {
            if (selector == 5 || selector == 11) {
                selector -= 5
                selection.push(flatFighters[selector]);}
            else 
                selector += 1
                selection.push(flatFighters[selector]);
        };
        
        if (move == 'left') {
            if (selector == 0 || selector == 6) {
                selector += 5
                selection.push(flatFighters[selector]);}
            else
                selector -= 1
                selection.push(flatFighters[selector])
            }
        }

    return selection;
}
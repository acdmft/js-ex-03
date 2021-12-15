var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

let Tx = initialTx;
let Ty = initialTy;

function chooseDir(Lx,Tx, Ly, Ty) {
    let DirHor = "";
    let DirVer = "";

    if (Lx > Tx) {
        DirHor = "E";
    } else if (Lx < Tx) {
        DirHor = "W";
    } else {
        DirHor = "";
    };
    if (Ly > Ty) {
        DirVer = "S";
    } else if (Ly < Ty) {
        DirVer = "N";
    } else {
        DirVer = "";
    }
    return DirVer + DirHor;
}

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    let Dir = chooseDir(lightX, Tx, lightY, Ty);

    switch (Dir) {
        case "N":
        case "NE":
        case "NW":
            Ty -= 1;
        case "S":
        case "SW":
        case "SE":
            Ty += 1;
        case "W":
        case "NW":
        case "SW":
            Tx -= 1;
        case "E":
        case "SE":
        case "NE":
            Tx += 1;
        default:
            console.log(Dir);
    }
    // A single line providing the move to be made: N NE E SE S SW W or NW
}
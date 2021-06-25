export const Elevator = () =>  {
  return "Elevator";
}


// class Elevator {

//     level : number;

//     Elevator() {

//     }
// }

// interface Elevator {
//     level: Number;
// }


const currentFloor = 2;
const isMoving = false;
const isDoorOpen = false;

function goToFirstLobby({currentLevel, levelToMoveTo}: goUpProps) {
    // need to check if elevator is in motion

    // update level as isMoving = true

    // check if currentLevel = levelToMoveTo
    // if true
        // set isMoving false
        // set door open to true

    // if false
        // set currentLevel to new level 
        // isMoving should be true    
}
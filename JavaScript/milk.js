/* Calculate no. of bottles of milk 
Each bottle costs $1.5 */

function getMilk(money) {
  let costPerBottle = 1.5;
  let noOfBottles = Math.floor(money / costPerBottle);

  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  console.log(
    "For $" + money + ", you get " + noOfBottles + " bottles of milk.",
  );
}

getMilk(5);

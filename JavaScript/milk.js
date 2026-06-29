/* Calculate no. of bottles of milk 
Each bottle costs $1.5 */

function getMilk(money) {
  let cost = 1.5;
  let bottles = Math.floor(money / cost);

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
  console.log("For $" + money + ", you get " + bottles + " bottles of milk.");
}

getMilk(45);

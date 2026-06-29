function lifeInWeeks(age) {
  // Assumptions made
  let weeksInYear = 52;
  let daysInYear = 365;
  let monthsInYear = 12;
  let lifeExpectancy = 90;

  // Years remaining
  let yearsLeft = lifeExpectancy - age;

  // Weeks remaining
  let weeksLeft = yearsLeft * weeksInYear;

  // Days remaining
  let daysLeft = yearsLeft * daysInYear;

  // Months remaining
  let monthsLeft = yearsLeft * monthsInYear;

  // Output - You have x days, y weeks, and z months left.
  console.log(
    "You have " +
      daysLeft +
      " days, " +
      weeksLeft +
      " weeks, and " +
      monthsLeft +
      " months left.",
  );
}

lifeInWeeks(25);

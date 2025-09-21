function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log("Is Leap year");
      }
      else {
        console.log("Not leap year");
      }
    } else {
      console.log("Is Leap year");
    }
  } else {
    console.log ("Not leap year");
  }
}

isLeap(1989);

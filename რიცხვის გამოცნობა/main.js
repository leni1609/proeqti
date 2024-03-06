while (true) {
  // debugger;
  let numattemps = Number(prompt(`რიცხვის გამოცნობის მცდელობების რაოდენობა`));
  while (isNaN(numattemps) || numattemps <= 0) {
    numattemps = 10;
  }
  let randomNum = Math.floor(Math.random() * 1000);
  console.log(`ცდების რაოდენობა - ${numattemps}`);
  let i;
  for (i = 0; i < numattemps; i++) {
    let guess = Number(prompt(`სწორი რიცხვის შემოყვანის მცდელობა`));

    if (guess < randomNum) {
      console.log(`${guess} - სწორი რიცხვი უფრო მაღალია`);
    } else if (guess > randomNum) {
      console.log(`${guess} - სწორი რიცხვი უფრო დაბალია`);
    } else if (guess === randomNum) {
      console.log(`${guess} - სწორი რიცხვი გამოცნობილია`);
      break;
    } else {
      console.log(`${guess} - შეიყვანე სწორი რიცხვი`);
    }
  }
  if (i === numattemps) {
    console.log(
      `სამწუხაროდ ცდების რაოდენობა ამოწურულია, სწორი რიცხვი იყო ${randomNum}`
    );
  }

  if (confirm(`დავასრულოთ ?`)) {
    break;
  }
}

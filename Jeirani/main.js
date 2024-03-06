while (true) {
  let player1 = prompt(`Player 1 chooses: Scissors, Rock, Paper`);

  while (player1 !== `Scissors` && player1 !== `Rock` && player1 !== `Paper`) {
    alert(`არასწორია შეიყვანეთ თავიდან`);
    player1 = prompt(`Player 1 chooses: Scissors, Rock, Paper`);
  }

  let player2 = prompt(`Player 2 chooses: Scissors, Rock, Paper`);
  while (player2 !== `Scissors` && player2 !== `Rock` && player2 !== `Paper`) {
    alert(`არასწორია შეიყვანეთ თავიდან`);
    player2 = prompt(`Player 1 chooses: Scissors, Rock, Paper`);
  }

  if (player1 === "Scissors" && player2 === "Rock") {
    console.log("winner player 2");
  } else if (player1 === "Scissors" && player2 === "Paper") {
    console.log("winner player 1");
  } else if (player1 === player2) {
    console.log("A draw");
  } else if (player1 === "Rock" && player2 === "Scissors") {
    console.log("winner player 1");
  } else if (player1 === "Rock" && player2 === "Paper") {
    console.log("winner player 2");
  } else if (player1 === "Paper" && player2 === "Scissors") {
    console.log("winner player 2");
  } else if (player1 === "Paper" && player2 === "Rock") {
    console.log("winner player 1");
  }

  if (confirm(`დავასრულოთ ?`)) {
    break;
  }
}

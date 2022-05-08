//v1.1
const startGame = function (secretNumber) {
  alert(WELCOME);
  let countAttempt = 0;
  while (true) {
    let userNumber = prompt(USER_INPUT);
    countAttempt++;
    if (secretNumber > userNumber) {
      alert(HIGHER_NUMBER);
    } else if (secretNumber < userNumber) {
      alert(LESS_NUMBER);
    } else {
      alert(VICTORY);
      alert(COUNT_ATTEPMT + countAttempt);
      break;
    }
  }
}
startGame(SECRET_NUMBER);

//v1.2
// const startGame = function (secretNumber) {
//   alert(WELCOME);
//   let countAttempt = 0;
//   let userNumber;
//   while (userNumber !== secretNumber) {
//     userNumber = Number(prompt(USER_INPUT));
//     countAttempt++;
//     if (secretNumber > userNumber) {
//       alert(HIGHER_NUMBER);
//     } else if (secretNumber < userNumber) {
//       alert(LESS_NUMBER);
//     } else {
//       alert(VICTORY);
//       alert(COUNT_ATTEPMT + countAttempt);
//     }
//   }
// }
// startGame(SECRET_NUMBER);

//v1.3
// const startGame = function (secretNumber) {
//   alert(WELCOME);
//   let countAttempt = 0;
//   let userNumber;
//   do {
//     userNumber = Number(prompt(USER_INPUT));
//     countAttempt++;
//     if (secretNumber > userNumber) {
//       alert(HIGHER_NUMBER);
//     } else if (secretNumber < userNumber) {
//       alert(LESS_NUMBER);
//     } else {
//       alert(VICTORY);
//       alert(COUNT_ATTEPMT + countAttempt);
//     }
//   } while (userNumber !== secretNumber);
// }
// startGame(SECRET_NUMBER);






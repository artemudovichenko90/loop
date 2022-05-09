const isNumeric = function (str) {
  if (typeof str !== "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

//v1.1
const startGame = function (secretNumber) {
  alert(WELCOME);
  let countAttempt = 0;
  while (true) {
    let userNumber = prompt(USER_INPUT);
    if (!isNumeric(userNumber)) {
      alert(INCORRECT_INPUT);
      continue;
    }
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
//   while (userNumber != secretNumber) {//сравниваю string с number, чтоб не делать лишнее преобразование
//     userNumber = prompt(USER_INPUT);
//     if (!isNumeric(userNumber)) {
//       alert(INCORRECT_INPUT);
//       continue;
//     }
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
//     userNumber = prompt(USER_INPUT);
//     if (!isNumeric(userNumber)) {
//       alert(INCORRECT_INPUT);
//       continue;
//     }
//     countAttempt++;
//     if (secretNumber > userNumber) {
//       alert(HIGHER_NUMBER);
//     } else if (secretNumber < userNumber) {
//       alert(LESS_NUMBER);
//     } else {
//       alert(VICTORY);
//       alert(COUNT_ATTEPMT + countAttempt);
//     }
//   } while (userNumber != secretNumber);//сравниваю string с number, чтоб не делать лишнее преобразование
// }
// startGame(SECRET_NUMBER);

//v1.4
// const startGame = function (secretNumber) {
//   let userNumber;
//   for (let countAttempt = 1; userNumber != secretNumber; countAttempt++) {//сравниваю string с number, чтоб не делать лишнее преобразование
//     userNumber = prompt(USER_INPUT);
//     if (!isNumeric(userNumber)) {
//       alert(INCORRECT_INPUT);
//       continue;
//     }
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

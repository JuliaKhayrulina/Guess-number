'use strict';

const getNumber = keepsNum(60);

function keepsNum(number) {
  function giveNum() {
    return number;
  }
  return giveNum;
}

function guessNumber() {
  let value = prompt('Угадай число от 1 до 100', '');

  if (isNumber(value)) {
    if (checkRange(+value)) {
      if (+value > getNumber()) {
        alert('Загаданное число меньше');
        guessNumber();
      } else if (+value < getNumber()) {
        alert('Загаданное число больше');
        guessNumber();
      } else {
        alert('Поздравляю, Вы угадали!!!');
      }
    } else {
      guessNumber();
    }
  } else if (value === null) {
    alert('Игра окончена!');
  } else {
    alert('Введи число!');
    guessNumber();
  }
}

guessNumber();

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function checkRange(val) {
  if (val < 1) {
    alert('Вы ввели число меньше 1');
  } else if (val > 101) {
    alert('Вы ввели число больше 100');
  } else {
    return true;
  }
}

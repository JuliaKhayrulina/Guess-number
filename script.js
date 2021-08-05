'use strict';

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1 + 1) + 1);
}
const getNumber = keepsNum(getRandomNumber());

guessNumber();

function keepsNum(number) {
  let count = 10;
  const data = [];

  function giveNum() {
    if (count === 0) {
      data[0] = number;
      data[1] = count = 9;
      return data;
    } else {
      count--;
      data[0] = number;
      data[1] = count;
      return data;
    }
  }
  return giveNum;
}

function guessNumber() {
  let value = prompt('Угадай число от 1 до 100', '');

  if (isNumber(value)) {
    let data = getNumber();
    let count = data[1];
    let number = data[0];
    console.log(`Число: ${data[0]}, попыток: ${data[1]} `);

    if (checkRange(+value) && count >= 1) {
      if (+value > number) {
        alert(`Загаданное число меньше, осталось попыток ${count}`);
        guessNumber();
      } else if (+value < number) {
        alert(`Загаданное число больше, осталось попыток ${count}`);
        guessNumber();
      } else {
        let ok = confirm('Поздравляю, Вы угадали!!!\nХотели бы сыграть еще?');
        return ok ? location.reload() : false;
      }
    } else {
      let ok = confirm('Попытки закончились, хотите сыграть еще?');
      return ok ? location.reload() : false;
    }
  } else if (value === null) {
    alert('Игра окончена!');
  } else {
    alert('Введи число!');
    guessNumber();
  }
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function checkRange(val) {
  if (val < 1 || val > 101) {
    alert('Вы ввели число не из заданного диапозона');
    guessNumber();
  } else {
    return true;
  }
}

'use strict';

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1 + 1) + 1);
}
const getNumber = keepsNum();

guessNumber();

function keepsNum() {
  let count = 10;
  let number = getRandomNumber();
  const data = [];

  function giveNum(reload) {
    if (count === 0 || reload) {
      number = getRandomNumber();
      data[0] = number;
      data[1] = count = 10;
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

    if (checkRange(+value) && count > 0) {
      if (+value > number) {
        alert(`Загаданное число меньше, осталось попыток ${count}`);
        guessNumber();
      } else if (+value < number) {
        alert(`Загаданное число больше, осталось попыток ${count}`);
        guessNumber();
      } else if (+value === number) {
        let ok = confirm('Поздравляю, Вы угадали!!!\nХотели бы сыграть еще?');
        getNumber(true);
        return ok ? guessNumber() : alert('Тогда в другой раз!');
      }
    } else if (count < 1) {
      let ok = confirm('Попытки закончились, хотите сыграть еще?');
      getNumber(true);
      return ok ? guessNumber() : alert('Тогда в другой раз!');
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

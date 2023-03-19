// Функция для проверки длины строки
const checkStringLength = (string, length) => string.length <= length;

// Функция для проверки, является ли строка палиндромом.
const isPalindrom = (string) => {
  const reverseString = [];
  for (let i = 0; i < string.length; i++) {
    reverseString[i] = string.toLowerCase()[string.length - 1 - i];
  }
  return string.toLowerCase().replaceAll(' ', '') === reverseString.join('').replaceAll(' ', '');
};

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
const getNumbersFromString = (string) => {
  let numbersFromString = '';
  switch (typeof string) {
    case 'number':
      for (let i = 0; i < string.toString().length; i++) {
        if (!isNaN(string.toString().at(i))) {
          numbersFromString += string.toString().at(i);
        }
      }
      return parseInt(numbersFromString, 10);
    default:
      for (let i = 0; i < string.length; i++) {
        if (!isNaN(+string.at(i)) & string.at(i) !== ' ') {
          numbersFromString += string.at(i);
        }
      }
      return parseInt(numbersFromString, 10);

  }
};

// Функция, возвращает исходную строку, дополненную указанными символами до заданной длины.
const validateStringMinLength = (string, minLength, addedSymbols) => {
  let addSymbols = '';
  let newString = string;

  while ((addSymbols + string).length <= minLength) {
    newString = addedSymbols.slice(0, (addSymbols + string).length - minLength) + addSymbols + string;
    addSymbols += addedSymbols ;
  }
  return newString;
};

// Cтрока короче 20 символов
checkStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10);

// Строка является палиндромом
isPalindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrom('ДовОд'); // true
// Это не палиндром
isPalindrom('Кекс'); // false

getNumbersFromString('2023 год'); // 2023
getNumbersFromString('ECMAScript 2022'); // 2022
getNumbersFromString('1 кефир, 0.5 батона'); // 105
getNumbersFromString('агент 007'); // 7
getNumbersFromString('а я томат'); // NaN

// Добавочный символ использован один раз
validateStringMinLength('1', 2, '0'); // '01'
// Добавочный символ использован три раза
validateStringMinLength('1', 4, '0'); // '0001'
// Добавочные символы обрезаны с конца
validateStringMinLength('q', 4, 'werty'); // 'werq'
// Добавочные символы использованы полтора раза
validateStringMinLength('q', 4, 'we'); // 'wweq'
// Добавочные символы не использованы, исходная строка не изменена
validateStringMinLength('qwerty', 4, '0'); // 'qwerty'

// Функция для проверки длины строки

let checkStringLength = (string, length) => string.length <= length

// Функция для проверки, является ли строка палиндромом.
let isPalindrom = (string) => {
   let reverseString = [];
    for (let i = 0; i < string.length; i++) {
       reverseString[i] = string.toLowerCase()[string.length-1-i]
   }
   return string.toLowerCase().replaceAll(" ", "") === reverseString.join("").replaceAll(" ", "")
}

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. 
let getNumbersFromString = (string) => {
    let numbersFromString = "";
    for (let i = 0; i < string.length; i++ ) {
        if (!isNaN(+string.at(i))) {
            numbersFromString += string.at(i);
        }
    }
    return typeof string === 'number'
        ? string < 0
            ? string * -1 : parseInt(numbersFromString, 10)
        : parseInt(numbersFromString, 10)
}

// Функция, возвращает исходную строку, дополненную указанными символами до заданной длины.
let validateStringMinLength = (string, minLength, addedSymbols) => {
    let addSymbols = "";
    let newString = string;
       
    while ((addSymbols + string).length <= minLength ) {
        newString = addedSymbols.slice(0, (addSymbols + string).length - minLength) + addSymbols + string;
        addSymbols += addedSymbols ;
    }
    return newString
}

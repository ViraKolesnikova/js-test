// Приведення до числа

//Строчне значення до числа
let value = 'qwe qwe';

//Через конструктор Number
let toNumber = Number(value);
console.log(`${value}, через конструктор Number :`,  toNumber);
console.log(`тип даних ${value}, через конструктор Number`, typeof toNumber);

//через унарний +
toNumber = +value;
console.log(`${value}, через унарний + :`, toNumber);
console.log(`тип даних ${value}, через унарний +`, typeof toNumber);


//Строчне число до числа
value = '506';

//Через конструктор Number
toNumber = Number(value);
console.log(`${value}, через конструктор Number :`,  toNumber);
console.log(`тип даних ${value}, через конструктор Number`, typeof toNumber);

//через унарний +
toNumber = +value;
console.log(`${value}, через унарний + :`, toNumber);
console.log(`тип даних ${value}, через унарний +`, typeof toNumber);


//'' пуста строка до числа
value = '';

//Через конструктор Number
toNumber = Number(value);
console.log(`${value}, через конструктор Number :`,  toNumber);
console.log(`тип даних ${value}, через конструктор Number`, typeof toNumber);

//через унарний +
toNumber = +value;
console.log(`${value}, через унарний + :`, toNumber);
console.log(`тип даних ${value}, через унарний +`, typeof toNumber);


//' ' пуста строка з пробілом до числа
value = ' ';

//Через конструктор Number
toNumber = Number(value);
console.log(`${value}, через конструктор Number :`,  toNumber);
console.log(`тип даних ${value}, через конструктор Number`, typeof toNumber);

//через унарний +
toNumber = +value;
console.log(`${value}, через унарний + :`, toNumber);
console.log(`тип даних ${value}, через унарний +`, typeof toNumber);


//Приведення Boolean в число

value = true;

toNumber = Number(value);
console.log(`${value}, через конструктор Number:`,  toNumber);
console.log(`тип даних ${value}, через конструктор Number`, typeof toNumber);

toNumber = +value;
console.log(`${value}, через унарний + :`, toNumber);
console.log(`тип даних ${value}, через унарний +`, typeof toNumber);

value = false;

toNumber = Number(value);
console.log(`${value}, через конструктор Number:`,  toNumber);
console.log(`тип даних ${value}, через конструктор Number`, typeof toNumber);

toNumber = +value;
console.log(`${value}, через унарний + :`, toNumber);
console.log(`тип даних ${value}, через унарний +`, typeof toNumber);



// Приведення undefined в число

value = undefined;

toNumber = Number(value);
console.log(`${value}, через конструктор Number:`,  toNumber);
console.log(`тип даних ${value}, через конструктор Number`, typeof toNumber);

toNumber = +value;
console.log(`${value}, через унарний + :`, toNumber);
console.log(`тип даних ${value}, через унарний +`, typeof toNumber);

//Приведення null в строку

value = null;

toNumber = Number(value);
console.log(`${value}, через конструктор Number:`,  toNumber);
console.log(`тип даних ${value}, через конструктор Number`, typeof toNumber);

toNumber = +value;
console.log(`${value}, через унарний + :`, toNumber);
console.log(`тип даних ${value}, через унарний +`, typeof toNumber);
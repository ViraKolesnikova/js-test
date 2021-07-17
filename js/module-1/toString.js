//Приведення числа в строку

let value = 0;

let toString = String(value);
console.log(`${value}, через конструктор String`);
console.log(`тип даних ${value}, через конструктор String`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацію`);
console.log(`тип даних ${value}, через конструктор String`, typeof toString);


value = 1;

toString = String(value);
console.log(`${value}, через конструктор String`);
console.log(`тип даних ${value}, через конструктор String`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацію`);
console.log(`тип даних ${value}, через конструктор String`, typeof toString);

//Приведення безкінечності в строку
value = Infinity;

toString = String(value);
console.log(`${value}, через конструктор String`);
console.log(`тип даних ${value}, через конструктор String`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацію`);
console.log(`тип даних ${value}, через конструктор String`, typeof toString);

//Приведення NaN в строку
value = NaN;

toString = String(value);
console.log(`${value}, через конструктор String`);
console.log(`тип даних ${value}, через конструктор String`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацію`);
console.log(`тип даних ${value}, через конструктор String`, typeof toString);


//Приведення Boolean в строку

value = true;

toString = String(value);
console.log(`${value}, через конструктор String`);
console.log(`тип даних ${value}, через конструктор String`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацію`);
console.log(`тип даних ${value}, через конструктор String`, typeof toString);

value = false;

toString = String(value);
console.log(`${value}, через конструктор String`);
console.log(`тип даних ${value}, через конструктор String`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацію`);
console.log(`тип даних ${value}, через конструктор String`, typeof toString);


//Приведення undefined в строку

value = undefined;

toString = String(value);
console.log(`${value}, через конструктор String`);
console.log(`тип даних ${value}, через конструктор String`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацію`);
console.log(`тип даних ${value}, через конструктор String`, typeof toString);

//Приведення null в строку

value = null;

toString = String(value);
console.log(`${value}, через конструктор String`);
console.log(`тип даних ${value}, через конструктор String`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацію`);
console.log(`тип даних ${value}, через конструктор String`, typeof toString);



const age = 28;
const myName = "Vlad";
const lastName = "Sokovnin";
const profession = "Web-developer";
const nickname = "Soko";

console.log("Урок 76 Переменные");
console.log("==============================");

console.log(
  `I am ${myName} ${lastName} ${age} y.o. ${profession} and my nickname is ${nickname}`
);

console.log("==============================");
console.log("Урок 79 Условия");
console.log("==============================");

if (age >= 18) {
  console.log("Ты совершеннолетний");
} else {
  console.log("Ты мелочь пузатая");
}

age >= 18
  ? console.log("Ты совершеннолетний")
  : console.log("Ты мелочь пузатая");

console.log("==============================");
console.log("Урок 80 Циклы");
console.log("==============================");

for (let i = 2; i <= 12; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("==============================");

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("==============================");

let num = 2;

while (num <= 12) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

console.log("==============================");

let num2 = 10;

while (num2 >= 1) {
  console.log(num2);
  num2--;
}

console.log("==============================");
console.log("Урок 81 Массивы");
console.log("==============================");

const arr = [1, 22, 31, 4, 5, 6, 70, 8, 9, 11];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

console.log("==============================");

const sunny = ["red", "orange", "yellow", "green", "blue", "blue", "purple"];

for (let i = sunny.length - 1; i >= 0; i--) {
  console.log(sunny[i]);
}

console.log("==============================");
console.log("Урок 82 Функции");
console.log("==============================");

const hello = (name) => `Hello ${name}`;
console.log(hello("Vlad"));

console.log("==============================");

function checkArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      console.log(arr[i]);
    }
  }
}
checkArray(arr);

console.log("==============================");
console.log("Калькулятор");
console.log("==============================");

const calc = (num1, num2, oper) => {
  switch (oper) {
    case "plus":
      return num1 + num2;
    case "minus":
      return num1 - num2;
    case "divide":
      return num1 / num2;
    case "multiply":
      return num1 * num2;
  }
};

console.log(`Ответ ${calc(2, 5, "multiply")}`);

console.log("==============================");
console.log("Урок 83 Объекты");
console.log("==============================");

const me = {
  name: "Vlad",
  age: 28,
  height: 200,
  weight: 130,
  sayHello(name) {
    return `Hello ${name}`;
  },
};

console.log(me.sayHello("Anton"));

console.log("==============================");

const users = [
  {
    name: "Elena",
    age: 30,
    isAdmin: true,
  },
  {
    name: "Nastya",
    age: 29,
    isAdmin: false,
  },
  {
    name: "Dima",
    age: 36,
    isAdmin: false,
  },
  {
    name: "Ekaterina",
    age: 54,
    isAdmin: true,
  },
  {
    name: "Gena",
    age: 18,
    isAdmin: false,
  },
];

let simpleUsers = 0;

for (let i = 0; i < users.length; i++) {
  if (!users[i].isAdmin) simpleUsers++;
}

console.log(`Количество простых пользователей ${simpleUsers}`);

const modal = document.querySelector(".modal");
const modalWindow = document.querySelector(".modal__window");
const btnOpen = document.querySelector(".btn-open");

btnOpen.addEventListener("click", () => {
  modal.classList.add("isOpen");
  modalWindow.classList.add("window-open");
});
modal.addEventListener("click", (e) => {
  const target = e.target;
  if (target == modal || target.classList.contains("btn-close")) {
    modal.classList.remove("isOpen");
    modalWindow.classList.remove("window-open");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("isOpen")) {
    modal.classList.remove("isOpen");
  }
});

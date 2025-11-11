// Задача 1. Отримання випадкового елемента.  Опиши функцію getRandom<T>,
// яка приймає масив будь-якого типу та повертає випадковий елемент з нього.
function getRandom(items) {
    const randomIndex = Math.floor(Math.random() * (items.length - 1 + 1));
    return items[randomIndex] ? items[randomIndex] : null;
}
const arr = [1, 2, 3];
const str = ["hello", "world", "it", "is", "me"];
console.log(getRandom(arr));
console.log(getRandom(str));
// Задача 2. Менеджер операцій. Створи клас OperationManager<T>,
//  який зберігає список операцій будь-якого типу
// і має метод executeAll(callback: (item: T) => void) для виконання їх усіх.
class OperationManager {
    items;
    constructor(items) {
        this.items = items;
    }
    executeAll(callback) {
        this.items.forEach(callback);
    }
}
const numManager = new OperationManager([1, 2, 3]);
numManager.executeAll((item) => item * 2);
const numToString = {
    transform(value) {
        return value.toString();
    },
};
const strToNum = {
    transform(value) {
        return Number(value);
    },
};
const objToJson = {
    transform(value) {
        return JSON.stringify(value);
    },
};
console.log(numToString.transform(1));
console.log(strToNum.transform("1"));
console.log(objToJson.transform({ hello: "world" }));
// -----------------------
function runTransform(transformer, value) {
    return transformer.transform(value);
}
console.log(runTransform(objToJson, { object: "to JSON" }));
function printAll(items) {
    items.forEach((item) => item.print());
}
const prArr = [
    {
        name: "Dog",
        sound: "woof-woof",
        print() {
            console.log(this.sound);
        },
    },
    {
        name: "Cat",
        sound: "meow-meow",
        print() {
            console.log(this.sound);
        },
    },
];
printAll(prArr);
const permissions = {
    admin: ["edit", "delete", "read", "write_new", "ban"],
    editor: ["edit", "read", "write_new"],
    viewer: ["read"],
};
const newPermissions = {
    admin: ["edit", "delete", "read", "write_new", "ban"],
    editor: ["edit", "read", "write_new"],
    viewer: ["read"],
};
export {};

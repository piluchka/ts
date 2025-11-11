// Задача 1. Отримання випадкового елемента.  Опиши функцію getRandom<T>,
// яка приймає масив будь-якого типу та повертає випадковий елемент з нього.

function getRandom<T>(items: T[]): T | null {
  const randomIndex = Math.floor(Math.random() * (items.length - 1 + 1))
  return items[randomIndex] ? items[randomIndex] : null
}

const arr: number[] = [1, 2, 3]
const str = ["hello", "world", "it", "is", "me"]
console.log(getRandom<number>(arr))
console.log(getRandom(str))

// Задача 2. Менеджер операцій. Створи клас OperationManager<T>,
//  який зберігає список операцій будь-якого типу
// і має метод executeAll(callback: (item: T) => void) для виконання їх усіх.

class OperationManager<T> {
  constructor(private items: T[]) {}
  executeAll(callback: (item: T) => void) {
    this.items.forEach(callback)
  }
}

const numManager = new OperationManager<number>([1, 2, 3])
numManager.executeAll((item) => item * 2)

// Задача 3. Інтерфейс для перетворювача. Створи інтерфейс Transformer<T, U> з методом transform(value: T): U.
// Реалізуй кілька прикладів трансформацій: — рядок у число, — число у рядок, — об’єкт у JSON.

// -------------------------
interface Transformer<T, U> {
  transform(value: T): U
}

const numToString: Transformer<number, string> = {
  transform(value: number): string {
    return value.toString()
  },
}
const strToNum: Transformer<string, number> = {
  transform(value: string): number {
    return Number(value)
  },
}
const objToJson: Transformer<object, string> = {
  transform(value: object): string {
    return JSON.stringify(value)
  },
}

console.log(numToString.transform(1))
console.log(strToNum.transform("1"))
console.log(objToJson.transform({ hello: "world" }))

// -----------------------
function runTransform<T, U>(transformer: Transformer<T, U>, value: T): U {
  return transformer.transform(value)
}

console.log(runTransform(objToJson, { object: "to JSON" }))

// Задача 4. Обмеження для типів, що реалізують інтерфейс.  Створи інтерфейс Printable з методом print(): void.
// Опиши узагальнену функцію printAll<T extends Printable>(items: T[]), яка викликає метод print() для кожного елемента масиву.

interface Printable {
  print(): void
}

function printAll<T extends Printable>(items: T[]) {
  items.forEach((item) => item.print())
}

interface Animal extends Printable {
  name: string
  sound: string
}

const prArr: Animal[] = [
  {
    name: "Dog",
    sound: "woof-woof",
    print() {
      console.log(this.sound)
    },
  },
  {
    name: "Cat",
    sound: "meow-meow",
    print() {
      console.log(this.sound)
    },
  },
]

printAll(prArr)

// Задача 5. Ролі користувачів і їхні дозволи. Опиши тип Roles = "admin" | "editor" | "viewer".
// Створи тип RolePermissions = Record<Roles, string[]>, де кожен ключ містить список дій, які дозволені ролі.

// 1-------------------
type Roles = "admin" | "editor" | "viewer"
type RolePermissions = Record<Roles, string[]>

const permissions: RolePermissions = {
  admin: ["edit", "delete", "read", "write_new", "ban"],
  editor: ["edit", "read", "write_new"],
  viewer: ["read"],
}

// 2------------------------
type RoleActions = "edit" | "delete" | "read" | "write_new" | "ban"
type NewRolePermissions = Record<Roles, RoleActions[]>

const newPermissions: NewRolePermissions = {
  admin: ["edit", "delete", "read", "write_new", "ban"],
  editor: ["edit", "read", "write_new"],
  viewer: ["read"],
}

// 1. Чернетка товару:
//  Описати тип Auto (id, марка, колір, рік_випуску, власник).
//  Потім описати DraftAuto для збереження неповних описів даних про авто у localStorage.

type AutoBrand = "bmw" | "volkswagen" | "toyota"
type AutoColor = "black" | "red" | "white" | "blue"

interface Auto {
  id: number
  brand: AutoBrand
  color: AutoColor
  releaseDate: string
  owner: string
}

type DraftAuto = Partial<Auto>

const draft: DraftAuto = { id: 4, brand: "volkswagen", color: "red" }

localStorage.setItem("auto", JSON.stringify(draft))
console.log("1. from localStorage", localStorage.getItem("auto"))

// 2. Налаштування гри GameSettings (швидкість, рівень, тип ворогів).
// Потім на  основі цього типу створити тип, що не можна змінювати під час гри.

type EnemyType = "orc" | "demon" | "undead" | "zombie"

interface GameSettings {
  speed: number
  level: number
  enemy: EnemyType
}

type RobustGameSettings = Readonly<GameSettings>

const gameSetting: RobustGameSettings = {
  speed: 10,
  level: 3,
  enemy: "demon",
}

console.log("2. gameSetting - readonly", gameSetting)

// gameSetting.level = 10 // не вийде, бо readonly

// 3. Мінімальні дані для таблиці. Дано тип Employee, що містить опис (перелік) полів,
// що можуть бути у працівника (ім'я, рік_народження, заробітна плата, стаж, підрозділ, адреса, спеціальність).
// Потім на основі цього типу  створи новий тип даних, що буде містити тільки ім'я, підрозділ та заробітну плату)

interface Employee {
  name: string
  birthDate: string
  salary: number
  experience: number
  unit: string
  address: string
  profession: string
}

type BriefEmployeeInfo = Pick<Employee, "name" | "unit" | "salary">

const briefInfo: BriefEmployeeInfo = {
  name: "Lera",
  unit: "Development",
  salary: 50000,
}

console.log("3. brief employee info", briefInfo)

// 4. Використовуючи тип параметрів createProduct (title, price,discount) розробити функцію,
// яка б формувала параметри для створення продукту.

interface Product {
  title: string
  price: number
  discount: number
  amount?: number
  isInStock?: boolean
}

function createProduct(title: string, price: number, discount: number): Product {
  return {
    title,
    price,
    discount,
  }
}

type ProductParams = Parameters<typeof createProduct>

const p: Product = {
  title: "Tea",
  price: 100,
  discount: 0,
  amount: 4,
  isInStock: false,
}

function prepareProductParams(product: Product): ProductParams {
  return [product.title, product.price, product.discount]
}

const params = prepareProductParams(p)
const newProduct = createProduct(...params)

console.log("4. Parameters", params, newProduct)

// 5. Розробити функції для збереження/зчитування/перевірки якихось даних у localStorage.
// Додати опис у коментарях та створити автоматично документацію.

/**
 *
 * @param {string} key key for the storage
 * @param {string} value value for the storage
 * @returns {void} nothing cause sets value to the storage
 */
function setToLocalStorage(key: string, value: string): void {
  localStorage.setItem(key, value)
}

/**
 *
 * @param {string} key key for the storage
 * @returns value from the storage or null if there's no such value
 */

function getValueFromLocalStorage(key: string): string | null {
  return localStorage.getItem(key)
}

/**
 *
 * @param {string} value value to check in storage
 * @returns true if value is in storage, false otherwise
 */
function isValueInLocalStorage(value: string): boolean {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key && localStorage.getItem(key) === value) return true
  }
  return false
}

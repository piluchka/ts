// 1. Створити два інтерфейс студента (піб, курс, факультет).
//  На основі цього інтерфейсу створити інтерфейс старости (додати поле з номером групи)

// Interface
interface IStudent {
  name: string
  course: number
  faculty: string
}

interface IHeadStudent extends IStudent {
  groupNumber: number
}

// Type
type Student = {
  name: string
  course: number
  faculty: string
}

type HeadStudent = Student & { groupNumber: number }

const student: HeadStudent = {
  name: "Valeria",
  course: 2,
  faculty: "Technology",
  groupNumber: 1,
}

// 2.  Створіть union-тип для трьох типів : car (модель, власник), bus (компанія, кількість місць), airplane (швидкість, тип палива).
// Створити функцію, яка приймає параметр цього типу і виводить повну інформацію про об'єкт.

type Car = {
  model: string
  owner: string
}

type Bus = {
  company: string
  seatsAmount: number
}

type Fuel = "gas" | "patrol"

type Airplane = {
  speed: number
  fuelType: Fuel
}

type Transport = Car | Bus | Airplane

function displayTransportInfo(transport: Transport) {
  const container = document.querySelector(".task-two")!

  if ("model" in transport) {
    container.innerHTML += `
      It's a car!<br>
      Model: ${transport.model},<br>
      Owner: ${transport.owner}<br><br>`
  } else if ("company" in transport) {
    container.innerHTML += `
      It's a bus!<br>
      Company: ${transport.company},<br>
      Available seats: ${transport.seatsAmount}<br><br>`
  } else {
    container.innerHTML += `
      It's an airplane!<br>
      Fuel type: ${transport.fuelType},<br>
      Speed: ${transport.speed}km/h<br><br>`
  }
}

const transport: Bus = {
  seatsAmount: 26,
  company: "Bus Bizz",
}

const seconsTransport: Airplane = {
  speed: 4000,
  fuelType: "patrol",
}

const thirdTransport: Car = {
  model: "BMW",
  owner: "Oleg",
}

displayTransportInfo(transport)
displayTransportInfo(seconsTransport)
displayTransportInfo(thirdTransport)

// 3. Задача “Події календаря”. Події можуть бути Meeting (має participants), Deadline (має dueDate), Reminder (має note).
// Кожна подія може бути mandatory або optional.
//  Створити тип CalendarEvent, який об’єднує тип події та її важливість, використовуючи перетини та об’єднання типів.

type Meeting = {
  participants: string[]
}

type Deadline = {
  dueDate: Date
}

type Reminder = {
  note: string
}
// ----------------------------------------------------
enum Seasons {
  spring = 3,
  summer = 6,
  autumn = 9,
  winter = 12,
}

console.log(Seasons)

interface IHotel {
  price: number
  type: Seasons
}

const list: IHotel[] = [
  {
    price: 111,
    type: Seasons.spring,
  },
  {
    price: 22,
    type: Seasons.spring,
  },
  {
    price: 33,
    type: Seasons.summer,
  },
  {
    price: 444,
    type: Seasons.winter,
  },
] satisfies IHotel[]

const obj1 = {
  [Seasons.spring]: 0,
  [Seasons.summer]: 0,
  [Seasons.autumn]: 0,
  [Seasons.winter]: 0,
}

const obj: {
  [key: string]: number
} = {}

for (const h of list) {
  obj[h.type] = (obj[h.type] ?? 0) + 1
}
console.log(obj)

for (const seasonNum in obj) {
  const season = Seasons[Number(seasonNum)]
  console.log(`${season} - ${obj[seasonNum]}`)
}

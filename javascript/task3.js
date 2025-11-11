// 1. Створити два інтерфейс студента (піб, курс, факультет).
//  На основі цього інтерфейсу створити інтерфейс старости (додати поле з номером групи)
const student = {
    name: "Valeria",
    course: 2,
    faculty: "Technology",
    groupNumber: 1,
};
function displayTransportInfo(transport) {
    const container = document.querySelector(".task-two");
    if ("model" in transport) {
        container.innerHTML += `
      It's a car!<br>
      Model: ${transport.model},<br>
      Owner: ${transport.owner}<br><br>`;
    }
    else if ("company" in transport) {
        container.innerHTML += `
      It's a bus!<br>
      Company: ${transport.company},<br>
      Available seats: ${transport.seatsAmount}<br><br>`;
    }
    else {
        container.innerHTML += `
      It's an airplane!<br>
      Fuel type: ${transport.fuelType},<br>
      Speed: ${transport.speed}km/h<br><br>`;
    }
}
const transport = {
    seatsAmount: 26,
    company: "Bus Bizz",
};
const seconsTransport = {
    speed: 4000,
    fuelType: "patrol",
};
const thirdTransport = {
    model: "BMW",
    owner: "Oleg",
};
displayTransportInfo(transport);
displayTransportInfo(seconsTransport);
displayTransportInfo(thirdTransport);
// ----------------------------------------------------
var Seasons;
(function (Seasons) {
    Seasons[Seasons["spring"] = 3] = "spring";
    Seasons[Seasons["summer"] = 6] = "summer";
    Seasons[Seasons["autumn"] = 9] = "autumn";
    Seasons[Seasons["winter"] = 12] = "winter";
})(Seasons || (Seasons = {}));
console.log(Seasons);
const list = [
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
];
const obj1 = {
    [Seasons.spring]: 0,
    [Seasons.summer]: 0,
    [Seasons.autumn]: 0,
    [Seasons.winter]: 0,
};
const obj = {};
for (const h of list) {
    obj[h.type] = (obj[h.type] ?? 0) + 1;
}
console.log(obj);
for (const seasonNum in obj) {
    const season = Seasons[Number(seasonNum)];
    console.log(`${season} - ${obj[seasonNum]}`);
}
export {};

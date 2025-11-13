// 1. Чернетка товару:
//  Описати тип Auto (id, марка, колір, рік_випуску, власник).
//  Потім описати DraftAuto для збереження неповних описів даних про авто у localStorage.
const draft = { id: 4, brand: "volkswagen", color: "red" };
localStorage.setItem("auto", JSON.stringify(draft));
console.log("1. from localStorage", localStorage.getItem("auto"));
const gameSetting = {
    speed: 10,
    level: 3,
    enemy: "demon",
};
console.log("2. gameSetting - readonly", gameSetting);
const briefInfo = {
    name: "Lera",
    unit: "Development",
    salary: 50000,
};
console.log("3. brief employee info", briefInfo);
function createProduct(title, price, discount) {
    return {
        title,
        price,
        discount,
    };
}
const p = {
    title: "Tea",
    price: 100,
    discount: 0,
    amount: 4,
    isInStock: false,
};
function prepareProductParams(product) {
    return [product.title, product.price, product.discount];
}
const params = prepareProductParams(p);
const newProduct = createProduct(...params);
console.log("4. Parameters", params, newProduct);
// 5. Розробити функції для збереження/зчитування/перевірки якихось даних у localStorage.
// Додати опис у коментарях та створити автоматично документацію.
/**
 *
 * @param {string} key key for the storage
 * @param {string} value value for the storage
 * @returns {void} nothing cause sets value to the storage
 */
function setToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}
/**
 *
 * @param {string} key key for the storage
 * @returns value from the storage or null if there's no such value
 */
function getValueFromLocalStorage(key) {
    return localStorage.getItem(key);
}
/**
 *
 * @param {string} value value to check in storage
 * @returns true if value is in storage, false otherwise
 */
function isValueInLocalStorage(value) {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && localStorage.getItem(key) === value)
            return true;
    }
    return false;
}
export {};

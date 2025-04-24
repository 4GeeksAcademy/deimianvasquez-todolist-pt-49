let myArr = ["deimian", "vasquez"]
let myArrTwo = ["daiel", "delgado"]

let myNewArr = [...myArr, ...myArrTwo]

let otherObj = {
    lastname: "Vásquez"
}

let obj = {
    ...otherObj,
    name:"Deimian"
}

console.log(obj)
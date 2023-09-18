/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let unit = 0
const inputEl = document.getElementById("input-el")
const convertLengthEl = document.getElementById("convert-length")
const convertVolumeEl = document.getElementById("convert-volume")
const convertMassEl = document.getElementById("convert-mass")
document.getElementById("convert-btn").addEventListener("click", convertUnit)

function convertUnit(){
    unit = Number(inputEl.value)
    convertLengthEl.innerHTML = `${unit} meters = ${(unit*3.281).toFixed(2)} feet | ${unit} feet = ${(unit/3.281).toFixed(2)} meters`
    convertVolumeEl.innerHTML = `${unit} liters = ${(unit*0.264).toFixed(2)} gallons | ${unit} gallons = ${(unit/0.264).toFixed(2)} liters`
    convertMassEl.innerHTML = `${unit} kilos = ${(unit*2.204).toFixed(2)} pounds | ${unit} pounds = ${(unit/2.204).toFixed(2)} kilos`
}


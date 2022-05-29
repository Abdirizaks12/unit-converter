const btn = document.getElementById("btn")
btn.addEventListener("click", () => {
let num   = document.getElementById("input-El").value
let meterfeet   = (num*3.2808399).toFixed(3)
let litergallon = (num*0.26417).toFixed(3)
let kilopound   = (num*2.20462262).toFixed(3)
let feetmeter   = (num*0.3048).toFixed(3)
let gallonliter = (num*3.78541).toFixed(3)
let poundkilo   = (num *0.45359237).toFixed(3)
let meterFt = document.getElementById("meter-feet")
meterFt.innerHTML = `${num} meters = ${meterfeet} feet || ${num} feet = ${feetmeter} meters`
let literGa = document.getElementById("liters-gallons")
literGa.innerHTML= `${num} liters = ${litergallon} gallons || ${num} gallons = ${gallonliter} liters`
let kilosPo = document.getElementById("kilos-pounds")
kilosPo.innerHTML = `${num} kilos = ${kilopound} pounds || ${num} pounds = ${poundkilo} kilos`
})

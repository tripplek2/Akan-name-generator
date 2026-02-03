//Elements
function getAkanName() {
const days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const MaleNames= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const FemaleNames= ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

//Main functions
//Getting user input
const dateOfBirth= document.getElementById("dateofbirth").value;
const genderInput = document.querySelector('input[name="gender"]:checked');


if (!dateOfBirth || !genderInput) {
    alert("Please select your dateOfBirth and gender");
    return;
}

let [year, month, day] = dateOfBirth.split("-").map(Number);

 if (month < 3) {
        month += 12;
        year -= 1;
    }

    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = day;

let d = ((4 * CC - 2 * (CC - 1)) + 45 * YY + 1026 * (MM + 1) + DD) % 7;

let dayIndex = d % 7;
if (dayIndex < 0) dayIndex += 7;

let akanName;

if(genderInput.value === "male") {
    akanName= MaleNames[dayIndex];
}
else {
    akanName= FemaleNames[dayIndex];
 }   


document.getElementById("akanName").innerText =
    `You were born on a ${days[dayIndex]}. Your Akan name is ${akanName}.`;

}

document.getElementById("getbutton")
    .addEventListener("click", getAkanName);
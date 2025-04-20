const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.addEventListener('DOMContentLoaded' , () => {


document.getElementById('akanForms').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const dob = Document.getElementById('dob').value;
    constgender = document.getElementById('gender').value;
    const resultDiv = document.getElementById('result');

    if (!dob || !gender) {resultDiv.textContent = "Please fill in all fields.";
        return;
    }

    const dateParts = dob.split("-");
    let year = parseInt(dataParts[0]);
    let month = parseInt(dateParts[1]);
    const day = parseInt(dataParts[2]);

    if (day < 1 || day > 31 || month < 1 || month > 12){   
        resultDiv.textContent = "Please enter a valid date.";
        return;
    }  

    // Adjust for Zeller's Congruence
    if(month < 3){  
    month += 12;
    year -= 1;
}
const CC = Math.floor(year / 100);
const YY = year % 100;
const MM = month;
const DD = day;

//Apply the formula
const d = Math.floor((  (  (CC / 4) - 2 * CC - 1 ) +(5 * YY / 4) + (26 * (MM + 1) / 10) + DD )) % 7;
const dayIndex = ((d + 7) % 7); // make sure it's not negative
const akanName = gender === 'male' ?
maleNames[dayIndex] : femaleNames[dayIndex];
const dayName = days[dayIndex];

resultDiv.textContent = 'You were born on a ${dayName}. Your Akan name is $ {akanName}.';
   });
});
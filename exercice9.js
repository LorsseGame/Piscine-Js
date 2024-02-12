var dateNow = new Date();
var days = 17;
var month = 7;
var years = 2004;
var birthDate = new Date(years, month, days);

var age = dateNow.getFullYear() - years;


if (birthDate.getMonth() > dateNow.getMonth() && birthDate.getDate() > dateNow.getDate() || birthDate.getMonth() == dateNow.getMonth() && birthDate.getDate() > dateNow.getDate()) {
    age--;
}
console.log(dateNow.getDate() + " " + dateNow.getMonth() + " " + dateNow.getFullYear())
console.log(birthDate.getDate() + " " + birthDate.getMonth() + " " + birthDate.getFullYear())

console.log(age); 

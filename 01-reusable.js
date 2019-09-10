// Identifiers
let name = 'Misha';
const year = 1984;
const greeting = (arg) => console.log(arg);
greeting('Hi!');
greeting(name);
greeting(year);
 
//Loop
for (let x = 15; x <=30; x++) {
    if (x % 2) console.log(x);
}
const range = (start, end) => {
    for (let x = start; x <= end; x++) {
        if (x % 2) console.log(x);
    }
}
 
//Function
const average = (a, b) => (a + b) / 2;
const square = (x) => x * x;
const cube = (x) => square(x) * x;
for (let i = 1; i < 5; i++) {
    console.log(average(square(i), cube(i)));
}
 
//Object
const person = {name};
let person2 = {name};
person['name'] = name;    // works, cause it is only reference which is constant, not the value of the memory cell in that adress
person2['name'] = name + year;    // works
person = person2;    // crashes, cause person can't change adress of variable it refers to
person2 = person;    // works
const creatUser = (name, city) => {return {name: name, city: city}}
 
//Array
const arr = [{name, phone}];
findPhoneByName = (name) => {
    for (let contact of arr) {
        if (contact['name'] === name) return contact['phone'];
    }
}
 
//Hash
const hash = {'name': 'phone'};
const findPhoneByName = (name) => {
    for (let contact in hash) {
        if (contact === name) return hash[contact];
    }
}
// console.log(5 + 7);
// console.log(7 * 6);
// console.log('Godwin');
// console.log ("Chidera");
// console.log(`Gerard`);
// console.log(age);

// let myAge = 78;
// let b = 10;
// let c = myAge + b;
// console.log(c)

// let a, b, c

// a = 78;
// b = 22;
// c = a + b;
// console.log(c);

// let myname, myage, myaddress, mygender, mywage

// myname = 'Cynthia';
// myage = 15;
// mywage = 120;

// myaddress = "202, Brig Ademulegun Road, Bodija, Ibadan";

// mygender = 'M';
// console.log(myname);
// console.log(myage + mywage);

// console.log(`My name is ${myname} and I live at ${myaddress}`);

// console.log('My name is', myname, 'and I live at', myaddress);

// console.log("My name is " + myname + " "+ "and I live at" + myaddress);

let staffname, wageperhour, dailyhour, extratime, salary, test

staffname = prompt("staff name");
wageperhour = prompt("wageperhour") ;
dailyhour = 6;
extratime = 1.5;
test = wageperhour * extratime;
salary =  parseInt(wageperhour) * dailyhour + (wageperhour * extratime);
console.log(test);
console.log(`Hi ${staffname}, your wage today is ${salary}`);



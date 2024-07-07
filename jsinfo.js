// Object tasks
/* let user = {
    name: 'John',
    surname: 'Smith'
};
console.log(user)
user['name']= 'Pete';
console.log(user)
delete user.name
console.log(user) */

/* function isEmpty(obj){
    for (let items in obj){
            return false;
        }
    return true;
}

let schedule = {};

console.log(isEmpty(schedule));

schedule['8:30'] = 'get up';

console.log(isEmpty(schedule));*/

/* function sumAll(obj) {
    let sum = 0
    for (let items in obj){
        sum += obj[items]
    }
    return sum
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Kachi: 400
}

console.log(sumAll(salaries)) */

// Select all input boxes
const inputVar = document.querySelectorAll(".passcode");
let arr = '';

console.log(`${arr} is empty`)

inputVar.forEach((items) => {
  items.addEventListener("keyup", () => {
    // console.log(items.value)
    // var str = '';
    
    items.blur();
    arr += items.value
    items.nextElementSibling.focus();
    if(arr.length == 4){
        if(arr == 'game'){
            console.log('Your password is correct')
        }else{
            console.log('incorrect password')
        }
        
    }else {
        return
    }
    // console.log(arr)
    
  });
  
});




// const myArray = ['game', 'fish', 'pit', 'laptop']
// let nos = 0

// myArray.forEach(items => {
//     console.log(`${nos += 1}  ${items}`)
// })
// if (arr) {
//   console.log(arr[0], arr[1], arr[2], arr[3]);
// }else{
//     console.log(`${arr} is empty`);
// }

// console.log(`Your hashed password is ${arr}`);

// const key1 = document.getElementById('let1');
// const key2 = document.getElementById('let2');
// const key3 = document.getElementById('let3');
// const key4 = document.getElementById('let4');

// key1.addEventListener('change', ()=>{
//     console.log('Key one has changed')
//     key1.blur()
//     if (key1.value.length == 1) {
//         key2.focus = true
//     }
// })

// function compilePasskey(key){
//     if (pass.length == 0){
//         pass += keys
//     }
//     console.log(pass)
// }
//     // console.log(pass)

// console.log(password);

// compilePasskey(password);

// function multiplyNumeric(obj){
//     for (let items in obj){
//         if (typeof (obj[items]) == 'number'){
//             obj[items] *= 2;
//         }
//     }
//     return obj
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   console.log(menu)

//   console.log(multiplyNumeric(menu));

// let add = (number1, number2, subtract) => {
//     subtract(number1,number2)
//     return number1 + number2;
// }

// let subtract = (number1, number2) => {
//     //Para poder que sea función tiene que tener return
//     console.log(number1 - number2)
// }

// console.log(add(25,30,subtract))

let login = (user, password, callback) => {
    if (user == 'admin' && password == '1234') {}
    else {
        callback('Invalid credentials')
    }   
}   

console.log(callback(login))


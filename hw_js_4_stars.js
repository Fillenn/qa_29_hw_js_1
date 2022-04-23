// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
let age_2 = 18
let age_3 = 60

const checkAge = function(age) {
//     console.log(`Your age is - ` + age + `, and`)
//     age = Number(age)
// if (!isNaN(age)) { подсказка Анатолия
        // if (Number(age)) {
    if (+age) { //подсказка Анатолия

        if (age < age_2) {
                console.log("You don’t have access cause your age is " + age + ". It’s less then")
            } else if (age >= age_2 && age < age_3) {
                    console.log(`Welcome !`)
            } else if (age > age_3) {
                    console.log (`Keep calm and look Culture channel`)
        } else {
                console.log("Technical work") 
        }      
    } else {
        console.log("Not integer value") }
}

// checkAge(19)
// checkAge("60")
// checkAge("tyhr")

let agePrompt = prompt("Enter age") // Подсказка Анатолия
checkAge(agePrompt)
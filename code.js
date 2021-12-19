const maxGuess = 5;
let finish = 'false';
let guesses = 0;
let trueGuesses = 0;


// 1st try
// let rows = 3

// let table = document.createElement('table')
// document.body.appendChild(table)
// let tdArr = []
// function cells() {
//     for (let i = 0; i < 3; i++) {
//     let td = document.createElement('td')
//     tdArr.push(td)} return tdArr

// }

// for (let i = 0; i < 3; i++) {
//     cells()
//     let row = document.createElement('tr')
//     table.appendChild(row)
//     let tr = document.getElementsByTagName('tr')
//     tr.appendChild(tdArr[i])
// }
    
// 2nd try

// let tr1 = document.createElement('tr')
//   let td1 = document.createElement('td')
//   let td2 = document.createElement('td')
//   let td3 = document.createElement('td')
// let tr2 = document.createElement('tr')
//   let td4 = document.createElement('td')
//   let td5 = document.createElement('td')
//   let td6 = document.createElement('td')
// let tr3 = document.createElement('tr')
//   let td7 = document.createElement('td')
//   let td8 = document.createElement('td')
//   let td9 = document.createElement('td')
// let table = document.createElement('table')

// 3rd try
let counter = 0;
let correctAnswers = 0;
let table = document.createElement('table')
for (let i = 0; i < 3; i++) {
    const tr = document.createElement('tr')
    for (let n = 0; n < 3; n++) {
        const td = document.createElement('td')
        tr.append(td)
    }
    table.append(tr)
}
document.body.append(table)

// function inCorrect() {table.addEventListener('click', (e) => {
// e.target.classList.add('red')
// })}

// function Correct() {table.addEventListener('click', (e) => {
//     e.target.classList.add('green')
//     })}

table.addEventListener('click', (e) => {
        let lucky = Math.floor(Math.random() * 9)
        if (lucky === 0 || lucky === 8) {
e.target.classList.add('green')
correctAnswers++
        } else {
            e.target.classList.add('red')
            counter++
            proverka()
        }
        })
console.log(counter);
console.log(correctAnswers);
function proverka() {
    if (counter === 5) {
    console.log('you-re out of attempts');
}}

    

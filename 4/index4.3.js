const rl = require("readline").createInterface(process.stdin,process.stdout);

let number = Math.round(Math.random()*100)
let numberoftry = 0
console.log(number)

function question(quest) {
    return new Promise((resolve, reject) => {
        rl.question(quest, (data) => {
            resolve(data)
        })
    })
}

async function input() {
    let cmd = await question("Input your number 1 or 100:  . . .    Or 'q' to quit:  ")
    while(true) {
        if (cmd === 'q') {
            rl.close()
            break
        } else if (isNaN(cmd)) {
            cmd = await question('Not a number! Try again: ')
        } else if (+cmd == number) {
            numberoftry++
            console.log('Try № ', numberoftry)
            console.log(`${cmd} Got it! Congratulations!`)
            break
        } else if (cmd > number) {
            numberoftry++
            console.log('Try № ', numberoftry)
            cmd = await question("Wrong one! Try a smaller number: ")
        } else if (cmd < number) {
            numberoftry++
            console.log('Try № ', numberoftry)
            cmd = await question("Wrong one! Try a bigger number:  ")
        } 
    }
    rl.close()
    return
}

input()
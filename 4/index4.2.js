const rl = require("readline").createInterface(process.stdin,process.stdout)

let number = Math.round(Math.random()*100)
let numberoftry = 0
console.log(number)


function question() {
    rl.question("Input your number 1 or 100:  . . .    Or 'q' to quit:  ", (cmd) => {
        console.log('You entered: ', cmd);
        if (cmd == 'q') {
            rl.close();
            return
        }
        else if (isNaN(cmd)) {
            console.log('Not a number!')
            question();
        }
        else if (number === +cmd) {
            numberoftry++
            console.log("Got it! Congratulations! Try № ", numberoftry)
            rl.close();
            return
        }
        else if (number > cmd) {
            numberoftry++
            console.log("Wrong one! Try a bigger number. Try № ", numberoftry)
            question();
        }
        else if (number < cmd) {
            numberoftry++
            console.log("Wrong one! Try a smaller number. Try № ", numberoftry)
            question();
        }
    })
}
question()
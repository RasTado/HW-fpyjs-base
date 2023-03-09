while (true) {

    let genN = Math.floor(Math.random() * 1000)
    console.log("Generate random number: ", genN)
    while (true) {
        let userN = prompt("Input your number 1 or 1000:  . . .    Or 'q' to quit")
        console.log("User number: ", userN)

        if (userN == 'q') {
            break
        }
        if (isNaN(userN)) {
            alert("Not a number!")
        }
        else if (genN === +userN) {
            alert("Got it! Congratulations!")
            break
        }
        else if (genN > userN) {
            alert("Wrong one! Try a bigger number")
        }
        else if (genN < userN) {
            alert("Wrong one! Try a smaller number")
        }
    }

    let repQ = prompt("Repeat? 'y'")
    if (repQ != 'y') {
        break
    }

}

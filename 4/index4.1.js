function getPasswordChecker(password) {
    return function passCh(check_pass) {
        return check_pass === password
    }
}

pass1 = getPasswordChecker('1234')
console.log(pass1('0000'))
console.log(pass1('1234'))
pass2 = getPasswordChecker('1111')
console.log(pass2(1111))
console.log(pass2('1111'))
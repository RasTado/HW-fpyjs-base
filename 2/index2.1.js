function simpleNum(n) {
    simpleNum._list = []
    let check = true
    let i = 2
    while (simpleNum._list.length < n) {
        for (x of simpleNum._list) {
            if (i % x === 0) {
                check = false
                break
            }
        }
        if (check) {
            simpleNum._list.push(i)
        }
        i++
        check = true
    }   
    return simpleNum._list
}
console.time('simpleNum')
console.log(simpleNum(process.argv[2]))
console.timeEnd('simpleNum')
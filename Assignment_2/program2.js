function cal(x, y, n) {
    switch (n) {
        case 1: console.log(x + y)
            break
        case 2: console.log(x - y)
            break
        case 3: console.log(x * y)
            break
        case 4: console.log(x / y)
            break
        default: console.log("INVALID CHOICE")
    }
}

cal(10, 20, 3)

// 1 --> ADD
// 2 --> SUB
// 3 --> MUL
// 4 --> DIV
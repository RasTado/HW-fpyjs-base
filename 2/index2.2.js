const goods = [
    {
        id: 1,
        name: 'product1',
        description: 'smtng about product1',
        sizes: ['S', 'M', 'L'],
        price: 100,
        available: true,
    },
    {
        id: 2,
        name: 'product2',
        description: 'smtng about product2',
        sizes: ['S', 'M', 'L'],
        price: 200,
        available: true,
    },
    {
        id: 3,
        name: 'product3',
        description: 'smtng about product3',
        sizes: ['S', 'M', 'L'],
        price: 300,
        available: false,
    },
    {
        id: 4,
        name: 'product4',
        description: 'smtng about product4',
        sizes: ['S', 'M', 'L'],
        price: 400,
        available: true,
    },
    {
        id: 5,
        name: 'product5',
        description: 'smtng about product5',
        sizes: ['S', 'M', 'L'],
        price: 500,
        available: true,
    },
];

const basket = [
    {
        good: 1,
        amount: 10,
    },
    {
        good: 4,
        amount: 2,
    },
];

function addProduct(good, amount) {
    let n = {
        good: good,
        amount: amount,
    }

    for (i = 0; i < basket.length; i++) {
        if (n.good === basket[i].good) {
            basket[i].amount += n.amount
            break
        }
        else if (i+1 == basket.length) {
            basket.push(n)
            break
        }
    }
    return '... ok'
}

console.log('Add product 3 x 5', addProduct(3, 5), basket)
console.log('Add product 2 x 1', addProduct(2, 1), basket)
console.log('Add product 3 x 1', addProduct(3, 1), basket)


function delProduct(good, q) {
    for (i = 0; i < basket.length; i++) {
        if (basket[i].good == good) {
            if (basket[i].amount > q) {
                basket[i].amount -= q
            }
            else {
                basket.splice(i, 1)
            }
        } 
    }
    return '... ok'
}

console.log('Del product 1 x 5', delProduct(1, 5), basket)
console.log('Add product 5 x 2', addProduct(5, 2), basket)
console.log('Del product 5 x 1', delProduct(5, 1), basket)
console.log('Del product 5 x 1', delProduct(5, 1), basket)


function delAllProducts() {
    basket.splice(0, basket.length)
    return '... ok'
}

/*console.log(delAllProducts(), basket)*/

function totalAmSum() {
    totalAmount = 0
    totalSumm = 0
    for (item of basket) {
        totalAmount += item.amount
        totalSumm += goods[item.good-1].price * item.amount
    }
    return {
        totalAmount, totalSumm
    }
}

console.log(totalAmSum(), basket)
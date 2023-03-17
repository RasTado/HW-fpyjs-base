class Good {
    constructor(id, name, discription, size, price, available) {
        this.id = id;
        this.name = name;
        this.discription = discription;
        this.size = size;
        this.price = price;
        this.available = available;
    }

    setAvailable(value) {
        this.available = value
    }
}

const obj1 = new Good(1, 'obj1name', 'obj1discription', ['s', 'm', 'l'], 100, true)
const obj2 = new Good(2, 'obj2name', 'obj2discription', ['s', 'm', 'l'], 20, true)
const obj3 = new Good(3, 'obj3name', 'obj3discription', ['s', 'm', 'l'], 130, true)
const obj4 = new Good(4, 'obj4name', 'obj4discription', ['s', 'm', 'l'], 240, true)
const obj5 = new Good(5, 'obj5name', 'obj5discription', ['s', 'm', 'l'], 550, true)
const obj6 = new Good(6, 'obj6name', 'obj6discription', ['s', 'm', 'l'], 60, false)

class GoodList {
    #goods = []

    constructor(sortPrice, sortDir, filter='.+') {
        this.filter = new RegExp(`${filter}`, 'i');
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }

    get list() {
        let filterList = this.#goods.filter(item => item.name.match(this.filter))
        return this.sortPrice ? filterList.sort((arg1, arg2) => this.sortDir ? arg1.price - arg2.price : arg2.price - arg1.price) : filterList
    }

    add(args) {
        for (let i = 0; i < args.length; i++) {
            if (args[i].constructor.name === 'Good' && this.#goods.findIndex(item => item == args[i]) === -1) {
                this.#goods.push(args[i])
            }
        } 
    }

    remove(args) {
        for (let i = 0; i < args.length; i++) {
            let goodId = this.#goods.findIndex(item => item.id === args[i])
            if (goodId !== -1) {
                this.#goods.splice(goodId, 1)
            }
        }
    }
}

const testCatalog = new GoodList(false, true)
testCatalog.add([obj1, obj2, obj3, obj4, obj5, obj6])
console.log('catalog: \n', testCatalog.list)
testCatalog.sortPrice = true
console.log('sorted catalog (up): \n', testCatalog.list)
testCatalog.sortDir = false
console.log('sorted catalog (down): \n', testCatalog.list)
testCatalog.remove([2, 4, 6])
console.log('catalog after remove: \n', testCatalog.list)

class BasketGood extends Good {
    constructor(good) {
        super(good.id, good.name, good.discription, good.size, good.price, good.available)
        this.amount = 0
    }
}

class Basket {
    constructor() {
        this.goods = []
    }

    get totalSum() {
        return this.goods.map(item => item.price * item.amount).reduce((accumulator, value) => accumulator + value)
    }

    get totalAmount() {
        return this.goods.reduce((accumulator, item) => accumulator + item.amount, 0)
    }

    add(good, amount) {
        let goodInBasket = this.goods.filter(item => item.id == good.id)[0]
        if (goodInBasket) {
            goodInBasket.amount += amount;
        } 
        else {
            let basketgoodtest = new BasketGood(good)
            good.amount = amount
            this.goods.push(good)
        }
    }

    remove(good, amount) {
        let goodId = this.goods.findIndex(item => item === good)
        if (goodId !== -1) {
            (good.amount - amount) > 0 ? good.amount -= amount : this.goods.splice(goodId, 1)
        }
    }

    clear() {
        this.goods.splice(0, this.goods.length)
    }

    removeUnavailable() {
        this.goods = this.goods.filter(item => item.available)
    }
}

const testBasket = new Basket()

testBasket.add(obj1, 1)
testBasket.add(obj2, 2)
testBasket.add(obj3, 3)
testBasket.add(obj4, 4)
testBasket.add(obj6, 6)
testBasket.add(obj4, 4)
testBasket.add(obj1, 1)

console.log('Add objects: \n', testBasket)
testBasket.remove(obj4, 2)
testBasket.remove(obj3, 3)
console.log('Remove objects (available=false): \n', testBasket)
testBasket.removeUnavailable()
console.log('Remove all objects: \n', testBasket)
console.log('\n Total sum: ', testBasket.totalSum, '\n Total amount: ', testBasket.totalAmount)
testBasket.clear()
console.log('clear basket: \n', testBasket)
const testBasket2 = new Basket()
testBasket2.add(obj1, 1)
testBasket2.add(obj2, 2)
testBasket2.add(obj3, 3)
testBasket2.add(obj4, 1)
console.log('\n', testBasket2, '\n Total sum: ', testBasket2.totalSum, '\n Total amount: ', testBasket2.totalAmount)
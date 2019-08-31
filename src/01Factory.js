class Product {
    constructor(name) {
        this.name = name;
    }
    init() {
        alert('init');
    }
    fun1() {
        alert('fun1');
    }
    fun2() {
        alert('fun2');
    }
}

class Creator {
    create(name) {
        return new Product();
    }
}

// test
const creator = new Creator();
const product = creator.create("my_product");
product.init();
product.fun1();
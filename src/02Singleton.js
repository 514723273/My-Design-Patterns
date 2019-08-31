class SingleObject {
    login() {
        console.log('login...');
    }
}

SingleObject.getInstance = (function() {
    let instance;
    return function() {
        if(instance == null) {
            instance = new SingleObject();
        }
        return instance;
    }
})();       // 闭包

const obj1 = SingleObject.getInstance();
obj1.login();
const obj2 = SingleObject.getInstance();
obj2.login();

console.log('obj1 === obj2', obj1 === obj2);
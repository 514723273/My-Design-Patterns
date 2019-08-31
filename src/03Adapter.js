// 需要被适配的
class Adaptee {
    specificRequest() {
        return '德国标准的插头';
    }
}

// 适配器
class Target {
    constructor() {
        this.adaptee = new Adaptee();
    }
    request() {
        const info = this.adaptee.specificRequest();
        return `${info} -> 转换器 -> 中国标准的插头`;
    }
}

// 测试
const target = new Target();
target.request();
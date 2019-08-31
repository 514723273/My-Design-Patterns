class Circle {
    draw() {
        console.log("画一个圆形");
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle;
    }

    setRedColor() {
        console.log("将画笔设置为红色");
    }

    draw() {
        this.setRedColor();
        this.circle.draw();
    }
}

const circle = new Circle();
circle.draw();

const decorator = new Decorator(circle);
decorator.draw();
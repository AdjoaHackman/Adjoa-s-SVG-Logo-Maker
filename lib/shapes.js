class Triangle {
    constructor() {
    }
    setColor(color) {
        console.log(color)
        this.color = color;
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}
module.exports = Triangle;

class Circle {
    constructor() {
    }
    setColor(color) {
        console.log(color)
        this.color = color;
    }
    render() {
        return `<circle points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}
module.exports = Circle;

class Square {
    constructor() {
    }
    setColor(color) {
        console.log(color)
        this.color = color;
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}
module.exports = Square;
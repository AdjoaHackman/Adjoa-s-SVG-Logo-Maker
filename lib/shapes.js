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

class Circle {
    constructor() {
    }
    setColor(color) {
        console.log(color)
        this.color = color;
    }
    render() {
        return `<circle r="45" cx="50" cy="50" fill="${this.color}" />`
    }
}

class Square {
    constructor() {
    }
    setColor(color) {
        console.log(color)
        this.color = color;
    }
    render() {
        return `<rect width="300" height="200" x="10" y="10" fill="${this.color}" />`
    }
}
module.exports = {Square, Triangle, Circle};
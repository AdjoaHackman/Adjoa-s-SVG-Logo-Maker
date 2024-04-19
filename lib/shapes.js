class Triangle {
    constructor() {
    }
    setColor(color) {
        console.log(color)
        this.color = color;
    }
    render() {
        return `<polygon points="125, 8 219, 172 31, 172" fill="${this.color}" />`
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
        return `<circle r="100" cx="125" cy="100" fill="${this.color}" />`
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
        return `<rect width="200" height="200" x="20" y="10" fill="${this.color}" />`
    }
}
module.exports = {Square, Triangle, Circle};
const { Square, Triangle, Circle } = require("./shapes");

describe("testing circle class", () => {
    it("can create a red circle", () => {
        let shape = new Circle()
        shape.setColor('red')
        expect(shape.render()).toBe('red')
    })
})
describe("testing triangle class", () => {
    it("can create a green triangle", () => {
        let shape = new Triangle()
        shape.setColor('green')
        expect(shape.render()).toBe('green')
    })
})
describe("testing square class", () => {
    it("can create a yellow square", () => {
        let shape = new Square()
        shape.setColor('yellow')
        expect(shape.render()).toBe('yellow')
    })
})
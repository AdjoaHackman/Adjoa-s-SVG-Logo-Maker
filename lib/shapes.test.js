const { Square, Triangle, Circle } = require("./shapes");

describe("testing circle class", () => {
    it("can create a red circle", () => {
        let shape = new Circle()
        shape.setColor('red')
        expect(shape.render()).toBe('<circle r=\"100\" cx=\"125\" cy=\"100\" fill=\"red\" />')
    })
})
describe("testing triangle class", () => {
    it("can create a green triangle", () => {
        let shape = new Triangle()
        shape.setColor('green')
        expect(shape.render()).toBe('<polygon points=\"125, 8 219, 172 31, 172\" fill=\"green\" />')
    })
})
describe("testing square class", () => {
    it("can create a yellow square", () => {
        let shape = new Square()
        shape.setColor('yellow')
        expect(shape.render()).toBe('<rect width=\"200\" height=\"200\" x=\"20\" y=\"10\" fill=\"yellow\" />')
    })
})
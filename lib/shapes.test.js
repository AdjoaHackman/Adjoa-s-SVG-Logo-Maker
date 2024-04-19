const {Square, Triangle, Circle} = require("./shapes");

describe ("testing circle class",() => {
    it ("can create a red circle", () => {
        let shape = new Circle()
        shape.setColor('red')
        expect(shape.color).toBe('red')
    })
})
describe ("testing circle class",() => {
    it ("can create a red circle", () => {
        let shape = new Circle()
        shape.setColor('red') 
        expect(shape.render()).toBe('red')
    })
})
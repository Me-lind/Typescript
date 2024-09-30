function calculateArea2(shape: Shape): number|undefined {
    switch (shape.kind) {
        case 'circle': {
            return Math.PI * shape.radius * shape.radius
        }
        case 'square': {
            return shape.sideLength * shape.sideLength
        }
    }
}
import { Equal, Expect } from "@total-typescript/helpers"
it('Should calculate the area of a circle when no kind is passed', () => {
    const result = calculateArea2({
        radius: 5,
    })

    expect(result).toBe(78.53981633974483)

    type test = Expect<Equal<typeof result, number>>
})
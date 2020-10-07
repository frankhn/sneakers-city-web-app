import updateObject from '../updateObject'


const initialValues = {
    size: 1,
    quantity: 23
}

describe("test ", () => {
    test('Should be able to update an object', async () => {
        const res = updateObject(initialValues, {
            size: 20
        })
        expect(res).toEqual({ size: 20, quantity: 23 })
    })
})
import {checkURL} from '../src/client/js/checkURL'

describe('Test, the input url must exsit',()=>{
    test('should return true', ()=>{
           expect(checkURL).toBeTruthy()
    })
})

describe('Test, the checkURL function to be defined',()=>{
    test('check url to be defined', ()=>{
        expect(checkURL).toBeDefined()
    })
})

describe('Test, the checkURL function to be a function',()=>{
    test('to be a function', ()=>{
        expect(typeof checkURL).toBe('function')
    })
})
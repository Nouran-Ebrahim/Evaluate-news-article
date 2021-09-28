import {handleSubmit} from '../src/client/js/formHndler'
import 'babel-polyfill'
 
describe('Test, the checkURL function to be defined',()=>{
    test('check url to be defined', ()=>{
        expect(handleSubmit).toBeDefined()
    })
    test('to be a function', ()=>{
        expect(typeof handleSubmit).toBe('function')
    })
})
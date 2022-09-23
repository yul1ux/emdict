/* eslint-disable no-undef */
const request = require('supertest')
const expect = require('chai').expect

const url =  request('https://e-mdict.herokuapp.com')
describe('Health check',function(){
    it('return ok',async()=>{ 
        const res =await url.get('/status')
        expect(res.status).to.eql(200)
    })
})
describe('get definition',function(){
    it('return def and state',async ()=>{
        const res =await url.get('/api/search?w=dog')
        expect(res.status).to.eql(200)
    })
})

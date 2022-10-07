/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const request = require('supertest')
const expect = require('chai').expect
const app = require('../src/app.js')
describe('Health check',function(){
    it('return ok',function (done){ 
        request(app)
          .get('/status')
          .expect(200,done)
          
    })
})
describe('get definition',function(){
    it('return def and state', (done)=>{
        request(app)
          .get('/api/search?w=dog')
          .expect(200,done())
          
    })
})

var expect = require('expect');
var math = require('./math.js');
var app = require('../app.js');
var request = require('supertest');
var expres = express = require('express')
describe('adder', function () {
    it('should add two arguments', function () {
		expect(math.adder(2,3)).toBe(2+3);
    });
	it('should be a number', function(){
		expect(math.adder(2,3)).toBeA('number');
	});
})
describe('multiplyer', function(){
	it('should multiply two arguments', function(){
		expect(math.multiplyer(2,3)).toBe(2*3);
	});
    it('should be a number', function () {
        expect(math.multiplyer(2,3)).toBeA('number');
    });
})
describe('GET /', function(){
  it('respond with text/html', function(done){
    request(app)
      .get('/')
      .set('Accept', 'text/html')
      .expect('Content-Type', /text/)
      .expect(200, done);
  })
})

describe('POST /', function(){
  it('respond with specific json structure', function(done){
    request(app)
    .post('/')
    .send({userName:"Brandon Parmley", email:"brandon.parmley@uvu.edu"})
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect({userName:"Brandon Parmley", email:"brandon.parmley@uvu.edu"})
    .expect(200, done);
  })
})
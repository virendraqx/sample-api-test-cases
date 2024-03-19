let chai = require('chai');
const supertest = require('supertest');
let chaiHttp = require('chai-http');
let server = require('../index');	
// let app = server();
// before(async () => {
// 	require('../index.js');
// });
// let expect = chai.expect;
// // server.get('/',(req,rep)=>{
// // 	rep.send('hello world');
// // });
// //Assertion Style is given below:
chai.should();
let expect  = chai.expect;
// console.log(server);
chai.use(chaiHttp);

// describe('Tasks API', () => {

// 	/**
//      * Test the GET route
//      */
// 	describe('GET /api/tasks', () => {
// 		it('It should GET all the tasks', (done) => {
// 			chai.request('http://localhost:4000')
// 				.get('/api/tasks')
// 				.end((err, response) => {
// 					// response.should.have.status(200);
// 					// response.body.should.be.a('array');
// 					// response.body.length.should.be.eq(3);
// 					expect(response).to.have.status(200);
// 					expect(response.body).to.be.a('array');
// 					expect(response.body).to.have.lengthOf(3);
// 					done();
// 				});
// 		});

// 		it('It should NOT GET all the tasks', (done) => {
// 			chai.request('http://localhost:4000')
// 				.get('/api/task')
// 				.end((err, response) => {
// 					response.should.have.status(404);
// 					done();
// 				});
// 		});

// 	});


// 	/**
//      * Test the GET (by id) route
//      */
// 	describe('GET /api/tasks/:id', () => {
// 		it('It should GET a task by ID', (done) => {
// 			const taskId = 1;
// 			chai.request('http://localhost:4000')
// 				.get('/api/tasks/' + taskId)
// 				.end((err, response) => {
// 					response.should.have.status(200);
// 					response.body.should.be.a('object');
// 					response.body.should.have.property('id');
// 					response.body.should.have.property('name');
// 					response.body.should.have.property('completed');
// 					response.body.should.have.property('id').eq(1);
// 					done();
// 				});
// 		});

// 		it('It should NOT GET a task by ID', (done) => {
// 			const taskId = 123;
// 			chai.request('http://localhost:4000')
// 				.get('/api/tasks/' + taskId)
// 				.end((err, response) => {
// 					response.should.have.status(404);
// 					response.text.should.be.eq('The task with the provided ID does not exist.');
// 					done();
// 				});
// 		});

// 	});


// 	/**
//      * Test the POST route
//      */
// 	describe('POST /api/tasks', () => {
// 		it('It should POST a new task', (done) => {
// 			const task = {
// 				name : 'Task 4',
// 				completed : false
// 			};
// 			chai.request('http://localhost:4000')
// 				.post('/api/tasks')
// 				.send(task)
// 				.end((err, response) => {
// 					response.should.have.status(201);
// 					response.body.should.be.a('object');
// 					response.body.should.have.property('id').eq(4);
// 					response.body.should.have.property('name').eq('Task 4');
// 					response.body.should.have.property('completed').eq(false);
// 					done();
// 				});
// 		});

// 		it('It should NOT POST a new task without the name property', (done) => {
// 			const task = {
// 				// name: "vire",
// 				completed : false
// 			};
// 			chai.request('http://localhost:4000')
// 				.post('/api/tasks')
// 				.send(task)
// 				.end((err, response) => {
// 					response.should.have.status(400);
// 					response.text.should.be.eq('The name should be at least 3 chars long!');
// 					done();
// 				});
// 		});

// 	});


// 	/**
//      * Test the PUT route
//      */
// 	describe('PUT /api/tasks/:id', () => {
// 		it('It should PUT an existing task', (done) => {
// 			const taskId = 1;
// 			const task = {
// 				name : 'Task 1 changed',
// 				completed : true
// 			};
// 			chai.request('http://localhost:4000')
// 				.put('/api/tasks/' + taskId)
// 				.send(task)
// 				.end((err, response) => {
// 					response.should.have.status(200);
// 					response.body.should.be.a('object');
// 					response.body.should.have.property('id').eq(1);
// 					response.body.should.have.property('name').eq('Task 1 changed');
// 					response.body.should.have.property('completed').eq(true);
// 					done();
// 				});
// 		});

// 		it('It should NOT PUT an existing task with a completed false', (done) => {
// 			const taskId = 1;
// 			const task = {
// 				name : 'Ta',
// 				completed : false
// 			};
// 			chai.request('http://localhost:4000')
// 				.put('/api/tasks/' + taskId)
// 				.send(task)
// 				.end((err, response) => {
// 					response.should.have.status(400);
// 					response.text.should.be.eq('The completed should be true!');
// 					done();
// 				});
// 		});
// 	});


// 	// /**
// 	//  * Test the DELETE route
// 	//  */
// 	describe('DELETE /api/tasks/:id', () => {
// 		it('It should DELETE an existing task', (done) => {
// 			const taskId = 2;
// 			chai.request('http://localhost:4000')
// 				.delete('/api/tasks/' + taskId)
// 				.end((err, response) => {
// 					response.should.have.status(200);
// 					done();
// 				});
// 		});

// 		it('It should NOT DELETE a task that is not in the database', (done) => {
// 			const taskId = 11;
// 			chai.request('http://localhost:4000')
// 				.delete('/api/tasks/' + taskId)
// 				.end((err, response) => {
// 					response.should.have.status(404);
// 					response.text.should.be.eq('The task with the provided ID does not exist.');
// 					done();
// 				});
// 		});

// 	});
// });
// try {
// 	console.log(1);
// } catch (error) {
// 	console.log(error);
// }
// tests/api.test.js
// import request from 'supertest';
// import app from '../index'; // Assuming your Fastify app is in app.js

// describe('API Tests', () => {
// 	it('should return status 200 for GET /api/users', async () => {
// 		const response = await request(app).get('/api/users');
// 		expect(response.status).toBe(200);
// 	});

// 	// Add more test cases as needed
// });
let foo = 'bar';
let beverages = { tea : [ 'chai', 'matcha', 'oolong' ] };

describe('GET /api/tasks', () => {
	console.log('1st test casese');
	it('It should GET all the tasks', () => {
		foo.should.be.a('string');
		foo.should.equal('bar');
		foo.should.have.lengthOf(3);
		beverages.should.have.property('tea').with.lengthOf(3);
	});});

describe('Fastify API Tests', () => {
	console.log('2nd test casese');
	it('should return status 200 and correct message for GET /api/data', (done) => {
		chai.request(server)
			.get('/api/task')
			.end((err, res) => {
				if (err) return done(err);
				expect(res.body.message).to.equal('Hello, world!');
				done();
			});
	});
});

console.log('Last test case');

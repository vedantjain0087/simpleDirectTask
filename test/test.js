const supertest = require('supertest')
const app = require("../index")

describe('Test for Greeting API', () => {
    it('It should send greeting message', async () => {
        const response = await supertest(app).get('/')
        expect(response.status).toEqual(200)
        expect(response.text).toEqual("Welcome to SWAPI Crawler!!")
    })
})
describe('Test for Query API', () => {
    it('It should fetch films', async () => {
        const response = await supertest(app).get('/query/films/?search=a&sort=desc')
        expect(response.statusCode).toEqual(200)
        expect(response.body).toHaveProperty('data')
        expect(response.body).toHaveProperty('message')
        expect(response.body.message).toEqual("Request Successful")
    })
    it('It should fetch empty results', async () => {
        const response = await supertest(app).get('/query/films/?search=someRandomValue&sort=desc')
        expect(response.statusCode).toEqual(200)
        expect(response.body).toHaveProperty('data')
        expect(response.body).toHaveProperty('message')
        expect(response.body.message).toEqual("No data found")
    })
    it('It should throw bad request when sent invalid entity', async () => {
        const response = await supertest(app).get('/query/someRandomThing/?search=someRandomValue&sort=desc')
        expect(response.statusCode).toEqual(400)
        expect(response.body).toHaveProperty('message')
        expect(response.body.message).toEqual("Please provide valid entity")
    })
    it('It should throw bad request when sent invalid sort', async () => {
        const response = await supertest(app).get('/query/films/?search=someRandomValue&sort=somRandomSort')
        expect(response.statusCode).toEqual(400)
        expect(response.body).toHaveProperty('message')
        expect(response.body.message).toEqual("Please provide valid sorting params")
    })
})

describe('Test for Query API to fetch other enteties', () => {
    it('It should fetch planets', async () => {
        const response = await supertest(app).get('/query/planets/?search=a&sort=desc')
        expect(response.statusCode).toEqual(200)
        expect(response.body).toHaveProperty('data')
        expect(response.body).toHaveProperty('message')
        expect(response.body.message).toEqual("Request Successful")
    })
    it('It should fetch species', async () => {
        const response = await supertest(app).get('/query/species/?search=a&sort=desc')
        expect(response.statusCode).toEqual(200)
        expect(response.body).toHaveProperty('data')
        expect(response.body).toHaveProperty('message')
        expect(response.body.message).toEqual("Request Successful")
    })
    it('It should fetch people', async () => {
        const response = await supertest(app).get('/query/people/?search=a&sort=desc')
        expect(response.statusCode).toEqual(200)
        expect(response.body).toHaveProperty('data')
        expect(response.body).toHaveProperty('message')
        expect(response.body.message).toEqual("Request Successful")
    })
    it('It should fetch vehicles', async () => {
        const response = await supertest(app).get('/query/vehicles/?search=a&sort=desc')
        expect(response.statusCode).toEqual(200)
        expect(response.body).toHaveProperty('data')
        expect(response.body).toHaveProperty('message')
        expect(response.body.message).toEqual("Request Successful")
    })
    it('It should fetch starships', async () => {
        const response = await supertest(app).get('/query/starships/?search=a&sort=desc')
        expect(response.statusCode).toEqual(200)
        expect(response.body).toHaveProperty('data')
        expect(response.body).toHaveProperty('message')
        expect(response.body.message).toEqual("Request Successful")
    })
})

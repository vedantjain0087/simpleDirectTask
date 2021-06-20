const supertest = require('supertest')
const app = require("../index")
describe('Test for Query API', () => {
    it('It should fetch films', async () => {
        const response = await supertest(app).get('/query/starships/?search=a&sort=desc')
    })
})

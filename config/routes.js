const instance = require("../config/axiosConfig")
const syncDb = require("../dao/index")

const getTotalPages = (totalResults, pageLimit) => {
    let totalPages = parseInt(totalResults/pageLimit)
    if (totalResults % pageLimit != 0) {
        totalPages += 1
    }
    return totalPages
}

const getAndStoreResultsByPage = async (data, totalPages, key, url) => {
    for( let i = 2;  i <= totalPages; i++) {
        const nextPageResults = await instance.get(`${url}/?page=${i}`)
        if (nextPageResults.data && nextPageResults.data.results) {
            data[key] = [...data[key], ...nextPageResults.data.results]
        }
    }
}

const insertData = async (req, res) => {
    let data = {}
    const pageLimit = 10
    const entities = ['films', 'planets', 'species', 'people', 'vehicles', 'starships']
    for (let j = 0; j < entities.length; j++) {
        const item = entities[j]
        try {
            const response = await instance.get(item)
            if (response.data && response.data.results) {
                data[item] = [...response.data.results]
            }
            if (response.data && response.data.count > pageLimit) {
                const totalPages = getTotalPages(response.data.count, pageLimit)
                await getAndStoreResultsByPage(data, totalPages, item, item)
            }
        } catch (e) {
            console.log(e)
            res.status(e.response.status).json({data: [], message: `There was some error while fetching ${item}`})
        }
    }
    await syncDb(data)
    res.json({data: data})
}

const welcome = async (req, res) => {
    res.send("Hello!")
}
module.exports = router => {
    router.get("/", welcome)
    router.get("/insertData", insertData)
}
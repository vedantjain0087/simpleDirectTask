const instance = require("../config/axiosConfig")
const syncDb = require("../dao/syncDb")
const { FILMS, PLANETS, SPECIES, PEOPLE, VEHICLES, STRASHIPS } = require("../constants")

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

const syncDatabase = async () => {
    let data = {}
    const pageLimit = 10
    const entities = [FILMS, PLANETS, SPECIES, PEOPLE, VEHICLES, STRASHIPS]
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
    try {
        await syncDb(data)
    } catch (e) {
        console.log(e)
    }
}

module.exports = syncDatabase

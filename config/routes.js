const queryDao = require("../dao/queryDao")
const { FILMS, PLANETS, SPECIES, PEOPLE, VEHICLES, STRASHIPS } = require("../constants")

const welcome = async (req, res) => {
    res.send("Welcome to SWAPI Crawler!!")
}

const queryByLiteral = async (req, res) => {
    const { entity } = req.params
    let { search, sort } = req.query
    const ENTITIES = [FILMS, PLANETS, SPECIES, PEOPLE, VEHICLES, STRASHIPS]
    if (!ENTITIES.includes(entity)) {
        res.status(400).json({message: "Please provide valid entity"})
        return
    }
    if (!search) {
        search = ""
    }
    if (sort.toLowerCase() !== 'asc' && sort.toLowerCase() !== 'desc') {
        res.status(400).json({message: "Please provide valid sorting params"})
        return
    }
    sort = sort || 'ASC'
    sort = sort.toUpperCase()
    try {
        const results = await queryDao(entity, search, sort)
        if (results && results.length) {
            res.json({data: results, message: "Request Successful"})
        } else {
            res.json({data: [], message: "No data found"})
        }
    } catch (e) {
        res.status(500).json({message: "There was some error in processing your request"})
    }
}

module.exports = router => {
    router.get("/", welcome),
    router.get("/query/:entity/", queryByLiteral)
}

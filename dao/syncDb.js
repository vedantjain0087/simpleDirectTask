const Film = require("../models/film")
const Planet = require("../models/planet")
const Specie = require("../models/specie")
const Person = require("../models/person")
const Vehicle = require("../models/vehicle")
const Starship = require("../models/starship")
const _ = require('lodash')
const dbConnection = require("../config/dbConfig")

const getIdFromUrl = (url) => {
    if (!url) {
        return null
    }
    arr = url.split("/")
    arr.pop()
    return arr.pop()
}

const syncDb = async (data) => {
    const { films, planets, species, people, vehicles, starships } = data
    await dbConnection.transaction(async t => {
        await dropTables(t)
        await createFilms(t, films)
        await createPlanets(t, planets)
        await createSpecies(t, species)
        await createPeople(t, people)
        await createVehicles(t, vehicles)
        await createStarships(t, starships)
    })
}

const dropTables = async (t) => {
    await Starship.sequelize.query("SET FOREIGN_KEY_CHECKS = 0", null);
    await Starship.truncate();
    await Starship.sequelize.query("SET FOREIGN_KEY_CHECKS = 1", null);
    await Vehicle.sequelize.query("SET FOREIGN_KEY_CHECKS = 0", null);
    await Vehicle.truncate();
    await Vehicle.sequelize.query("SET FOREIGN_KEY_CHECKS = 1", null);
    await Person.sequelize.query("SET FOREIGN_KEY_CHECKS = 0", null);
    await Person.truncate();
    await Person.sequelize.query("SET FOREIGN_KEY_CHECKS = 1", null);
    await Specie.sequelize.query("SET FOREIGN_KEY_CHECKS = 0", null);
    await Specie.truncate();
    await Specie.sequelize.query("SET FOREIGN_KEY_CHECKS = 1", null);
    await Planet.sequelize.query("SET FOREIGN_KEY_CHECKS = 0", null);
    await Planet.truncate();
    await Planet.sequelize.query("SET FOREIGN_KEY_CHECKS = 1", null);
    await Film.sequelize.query("SET FOREIGN_KEY_CHECKS = 0", null);
    await Film.truncate();
    await Film.sequelize.query("SET FOREIGN_KEY_CHECKS = 1", null);
}

const createFilms = async (t, films) => {
    let bulkFilms = []
    for(let i=0; i<films.length; i++) {
        const filmItem = films[i]
        const filmObject = _.pick(filmItem, [
            'title',
            'episode_id',
            'opening_crawl',
            'director',
            'producer',
            'release_date',
            'created',
            'edited',
            'url'
        ])
        filmObject.filmId = getIdFromUrl(filmObject.url)
        bulkFilms.push(filmObject)
    }
    await Film.bulkCreate(bulkFilms, { transaction: t })
}

const createPlanets = async (t, planets) => {
    const bulkPlanets = []
    for(let i=0; i<planets.length; i++) {
        const planetItem = planets[i]
        const planetObj = _.pick(planetItem, [
            'name',
            'rotation_period',
            'orbital_period',
            'diameter',
            'climate',
            'gravity',
            'terrain',
            'surface_water',
            'population',
            'created',
            'edited',
            'url'
        ])
        planetObj.planetId = getIdFromUrl(planetObj.url)
        bulkPlanets.push(planetObj)
    }
    await Planet.bulkCreate(bulkPlanets, { transaction: t })
}

const createSpecies = async (t, species) => {
    const bulkSpecies = []
    for(let i=0; i<species.length; i++) {
        const specieItem = species[i]
        const specieObj = _.pick(specieItem, [
            'name',
            'designation',
            'average_height',
            'skin_colors',
            'hair_colors',
            'eye_colors',
            'average_lifespan',
            'language',
            'created',
            'edited',
            'url'
        ])
        specieObj.planetId = getIdFromUrl(specieItem.homeworld)
        specieObj.specieId = getIdFromUrl(specieItem.url)
        bulkSpecies.push(specieObj)
    }
    await Specie.bulkCreate(bulkSpecies, { transaction: t })
}

const createPeople = async (t, people) => {
    const bulkPeople = []
    for(let i=0; i<people.length; i++) {
        const personItem = people[i]
        const personObj = _.pick(personItem, [
            'name',
            'height',
            'mass',
            'hair_color',
            'skin_color',
            'eye_color',
            'birth_year',
            'gender',
            'created',
            'edited',
            'url'
        ])
        personObj.planetId = getIdFromUrl(personItem.homeworld)
        personObj.peopleId = getIdFromUrl(personItem.url)
        bulkPeople.push(personObj)
    }
    await Person.bulkCreate(bulkPeople, { transaction: t })
}

const createVehicles = async (t, vehicles) => {
    const bulkVehicles = []
    for(let i=0; i<vehicles.length; i++) {
        const vehicleItem = vehicles[i]
        const vehicleObj = _.pick(vehicleItem, [
            'name',
            'model',
            'manufacturer',
            'cost_in_credits',
            'length',
            'max_atmosphering_speed',
            'crew',
            'passengers',
            'cargo_capacity',
            'consumables',
            'vehicle_class',
            'created',
            'edited',
            'url'
        ])
        vehicleObj.vehicleId = getIdFromUrl(vehicleItem.url)
        bulkVehicles.push(vehicleObj)
    }
    await Vehicle.bulkCreate(bulkVehicles, { transaction: t })
}

const createStarships = async (t, starships) => {
    const bulkStarShips = []
    for(let i=0; i<starships.length; i++) {
        const starShipItem = starships[i]
        const starShipObj = _.pick(starShipItem, [
            'name',
            'model',
            'manufacturer',
            'cost_in_credits',
            'length',
            'max_atmosphering_speed',
            'crew',
            'passengers',
            'cargo_capacity',
            'consumables',
            'hyperdrive_rating',
            'MGLT',
            'starship_class',
            'created',
            'edited',
            'url'
        ])
        starShipObj.starShipId = getIdFromUrl(starShipItem.url)
        bulkStarShips.push(starShipObj)
    }
    await Starship.bulkCreate(bulkStarShips, { transaction: t })
}

module.exports = syncDb

const Sequelize = require('sequelize')
const Op = Sequelize.Op;

const Film = require("../models/film")
const Planet = require("../models/planet")
const Specie = require("../models/specie")
const Person = require("../models/person")
const Vehicle = require("../models/vehicle")
const Starship = require("../models/starship")

const { FILMS, PLANETS, SPECIES, PEOPLE, VEHICLES, STRASHIPS } = require("../constants")

const queryDao = async (entity, search, sort) => {
    switch (entity) {
        case FILMS:
            return await Film.findAll(
                {
                    where: {
                        title: {
                            [Op.like]: '%'+search+'%'
                        }
                    },
                    order: [
                        ['title', sort]
                    ]
                }
            )
            break
        case PLANETS:
            return await Planet.findAll(
                {
                    where: {
                        name: {
                            [Op.like]: '%'+search+'%'
                        }
                    },
                    order: [
                        ['name', sort]
                    ]
                }
            )
            break
        case SPECIES:
            return await Specie.findAll(
                {
                    where: {
                        name: {
                            [Op.like]: '%'+search+'%'
                        }
                    },
                    order: [
                        ['name', sort]
                    ]
                }
            )
            break
        case PEOPLE:
            return await Person.findAll(
                {
                    where: {
                        name: {
                            [Op.like]: '%'+search+'%'
                        }
                    },
                    order: [
                        ['name', sort]
                    ]
                }
            )
            break
        case VEHICLES:
            return await Vehicle.findAll(
                {
                    where: {
                        name: {
                            [Op.like]: '%'+search+'%'
                        }
                    },
                    order: [
                        ['name', sort]
                    ]
                }
            )
            break
        case STRASHIPS:
            return await Starship.findAll(
                {
                    where: {
                        name: {
                            [Op.like]: '%'+search+'%'
                        }
                    },
                    order: [
                        ['name', sort]
                    ]
                }
            )
            break
        default:
            return null
    }
}

module.exports = queryDao

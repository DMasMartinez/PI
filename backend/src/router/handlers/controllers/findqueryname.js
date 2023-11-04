
const {Pokemon} = require('../../../../db')

const findqueryname = (query) =>{
    const pokes = Pokemon.findAll({
        where: query
    })
    return pokes
}
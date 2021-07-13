// STRETCH
const cars  = [
    {
        vin: '111111111111',
        make: "toyota",
        model: 'prius',
        milege: 215000,
        title: 'clean',
        transmission:'manuel'
    },
    {
        vin: '111111111111',
        make: "toyota",
        model: 'corolla',
        milege: 115000,
        title: 'salvage',
    },
    {
        vin: '111111111111',
        make: "ford",
        model: 'focus',
        milege: 15000,
    },
]

exports.seed = function(knex){
    return knex('cars')
    .truncate().then(() => {
        return knex('knex').insert(cars)
    })
    
}

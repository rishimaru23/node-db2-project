// STRETCH
const cars  = [
    {
        vin: '4T1BK1EBXEU199718',
        make: "toyota",
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission:'manuel'
    },
    {
        vin: 'JH4KB16516C060337',
        make: "toyota",
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: '1G2ZH36N174108462',
        make: "ford",
        model: 'focus',
        mileage: 15000,
    },
]

exports.seed = function(knex){
    return knex('cars')
    .truncate().then(() => {
        return knex('cars').insert(cars)
    })
    
}

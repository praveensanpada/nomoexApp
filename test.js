// const redis = require('redis')

// // production-june.kbshs8.0001.aps1.cache.amazonaws.com

// const client = redis.createClient(6378, "nodedb-001.hhtihc.0001.usw2.cache.amazonaws.com")

// // nodedb.hhtihc.ng.0001.usw2.cache.amazonaws.com:6378

// // nodedb-002.hhtihc.0001.usw2.cache.amazonaws.com:6378

// // nodedb-001.hhtihc.0001.usw2.cache.amazonaws.com:6378

// client.on('connect', () => {
//     console.log('Client connected to redis...')
// })

// client.on('ready', () => {
//     console.log('Client connected to redis and ready to use...')
// })

// client.on('error', (err) => {
//     console.log(err)
// })


// phoneNumber: "*******" + phone.slice(7),


// client.on('end', () => {
//     console.log('Client disconnected from redis')
// })


// console.log("Done All")
// /*
// process.on('SIGINT', () => {
//         client.quit()
//     })     
// */


// // module.exports = client



// ---------------------------------------------


// const Redis = require('ioredis')
// const redis = new Redis({
//     port: 6378,
//     host: 'nodedb-001.hhtihc.0001.usw2.cache.amazonaws.com',
//     connectTimeout: 10000 // optional
// });


// console.log(redis)


const redis = require('redis');
const client = redis.createClient({
    host: 'nodedb-001.hhtihc.0001.usw2.cache.amazonaws.com',
    port: 6378,
    // password: '<password>'
});

client.on('error', err => {
    console.log('Error ' + err);
});

client.on('connect', () => {
    console.log('Client connected to redis...')
})
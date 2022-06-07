const redis = require('redis')

const client = redis.createClient({
  port: 6379,
  host: '127.0.0.1',
  // password: "password"
})

client.on('connect', () => {
  console.log('Client connected to redis...')
})

client.on('ready', () => {
  console.log('Client connected to redis and ready to use...')
})

client.on('error', (err) => {
  console.log(err.message)
})

client.on('end', () => {
  console.log('Client disconnected from redis')
})

// process.on('SIGINT', () => {
//   client.quit()
// })

module.exports = client

// -------------------------------------------------

// const redis = require('redis')

// const client = redis.createClient(6378, "nodedb-001.hhtihc.0001.usw2.cache.amazonaws.com")

// client.on('connect', () => {
//     console.log('Client connected to redis...')
// })

// client.on('ready', () => {
//     console.log('Client connected to redis and ready to use...')
// })

// client.on('error', (err) => {
//     console.log(err)
// })



// client.on('end', () => {
//     console.log('Client disconnected from redis')
// })


// /*
// process.on('SIGINT', () => {
//         client.quit()
//     })     
// */


// module.exports = client

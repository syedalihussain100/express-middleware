const PORT = process.env.PORT || 3002

require('./server')({
  port:PORT,
  cb: () => console.log(`Server is running on ${PORT}`)
})




// const PORT = process.env.PORT || 3002

// require('./server')({
//   port: PORT,
//   cb: () => console.log(`Server is running on ${PORT}`)
// })




//importing json-server library
const jsonServer=require('json-server')
//creating server instatnce
const mpServer=jsonServer.create()
//getting default middlewares
const middleWares=jsonServer.defaults()
//setting routes for resourses
const routes=jsonServer.router('db.json')


//configuring server
mpServer.use(middleWares)
mpServer.use(routes)

const PORT=3000 || process.env.PORT

mpServer.listen(PORT,()=>{
    console.log("server running at :"+PORT)
})
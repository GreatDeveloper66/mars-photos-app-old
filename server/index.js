import dotenv from 'dotenv'
import express from 'express'
//import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import fetch from 'isomorphic-fetch'
import cors from 'cors'
dotenv.config()
const app = express()
const PORT = process.env.BACK_URL
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
const [ URL, key ] = [ process.env.BASE_URL, process.env.MARS_API_KEY ]
/*
const URL = process.env.BASE_URL
    const sol = 1000
    const key = process.env.MARS_API_KEY
    const camera = process.env.ROVER_CAMERAS
    const fetchURL = `${URL}sol=${sol}&camera=${camera}&api_key=${key}`
    */
let corsOptions = {
    origin: process.env.FRONT_URL,
    optionsSuccessStatus: 200
}
app.listen(PORT, () => {
    console.log(`Your app is listening on ${PORT}`)
})

app.get('/sol/:sol/camera/:camera', cors(corsOptions), (req,res) => {
    const { sol, camera } = req.params
    const fetchURL = `${URL}sol=${sol}&camera=${camera}&api_key=${key}`
    console.log(fetchURL)
    fetch(fetchURL)
        .then(resp => resp.json())
        .then(data => res.send(data))
        .catch(error => console.log(error))
    
})

app.get('/', cors(corsOptions), (req,res) => {
    res.send('hello')
})



/*
dotenv.config()


/*
marsRoutes(app)
*/
/*
mongoose.Promise = global.Promise
mongoose.connect(process.env.API_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).
then(() => {
    const URL = process.env.BASE_URL
    const sol = 1000
    const key = process.env.MARS_API_KEY
    const camera = process.env.ROVER_CAMERAS
    //fetch()

}).
catch((err) => {
    console.log('Connection unsuccessful ${err}')
})


const MongoClient = require('mongodb').MongoClient;
const uri = process.env.API_KEY
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

*/
/*
const URL = process.env.BASE_URL
const sol = 1000
const key = process.env.MARS_API_KEY
const camera = process.env.ROVER_CAMERAS
const fetchURL = `${URL}sol=${sol}&camera=${camera}&api_key=${key}`


app.listen(PORT, () => {
    console.log(`Your app is listening on ${PORT}`)
})
/*
fetch(fetchURL)
    .then(resp => resp.json())
    .then(data => {
        app.get('/', cors(corsOptions), (req,res) => {
          res.send(`${data.photos[0].img_src}, ${data.photos[0].earth_date}`)
        })

    })
    .catch(error => console.log(error))

    */
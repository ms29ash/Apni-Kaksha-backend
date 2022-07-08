
import express from 'express';
import cors from 'cors';
import Course from './models/Course.js'
//importing mongodb
import connectToMongo from './db.js'
const app = express();
app.use(cors())
app.use(express.json());

// Connecting to Database
connectToMongo();

/* Get port from environment and store in Express.*/

const port = process.env.PORT || 4000;
// app.set('port', port);


//Test route
app.get('/', (req, res) => {
    res.send('Apni Kaksha')
})
app.get('/', (req, res) => {
    res.send('Apni Kaksha')
})


app.get('/course', async (req, res) => {
    let user = await Course.find();
    res.json(user)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




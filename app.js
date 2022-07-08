
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


app.get('/course/:id', async (req, res) => {
    try {
        const id = req.params.id;
        // const views = req.params.views;
        // const id = '62c7d56fc7d48436060ff413'
        console.log(id)

        let course = await Course.find({ _id: id.toString() });
        // let course = await Course.findOne({ views: views });
        res.json(course);
    } catch (error) {
        console.log(error);
    }

})
// app.post('/course', async (req, res) => {
//     let user = await Course.create(req.body);
//     res.json(user)

// })

// app.get('/course', async (req, res) => {
//     let course = await Course.find();
//     res.json(course)

// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




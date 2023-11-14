const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 5000
const DB = 'mongodb+srv://MyFood:Joker0505@cluster0.adwswlq.mongodb.net/MyFood?retryWrites=true&w=majority'

mongoose.connect(DB).then(() => {
    console.log('connection sussessful')
    const fetched_data= mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(function(err,data){
        if(err) console.log(err);
        else console.log(data);
    })
}).catch((err) => { console.log('no connection') })


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
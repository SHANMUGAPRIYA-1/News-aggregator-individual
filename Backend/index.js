



const express = require('express');
const bodyParser = require('body-parser');
const Axios = require('axios');
const mongoose = require('mongoose');
const  Aggregator =require('./Models/news')
const cors = require('cors')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/NewsAggregator')
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("DB Connection Failed"));


app.get("/news",async(req,res)=>{
      const news= await Aggregator.find({})
      console.log(news);
      res.json(news);
})




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

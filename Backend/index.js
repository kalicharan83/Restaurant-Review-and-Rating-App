const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const uri = 'mongodb://localhost:27017';
const dbName = 'restaurantsdb';
const cors = require('cors');
app.use(cors());


app.use(bodyParser.json());

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('restaurants');

    app.get('/backend/restaurants', async (req, res) => {
      try {
        const page=parseInt(req.query.page);
        console.log("All restaurants for page ",page," is retreived...");
        const limit=7;{/*Taking limit as hardcoded*/}
        const skip=(page-1)*limit;
        const total=await collection.countDocuments();
        console.log(total);
        const restaurants = await collection.find().skip(skip).limit(limit).toArray();
        res.json({restaurants,total,limit});
      } catch (err) {
        console.error('Error fetching restaurants:', err);
        res.status(500).send(err.message);
      }
    });

    app.get('/backend/restaurants/:id', async (req, res) => {
      try {
        const restaurant = await collection.findOne({ _id: new ObjectId(req.params.id) });
        if (!restaurant) {
          return res.status(404).send('Restaurant not found');
        }
        res.json(restaurant);
      } catch (err) {
        console.error('Error fetching restaurant:', err);
        res.status(500).send(err.message);
      }
    });

    app.post('/backend/restaurants/:id',async (req,res)=>{
      try{
        const restaurant=req.params.id;
        const {...currentReview}=req.body;
        const currentrestaurant=await collection.findOne({ _id: new ObjectId(restaurant) });
        const reviews=currentrestaurant.reviews||[];
        reviews.push(currentReview);
        const result=await collection.updateOne({_id:new ObjectId(restaurant)},{$set:{reviews:reviews}});
      }
      catch(err)
      {
        console.error('Error in updating the rating:',err);
        res.status(500).send(err.message);
      }
    });

    app.listen(3000);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

main().catch(console.error);

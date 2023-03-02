const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = 5000

app.use(cors())
app.use(express.json());


const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.czg7kh6.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    client.connect();

    app.get('/', (req, res) => {
      res.send('Banckend connected with Nodejs & MongoDB')
    })

    app.post('/order', async (req, res) => {
      const database = client.db("arena21").collection("arena_single_sales_page");
      const doc = req.body
      const result = await database.insertOne(doc);
      console.log("Post request gotten",result)
      res.send(result)
      console.log(req.body);
    })

    // Establish and verify connection
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
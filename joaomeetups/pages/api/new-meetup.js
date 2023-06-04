import { MongoClient } from 'mongodb';

async function handler(req, res) {

  if (req.method === 'POST') {
    const data = req.body;
    const { title, image, address, description } = data;

    const client = await MongoClient.connect('mongodb+srv://joaonoel:lionel123@cluster0.jirbtnz.mongodb.net/meetings?retryWrites=true&w=majority/')
    const db = client.db();

    const meetupsCollection = db.collection('meetings');
    const result = await meetupsCollection.insertOne(data)

    console.log(result);
    client.close();

    res.status(201).json({ message: 'Meeting scheduled!' });
  }
}

export default handler;
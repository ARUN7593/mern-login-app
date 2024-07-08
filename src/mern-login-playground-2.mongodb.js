const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://localhost:27017"; // Update with your MongoDB URI
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("test"); // Update with your database name
    const collection = database.collection("people"); // Update with your collection name

    const doc = { name: "Alice", age: 25, address: "123 Main St" };
    const result = await collection.insertOne(doc);

    console.log(
      `New document inserted with the following id: ${result.insertedId}`
    );
    const foundDoc = await collection.findOne({ name: "Alice" });
    console.log("Found document:", foundDoc);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

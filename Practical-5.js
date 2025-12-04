#EMIT AN EVENT "greet" AND LISTEN TO IT

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("greet"
, (name) => {
console.log(`Hello, ${name}! Welcome to Node.js events.
`);
});

eventEmitter.emit("greet"
,
"Ayush");

#CONNECT NODEJS TO MONGODB AND INSERT A USER RECORD
const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
async function run() {
try {
await client.connect();
console.log("Connected to MongoDB ✅");
const db = client.db("practical5"); 
const users = db.collection("users"); 
const newUser = {
name: "Ayush"
,
email: "ayushtomar@gmail.com"
,
age: 21,
createdAt: new Date()
};
const result = await users.insertOne(newUser);
console.log("User inserted with _id:"
, result.insertedId);
} catch (err) {
console.error("Error:"
, err);
} finally {
await client.close();
}
}
run()
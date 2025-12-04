# MongoDB
EMIT AN EVENT "greet" AND LISTEN TO IT // code6.js const EventEmitter = require("events");

👉 Imports Node.js’s built-in events module. It contains the EventEmitter class, which lets us create and handle custom events. js // Create an instance of EventEmitter const eventEmitter = new EventEmitter();

👉 Creates a new eventEmitter object. This object can: listen for events (.on()) emit (trigger) events (.emit()) js // Register (listen) for the "greet" event eventEmitter.on("greet", (name) => { console.log(Hello, ${name}! Welcome to Node.js events.\n); });

👉 Here we’re saying: “When the event named greet happens, run this function.” The callback (name) => { ... } will get any data passed with the event. In this case, it prints a personalized greeting with the provided name. js // Emit the "greet" event eventEmitter.emit("greet", "Mohit");

👉 This triggers the greet event and passes "Asmi" as an argument. Since we already registered a listener for "greet", the function runs and prints: css Hello, Asmi! Welcome to Node.js events. ⚡ If you emit eventEmitter.emit("greet", "John"), it would print: css Hello, John! Welcome to Node.js events.

#CONNECT NODEJS TO MONGODB AND INSERT A USER RECORD const { MongoClient } = require("mongodb");

👉 Imports MongoClient from the official MongoDB Node.js driver. MongoClient lets us connect to a MongoDB database and perform operations. js // Local MongoDB URI const uri = "mongodb://127.0.0.1:27017";

👉 Sets the connection string for a local MongoDB server running on default port 27017. js const client = new MongoClient(uri);

👉 Creates a MongoDB client instance using the URI. This client is used to connect and interact with the database. js async function run() { try { await client.connect(); console.log("Connected to MongoDB ✅");

👉 Defines an async function run to: Connect to MongoDB asynchronously using await client.connect(). Logs a message once connected. js const db = client.db("practical5"); // database name const users = db.collection("users"); // collection name

👉 Selects the database practical5.

👉 Selects the collection users where documents will be stored. js const newUser = { name: "Mohit", email: "mohit@.com", age: 21, createdAt: new Date() };

👉 Creates a JavaScript object representing the new user to insert. createdAt stores the current timestamp. js const result = await users.insertOne(newUser); console.log("User inserted with _id:", result.insertedId);

👉 Inserts the document into the users collection. insertOne() is asynchronous, so we use await. result.insertedId gives the unique MongoDB _id of the inserted document. js } catch (err) { console.error("Error:", err); } finally { await client.close(); } catch logs any errors during connection or insertion. finally closes the MongoDB connection to free resources. js run();

👉 Calls the run function to execute the whole process. ✅ Output (example): pgsql Copy code Connected to MongoDB ✅ User inserted with _id: 652f1234abcd5678ef901234

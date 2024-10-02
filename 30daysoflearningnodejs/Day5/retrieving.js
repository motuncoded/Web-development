const http = require('http');
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function connectDB() {
    await client.connect();
    const db = client.db('learning');
    const usersCollection = db.collection('users');
    return usersCollection;
}

const server = http.createServer(async (req, res) => {
    const method = req.method;
    const url = req.url;

    const usersCollection = await connectDB();

    if (url.startsWith('/users')) {
        if (method === 'GET') {
            // Fetch all users
            const users = await usersCollection.find().toArray();
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(users));
        } else if (method === 'POST') {
            // Add a new user
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', async () => {
                const newUser = JSON.parse(body);
                await usersCollection.insertOne(newUser);
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ message: 'User added' }));
            });
        } 
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

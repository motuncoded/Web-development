

const http = require('http');
const fs = require('fs');
const path = './data.json';

// Helper functions
function readFromFile() {
    if (fs.existsSync(path)) {
        const data = fs.readFileSync(path, 'utf8');
        return JSON.parse(data);
    }
    return { users: [] };
}

function writeToFile(data) {
    fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
}

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;

    // Read data from file
    let { users, products } = readFromFile();

    if (url.startsWith('/users')) {
        if (method === 'GET') {
            // Respond with users from file
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(users));
        } else if (method === 'POST') {
            // Add a new user
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                const newUser = JSON.parse(body);
                users.push(newUser);
                writeToFile({ users, products });
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ message: 'User added', users }));
            });
        } else if (method === 'PUT') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                const updatedUser = JSON.parse(body);
                const index = users.findIndex(user => user.id === updatedUser.id);
                if (index !== -1) {
                    users[index] = updatedUser;
                    writeToFile({ users, products });
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ message: 'User updated', users }));
                } else {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ message: 'User not found' }));
                }
            });
        } else if (method === 'DELETE') {
            const id = Number(url.split('/').pop());
            users = users.filter(user => user.id !== id);
            writeToFile({ users, products });
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: 'User deleted', users }));
        }
    }  else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
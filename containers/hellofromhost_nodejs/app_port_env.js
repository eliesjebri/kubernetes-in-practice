const http = require('http');
const os = require('os');

// Obtient le nom d'hôte
const hostname = os.hostname();

// Définit le port à partir d'une variable d'environnement ou utilise le port 3000 par défaut
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello from ${hostname}\n`);
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

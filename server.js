const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

function yearfrac(start_date, end_date) {
    // TODO: return the fractional number of years between these dates
}

function calculate(input) {
    // TODO: your code goes here; see spreadsheet
    const totalCost = 0;
    return totalCost;
}

const server = http.createServer((req, res) => {
    switch (req.url) {

        case '/':
            fs.readFile(path.join(__dirname, 'index.html'), (error, data) => {
                if (error) {
                    res.writeHead(404);
                    res.end();
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end(data);
                }
            });
            break;

        case '/api/calculate':
            let data = '';
            req.on('data', chunk => data += chunk);
            req.on('end', () => {
                const input = JSON.parse(data);
                const totalCost = calculate(input);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ 'totalCost': totalCost }));
            });
            break;

        default:
            res.writeHead(404);
            res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

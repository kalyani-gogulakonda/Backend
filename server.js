const http = require('http');
const hostName = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('ContentType', 'text/plain');
    // res.setHeader('ContentType', 'text/html');
    res.end('Hello NodeJS!');
    // res.end('<h1>Hello NodeJS!</h1>');
});
server.listen(port, hostName, () => {
    console.log(`Server is running on localhost: ${port}`);
})

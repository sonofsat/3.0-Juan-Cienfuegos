const http = require("http");
const url = require("url");

const server = http.createServer(function(req, res) {
    if (req.method !== "GET") {
        res.writeHead(405, {"content-type": "text/plain"});
        return res.end("send me a GET\n");
    }

    const parsedUrl = url.parse(req.url, true);
    const dt = new Date(parsedUrl.query.iso);
    let result;

    if (/^\/api\/parsetime/.test(req.url)) {
        result = {hour: dt.getHours(), minute: dt.getMinutes(), second: dt.getSeconds()};
    } else if (/^\/api\/unixtime/.test(req.url)) {
        result = { unixtime: dt.getTime() };
    }

    if (result) {
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404, {"content-type": "text/plain"});
        res.end("Not Found");
    }
});

server.listen(Number(process.argv[2]));

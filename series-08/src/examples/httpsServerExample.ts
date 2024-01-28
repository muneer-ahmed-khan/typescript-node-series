import * as https from "https";
import * as fs from "fs";
import * as util from "util";

const readFile = util.promisify(fs.readFile);

async function startServer() {
  const [key, cert] = await Promise.all([
    readFile("key.pem"),
    readFile("certificate.pem"),
  ]);
  https
    .createServer({ key, cert }, (request, response) => {
      response.statusCode = 200;
      response.end("hello world");
    })
    .listen(8000, () => {
      console.log("Server started");
    });
}

startServer();

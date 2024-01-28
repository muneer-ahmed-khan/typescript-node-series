import * as http2 from "http2";
import * as fs from "fs";
import * as util from "util";

const readFile = util.promisify(fs.readFile);

async function startServer() {
  const [key, cert] = await Promise.all([
    readFile("key.pem"),
    readFile("certificate.pem"),
  ]);

  const server = http2.createSecureServer({ key, cert }).listen(8080, () => {
    console.log("Server started");
  });

  server.on("stream", (stream, headers) => {
    stream.respond({
      "content-type": "text/html",
      ":status": 200,
    });
    stream.end("<h1>Hello World</h1>");
  });

  server.on("error", (err) => console.error(err));
}

startServer();

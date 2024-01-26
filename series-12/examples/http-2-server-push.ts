import * as http2 from "http2";
import * as fs from "fs";
import * as util from "util";

const readFile = util.promisify(fs.readFile);

async function startServer() {
  const [key, cert] = await Promise.all([
    readFile("key.pem"),
    readFile("certificate.pem"),
  ]);

  const server = http2
    .createSecureServer({ allowHTTP1: false, key, cert })
    .listen(8080, () => {
      console.log("Server started");
    });

  server.on("stream", (stream, headers) => {
    if (!stream.pushAllowed) return;
    const path = headers[":path"];
    switch (path) {
      case "/": {
        stream.pushStream({ ":path": "/style.css" }, (err, pushStream) => {
          if (err) throw err;
          pushStream.respond({
            "content-type": "text/css",
            ":status": 200,
          });
          pushStream.end(`
          body {
            color: red;
          }
        `);
        });
        stream.respond({
          "content-type": "text/html",
          ":status": 200,
        });
        stream.end(` 
        <head>
          <link rel="stylesheet" type="text/css" href="style.css">
        </head>
        <body>
          <h1>Hello World</h1>
        </body>
      `);
        break;
      }
      case "/style.css": {
        stream.respond({
          "content-type": "text/css",
          ":status": 200,
        });
        stream.end(`
        body {
          color: red;
        }
      `);
        break;
      }
      default: {
        stream.respond({
          ":status": 404,
        });
        stream.end();
      }
    }
  });

  server.on("error", (err) => console.error(err));
}

startServer();

import { request, RequestOptions } from "http";

const pidObject: { [key: number]: number } = {};
const promiseArray = [];

for (let i = 0; i < 100; ++i) {
  promiseArray.push(
    performRequest({
      host: "127.0.0.1",
      port: 8000,
      path: "/",
      method: "GET",
    }).then((processPid: number) => {
      pidObject[processPid] = pidObject[processPid]
        ? ++pidObject[processPid]
        : 1;
    })
  );
}

Promise.all(promiseArray).then(() => console.log(pidObject));

function performRequest(option: RequestOptions) {
  return new Promise((resolve, reject) => {
    request(option, function (response) {
      const { statusCode, headers } = response;
      if (statusCode >= 300) {
        reject(new Error(response.statusMessage));
      }
      const chunks: Buffer[] = [];
      response.on("data", (chunk) => {
        chunks.push(chunk);
      });
      response.on("end", () => {
        const data = Buffer.concat(chunks).toString();

        resolve(data);
      });
    }).end();
  });
}

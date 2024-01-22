import { Readable } from "stream";

const stream = new Readable();

stream.push("Hello");
stream.push("World!");
stream.push(null);

stream.on("pause", () => {
  console.log("pause stream event");
  stream.resume();
});

stream.on("resume", () => {
  console.log("resume stream event");
});

stream.pause();

stream.on("data", (chunk) => {
  console.log("read chunk");
});

stream.on("readable", () => {
  let data;
  while (null !== (data = stream.read())) {
    console.log("Received:", data.toString());
  }
});

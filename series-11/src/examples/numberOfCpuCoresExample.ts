import * as os from "os";

const numberOfCores = os.cpus().length;

console.log("Total number of cores on my system ", numberOfCores);
console.log("check all cpus ", os.cpus());

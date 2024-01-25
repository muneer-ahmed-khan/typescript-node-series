import { spawn, exec } from "child_process";

// spawn("ls | grep .txt"); // throws an error

// give us the response in error first callback directly without using streams
// it creates the shell
exec("ls | grep .txt", (error, response) => {
  console.log(response);
});

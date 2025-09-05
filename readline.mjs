import readline from "readline";
import process  from "process";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("What is your name?", (answer) => {
    console.info(`Hello ${answer}`);
    input.close();
})
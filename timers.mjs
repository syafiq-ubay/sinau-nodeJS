import timers from "timers/promises";

for await (const startTimes of timers.setInterval(1000,"ignored")){
    console.info(`Start time at ${new Date()}`);
}
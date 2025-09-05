import net from "net";

const client = net.createConnection({
    port: 3000,
    host: "localhost",
});

client.addListener("data", (data) => {
    console.info(`${new Date()} Received data: ${data.toString()}`);
});

setInterval(() => {
    client.write("ubay\r\n")
}, 2000);
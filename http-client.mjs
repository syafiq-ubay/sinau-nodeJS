import * as https from "https";

const endpoint = "https://eo2mq7ldo155m23.m.pipedream.net";

const body = JSON.stringify({
    firstName: "M Syafiq ",
    lastName: "Ubaidillah",
});

const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Content-Length": Buffer.byteLength(body)
    }
}, (response) => {
    console.info(`Status Code: ${response.statusCode}`);
    console.info(`Headers:`, response.headers);

    let responseData = '';

    // Kumpulkan semua data chunks
    response.on("data", (chunk) => {
        responseData += chunk.toString();
    });

    // Setelah semua data diterima
    response.on("end", () => {
        console.info(`\nComplete Response:`);
        try {
            const parsedData = JSON.parse(responseData);
            console.info(JSON.stringify(parsedData, null, 2)); // Pretty print JSON
        } catch (error) {
            console.info(responseData); // Jika bukan JSON
        }
        console.info(`\nRequest completed successfully!`);
    });
});

// Error handling
request.on("error", (error) => {
    console.error(`Request Error: ${error.message}`);
});

// Timeout handling
request.setTimeout(10000, () => {
    console.error("Request timeout!");
    request.destroy();
});

console.info("Sending POST request...");
console.info(`Body: ${body}`);

request.write(body);
request.end();
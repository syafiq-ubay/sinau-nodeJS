
const buffer = Buffer.from("M Syafiq Ubaidillah", 'utf8');

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bfBase64 = Buffer.from("TSBTeWFmaXEgVWJhaWRpbGxhaA==",'base64');
console.info(bfBase64.toString("utf8"));
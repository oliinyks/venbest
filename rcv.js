const dgram = require("dgram");

const PORT = 2222;
const HOST = "localhost";

const server = dgram.createSocket("udp4");

server.on("error", (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on("listening", () => console.log("UDP Server listening"));

server.on("message", (message, senderInfo) => {
  console.log(`${senderInfo.address}:${senderInfo.port} - ${message}`);
});

server.bind(PORT, HOST);

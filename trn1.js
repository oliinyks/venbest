const dgram = require("dgram");

const PORT = 49485;
const HOST = "localhost";

const server = dgram.createSocket("udp4");

server.on("error", (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on("listening", () => console.log("UDP Server listening"));

server.on("message", (message, senderInfo) => {
  setTimeout(function () {
    for (let i = 0; i <= 10; i++) {
      console.log(`${senderInfo.address}:${senderInfo.port} - ${message}`);
    }
  }, 1000);
});

server.bind(PORT, HOST);

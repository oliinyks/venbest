const dgram = require("dgram");

const PORT = 2222;
const HOST = "localhost";

const server = dgram.createSocket("udp4");
const connections = new Map()

server.on("error", (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on("listening", () => console.log("UDP Server listening"));

server.on("message", (rawMessage) => {
  const username = rawMessage.toString()
  console.log('Message from:', username)

  if (connections.has(username)) {
    const timer = connections.get(username)
    clearTimeout(timer)
  }

  const newTimeot = setTimeout(() => console.log(`No connection with ${username}`), 10000)
  connections.set(username, newTimeot)
});

server.bind(PORT, HOST);

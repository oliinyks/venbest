const listNames = require("./names");

const dgram = require("dgram");

const PORT = 2222;
const HOST = "localhost";

const client = dgram.createSocket("udp4");

setInterval(async function () {
  const names = await listNames();

  for (let i = 0; i < names.length; i++) {
    const name = `${names[i].name}`;
    client.send(name, PORT, HOST, (err) => {
      if (err) {
        console.log('there is no connection with the script "rcv.js"');
        throw err;
      }

      console.log(`UDP message from ${name} sent`);
    });
  }

}, 5000);

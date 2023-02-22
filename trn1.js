const listNames = require("./names");

const dgram = require("dgram");

const PORT = 2222;
const HOST = "localhost";

setTimeout(async function () {
  const client = dgram.createSocket("udp4");

  const names = await listNames();

  for (let i = 0; i < names.length; i++) {
    client.send(`${names[i].name}`, PORT, HOST, (err) => {
      if (err) {
        console.log('there is no connection with the script "trni.js"');
        throw err;
      }

      console.log("UDP message sent");
    });
  }
}, 1000);

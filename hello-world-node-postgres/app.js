const parse = require("pg-connection-string").parse;
const { Client } = require("pg");
const prompt = require("prompt");
const { dbConfig } = require("./config");

(async () => {
  // console.log(process.env.HOME, process.env.APPDATA)
  // prompt.start()
  // const URI = await prompt.get("connectionString");
  // var connectionString;
  // // Expand $env:appdata environment variable in Windows connection string
  // if (URI.connectionString.includes("env:appdata")) {
  //   connectionString = await URI.connectionString.replace(
  //     "$env:appdata",
  //     process.env.APPDATA
  //   );
  // }
  // // Expand $HOME environment variable in UNIX connection string
  // else if (URI.connectionString.includes("HOME")) {
  //   connectionString = await URI.connectionString.replace(
  //     "$HOME",
  //     process.env.HOME
  //   );
  // }
  // console.log(connectionString);
  // var config = parse(connectionString);
  // config.port = 26257;
  // config.database = 'defaultdb';
  // console.log(config);
  const client = new Client(dbConfig);

  // Connect to database
  try {
    await client.connect();
    // client.query({})
    console.log("Hey! You successfully connected to your CockroachDB cluster.")
  } catch (err) {
    console.log(`error connecting: ${err}`)
  }

  // Exit program
  process.exit();
})().catch((err) => console.log(err.stack));

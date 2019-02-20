const Airtable = require("airtable");
const crypto = require("crypto");

const env = require("env2");
env("./config.env");

if (!process.env.API_KEY || !process.env.BASE_KEY) {
  throw new Error("Error API_KEY and BASE_KEY should be set");
}

const apiKey = process.env.API_KEY;
const base = new Airtable({ apiKey }).base(process.env.BASE_KEY);

const updateCode = () => {
  base("code").update(
    "recL71yXmBgS44Ub0",
    {
      Code: crypto.randomBytes(3).toString("hex")
    },
    function(err, record) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
};

module.exports = updateCode;

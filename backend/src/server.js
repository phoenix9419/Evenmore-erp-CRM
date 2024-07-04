require('module-alias/register');
const mongoose = require('mongoose');
const { globSync } = require('glob');
const path = require('path');

// Make sure we are running node 7.6+
const [major, minor] = process.versions.node.split('.').map(parseFloat);
console.log(major,"major")
console.log(minor,"minor")
// if (major < 20) {
//   console.log('Please upgrade your node.js version at least 20 or greater. 👌\n ');
//   process.exit();
// }

// import environmental variables from our variables.env file
require('dotenv').config({ path: '.env' });
require('dotenv').config({ path: '.env.local' });

mongoose.connect(process.env.DATABASE);

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

mongoose.connection.on('error', (error) => {
  console.log(
    `1. 🔥 Common Error caused issue → : check your .env file first and add your mongodb url`
  );
  console.error(`2. 🚫 Error → : ${error.message}`);
});

const modelsFiles = globSync('./src/models/**/*.js');

for (const filePath of modelsFiles) {
  require(path.resolve(filePath));
}

// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 8888);
app.listen(app.get('port'), () => {
  console.log(">>>>>>")
  console.log(`Express running → On PORT : ${app.get('port')}`);
  // console.log(`Express running → On PORT : ${server.address().port}`);
});

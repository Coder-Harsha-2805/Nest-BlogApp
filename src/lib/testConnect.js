const connectToDB = require('./utils');

const testConnection = async () => {
  await connectToDB();
};

testConnection();
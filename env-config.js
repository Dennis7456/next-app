const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  REACT_APP_NOVU_API_KEY: process.env.REACT_APP_NOVU_API_KEY,
  REACT_APP_NOVU_TRIGGER_ID: process.env.REACT_APP_NOVU_TRIGGER_ID
};
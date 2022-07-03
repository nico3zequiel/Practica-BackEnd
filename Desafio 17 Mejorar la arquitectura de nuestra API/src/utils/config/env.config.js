require('dotenv').config();

const {
  ADMIN_MAIL,
  ADMIN_PASS,
  DB_DEPLOY,
  DB_NAME,
  DB_MAIL,
  DB_PASS,
  DB_PERSISTENCE_SERVER,
  DB_PERSISTENCE_TYPE,
  NODE_ENV,
  PORT,
  SESSION_NAME,
  SESSION_SECRET,
  TWILIO_PHONE,
  TWILIO_SID,
  TWILIO_TOKEN,
} = process.env;

module.exports = {
  ADMIN_MAIL,
  ADMIN_PASS,
  DB_DEPLOY,
  DB_NAME,
  DB_MAIL,
  DB_PASS,
  DB_PERSISTENCE_SERVER,
  DB_PERSISTENCE_TYPE,
  NODE_ENV: NODE_ENV || "development",
  PORT: PORT || 3001,
  SESSION_NAME,
  SESSION_SECRET,
  TWILIO_PHONE,
  ACCOUNT_SID: TWILIO_SID,
  AUTH_TOKEN: TWILIO_TOKEN
};
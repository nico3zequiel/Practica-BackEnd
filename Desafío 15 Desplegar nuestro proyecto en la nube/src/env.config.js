import "dotenv/config";

const {
  SESSION_SECRET,
  SESSION_NAME,
  DB_MAIL,
  DB_PASS,
  DB_NAME,
  PORT
} = process.env;

export default {
  SESSION_SECRET,
  SESSION_NAME,
  DB_MAIL,
  DB_PASS,
  DB_NAME,
  PORT: PORT || 8080
};
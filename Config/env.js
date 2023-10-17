require('dotenv').config();
const data = {
    PORT : process.env.PORT,
    DATABASE_URI : process.env.DATABASE_URI,
}

module.exports = data;
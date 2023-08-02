const environment = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `.env.${environment}` });

module.exports = process.env;
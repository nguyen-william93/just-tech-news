const Sequelize = require("sequelize");

require('dotenv').config();

//create connection to your database, pass in your mysql information.
const sequelize = new Sequelize('just_tech_news_db', 'root', 'vnn195245', {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

module.exports = sequelize;
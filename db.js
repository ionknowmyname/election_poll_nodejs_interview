const Sequelize = require("sequelize");

const sequelize = new Sequelize("forinterview", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

const connectToDB = async () => {
    try {
        sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.log(error);
    }
};

module.exports = { sequelize, connectToDB };

/* sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((error) => {
        console.error("Unable to connect to the database: ", error);
    }); */

/* 
const db = {};
db.Sequelize = sequelize;
db.models = {};
db.models.PollUnitModel = require("./PollUnitModel")(
    sequelize,
    Sequelize.DataTypes
);

module.exports = db; */

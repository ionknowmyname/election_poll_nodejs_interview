const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

// module.exports = (sequelize, DataTypes) => {
const PollUnitModel = sequelize.define(
    "polling_units",
    {
        uniqueid: {
            type: DataTypes.INTEGER,
        },
        polling_unit_id: {
            type: DataTypes.INTEGER,
        },
        ward_id: {
            type: DataTypes.INTEGER,
        },
        lga_id: {
            type: DataTypes.INTEGER,
        },
        uniquewardid: {
            type: DataTypes.INTEGER,
        },
        polling_unit_number: {
            type: DataTypes.STRING,
        },
        polling_unit_name: {
            type: DataTypes.STRING,
        },
        polling_unit_description: {
            type: DataTypes.TEXT,
        },
        lat: {
            type: DataTypes.STRING,
        },
        long: {
            type: DataTypes.STRING,
        },
        entered_by_user: {
            type: DataTypes.STRING,
        },
        date_entered: {
            type: DataTypes.DATE,
        },
        user_ip_address: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = PollUnitModel;
// return PollUnitModel;
// };

/* sequelize
    .sync()
    .then(() => {
        console.log("Book table created successfully!");
    })
    .catch((error) => {
        console.error("Unable to create table : ", error);
    });
 */

const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const PollUnitResultModel = sequelize.define(
    "announced_pu_results",
    {
        result_id: {
            type: DataTypes.INTEGER,
        },
        polling_unit_uniqueid: {
            type: DataTypes.STRING,
        },
        party_abbreviation: {
            type: DataTypes.STRING,
        },
        party_score: {
            type: DataTypes.INTEGER,
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

module.exports = PollUnitResultModel;

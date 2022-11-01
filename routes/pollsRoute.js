const express = require("express");
const router = express.Router();
const { sequelize } = require("../db");

const PollUnitModel = require("../models/PollUnitModel");
const PollUnitResultModel = require("../models/PollUnitResultModel");

router.get("/postman", async (req, res) => {
    const data = await PollUnitModel.findAll({
        attributes: { exclude: ["id"] },
    });
    res.status(200).json(data);
});

router.get("/locations", async (req, res) => {
    // res.render('employees', { user: req.user })    // employees ejs

    /* PollUnitModel.findAll({ attributes: { exclude: ["id"] } }, (err, docs) => {
        if (!err) {
            //  console.log(docs);
            res.render("employees", { list: docs });
        } else {
            console.log("Error in retrieving Polls from DB: " + err);
        }
    }); */

    const data = await PollUnitModel.findAll({
        attributes: { exclude: ["id"] },
    });

    // if (data !== null) {
    //     res.render("pollingunits", { list: data });
    // }

    res.render("pollingunits", { list: data });
});

router.get("/results", async (req, res) => {
    const data = await PollUnitResultModel.findAll({
        attributes: { exclude: ["id"] },
        where: { polling_unit_uniqueid: "8" },
    });

    res.render("pollingunitresult", { list: data });
});

router.get("/lga-results", async (req, res) => {
    // const queryString = 'SELECT * FROM announced_pu_results WHERE polling_unit_uniqueid IN (SELECT polling_unit_id FROM polling_units WHERE lga_id = 35)';
    // const queryString =
    //     "SELECT a.* FROM announced_pu_results AS a INNER JOIN polling_units AS p ON p.polling_unit_id=a.polling_unit_uniqueid";

    const queryString =
        "SELECT party_abbreviation, SUM(party_score) AS votes FROM announced_pu_results WHERE polling_unit_uniqueid IN (SELECT polling_unit_id FROM polling_units WHERE lga_id = 35) GROUP BY party_abbreviation";

    const data = await sequelize.query(queryString, {
        // attributes: { exclude: ["id"] },
        type: sequelize.QueryTypes.SELECT,
        model: PollUnitResultModel,
        mapToModel: true,
    });

    res.render("lgaresult", { list: data });
    // res.status(200).json(data);
});

router.get("/", (req, res) => {
    res.render("lgarequestresult");
});

router.post("/get-result", async (req, res) => {
    const { lga } = req.body;
    console.log("lga from req.body", req.body);
    let errors = [];

    if (!lga) {
        errors.push({ msg: "Please enter all required fields" });
    }

    if (errors.length > 0) {
        //console.log(errors)
        res.render("lgarequestresult");
    } else {
        const queryString = `SELECT party_abbreviation, SUM(party_score) AS votes FROM announced_pu_results WHERE polling_unit_uniqueid IN (SELECT polling_unit_id FROM polling_units WHERE lga_id = ${lga}) GROUP BY party_abbreviation`;

        const data = await sequelize.query(queryString, {
            // attributes: { exclude: ["id"] },
            type: sequelize.QueryTypes.SELECT,
        });

        res.render("lgaresult", { list: data });
        // res.status(200).json(data);
    }
});

module.exports = router;

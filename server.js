const express = require("express");
// const Sequelize = require("sequelize");
const expressLayouts = require("express-ejs-layouts");

const { sequelize, connectToDB } = require("./db");

const PollsRoute = require("./routes/pollsRoute");
// const UsersRoute = require("./routes/users");

const app = express();

////// EJS  SETUP  ///////
app.use(expressLayouts);
app.set("view engine", "ejs");
//////////////////////////

//////////// Bodyparser middleware //////////////
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/////////////////////////////////////////////////

// (async () => {
//     await db.sequelize.sync();
// })();

app.use("/polls", PollsRoute);
// app.use("/users", UsersRoute);

//////////////////// Server start //////////////////
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`server started on port ${PORT}`);
    await connectToDB();
});
/////////////////////////////////////////////////////

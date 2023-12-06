const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", async (req, res, next) => {
    const response = await axios.get("https://www.boredapi.com/api/activity/")
    console.log(response.data)
    res.send(response.data)
})

app.listen(3000, () => {
    console.log("Listening on localhost:3000")
})
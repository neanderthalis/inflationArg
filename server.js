const express = require('express');
const app = express();
require('dotenv').config()
const fetchInflationTable = require("./dataCollection/fetchInflation")
const processInflationData = require("./dataCollection/processInflationData")
const getMonthlyInflation = require("./dataCollection/getMonthlyInflation")
const getCurrentYearInflation = require("./dataCollection/getCurrentYearInflation")
const cors = require('cors');
const cron = require("node-cron")
let DATA = {}

app.use(cors({
  origin: '*'
}));

const setData = async () => {
  const inflationTable = await fetchInflationTable()
  const processedInflationData = processInflationData(inflationTable)
  DATA.monthlyInflation = getMonthlyInflation(processedInflationData)
  DATA.currentYearInflation = getCurrentYearInflation(processedInflationData)
}

cron.schedule('0 12-20 14-17 * *', () => {
  setData()
});

app.get('/up', function (req, res) {
  res.send('ok');
});

app.get('/2023', (req, res) => {
  res.send(DATA)
})

app.listen(3000, async () => {
  try {
    await setData()
    console.log('ready');
  } catch (e) {
    console.log("Error fetching data")
  }

});
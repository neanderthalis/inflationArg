const axios = require("axios");
const { DATA_URL } = process.env

const fetchInflation = async () => {
  const response = await axios.get(DATA_URL);
  if (response.data) return response.data
  return false
};

module.exports = fetchInflation;

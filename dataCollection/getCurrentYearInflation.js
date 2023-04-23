const getMonthlyInflation = require("./getMonthlyInflation")
const getCurrentYearInflation = (inflationTable) => {
    const monthly = getMonthlyInflation(inflationTable)
    const total = Object.values(monthly).filter(value => !isNaN(value)).reduce((a, b) => a + b)
    return total
}

module.exports = getCurrentYearInflation
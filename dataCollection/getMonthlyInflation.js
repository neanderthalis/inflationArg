const getMonthlyInflation = (inflationTable) => {
    const detectString = "Nivel General Nacional"
    const filtered = inflationTable.filter(object => object.id === detectString)[0]
    return filtered
}


module.exports = getMonthlyInflation
const cheerio = require("cheerio")
const processInflationData = (htmlString) => {
    const $ = cheerio.load(htmlString)
    let mainArray = []
    $("tr").each((i, element) => {
        let obj = {}
        $(element).find("td").each((i, row) => {
            let value =  $(row).html().trim()
            if(isNaN(Number(value.replace(",", ".")))) {
                obj["id"] = $(row).html().trim()
            } else {
                obj[`m${i}`] = Number(value.replace(",", ".")) 
            }

        })
        mainArray.push(obj)
    })

    return mainArray
}

module.exports = processInflationData
const StringUtils = require('../utils/StringUtils')
const fs = require('fs')
const initSqlJs = require('sql.js')
var path = require('path');
const fileBuffer = fs.readFileSync(path.join(__dirname, '../db/stock.sqlite'))

let db
initSqlJs().then(SQL => {
    console.log('初始化sql')
    db = new SQL.Database(fileBuffer)
    console.log('db: ', db)
})

function findAllSectors() {
    const sql = 'select distinct * from sector'
    const res = db.exec(sql)

    let sectorList = []
    if (res) {
        console.log(`sql[${sql}]查询结果: ${res}`)
        const sectorValues = res[0]['values']
        for (let i = 0; i < sectorValues.length; i++) {
            sectorList.push({
                sectorName: sectorValues[i][1]
            })
        }
    } else {
        console.log('没有查到板块信息')
    }
    console.log('所有板块: ', sectorList)
    return sectorList
}

function findSectorStocks(sectorName) {
    const sql = 'select * from sector where sector_name = \'' + sectorName + '\''
    const res = db.exec(sql)

    console.log(`sql[${sql}]查询结果: ${JSON.stringify(res)}`)
    if (!res) {
        return []
    }
    // const stockListValues = res[0]['values']
    // stockListValues.forEach(item => {
    //     stockList.push({
    //         stockCode: item[2],
    //         stockName: item[3]
    //     })
    // })
    const stockList = transfer(res)
    console.log(stockList)
    return stockList
}

function transfer(res) {
    let objList = []
    const columns = res[0].columns
    const values = res[0].values
    for (let i = 0; i < values.length; i++) {
        let obj = {}
        for (let j = 0; j < columns.length; j++) {
            obj[StringUtils.toCamel(columns[j])] = values[i][j]
        }
        objList.push(obj)
    }
    return objList
}


function findAll(table) {
    const sql = 'select * from ' + table
    let res = db.exec(sql)
    console.log(`sql[${sql}]查询结果: ${JSON.stringify(res)}`)
}

module.exports = {findAll, findAllSectors, findSectorStocks}

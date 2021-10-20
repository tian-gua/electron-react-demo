const StringUtils = require('../utils/StringUtils')

const initSqlJs = require('sql.js')
const fs = require('fs')
const path = require('path');
const fileBuffer = fs.readFileSync(path.join(__dirname, '../db/stock.sqlite'))
// const fileBuffer = fs.readFileSync('~/Desktop/stock.sqlite')

let db
initSqlJs().then(SQL => {
    console.log('初始化sql')
    db = new SQL.Database(fileBuffer)
    console.log('db: ', db)
})

function findAllSectors() {
    const sql = 'select distinct sector_name from sector'
    const res = db.exec(sql)

    console.log(`sql[${sql}]查询结果:  ${JSON.stringify(res)}`)

    if (!res) {
        console.log('没有查到板块信息')
        return []
    }
    const sectorList = transfer(res)
    console.log('所有板块: ', sectorList)
    return sectorList
}

function findSectorStocks({sector}) {
    const sql = 'select * from sector where sector_name = \'' + sector + '\''
    const res = db.exec(sql)

    console.log(`sql[${sql}]查询结果: ${JSON.stringify(res)}`)
    if (!res) {
        return []
    }
    const stockList = transfer(res)
    console.log(stockList)
    return stockList
}

function listStocksData({stocks, report, indicator, term}) {
    const stocksDataMap = new Map()

    const stockCodes = new Set()
    if (stocks.a) {
        stockCodes.add(stocks.a.value)
    }
    if (stocks.b) {
        stockCodes.add(stocks.b.value)
    }
    if (stocks.c) {
        stockCodes.add(stocks.c.value)
    }
    if (stockCodes) {
        stockCodes.forEach(stockCodeItem => {
            const sql = `select stock_name,stock_code,${indicator},term from ${report} where stock_code = '${stockCodeItem}' and term like '%${term}' order by term desc limit 10`;
            const res = db.exec(sql)

            console.log(`sql[${sql}]查询结果: ${JSON.stringify(res)}`)
            if (!res) {
                return []
            }

            const stockItemData = transfer(res)
            stockItemData.reverse().forEach(item => {
                if (stocksDataMap.has(item.term)) {
                    stocksDataMap.get(item.term)[item.stockName] = item[indicator]
                } else {
                    stocksDataMap.set(item.term, {term: item.term, [item.stockName]: item[indicator]})
                }
            })
        })
    }

    // console.log("stockData: ", stocksDataMap)
    const data = [...stocksDataMap.values()].sort((i1, i2) => i1.term.localeCompare(i2.term))
    console.log("data: ", data)
    return data
}

function transfer(res) {
    let objList = []
    const columns = res[0].columns
    const values = res[0].values
    for (let i = 0; i < values.length; i++) {
        let obj = {}
        for (let j = 0; j < columns.length; j++) {
            obj[StringUtils.toCamel(columns[j])] = values[i][j]
            // obj[columns[j]] = values[i][j]
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

module.exports = {findAll, findAllSectors, findSectorStocks, listStocksData}

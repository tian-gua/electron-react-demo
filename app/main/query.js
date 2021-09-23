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

    if (res) {
        console.log(`sql[${sql}]查询结果: ${JSON.stringify(res)}`)
    }
}

function findAll(table) {
    const sql = 'select * from ' + table
    let res = db.exec(sql)
    console.log(`sql[${sql}]查询结果: ${JSON.stringify(res)}`)
}

module.exports = {findAll, findAllSectors, findSectorStocks}

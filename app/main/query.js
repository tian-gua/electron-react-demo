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

function findAll(table) {
    const sql = 'select * from ' + table
    let res = db.exec(sql)
    console.log('执行sql:', sql, ' res: ', res)
}

module.exports = {findAll}

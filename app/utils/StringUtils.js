function toCamel(str) {
    return str.replace(/\_(\w)/g, function (all, letter) {
        return letter.toUpperCase()
    })
}

module.exports = {toCamel}

function toLetterCamel(str) {
    return str.replace(/\_(\w)/g, function (all, letter) {
        return letter.toUpperCase()
    })
}

function toCamel(str) {
    return str.replace(/\_(\w)/g, function (all, letter) {
        return letter.toUpperCase()
    })
}

module.exports = {toCamel, toLetterCamel}

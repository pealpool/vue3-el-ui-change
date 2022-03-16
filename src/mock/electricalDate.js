module.exports = {
    'code': 200,
    'data|40': [{
        'id|+1': 1,
        'roomNumber': /[A-Z]-[0-9]{4}/,
        'allPowerValue|10-100': 1,
        'allPowerCost': function () {
            return (this.allPowerValue * 0.62).toFixed(2) * 1
        },
        'socPowerValue|10-100': 1,
        'socPowerCost': function () {
            return (this.socPowerValue * 0.62).toFixed(2) * 1
        },
        'airPowerValue|10-100': 1,
        'airPowerCost': function () {
            return (this.airPowerValue * 0.62).toFixed(2) * 1
        },
    }],
    // 'regexp': /\d{5,10}/
}

let exec = require('child_process').exec

module.exports = function (source, map) {
    var cb = this.async()
    exec('dhall-to-text < ' + this.resourcePath, (error, res, eh) => {
        if (error) {
            console.log ('ERROR')
            cb(error)
        } else cb(null, res)
    })
}

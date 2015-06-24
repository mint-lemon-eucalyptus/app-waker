var request = require('request');
function Waker(config) {
    this.intervalHandle = null;
    this.config = config;
}
Waker.prototype.start = function () {
    var config = this.config;
    var self = this;
    this.intervalHandle = setInterval(function () {
        if (self.onInterval) {
            self.onInterval();
        }
        config.hostnames.map(function (a) {
            request.get(
                'http://' + a,
                { form: { key: Math.random().toString(32).substr(2, 20) } },
                function (error, response, body) {
                    /*                    if (!error && response.statusCode == 200) {
                     console.log(body)
                     }
                     */
///                    console.log('wake up!!!')
                }
            );
        })
    }, config.interval)

}
Waker.prototype.stop = function () {
    clearInterval(this.intervalHandle);
}
module.exports = Waker;


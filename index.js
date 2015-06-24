function Waker(config) {
    var request = require('request');
    setInterval(function () {
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
exports.Waker = Waker;
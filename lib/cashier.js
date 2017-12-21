// libs
const log = require('./log')
// parts
const Cycler = require('./cycler')

module.exports = class Cashier extends Cycler {
  cycle () {
    log.info('Cashier cycle')
    this.stop()
  }
}
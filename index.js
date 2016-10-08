const BTCChina = require('btcchina')
const config = require('./config.js')

console.log('start!');

const publicBtcc = new BTCChina();

const privateBtcc = new BTCChina(config.key, config.secret);

// publicBtcc.historydata('btccny', false, 10, console.log)

// publicBtcc.orderbook('btccny', 10, console.log);

privateBtcc.getAccountInfo((err, info) => {
	console.log(info.result.balance)
});
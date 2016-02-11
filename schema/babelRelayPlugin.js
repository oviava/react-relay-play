var babelRelayPlugin   = require('babel-relay-plugin');


var schema = require('./schema.json');

module.exports = babelRelayPlugin(schema.data, {
  abortOnError: true,
});

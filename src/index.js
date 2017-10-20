const defautsDeep = require('lodash.defaultsdeep');
const deepFreeze = require('deep-freeze');
const path = require('path');
const omit = require('object.omit');
const yargs = require('yargs');

// remove yargs properties and ENV
const args = omit(yargs.argv, ['_', 'help', 'version', '$0', 'ENV', 'CONFIG']);

function load({ defaults = {}, file, respectENV = false, defaultENV }) {
  let configPath = yargs.argv.CONFIG || file;
  let output = configPath ? require(path.resolve('.', configPath)) : {};

  if (respectENV) {
    let env = process.env.NODE_ENV || yargs.argv.ENV || defaultENV;

    output = output[env];
    output = Object.assign({}, output, { _env: env });
  }

  if (defaults) {
    output = defautsDeep(output, defaults);
  }

  if (Object.keys(args).length > 0) {
    output = defautsDeep(args, output);
  }

  return deepFreeze(output);
}

module.exports = {
  load
};

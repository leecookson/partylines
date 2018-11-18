const _ = require('lodash');
const printf = require('printf');

const profile = require('../util/profile');

let lastID = 1;

module.exports = {

  create: function (opts) {
    opts = opts || {};
    const DEFAULT = {
      name: 'voter',
      id: opts.id ? opts.id : lastID++
    };
    opts = _.defaults(opts, DEFAULT);

    let voter = profile.create({name: opts.name, id: opts.id});
    voter.toString = toString;

    return voter;
  }

};

function toString () {
  return printf('[% 5s] %- 12s, %s', this.id, this.name, profile.generateCodeNameColor(this));
}

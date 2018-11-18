const _ = require('lodash');
const printf = require('printf');

const profile = require('../util/profile');

let lastID = 1;

module.exports = {

  create: (opts) => {
    opts = opts || {};
    const DEFAULT = {
      name: 'party',
      id: opts.id ? opts.id : lastID++
    };
    opts = _.defaults(opts, DEFAULT);

    let party = profile.create({name: opts.name, id: opts.id});
    party.toString = toString;

    return party;
  }

};

function toString () {
  return printf('[% 5s] % 12s - %s', this.id, this.name, profile.generateCodeNameColor(this));
}

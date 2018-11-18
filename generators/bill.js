const _ = require('lodash');
const printf = require('printf');

const profile = require('../util/profile');

let lastID = 1;

module.exports = {

  create: (opts) => {
    opts = opts || {};
    const DEFAULT = {
      name: 'bill',
      elements: profile.getElementIDs(),
      id: opts.id ? opts.id : lastID++
    };
    opts = _.defaults(opts, DEFAULT);

    let bill = profile.create({elements: opts.elements, name: opts.name, id: opts.id});
    bill.toString = toString;

    return bill;
  }

};

function toString () {
  return printf('[% 5s] %- 12s - %s', this.id, this.name, profile.generateCodeNameColor(this));
}

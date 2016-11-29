const _ = require('lodash');

const profile = require('../util/profile');

let lastID = 1;

module.exports = {

  create: function (opts) {
    const DEFAULT = {
      elements: profile.getElementIDs(),
      id: opts.id ? opts.id : lastID++
    };
    opts = _.defaults(opts, DEFAULT);

    return profile.create({elements: opts.elements, name: opts.name, id: opts.id});
  }

};

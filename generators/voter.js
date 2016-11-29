const _ = require('lodash');

const profile = require('../util/profile');

let lastID = 1;

module.exports = {

  create: function (opts) {
    const DEFAULT = {
      name: 'voter',
      id: opts.id ? opts.id : lastID++
    };
    opts = _.defaults(opts, DEFAULT);

    return profile.create({name: opts.name, id: opts.id});
  }

};

const _ = require('lodash');

const profile = require('../util/profile');

let lastID = 1;

module.exports = {

  create: (opts) => {
    const DEFAULT = {
      name: 'candidate',
      id: opts.id ? opts.id : lastID++
    };
    opts = _.defaults(opts, DEFAULT);

    return profile.create({name: opts.name, id: opts.id});
  }

};

const _ = require('lodash');

const party = require('../generators/party');
const bill = require('../generators/bill');

const numParties = process.argv[2] || 10;
const numBills = process.argv[2] || 10;

console.log('Parties:');
for (var i = 0; i < numParties; i++) {
  let p = party.create();
  console.log(p);
}

console.log('Bills:');
for (var j = 0; j < numBills; j++) {
  let b = bill.create({elements: _.random(1,3)});
  console.log(b);
}

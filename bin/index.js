const _ = require('lodash');
const printf = require('printf');
const c = require('colors');

const degreeMatch = require('../util/match/degree');
const profile = require('../util/profile');

const party = require('../generators/party');
const bill = require('../generators/bill');
const voter = require('../generators/voter');

const partyMatcher = require('../matchers/party');

const numParties = process.argv[2] || 10;
const numBills = process.argv[3] || 10;
const numVoters = process.argv[4] || 20;

var parties = [],
  bills = [],
  voters = [],
  extremismCount = {};

console.log(c.green('Parties:'));
for (var i = 0; i < numParties; i++) {
  let p = party.create({name: 'Party ' + (i + 1)});
  profile.calculateExtremism(p);
  extremismCount[p.extremism] = extremismCount[p.extremism] ? extremismCount[p.extremism] += 1 : 1;
  if (numParties < 24) {console.log(p.toString(), 'Ext', p.extremism);}
  p.voters = [];
  parties.push(p);
}
console.log(numParties, 'Parties');

console.log('Extremism spread', extremismCount);

console.log('\n');

console.log(c.yellow('Bills:'));
for (var j = 0; j < numBills; j++) {
  let b = bill.create({elements: _.random(1,2), name: 'Bill ' + (j + 1)});
  if (numBills < 24) {console.log(b.toString());}
  bills.push(b);
}

console.log(numBills, 'Bills');
console.log('\n');

console.log(c.blue('Voters:'));

for (var k = 0; k < numVoters; k++) {
  let v = voter.create({name: 'Voter ' + (k + 1)});
  if (numVoters < 24) {console.log(v.toString());}
  v.parties = [];
  voters.push(v);
}

console.log(numVoters, 'Voters');
console.log('\n');

if (numParties < 24) {
  _.forEach(parties, (party, pIndex) => {
    _.forEach(voters, (voter) => {
      let match = degreeMatch.profileMatch(voter, parties[pIndex], 5);
      if (match) {
        voter.parties.push(party);
        party.voters.push(voter);
      }
    });

    console.log(c.green('Party'), pIndex, 'has', party.voters.length, 'voters'.blue, 'from', numVoters);
  });
}

console.log('\n');

parties.forEach((party, index) => {
  console.log(c.green('Party %d').underline, index);
  partyMatcher.matchVoters(party, voters);

  console.log('matches'.cyan, party.potentialVoters.length, 'voters'.blue);

  partyMatcher.matchCandidates(party, voters);

  console.log('matches'.cyan, party.potentialCandidates.length, 'candidates'.magenta);

  partyMatcher.matchBills(party, bills);

  console.log('matches'.cyan, party.billsSupported.length, 'bills'.yellow);

});

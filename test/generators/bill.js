const should = require('should');
const bill = require('../../generators/bill');

describe('bill', () => {
  it('created', () => {
    const b1 = bill.create();
    should.exist(b1);
  });
});

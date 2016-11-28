
const should = require('should');
const voter = require('../../generators/voter');

describe('voter', () => {
  it('created', () => {
    const v1 = voter.create();
    should.exist(v1);
  });
  it('has elements', () => {
    const v1 = voter.create();
    v1.f.should.exist;
    v1.s.should.exist;
    v1.d.should.exist;
    v1.t.should.exist;
    v1.l.should.exist;
  });
  it('has elements as integers', () => {
    const v1 = voter.create();
    v1.f.should.be.within(1, 4);
    v1.s.should.be.within(1, 4);
    v1.d.should.be.within(1, 4);
    v1.t.should.be.within(1, 4);
    v1.l.should.be.within(1, 4);
  });
});


const should = require('should');
const candidate = require('../../generators/candidate');

describe('candidate', () => {
  it('created', () => {
    const c1 = candidate.create();
    should.exist(c1);
  });
  it('has elements', () => {
    const c1 = candidate.create();
    c1.f.should.exist;
    c1.s.should.exist;
    c1.d.should.exist;
    c1.t.should.exist;
    c1.l.should.exist;
  });
  it('has elements as integers', () => {
    const c1 = candidate.create();
    c1.f.should.be.within(1, 4);
    c1.s.should.be.within(1, 4);
    c1.d.should.be.within(1, 4);
    c1.t.should.be.within(1, 4);
    c1.l.should.be.within(1, 4);
  });
});

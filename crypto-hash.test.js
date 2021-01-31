const cryptoHash = require('./crypto-hash')

describe('cryptoHash()', () => {
  // cac1e31dd15a8500b0378984c87f08eee3e65d2814a414ba24f742533fadb071

  it('generates a SHA-256 hashed output', () => {
    expect(cryptoHash('foo'))
      .toEqual('2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae')
  })

  it('produces the same hash with the same input arguments in any order', () => {
    expect(cryptoHash('one', 'two', 'three'))
      .toEqual(cryptoHash('three', 'one', 'two'))
  })
})

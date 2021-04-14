const cryptoHash = require('./crypto-hash')

describe('cryptoHash()', () => {
  // cac1e31dd15a8500b0378984c87f08eee3e65d2814a414ba24f742533fadb071

  it('generates a SHA-256 hashed output', () => {
    expect(cryptoHash('foo'))
      .toEqual('b2213295d564916f89a6a42455567c87c3f480fcd7a1c15e220f17d7169a790b')
  })

  it('produces the same hash with the same input arguments in any order', () => {
    expect(cryptoHash('one', 'two', 'three'))
      .toEqual(cryptoHash('three', 'one', 'two'))
  })

  it('produces a unique hash when the properties have changed on an input', () => {
    const foo = {}
    const originalHash = cryptoHash(foo)
    foo['a'] = 'a'

    expect(cryptoHash(foo)).not.toEqual(originalHash)
  })
})

/* eslint-env mocha */
const expect = require('chai').expect
const convertor = require('..')

describe('#Convertor', function () {
  it('Si convertirmos 1 libra a kilogramos debe devolver 0.453592', function () {
    const kilogramos = convertor.toKilogramos(1)
    expect(kilogramos).to.equal(0.453592)
  })
  it('Si convertirmos 1 kilogramo a libras debe devolver 2.20462', function () {
    const libras = convertor.toLibras(1)
    expect(libras).to.equal(2.20462)
  })
})

'use strict'

const CONVER_LB_TO_KG = 0.453592
const CONVER_KG_TO_LB = 2.20462

module.exports = {
  toKilogramos: function (libras) {
    return libras * CONVER_LB_TO_KG
  },
  toLibras: function (kilogramos) {
    return kilogramos * CONVER_KG_TO_LB
  }
}

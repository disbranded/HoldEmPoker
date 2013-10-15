/**
 * Poker.Player
 */
;(function () {
  'use strict'

  // If a PLayer is not instantiated with an id,
  // one will be created for it.
  var uid = (function () {
    var u = 0
    return function () {
      return 'player-' + u++
    }
  }()),

  defaults = {
    //
  },

  UP    = 'up',
  DOWN  = 'down'


  /**
   * @constructor
   */
  Player = function (options) {
    this.options = util.extend({ id: uid() }, defaults, options || {})
    this.folded = false
    this.chips = 0
    this.bet = 0
    this.hand = new Hand
    this.cards = []
  }

  Player.prototype = {

    /**
     * @param {Card}
     */
    addCard: function (card) {
      this.hand.add(card.value)
      this.cards.push(card)
    },

    /**
     *
     */
    removeCards: function () {
      this.hand.reset()
      this.cards = []
    }
  }


  // Constants that correspond with lingo[lang].action array.
  Player.FOLD   = 1
  Player.BET    = 2
  Player.CALL   = 3
  Player.RAISE  = 4
}());




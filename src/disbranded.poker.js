/**
 * Must be loaded prior to all other poker modules.
 * Sets up namespaces and other defaults.
 * DISBRANDED.poker depends on Underscore http://underscorejs.org/
 */
;(function (root) {
  'use strict'

  // @namespace
  root.DISBRANDED = (typeof root.DISBRANDED === 'undefined') ? {} : root.DISBRANDED
  root.DISBRANDED.poker = {
    
    debug: false,
    
    // sub namespaces
    holdem: {},
    
    // constants
    LIMIT             : 'limit',
    NO_LIMIT          : 'noLimit',
    POT_LIMIT         : 'potLimit',
    
    CHANGE            : 'change',
    BUTTON            : 'button',
    HAND_BEGIN        : 'handBegin',
    HAND_END          : 'handEnd',
    
    ERROR             : 'error',
    TOO_MANY_PLAYERS  : 'tooManyPlayers',
    TOO_FEW_PLAYERS   : 'tooFewPlayers',
    NO_NEXT_PLAYER    : 'noNextPlayer'
  }
}(this));
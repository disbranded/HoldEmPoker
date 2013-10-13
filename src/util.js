/**
 *
 */
;(function () {
  'use strict'

  function isNull(obj) {
    return obj === null
  }

  function isUndefined(obj) {
    return obj === undefined
  }

  function isNada(obj) {
    return isUndefined(obj) || isNull(obj)
  }

  function isBoolean(obj) {
    return obj === true || obj === false
  }

  function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]'
  }

  function isNumber(obj) {
    return !isNaN(obj) && Object.prototype.toString.call(obj) === '[object Number]'
  }

  function isInteger(obj) {
    return isNumber(obj) && parseFloat(obj) === parseInt(obj, 10)
  }

  function isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]'
  }

  function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
  }

  function isObject(obj) {
    return obj === Object(obj) && Object.prototype.toString.call(obj) === '[object Object]'
  }


  /**
   * Extends all arguments (which must be objects) into one object.
   * Last arguments overwrite first arguments.
   */
  function extend() {
    var a = 1,
        alen = arguments.length,
        obj,
        key,
        rtnObj = arguments[0]
    for (; a < alen; a++) {
      obj = arguments[a]
      for (key in obj) {
        rtnObj[key] = obj[key]
      }
    }
    return rtnObj
  }


  function clone(obj) {
    return isArray(obj) ? obj.slice() : extend({}, obj)
  }


  util = (function () {
    return {
      isNull: isNull,
      isUndefined: isUndefined,
      isNada: isNada,
      isBoolean: isBoolean,
      isNumber: isNumber,
      isInteger: isInteger,
      isString: isString,
      isFunction: isFunction,
      isArray: isArray,
      isObject: isObject,
      extend: extend,
      clone: clone
    }
  }());
}());
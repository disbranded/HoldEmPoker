/*
 * poker-game-engine v0.0.1
 * by Adrian Lafond / adrian [at] disbranded.com
 * last updated 2013-10-13
**/
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():(a.DISBRANDED=a.DISBRANDED||{},a.DISBRANDED.Poker=b())}(this,function(){"use strict";var a,b,c,d;return function(){function a(a){return null===a}function b(a){return void 0===a}function c(c){return b(c)||a(c)}function e(a){return a===!0||a===!1}function f(a){return"[object String]"===Object.prototype.toString.call(a)}function g(a){return!isNaN(a)&&"[object Number]"===Object.prototype.toString.call(a)}function h(a){return g(a)&&parseFloat(a)===parseInt(a,10)}function i(a){return"[object Function]"===Object.prototype.toString.call(a)}function j(a){return"[object Array]"===Object.prototype.toString.call(a)}function k(a){return a===Object(a)&&"[object Object]"===Object.prototype.toString.call(a)}function l(){for(var a,b,c=1,d=arguments.length,e=arguments[0];d>c;c++){a=arguments[c];for(b in a)e[b]=a[b]}return e}function m(a){return j(a)?a.slice():l({},a)}function n(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function o(a,b,c){var d,e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length===parseFloat(a.length)){for(d=0,e=a.length;e>d;d++)if(!b.call(c,a[d],d))return}else for(d in a)if(Object.prototype.hasOwnProperty.call(a,d)&&!b.call(c,a[d],d))return}d=function(){return{isNull:a,isUndefined:b,isNada:c,isBoolean:e,isNumber:g,isInteger:h,isString:f,isFunction:i,isArray:j,isObject:k,extend:l,clone:m,has:n,each:o}}()}(),function(){var a=["2C","3C","4C","5C","6C","7C","8C","9C","TC","JC","QC","KC","AC","2D","3D","4D","5D","6D","7D","8D","9D","TD","JD","QD","KD","AD","2H","3H","4H","5H","6H","7H","8H","9H","TH","JH","QH","KH","AH","2S","3S","4S","5S","6S","7S","8S","9S","TS","JS","QS","KS","AS"],c=a.length,d=4;b=function(a){this.isShuffled=!1,this.isNew=!0,this.jokers=0,"object"==typeof a&&this.addJokers(parseInt(a.hasOwnProperty("jokers")?a.jokers:0,10)),this.reset()},b.prototype={cards:function(){return this.cardsIn.slice(0)},count:function(){return c+this.jokers},removeJokers:function(){return this.jokers=0,this.reset(),this},addJokers:function(a){return a=parseInt(a,10),isNaN(a)||(a=Math.max(0,Math.min(a,d-this.jokers)),this.jokers+=a,this.reset()),this},reset:function(){var b=0;for(this.cardsIn=a.slice();b<this.jokers;b++)this.cardsIn[c+b]="W"+(b+1);return this.cardsOut=[],this.isShuffled=!1,this.isNew=!0,this},shuffle:function(){var a,b,c;for(this.reset(),a=this.cardsIn.slice(),this.cardsIn=[];(b=a.length)>0;)c=Math.floor(Math.random()*b),this.cardsIn.push(a.splice(c,1));return this.isShuffled=!0,this.isNew=!1,this},deal:function(){var a=null;return this.cardsIn.length>0&&(a=this.cardsIn.pop(),this.cardsOut.push(a),this.isNew=!1),a}}}(),function(){var a=function(){var a=0;return function(){return a++}}(),b={high:!0,low:!1};c=function(e){return this instanceof c?(this.options=d.extend({id:a()},b,e||{}),this.reset(),this.options.cards&&(this.add(this.options.cards),delete this.options.cards),void 0):new c(e)}}(),c.ROYAL_FLUSH=10,c.STRAIGHT_FLUSH=9,c.FOUR_OF_A_KIND=8,c.FULL_HOUSE=7,c.FLUSH=6,c.STRAIGHT=5,c.THREE_OF_A_KIND=4,c.TWO_PAIR=3,c.ONE_PAIR=2,c.HIGH_CARD=1,c.ACE_TO_FIVE_LOW=1,c.ACE_TO_SIX_LOW=2,c.DEUCE_TO_SEVEN_LOW=3,c.DEUCE_TO_SIX_LOW=4,c.BETTER=-1,c.WORSE=1,c.EVEN=0,c.RANKS="WAKQJT98765432",c.SUITS="SHDC",c.prototype={reset:function(){return this.configLow(),this.cards=[],this.rank=0,this.cardsHigh=[],this.cardsLow=[],this},has:function(a){var b=!1;return d.each(this.cards,function(c){return c===a?(b=!0,!1):void 0}),b},add:function(){var a=Array.prototype.slice.call(arguments);return d.each(a,function(a){d.isString(a)?this.has(a)||(this.cards[this.cards.length]=a,this.updateRank()):d.isArray(a)&&this.add.apply(this,a)},this),this},get:function(a){return d.has(this.cards,a)?this.cards[a]:null},set:function(a,b){return a=parseInt(a,10),d.isNumber(a)&&(a=Math.max(0,Math.min(this.cards.length,a)),this.cards[a]=b,this.updateRank()),this},updateRank:function(){var a;this.cards.length>=5&&(a=this.sortedCardsCopy(),this.options.high&&this.updateHigh(a),this.options.low&&this.updateLow(a))},sortedCardsCopy:function(){var a=this.cards.slice(0);return c.sortByRank(a),a},updateHigh:function(a){var b=null;if(this.rank=0,a=a||this.sortedCardsCopy(),a.length>=5){if((b=c.findFlush({cards:a,sorted:!0,all:!0}))&&(this.rank=c.FLUSH,this.cardsHigh=b.cards,b=c.findStraightFlush({cards:this.cardsHigh,sorted:!0,flush:!0,acesAreLow:this.acesAreLow})))return this.rank=b.royalFlush?c.ROYAL_FLUSH:c.STRAIGHT_FLUSH,this.cardsHigh=b.cards,void 0;if(this.rank<c.STRAIGHT&&(b=c.findStraight({cards:a,sorted:!0,acesAreLow:this.acesAreLow}),b&&(this.rank=c.STRAIGHT,this.cardsHigh=b.cards)),b=c.findSets({cards:a,sorted:!0})){if(b.type>this.rank)switch(this.rank=b.type,this.rank){case c.FOUR_OF_A_KIND:this.cardsHigh=b.sets[0].concat(b.kickers);break;case c.FULL_HOUSE:this.cardsHigh=b.sets[0].concat(b.sets[1]);break;case c.THREE_OF_A_KIND:this.cardsHigh=b.sets[0].concat(b.kickers);break;case c.TWO_PAIR:this.cardsHigh=b.sets[0].concat(b.sets[1],b.kickers);break;case c.ONE_PAIR:this.cardsHigh=b.sets[0].concat(b.kickers);break;default:this.cardsHigh=[].concat(b.kickers)}}else this.rank<c.HIGH_CARD&&(this.rank=c.HIGH_CARD,this.cardsHigh=a.slice(0,5))}else this.cardsHigh=[]},updateLow:function(a){var b,d,e;if(this.rankLow=0,a=a?a.slice():this.sortedCardsCopy(),this.cards.length>=5){for(this.acesAreLow&&"A"===c.rank(a[0])&&a.push(a.shift()),e=[],d=0,b=a.length-1;b>=0;b--)if((0===d||c.rank(e[d-1])!==c.rank(a[b]))&&(e[d++]=a[b],5===e.length))if(!this.ignoreFlushes&&c.findFlush(e))e=e.slice(0,4),d=4;else{if(this.ignoreStraights||!c.findStraight(e)){this.cardsLow=e;break}e=e.slice(0,4),d=4}}else this.cardsLow=[]},compareHighest:function(a){var b,d;if(this.rank>a.rank)return-1;if(this.rank<a.rank)return 1;if(this.cardsHigh.length&&a.cardsHigh.length)for(b=0;5>b;b++)if(d=c.compareCardsByRank(this.cardsHigh[b],a.cardsHigh[b]),0!==d)return d;return 0},compareLowest:function(a){var b,d,e,f=this.cardsLow.length,g=a.cardsLow.length;if(5>f&&5>g)return 0;if(5>f&&g>=5)return 1;if(f>=5&&5>g)return-1;for(b=4;b>=0;b--){if(d=c.RANKS.indexOf(c.rank(this.cardsLow[b])),e=c.RANKS.indexOf(c.rank(a.cardsLow[b])),e>d)return 1;if(d>e)return-1}return 0},configLow:function(){switch(this.options.low===!0&&(this.options.low=c.ACE_TO_FIVE_LOW),this.options.low){case c.ACE_TO_FIVE_LOW:this.acesAreLow=!0,this.ignoreStraights=!0,this.ignoreFlushes=!0;break;case c.ACE_TO_SIX_LOW:this.acesAreLow=!0,this.ignoreStraights=!1,this.ignoreFlushes=!1;break;case c.DEUCE_TO_SEVEN_LOW:this.acesAreLow=!1,this.ignoreStraights=!1,this.ignoreFlushes=!1;break;case c.DEUCE_TO_SIX_LOW:this.acesAreLow=!1,this.ignoreStraights=!0,this.ignoreFlushes=!0;break;default:this.acesAreLow=!0,this.ignoreStraights=!0,this.ignoreFlushes=!0,this.options.low=0}}},c.findFlush=function(){var a,b,e,f,g,h=arguments.length>0?arguments[0]:null,i=null,j=!1,k=!1,l=!1,m=null;if(d.isArray(h)?i=h:d.isObject(h)&&(i=h.cards,j=h.sorted===!0,k=h.low===!0,l=h.all===!0),!d.isArray(i)||i.length<5)return null;for(i=i.slice(0),j||c.sortByRank(i),a=0;4>a;a++)b=c.SUITS.charAt(a),f=[],e=0,d.each(i,function(a){c.suit(a)===b&&(f[e++]=a)}),g=f.length,g>=5&&(null===m?m=k?f.slice(g-5):f.slice(0,l?g:5):(f=k?f.slice(f.length-5):f.slice(0,l?g:5),m=k?c.getBestCardsByRank({low:!0,cards:[f,m]}):c.getBestCardsByRank(f,m)));return m?{cards:m}:null},c.findStraightFlush=function(){var a,b,e=arguments.length>0?arguments[0]:null,f=!1,g=!1,h=!1,i=!0;if(d.isArray(e)?a=e:d.isObject(e)&&(a=e.cards,f=e.flush===!0,g=e.sorted===!0,h=e.low===!0,i=!(e.acesAreLow===!1)),!d.isArray(a)||a.length<5)return null;if(a=a.slice(0),g||c.sortByRank(a),!f){if(b=c.findFlush({cards:a,sorted:g,low:h,acesAreLow:i}),!b)return null;a=b.cards}return b=c.findStraight({cards:a,sorted:g,low:h,acesAreLow:i}),b?(b.royalFlush="A"===c.rank(b.cards[0]),b):null},c.findStraight=function(){var a,b,e=arguments.length>0?arguments[0]:null,f=!1,g=!1,h=!0,i=null,j=null,k=-1;return d.isArray(e)?a=e:d.isObject(e)&&(a=e.cards,f=e.sorted===!0,g=e.low===!0,h=!(e.acesAreLow===!1)),!d.isArray(a)||a.length<5?null:(a=a.slice(),f||c.sortByRank(a),d.each(a,function(e,f){if(-1===k||null===i)k=c.RANKS.indexOf(c.rank(e)),i=[e];else if(b=c.RANKS.indexOf(c.rank(e)),b===k);else if(b===k+1)k=b,i.push(e),h&&4===i.length&&"5"===c.rank(i[0])&&!function(){var b,e=c.RANKS.indexOf("A");d.each(a,function(a){return b=c.RANKS.indexOf(c.rank(a)),b===e?(i[4]=a,!1):b>e?!1:void 0},this)}();else{if(i.length>=5&&(j=i.slice(0,5),i=null,!g))return!1;if(a.length-f<4)return!1;k=b,i=[e]}},this),i&&i.length>=5&&(j=j?c.getBestCardsByRank({low:g,cards:[j,i]}):i),j?g?{cards:j.slice(j.length-5)}:{cards:j.slice(0,5)}:null)},c.findSets=function(){var a,b,e,f,g,h=arguments.length>0?arguments[0]:null,i=!1,j=0;if(d.isArray(h)?a=h:d.isObject(h)&&(a=h.cards,i=h.sorted===!0),!d.isArray(a)||a.length<5)return null;switch(a=a.slice(),i||c.sortByRank(a),b=function(a){for(var b,d,e=[],f=1,g=a.length;14>f;f++)for(b=[],d=0;g>d;d++)if(c.RANKS.indexOf(c.rank(a[d]))===f)b.push(a[d]),d===g-1&&e.push(b);else if(b.length>=1){e.push(b);break}return e}(a),e=[],f=[],b.sort(function(a,b){return Math.max(-1,Math.min(1,b.length-a.length))}),function(){var a,c,g=(b.length,0);d.each(b,function(b){4>g&&(c=b.length)>=2?(a=Math.min(c,5-g),e.push(b.slice(0,a)),j+=a,c-1>a&&f.push(b.slice(a)),g+=c):(f=f.length?f.concat(b):b,g+=b.length),g=Math.min(5,g)},this)}(),f.sort(c.compareCardsByRank),b[0].length){case 4:g=c.FOUR_OF_A_KIND;break;case 3:g=2===e.length?c.FULL_HOUSE:c.THREE_OF_A_KIND;break;case 2:g=2===e.length?c.TWO_PAIR:c.ONE_PAIR;break;default:g=c.HIGH_CARD}return e.length?{sets:e,kickers:f.slice(0,5-j),type:g}:null},c.getBestCardsByRank=function(){var a,b=arguments[0].hasOwnProperty("cards")?arguments[0].cards:Array.prototype.slice.call(arguments),e=arguments[0].hasOwnProperty("low")?arguments[0].low===!0:!1,f=e?c.isLower:c.isHigher;return d.each(b,function(b,c){var g;0===c?a=b.slice():(g=e?b.slice(Math.max(0,b.length-5)):b.slice(),d.each(g,function(b,c){return f(b,a[c])?(a=g,!1):void 0}))}),a},c.sortByRank=function(a){a.sort(c.compareCardsByRank)},c.isHigher=function(a,b){return c.compareCardsByRank(a,b)<0},c.isLower=function(a,b){return c.compareCardsByRank(a,b)>0},c.compareCardsByRank=function(a,b){var d=c.RANKS.indexOf(c.rank(a)),e=c.RANKS.indexOf(c.rank(b));return d-e},c.compareCardsBySuit=function(a,b){var d=c.SUITS.indexOf(c.suit(a)),e=c.SUITS.indexOf(c.suit(b));return d-e},c.compareSetSize=function(a,b){var c=a.length,d=b.length;return d-c},c.rank=function(a){return a.charAt(0)},c.suit=function(a){return a.charAt(1)},a=function(){this.name="Poker"},a.prototype={},a.Deck=b,a.Hand=c,a.util=d,a});
/* igpa.js
 * created by Brian Greig
 * a jQuery plugin to translate your copy into pig latin
 * just because
 */
 
(function($) {
  $.fn.pig = function(options) {
    var settings = $.extend({
      translate: true,
      trunc: "a"
    }, options);
    return this.each(function() {
      if (settings.translate) {
        var pig = [],
        len = null,
        word = "",
        block = $(this).text().replace(/"/g, '')
        .split(" ");
        block.forEach(function(s) {
          if (s.length > 1) {
            if (s[s.length-1] === "." ||
              s[s.length-1] === "," ||
              s[s.length-1] === "?" ||
              s[s.length-1] === "!") {
              len = s.length - 1;
          } else {
            len = s.length
          }
          word = s.slice(1, len) + s[0] + settings.trunc;
          pig.push(word.toLowerCase() + " ");
        } else {
          pig.push(s);
        }
      });
        $(this).html(pig);
      }
    });
  };
}(jQuery));

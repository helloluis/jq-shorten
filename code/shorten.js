(function($) {
  
  $.fn.shorten = function(options) {
    
    var opts = $.extend({}, $.fn.shorten.defaults, options);
    var rootURL = "http://api.bit.ly/v3/shorten?login=" + opts.login + "&apiKey=" + opts.apikey;

    return $(this).each(function() {
      var elem      = $(this);
      var is_input  = $(this).is(":input");
      var text      = is_input ? $(elem).val() : $(elem).text();
      
      if (long_urls = text.match(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi)) {
        $.each(long_urls,function(idx, long_url){
          var url = rootURL + "&longUrl=" + long_url;
          $.ajax({
            url : url,
            dataType : 'jsonp',
            success : function(response) {
              if (is_input) {
                $(elem).val($(elem).val().replace(response.data.long_url, response.data.url));
              } else {
                $(elem).text($(elem).text().replace(response.data.long_url, response.data.url));
              }
            }
          })
        });
      }
      
      return this;
      
    });
    
  $.fn.shorten.defaults = {login: null, apikey: null};
    
  };
  
  
})(jQuery);
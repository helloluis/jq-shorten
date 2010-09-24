The jQuery Link Shortening Plugin
~ by Luis Buenaventura (http://twitter.com/helloluis) ~
~ based on the original plugin by Bryce Roney (http://bryceroney.com) ~

The original plugin (http://code.bryceroney.com/jq-shorten/) was meant to take <a> tags and replace their href attributes with shortened urls. I needed something that could shorten all URLs found in the content of various textual elements (textareas, input[type=text], or indeed anything that responds to jQuery's $.text() or $.val() methods). 

The usage is as simple as selecting the elements that contain text that may/may not have urls. Any valid urls that the script finds will automatically be shortened.

Obviously, you need to get your own Bit.ly login and api key, as the credentials supplied below don't actually work.

== EXAMPLE ==

$("textarea").shorten({ login : 'bitlyapidemo', apikey : 'R_0da49e0a9118ff35f52f629d2d71bf07' });

$("p.shorten_me").shorten({ login : 'bitlyapidemo', apikey : 'R_0da49e0a9118ff35f52f629d2d71bf07' });

$("textarea, .shorten_with_bitly, input[type=text]").shorten({ login : 'bitlyapidemo', apikey : 'R_0da49e0a9118ff35f52f629d2d71bf07' });


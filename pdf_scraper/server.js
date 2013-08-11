//url finder

var request = require('request');
var cheerio = require('cheerio');

var search_ext = process.argv[2]
var source_page = process.argv[3]

request(source_page, function(err, resp, body) {
	if (err)
		throw err;
	$ = cheerio.load(body);
	$('a').each(function() {
		url = ($(this).attr('href'));
		if (typeof url == 'string') {
			ext = url.split('.').pop();
			if (ext == search_ext) {
				/*
				if (url[0] == '/') {
					// Base url doesn't exist should be calculated
					url = base_url + url;
				}
				*/
				console.log(url);
			}
		}
	});
})
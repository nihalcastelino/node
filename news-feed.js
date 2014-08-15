var http = require("http"),
    feed = require("feed-read"),
    urls = [
        "http://feeds.bbci.co.uk/news/rss.xml",
        "http://news.sky.com/feeds/rss/home.xml"
    ];
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<html>");
    response.write("<head>");
    response.write("<title>News feed page</title>");
    response.write("</head>");
    response.write("<body>");
    for (var j = 0; j < urls.length; j++) {
  
        // fetch rss feed for the url:
        feed(urls[j], function(err, articles) {
  
            // loop through the list of articles returned and restrict to 10
            for (var i = 0; i < 10; i++) {
  
                // stream article title (and what ever else you want) to client
                displayArticle(response, articles[i]);
  
                    // check we have reached the end of our list of articles & urls
                    if( i === 10 && j === urls.length-1) {
                        response.write("</body>");
                        response.write("</html>");
    			response.end();
                    }
            }
        })
    }
    });
 
server.listen(5000);
console.log("Server is listening");

function displayArticle(response, a) {

    var author = a.author || a.feed.name; 

        // send the article content to client
        response.write("<h3>"+a.title +"</h3>");
        response.write("<p><strong>" +author +" - " +a.published +"</strong> <br />\n");
        response.write(a.content+"</p>\n");
}

requirements:
=============
1. "http" to create the webserver.
2. "feed-read" for the RSS parsing.(One I found easier, there are others available)

Approach:
=========
1. Being new to writing node , I decided to take a 3 tier approach.
   a. Create Web-Server.
   b. Parse feeds 
   c. Combine a & b
2. Learnt how to create a simple webserver using express.
3. Decided to go with the simple "http" type.
4. No Ideas to optimize the code, since the idea was to first have working code.
5. I needed to have a simple html page, so I learnt how to use the "response.write".
6. I decided to have the feeds in an array, there was talk about async etc, but for the time being it was too complex for me.
7. Write a simple for loop to go through the URL's and articles to make sure there are articles and URL's remaining
8. Assign a port for the webserver to listen on. 

var yts = require("youtube-search")

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var Youtube = function() {
    this.key = process.env.YOUTUBE_KEY;
    this.maxResults = 10;
}

Youtube.prototype.search = function(q, f) {
    yts(q, {key: this.key, maxResults: this.maxResults}, function(err, results) {
        if(err) return console.log(err);
        console.dir(results);
        f(results);
    });
}

module.exports = new Youtube();



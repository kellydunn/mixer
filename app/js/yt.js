var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var Youtube = function() {
    this.key = process.env.YOUTUBE_KEY;
}

Youtube.prototype.search = function(q) {
}

var yt = require("./yt.js")

var Deck = function(deckname, videoId) {
    this.yt = new YT.Player(deckname, {
        height: '300',
        width: '300',
        videoId: videoId,
        events: {
            // TODO add events to listen to
        }
    });

    this.playing = false;    
}

Deck.prototype.setVolume = function(vol) {
    this.yt.setVolume(vol);
}

Deck.prototype.togglePlayback = function() {
    if(this.playing) {
        this.yt.stopVideo();
        this.playing = false;
    } else {
        this.yt.playVideo();
        this.playing = true;
    }   
}

Deck.prototype.seek = function(pos) {
    this.yt.seekTo(pos);
}

module.exports = Deck;

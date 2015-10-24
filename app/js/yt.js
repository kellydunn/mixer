var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function Deck(deckname, videoId){
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

var deck1;
var deck2;

var decks = {}
decks["deck2"] = deck2;

function onYouTubeIframeAPIReady() {
    deck1 = new Deck('deck1', 'lFPUcnbVMT4');
    decks["deck1"] = deck1;

    deck2 = new Deck('deck2', '3KL9mRus19o');
    decks["deck2"] = deck2;
}

function setDeckVolume(deckname, vol) {
    decks[deckname].yt.setVolume(vol);
}

function togglePlayback(deckname) {
    var deck = decks[deckname];
    if(deck.playing) {
        deck.yt.stopVideo();
        deck.playing = false;
    } else {
        deck.yt.playVideo();
        deck.playing = true;
    }
}

function seek(deckname, pos) {
    decks[deckname].yt.seekTo(pos);
}
